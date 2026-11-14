"""Offline tests: publication is fail-closed, numbers and evidence must match sources."""
import datetime as dt
import json
import os
from pathlib import Path
import sys
import tempfile
import unittest
from unittest.mock import patch

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / 'automation'))
import daily_news as bot
from news_sources import (allowed_url, canonical_url, classify, parse_date,
                          recent, rss_candidates)

SOURCE = {"id":"usda-nass-news", "name":"USDA NASS", "type":"rss", "url":"https://www.nass.usda.gov/rss/news.xml", "enabled":True}
RSS = b'''<?xml version="1.0"?><rss><channel><item><title>Corn planted acreage down 3% in 2026</title>
<link>https://www.nass.usda.gov/Newsroom/2026/corn-release.php</link>
<pubDate>Fri, 13 Nov 2026 12:00:00 GMT</pubDate></item><item><title>Unrelated cattle numbers</title>
<link>https://www.nass.usda.gov/cattle</link><pubDate>Fri, 13 Nov 2026 12:00:00 GMT</pubDate></item></channel></rss>'''
EVIDENCE = ("Corn planted acreage down 3% in 2026\n2026-11-13\n"
            + "USDA reported that corn planted acreage was 3% lower in 2026. " * 30)
STORY = {
    "title":"USDA công bố diện tích trồng ngô 2026 giảm 3%",
    "summary":"Báo cáo USDA ghi nhận diện tích trồng ngô 2026 thấp hơn 3% theo báo cáo vừa công bố.",
    "lead":"Thông tin về ngô được đối chiếu trực tiếp từ tài liệu USDA mới được công bố chính thức.",
    "body":[
        {"heading":"Nội dung báo cáo", "paragraphs":["Theo báo cáo USDA, diện tích trồng ngô 2026 thấp hơn 3% so với mốc được đề cập."]},
        {"heading":"Cần theo dõi", "paragraphs":["Cần đối chiếu phạm vi thống kê, thời kỳ và các bản công bố kế tiếp trước khi đánh giá diễn biến."]}
    ],
    "key_takeaway":"Điểm chính là thay đổi trong diện tích được công bố; không thể suy ra chắc chắn hướng giá.",
    "evidence_quotes":["corn planted acreage was 3% lower in 2026", "USDA reported that corn planted acreage was 3% lower in 2026"]
}

class TestValidation(unittest.TestCase):
    def test_whitelist(self):
        hosts=["www.nass.usda.gov"]
        self.assertTrue(allowed_url("https://www.nass.usda.gov/news",hosts))
        for bad in ["http://www.nass.usda.gov/news", "https://www.nass.usda.gov.evil.net/",
                    "https://x@www.nass.usda.gov/news", "https://www.nass.usda.gov:444/news",
                    "https://127.0.0.1/file", "https://evil.net/news"]:
            self.assertFalse(allowed_url(bad,hosts), bad)

    def test_duplicate_normalization(self):
        self.assertEqual(canonical_url("https://ico.org/a/?utm_source=x"),"https://ico.org/a")
        links,titles=bot.known_keys([{"title":"Cà phê cập nhật", "url":"https://ico.org/a"}])
        self.assertIn("https://ico.org/a", links)
        self.assertIn("ca phe cap nhat",titles)

    def test_rss_filters_and_dates(self):
        result=rss_candidates(RSS,SOURCE)
        self.assertEqual(len(result),1)
        self.assertEqual(result[0]["commodity"],"Ngô")
        self.assertEqual(result[0]["published"],"2026-11-13")
        self.assertEqual(classify("Corn and wheat acreage",SOURCE), None)
        self.assertEqual(parse_date("13 November 2026"),"2026-11-13")
        self.assertFalse(recent("2026-11-15",dt.date(2026,11,14),7))
        self.assertFalse(recent("2026-10-30",dt.date(2026,11,14),7))

    def test_verified_story(self):
        bot.validate_story(STORY,EVIDENCE)

    def test_missing_number(self):
        story=json.loads(json.dumps(STORY))
        story["summary"]+=" Theo nguồn còn tăng 47%."
        with self.assertRaisesRegex(ValueError,"Số liệu"):
            bot.validate_story(story,EVIDENCE)

    def test_reformatted_number(self):
        story=json.loads(json.dumps(STORY))
        story["title"] = story["title"].replace("3%","3,0%")
        with self.assertRaisesRegex(ValueError,"Số liệu"):
            bot.validate_story(story,EVIDENCE)

    def test_unverified_quotes(self):
        story=json.loads(json.dumps(STORY))
        story["evidence_quotes"][0]="This is completely fabricated evidence"
        with self.assertRaisesRegex(ValueError,"Trích dẫn"):
            bot.validate_story(story,EVIDENCE)

    def test_trade_solicitation_blocked(self):
        story=json.loads(json.dumps(STORY))
        story["key_takeaway"]="Mua ngay hợp đồng ngô để tránh bỏ lỡ cơ hội đầu tư chắc chắn."
        with self.assertRaisesRegex(ValueError,"giao dịch"):
            bot.validate_story(story,EVIDENCE)

    def test_insufficient_paragraphs(self):
        story=json.loads(json.dumps(STORY))
        story["body"]=story["body"][:1]
        with self.assertRaisesRegex(ValueError,"thân bài"):
            bot.validate_story(story,EVIDENCE)

class TestPipeline(unittest.TestCase):
    def setUp(self):
        self.tmp=tempfile.TemporaryDirectory()
        self.addCleanup(self.tmp.cleanup)
        self.root=Path(self.tmp.name)
        (self.root/'automation').mkdir()
        (self.root/'automation'/'sources.json').write_text(json.dumps({
            "allow_hosts":["www.nass.usda.gov"], "lookback_days":7, "publication_limit":2,
            "sources":[SOURCE]
        }),encoding='utf-8')
        (self.root/'tin-tuc.json').write_text(json.dumps({"title":"Tin", "lastEditorialUpdate":"2026-11-12",
                                                    "items":[{"id":"older-1","status":"published","title":"Bản tin cũ",
                                                              "url":"https://www.nass.usda.gov/old","published":"2026-11-01"}]}),encoding='utf-8')
        self.patcher=patch.multiple(bot,ROOT=self.root,NEWS_PATH=self.root/'tin-tuc.json',
                                   CONFIG_PATH=self.root/'automation'/'sources.json',LOG_DIR=self.root/'logs/news-bot')
        self.patcher.start();self.addCleanup(self.patcher.stop)

    def test_missing_secret_fails_closed_and_logs(self):
        with patch.dict(os.environ,{"OPENAI_API_KEY":""}):
            result=bot.run(today=dt.date(2026,11,14))
        self.assertEqual(result['status'],'blocked_missing_openai_api_key')
        self.assertEqual(len(json.loads((self.root/'tin-tuc.json').read_text())['items']),1)
        self.assertTrue(list((self.root/'logs/news-bot').glob('*.json')))

    def test_valid_new_story_publishes_once(self):
        fetcher=lambda url, hosts, max_bytes=8_000_000: (RSS,url,"application/rss+xml") if url.endswith("news.xml") else (EVIDENCE.encode(),url,"text/html")
        with patch.dict(os.environ,{"OPENAI_API_KEY":"not-a-real-key"}),patch.object(bot,'fetch',side_effect=fetcher),patch.object(bot,'article_text',return_value=EVIDENCE),patch.object(bot,'generate_story',return_value=STORY):
            result=bot.run(today=dt.date(2026,11,14))
            second=bot.run(today=dt.date(2026,11,14))
        archive=json.loads((self.root/'tin-tuc.json').read_text(encoding='utf-8'))
        self.assertEqual(result['status'],'published')
        self.assertEqual(second['status'],'no_verified_article')
        self.assertEqual(len(archive['items']),2)
        self.assertEqual(archive['items'][0]['status'],'published')
        self.assertEqual(archive['items'][0]['source'],'USDA')

    def test_dry_run_does_not_change_news(self):
        before=(self.root/'tin-tuc.json').read_bytes()
        fetcher=lambda url, hosts, max_bytes=8_000_000: (RSS,url,"application/rss+xml") if url.endswith("news.xml") else (EVIDENCE.encode(),url,"text/html")
        with patch.dict(os.environ,{"OPENAI_API_KEY":"not-a-real-key"}),patch.object(bot,'fetch',side_effect=fetcher),patch.object(bot,'article_text',return_value=EVIDENCE),patch.object(bot,'generate_story',return_value=STORY):
            result=bot.run(dry_run=True,today=dt.date(2026,11,14))
        self.assertEqual(result['status'],'dry_run')
        self.assertEqual((self.root/'tin-tuc.json').read_bytes(),before)

    def test_failed_validation_never_publishes(self):
        before=(self.root/'tin-tuc.json').read_bytes()
        fetcher=lambda url, hosts, max_bytes=8_000_000: (RSS,url,"application/rss+xml") if url.endswith("news.xml") else (EVIDENCE.encode(),url,"text/html")
        with patch.dict(os.environ,{"OPENAI_API_KEY":"not-a-real-key"}),patch.object(bot,'fetch',side_effect=fetcher),patch.object(bot,'article_text',return_value=EVIDENCE),patch.object(bot,'generate_story',side_effect=ValueError("Số liệu không khớp")):
            result=bot.run(today=dt.date(2026,11,14))
        self.assertEqual(result['status'],'no_verified_article')
        self.assertEqual((self.root/'tin-tuc.json').read_bytes(),before)
        self.assertTrue(result['errors'])

if __name__ == '__main__':
    unittest.main()
