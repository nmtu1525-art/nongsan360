# NÔNG SẢN 360 — ĐIỂM KHÔI PHỤC CÔNG VIỆC ĐANG LÀM
> Đây là file CHECKPOINT để bàn giao ngay cả khi chat dừng đột ngột giữa công việc.
> Cập nhật lần đầu: 14/11/2026. Trạng thái mặc định: chưa có công việc cụ thể nào đang dang dở được xác nhận.
> Khi bắt đầu một nhiệm vụ nhiều bước, phải cập nhật file này **trước khi sửa**; sau mỗi phần có kết quả bền vững, cập nhật ngay. Không chờ đến cuối cuộc chat.

## A. Công việc hiện tại
- **Trạng thái:** Chưa có nhiệm vụ dang dở được xác nhận tại thời điểm tạo file.
- **Mục tiêu và yêu cầu của anh:** (điền khi nhận nhiệm vụ)
- **Thời gian bắt đầu / lần cập nhật:** (điền ngày giờ Việt Nam)
- **Trạng thái triển khai:** CHƯA BẮT ĐẦU / ĐANG LÀM / BỊ CHẶN / ĐÃ XONG.

## B. Đã làm và đã lưu ở đâu?
- Liệt kê từng bước hoàn thành kèm **đường dẫn cụ thể** (GitHub commit, file trên Drive, mã bài tin tức, bản ZIP).
- Phân biệt **đã commit**, **đã lưu Drive**, **đã kiểm thử**, và **chỉ mới soạn trong chat**.
- Ghi SHA hoặc commit HEAD đã đọc để chống ghi đè thay đổi mới.

## C. Việc chưa xong (ưu tiên)
1. (ghi hành động tiếp theo cụ thể, đầu vào cần dùng, công cụ và đường dẫn)
2. (ghi những việc còn lại)
3. (ghi bước kiểm thử và nghiệm thu)

## D. Lỗi / vướng mắc / điều cần tránh
- Lỗi đang gặp, log, URL hoặc cách tái hiện.
- Bất kỳ dữ liệu chưa được xác minh, quyền truy cập chưa được kiểm tra.
- Tuyệt đối không ghi password, API key hay dữ liệu nhạy cảm.

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
