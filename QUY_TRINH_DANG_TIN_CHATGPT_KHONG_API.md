# Nông Sản 360 — Quy trình đăng tin trực tiếp bằng ChatGPT (không API key)

Cập nhật ngày 14/11/2026. Quy trình này **thay thế** bot tạo bài bằng OpenAI API ở bản V9.3.

## Cách vận hành
1. Trong ChatGPT (hoặc lượt tác vụ theo lịch), trợ lý tìm thông tin mới về cà phê, ngô, lúa mì từ nguồn đáng tin cậy, ưu tiên ICO và USDA.
2. Kiểm tra ngày công bố, nguồn gốc số liệu, sự khác biệt với tin đã đăng và khả năng truy cập tài liệu gốc. Không tự suy đoán hay tạo số liệu.
3. Viết 1–2 bài tiếng Việt có tiêu đề, tóm tắt, mở bài, thân bài, kết luận và liên kết nguồn.
4. Truy cập kho `nmtu1525-art/nongsan360` qua kết nối GitHub, đọc bản mới nhất của `tin-tuc.json`, chỉ bổ sung các bản tin chưa tồn tại và giữ nguyên bài cũ.
5. Cập nhật `tin-tuc.json` trực tiếp qua GitHub; chờ xác nhận commit và kiểm tra triển khai Pages. Không chỉnh sửa 21 PDF hoặc mã HTML nếu không cần thiết.
6. Báo cáo với anh tiêu đề, nguồn, đường dẫn và trạng thái. Nếu không có nguồn đạt chuẩn hoặc không có quyền ghi, **không đăng** và báo lý do.

## Lịch ChatGPT
- Tác vụ đã tạo: "Đăng tin Nông Sản 360".
- Bắt đầu: 07:00 giờ Việt Nam ngày 15/11/2026; lặp lại hằng ngày.
- Không dùng OpenAI API key. Đây là tác vụ ChatGPT, tách biệt với bot GitHub Actions.
- **Lần chạy đầu phải xác minh khả năng dùng kết nối GitHub trong môi trường tác vụ theo lịch; không bảo đảm tự đăng cho đến khi có commit thật được xác nhận.**
- Có thể gọi trực tiếp trong chat bất kỳ lúc nào: "Em tìm tin hôm nay, viết và đăng lên Nông Sản 360".

## Trạng thái bot cũ
- File `.github/workflows/daily-news.yml` đã được sửa để **không còn lịch tự chạy**, không còn bước tự đăng và không dùng API key.
- Các file `automation/*.py` cũ được giữ làm tài liệu kỹ thuật, không còn là đường đăng tin mặc định.
- Không cần thêm secret `OPENAI_API_KEY`.
- Nội dung bài viết mới được lưu trong `tin-tuc.json`, không xóa bài cũ, không động vào 21 PDF.

## Nguyên tắc biên tập
- Không lấy ngày trên báo cáo làm ngày xuất bản bài mới nếu thiếu căn cứ; phân biệt ngày công bố nguồn và ngày bài đăng.
- Dẫn URL nguồn cụ thể, không sao chép nguyên văn dài từ báo cáo.
- Không biến tin số liệu thành khuyến nghị mua bán; nêu giới hạn thông tin.
- Nguồn chính thức mới và không trùng mới được đăng, không tạo bài chỉ để đủ chỉ tiêu.

Bản này có hiệu lực kể từ commit vô hiệu hóa bot API: `9c917cefb90b3170f92b0c07ac5a327b941ff166`.
