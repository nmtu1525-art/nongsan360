"""Fetch only configured official sources. No implicit redirect to non-allowlisted domains."""
from __future__ import annotations
import datetime as dt
import io
import re
from email.utils import parsedate_to_datetime
from urllib.parse import urljoin, urlsplit, urlunsplit, parse_qsl, urlencode
from xml.etree import ElementTree as ET

import requests
from bs4 import BeautifulSoup
from pypdf import PdfReader

HEADERS = {"User-Agent": "NongSan360NewsBot/9.3 (+https://github.com/nmtu1525-art/nongsan360)"}
NUMBER = re.compile(r"(?<![\w])\d+(?:[.,]\d+)*%?(?![\w])")
MONTHS = {m: i for i, m in enumerate("January February March April May June July August September October November December".split(), 1)}
TOPICS = {
    "Cà phê": ("coffee", "arabica", "robusta", "cà phê"),
    "Ngô": ("corn", "maize", "ngô"),
    "Lúa mì": ("wheat", "lúa mì"),
}


def canonical_url(raw: str) -> str:
    u = urlsplit(raw)
    kept = [(k, v) for k, v in parse_qsl(u.query) if not k.lower().startswith("utm_") and k.lower() not in {"fbclid", "gclid"}]
    return urlunsplit((u.scheme.lower(), u.netloc.lower(), u.path.rstrip("/") or "/", urlencode(kept), ""))


def allowed_url(url: str, hosts: list[str]) -> bool:
    u = urlsplit(url)
    return (u.scheme == "https" and u.hostname in hosts and not u.username and not u.password
            and u.port in (None, 443) and not re.search(r"[\\\r\n]", url))


def fetch(url: str, hosts: list[str], *, max_bytes: int = 8_000_000) -> tuple[bytes, str, str]:
    session = requests.Session()
    for _ in range(4):
        if not allowed_url(url, hosts):
            raise ValueError("URL không thuộc danh sách nguồn được phép")
        with session.get(url, headers=HEADERS, timeout=(8, 18), allow_redirects=False, stream=True) as response:
            if response.status_code in (301, 302, 303, 307, 308):
                where = response.headers.get("Location", "")
                if not where:
                    raise ValueError("Redirect không có Location")
                url = urljoin(url, where)
                continue
            response.raise_for_status()
            content_type = response.headers.get("Content-Type", "").split(";")[0].lower().strip()
            if content_type not in {"text/html", "application/xhtml+xml", "text/xml", "application/xml", "application/rss+xml", "application/atom+xml", "application/pdf", "application/octet-stream"}:
                raise ValueError("Loại tài liệu không được phép: " + content_type)
            chunks, length = [], 0
            for piece in response.iter_content(chunk_size=65536):
                length += len(piece)
                if length > max_bytes:
                    raise ValueError("Tài liệu vượt kích thước cho phép")
                chunks.append(piece)
            return b"".join(chunks), url, content_type
    raise ValueError("Quá nhiều bước chuyển hướng")


def parse_date(value: str) -> str | None:
    if not value:
        return None
    try:
        result = parsedate_to_datetime(value)
        return result.date().isoformat()
    except (ValueError, TypeError, IndexError):
        pass
    try:
        return dt.date.fromisoformat(value[:10]).isoformat()
    except (ValueError, TypeError):
        pass
    m = re.search(r"\b(\d{1,2})\s+(" + "|".join(MONTHS) + r")\s+(\d{4})\b", value, re.I)
    if m:
        try:
            return dt.date(int(m[3]), MONTHS[m[2].title()], int(m[1])).isoformat()
        except ValueError:
            return None
    return None


def classify(title: str, source: dict) -> str | None:
    if source.get("commodity"):
        return source["commodity"] if any(k in title.lower() for k in TOPICS[source["commodity"]]) else None
    low = title.lower()
    hits = [name for name, words in TOPICS.items() if any(re.search(r"(?<![a-z])" + re.escape(w) + r"(?![a-z])", low) for w in words)]
    return hits[0] if len(hits) == 1 else None


def _tag_text(parent: ET.Element, tag: str) -> str:
    for child in parent:
        if child.tag.split("}")[-1].lower() == tag.lower():
            return "".join(child.itertext()).strip()
    return ""


def rss_candidates(data: bytes, source: dict) -> list[dict]:
    root = ET.fromstring(data)
    nodes = [n for n in root.iter() if n.tag.split("}")[-1] in ("item", "entry")]
    result = []
    for item in nodes[:40]:
        title = _tag_text(item, "title")
        kind = classify(title, source)
        if not kind:
            continue
        link = _tag_text(item, "link")
        if not link:
            link = next((n.attrib.get("href", "") for n in item if n.tag.split("}")[-1] == "link"), "")
        published = (_tag_text(item, "pubDate") or _tag_text(item, "published") or _tag_text(item, "updated"))
        date = parse_date(published)
        if not link or not date:
            continue
        result.append({"title":title, "url":link.strip(), "published":date, "commodity":kind,
                       "source":source["id"], "sourceName":source["name"]})
    return result


def ico_candidates(data: bytes, source: dict) -> list[dict]:
    soup = BeautifulSoup(data, "html.parser")
    result, seen = [], set()
    for anchor in soup.find_all("a", href=True):
        title = anchor.get_text(" ", strip=True)
        if len(title) < 18 or not classify(title, source):
            continue
        url = urljoin(source["url"], anchor["href"])
        if url in seen or url.rstrip("/") == source["url"].rstrip("/"):
            continue
        if not url.startswith("https://ico.org/"):
            continue
        node = anchor.find_parent("article") or anchor.find_parent("div", class_=re.compile("post|press|entry|elementor", re.I))
        context = node.get_text(" ", strip=True)[:1600] if node else anchor.parent.get_text(" ", strip=True)[:700]
        date = parse_date(context)
        if not date:
            continue
        seen.add(url)
        result.append({"title":title, "url":url, "published":date, "commodity":"Cà phê",
                       "source":source["id"], "sourceName":source["name"]})
    return result[:20]


def article_text(data: bytes, content_type: str) -> str:
    if content_type in ("application/pdf", "application/octet-stream") or data[:4] == b"%PDF":
        reader = PdfReader(io.BytesIO(data))
        return "\n".join((page.extract_text() or "") for page in reader.pages[:12])[:30000]
    soup = BeautifulSoup(data, "html.parser")
    for el in soup(["script", "style", "nav", "footer", "header", "aside", "form", "noscript"]):
        el.decompose()
    # Prefer main article text; do not summarize unrelated navigation or sidebars.
    node = soup.select_one("article") or soup.select_one("main") or soup.body
    return (node.get_text(" ", strip=True) if node else "")[:30000]


def recent(day: str, now: dt.date, days: int) -> bool:
    try:
        age = (now - dt.date.fromisoformat(day)).days
    except ValueError:
        return False
    return 0 <= age <= days
