# Nông Sản 360 – Tự động xuất bản tin chính thức V9.3

Ngày thiết lập: 14/11/2026. Đây là công cụ tự động trong **GitHub Actions**, không phải lịch chạy trong cửa sổ ChatGPT. Chỉ xuất bản khi có nguồn chính thức mới, tài liệu đọc được và toàn bộ tiêu chí kiểm chứng đạt. **Không tạo một bài mới mỗi ngày nếu không có tin phù hợp.**

## Nguồn đang cấu hình

- **USDA NASS – News:** `https://www.nass.usda.gov/rss/news.xml` (RSS chính thức, tin về ngô/lúa mì)
- **USDA NASS – Today's Reports:** `https://www.nass.usda.gov/rss/reports.xml` (RSS báo cáo, ngô/lúa mì)
- **ICO – Press Releases:** `https://ico.org/press-releases/` (cà phê, chỉ nhận bài có ngày rõ ràng)

Danh sách domain cho phép chỉ gồm `nass.usda.gov`, `www.nass.usda.gov`, `ico.org`, `www.ico.org`. **Chưa tự động đọc và tổng hợp PDF WASDE hay báo cáo ICO CMR định kỳ** khi thiếu metadata ngày phát hành được xác minh. USDA NASS không phải kho WASDE của USDA OCE. Không dùng RSS bên thứ ba hoặc thông tin giá realtime không có quyền truy cập.

## Cần làm một lần để kích hoạt AI tự viết

1. Truy cập kho `nmtu1525-art/nongsan360` → **Settings → Secrets and variables → Actions → New repository secret**.
2. Tạo secret tên đúng **`OPENAI_API_KEY`** rồi điền API key OpenAI của tài khoản được phép thanh toán. Không gửi khóa trong chat, commit, tài liệu Google Drive hoặc log.
3. Kiểm tra **Settings → Actions → General → Workflow permissions** cho phép **Read and write permissions** để Action được ghi `tin-tuc.json` và `logs/news-bot/` lên `main`; nếu nhánh `main` có branch protection thì cần điều chỉnh cơ chế ghi hoặc dùng PR.
4. Nếu muốn đổi mô hình, thêm **Repository variable `OPENAI_MODEL`**, giá trị mặc định `gpt-4.1-mini`. Sử dụng API có thể phát sinh chi phí.
5. Kiểm tra **Actions → Nông Sản 360 - Bản tin tự động V9.3 → Run workflow**, chọn `dry_run=true` để chạy thử, kiểm tra nhật ký; sau đó chọn `dry_run=false` để chạy thật. Công việc theo lịch tự động lúc **00:00 UTC = 07:00 Việt Nam mỗi ngày**, có thể trễ hoặc bị bỏ lượt nếu GitHub Actions quá tải.
6. Kiểm tra GitHub Pages được cấu hình từ nhánh `main` của repo. Bản tin mới trên `tin-tuc.json` sẽ được website đang host qua HTTP(S) đọc để hiển thị.

## Quy tắc xuất bản

- Chỉ nhận link HTTPS từ nguồn cho phép, không theo chuyển hướng ra ngoài; giới hạn thời gian tải và kích thước tài liệu.
- Bắt buộc metadata ngày công bố hợp lệ, không ở tương lai và không quá 7 ngày cũ, tên mặt hàng nằm trong tiêu đề nguồn.
- Bỏ qua nguồn đã có theo URL và nội dung tiêu đề trùng; mỗi lần chạy đăng tối đa **2 bài**.
- Mỗi bài AI phải có 2–4 trích dẫn bằng chứng có thật trong văn bản nguồn và mọi chuỗi số trong bài phải **xuất hiện nguyên dạng** trong nguồn (bao gồm dấu chấm/phẩy và phần trăm). Không cho AI làm phép đổi đơn vị, dự báo chắc chắn hoặc khuyến nghị mua/bán.
- Không đạt bất kỳ rào chắn nào thì **không xuất bản**, ghi lý do vào nhật ký.
- Nhật ký mỗi lần chạy nằm trong `logs/news-bot/YYYY-MM-DD-RUN_ID.json` và dạng artifact GitHub Actions lưu 30 ngày. Log lưu trạng thái, URL nguồn, loại lỗi, không lưu secret/API key.
- Bản tin xuất bản là bài tóm lược tự động phục vụ kiến thức/tham khảo, không phải khuyến nghị giao dịch. Các bộ lọc chỉ loại các lỗi đã biết và **không bảo đảm không bao giờ sai**, nên cần kiểm tra định kỳ.

## Các thành phần

- `.github/workflows/daily-news.yml`: lịch chạy và quyền ghi.
- `automation/sources.json`: cấu hình whitelist, giới hạn số bài và thời gian.
- `automation/news_sources.py`: tải nguồn HTTPS và đọc RSS/HTML/PDF.
- `automation/daily_news.py`: tạo bài qua API, xác minh, chống trùng, ghi JSON và nhật ký.
- `automation/requirements.txt`: phụ thuộc Python.
- `tests/test_daily_news.py`: kiểm thử offline (không dùng khóa, không gọi mạng).

## Xử lý sự cố

- `blocked_missing_openai_api_key`: chưa thiết lập secret; không tạo bài.
- `no_verified_article`: không có tin phù hợp hoặc có lỗi lấy nguồn/kiểm chứng; xem `errors` và `skipped` trong log.
- `published`: có tin hợp lệ đã được ghi vào JSON và commit về `main`; kiểm tra lịch sử commit/Pages.
- Mã nguồn và PDF hiện tại không bị AI ghi đè; bot chỉ có quyền sửa file `tin-tuc.json` và thư mục `logs/news-bot` trong workflow.
- Nếu trang ICO/NASS đổi cấu trúc, bot sẽ bỏ qua tin thay vì tự đặt ngày hoặc số liệu. Cần sửa bộ trích xuất và chạy lại kiểm thử.

**Trạng thái tại thời điểm bàn giao:** file và lịch có thể đã lên GitHub, nhưng chưa được coi là có thể xuất bản thật cho tới khi secret, quyền Actions và lần chạy thử đầu tiên được kiểm chứng. Không đồng nhất “workflow được tạo” với “bài mới đã tự đăng”.
