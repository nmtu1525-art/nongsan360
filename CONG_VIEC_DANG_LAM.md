# NÔNG SẢN 360 — ĐIỂM KHÔI PHỤC CÔNG VIỆC ĐANG LÀM
> Đây là file CHECKPOINT để bàn giao ngay cả khi chat dừng đột ngột giữa công việc.
> Cập nhật lần đầu: 14/11/2026. Trạng thái mặc định: chưa có công việc cụ thể nào đang dang dở được xác nhận.
> Khi bắt đầu một nhiệm vụ nhiều bước, phải cập nhật file này **trước khi sửa**; sau mỗi phần có kết quả bền vững, cập nhật ngay. Không chờ đến cuối cuộc chat.

## A. Công việc hiện tại
- **Trạng thái:** ĐANG CHỜ THỬ NGHIỆM BÀN GIAO CHAT MỚI (không có thay đổi website đang dang dở).
- **Mục tiêu:** Xác minh Project Instructions mới do người dùng cho biết đã dán vào mục chỉnh sửa hướng dẫn; mở chat mới trong Project `hàng hóa phái sinh` và nhập `Tiếp tục` để kiểm thử quy trình tự đọc checkpoint.
- **Cập nhật:** 14/11/2026, Asia/Ho_Chi_Minh.
- **Trạng thái triển khai:** File checkpoint, file trạng thái và đường dẫn GitHub/Drive đọc được trong cuộc trò chuyện hiện tại. Chưa thể quan sát trực tiếp Project Settings hoặc việc khởi tạo chat mới từ cuộc trò chuyện này.

## B. Đã làm và đã lưu ở đâu?
- Có hướng dẫn dự án về tự tiếp tục (người dùng xác nhận đã dán; chưa xác minh được trực tiếp qua giao diện cài đặt).
- GitHub `CONG_VIEC_DANG_LAM.md` và `TRANG_THAI_DU_AN.md` đọc được qua kết nối.
- Tại thời điểm kiểm tra, HEAD `9ae0a14f7e8bf44703370b5b0871a911d493febd` (trước commit checkpoint hiện tại); tệp `tin-tuc.json` có **3 bài** với ngày 10/11 và 12/11/2026.
- Google Drive dự án gốc có các bản V9.1–V9.3 và tài liệu khôi phục.
- Bot GitHub Actions dùng API đã bị tắt; công việc tin tức được giao cho trợ lý ChatGPT trực tiếp, không dùng OpenAI API key.

## C. Việc chưa xong (ưu tiên)
1. **Thử chat mới:** người dùng tạo một chat *trong Project* `hàng hóa phái sinh`, gõ `Tiếp tục`. Trợ lý đọc file này và `TRANG_THAI_DU_AN.md`, đối chiếu commit mới, dữ liệu tin, Drive. Nếu đọc được và báo đúng tiến độ, nghiệm thu cơ chế bàn giao.
2. **Tiếp tục nội dung thị trường:** kiểm tra nguồn tin chính thức mới (ICO/USDA) và chỉ đăng bài khi có sự kiện mới xác minh được. Bài viết chuẩn SEO, hai vòng kiểm số liệu/chính tả/câu từ, không đăng trùng và không dùng API key.
3. **Kiểm chứng tác vụ 7:00:** xác minh ở lượt đầu tiên rằng tác vụ ChatGPT theo lịch thực sự có quyền dùng GitHub; chưa có bằng chứng xuất bản theo lịch.
4. Mỗi việc dài phải sửa file checkpoint này **trước khi làm**, cập nhật sau mỗi chặng và ghi commit mới.

## D. Lỗi / vướng mắc / điều cần tránh
- Chưa thể xác nhận quyền dùng GitHub từ một **chat mới** hoặc từ môi trường chạy tác vụ tự động; cần nghiệm thu thực tế.
- Không nói "đã đăng" nếu chưa có commit; không viết bừa số liệu, không sửa/xóa 21 PDF hoặc tin cũ; không sử dụng OpenAI API key.
- Chưa có công việc website nào đang ở trạng thái sửa nửa chừng tại thời điểm này.

## E. Kiểm tra toàn vẹn trước khi tiếp tục
- Repo: https://github.com/nmtu1525-art/nongsan360 (main)
- Bản trạng thái chung: `TRANG_THAI_DU_AN.md`.
- Tin tức: `tin-tuc.json`, không xóa hoặc đăng trùng tin.
- PDF: `pdf/` — 21 tệp (5 cà phê, 5 ngô, 5 lúa mì, 6 phái sinh); giữ nguyên.
- Đọc lại nội dung mới nhất từ GitHub/Drive rồi mới quyết định bước tiếp theo.

## QUY TẮC CHECKPOINT BẮT BUỘC
1. **Đầu việc dài:** tạo checkpoint mục tiêu, đầu vào, trạng thái nhánh/commit.
2. **Trong khi làm:** sau mỗi chặng có kết quả (ví dụ: đã sửa file, đã biên tập bài, đã kiểm chứng, đã tải Drive), cập nhật checkpoint và commit thay đổi bền vững. Không chờ chat gần đầy mới lưu.
3. **Trước thao tác rủi ro:** ghi chính xác trạng thái và cách quay lui; không ghi đè bản gốc.
4. **Nếu bị ngắt đột ngột:** chat mới đọc file này trước, kiểm tra tình trạng thực tế rồi thực hiện bước chưa xong đầu tiên. Không coi việc không có ghi chú là đã hoàn tất.
5. **Kết thúc:** cập nhật `TRANG_THAI_DU_AN.md`, ghi checkpoint "ĐÃ XONG" hoặc "ĐANG CHỜ" cùng kết quả và việc tiếp theo.
6. **Giới hạn:** checkpoint chỉ giữ những gì đã thật sự ghi lên GitHub/Drive; nội dung chưa từng lưu có thể mất nếu chat ngắt bất ngờ. Không thể tự động phát hiện thời điểm hết giới hạn chính xác.
