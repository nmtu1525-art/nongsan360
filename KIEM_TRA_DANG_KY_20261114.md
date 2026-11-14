# Kiểm tra sự cố đăng ký — 14/11/2026, ảnh lúc 19:26

## Bằng chứng đã xác minh
- Người dùng báo form native hiện được nhưng trả "Chưa xác nhận được đăng ký" trên cả điện thoại và máy tính. Không sao chép thông tin cá nhân từ ảnh vào repo.
- GitHub `library-native-form.js` gửi POST no-cors, sau đó kiểm JSONP receipt; mọi lỗi gửi, callback và không tìm thấy bản ghi đều bị gộp thành một thông báo.
- `library-gate.js` hiện vẫn `NATIVE_ENABLED=false`; form native chỉ được gọi ở URL kiểm thử. Không kết luận PC production cũng đổi thành native.
- Google Sheet `Leads!A1:N1` vẫn đủ 14 tiêu đề. Lượt đọc `Leads!I1:J50` hiện chỉ có hàng tiêu đề, chưa thấy RequestID nào trong phạm vi đó. Không thực hiện xóa/sửa dữ liệu Sheet, không suy đoán lý do khác với số dòng ở checkpoint cũ.
- Mã `Code.gs` trên GitHub có doPost + receipt. Kết nối web trong chat không mở được /exec và container không phân giải raw.githubusercontent.com, vì vậy đã dùng GitHub Actions thực hiện phép thử chỉ-đọc từ môi trường có mạng.

## Kết quả runtime thực tế — đã có chứng cứ
Hai lượt GET ẩn danh tới đúng endpoint /exec được cấu hình trong website, có `action=receipt`, RequestID ngẫu nhiên và callback hợp lệ. Không POST, không ghi lead, không gửi dữ liệu cá nhân.

Lượt cuối hoàn thành lúc 19:32:21 giờ Việt Nam, run GitHub Actions `43595315181`:
- HTTP 200.
- Content-Type: `text/html; charset=utf-8`.
- Host trả lời: `script.google.com`.
- Có các dấu hiệu tĩnh `leadForm`, `registerLead`, `NS360_LIBRARY_REGISTERED`.
- Không có lời gọi callback JSONP hợp lệ mà frontend đang chờ.
- Phân loại: **LEGACY_REGISTRATION_FORM_INSTEAD_OF_RECEIPT**.
- Thời gian phản hồi khoảng 0,95 giây: ở phép thử này không phải do timeout 3,6 giây.
- Marker `v7-` có thể do query được phản chiếu trong trang HTML, KHÔNG được dùng để kết luận máy chủ đã chạy V7.

Kết luận có chứng cứ: **Endpoint website đang dùng trả lại giao diện HTML khi được yêu cầu xác nhận, không tương thích với giao thức của form native mới.** Chỉ điều này đã đủ khiến form không xác nhận thành công trên cả PC và điện thoại. Chưa xác định được do deployment cũ, sửa nhầm deployment hay có URL /exec mới chưa gắn lên website. Không khẳng định doPost đã ghi hoặc chưa ghi chỉ từ GET; vùng Sheet vừa đọc hiện chưa có RequestID.

Chi tiết không chứa PII: `REGISTRATION_DIAGNOSTIC_RESULT.json`. Workflow chẩn đoán không có lịch tự chạy, chỉ chạy khi sửa chính file workflow hoặc kích hoạt thủ công. Hai checkpoint gốc đã được append kết quả bằng bot, không ghi đè nội dung lịch sử.

## Bước tiếp theo chính xác
- Đối chiếu URL Web app /exec và version đang hiển thị trong Apps Script **Deploy → Manage deployments** với URL trong `library-gate.js`.
- Nếu owner tạo deployment mới, cần lấy URL /exec mới để cập nhật website. Nếu giữ deployment cũ, chọn đúng deployment đó và publish New version có doPost + receipt từ Code.gs hiện tại.
- Không sửa thêm GPS/Maps/form layout, không yêu cầu nhập lại hàng loạt, không bỏ kiểm tra lưu để báo thành công giả.
- Chỉ khi GET receipt trả callback boolean hợp lệ mới thực hiện một đăng ký E2E và kiểm tra v7- ACTIVE trên Sheet. Chưa bật NATIVE_ENABLED cho mọi khách.

## Trạng thái cuối phiên
**Đã xác định lỗi không tương thích ở endpoint xác nhận; CHƯA sửa deployment Apps Script thực tế.** Không thay đổi mã form công khai, dữ liệu Sheet, PDF, tin tức hoặc Facebook trong phiên chẩn đoán này. Cần chủ dự án cung cấp URL /exec/version đang được triển khai để đối chiếu thay vì tiếp tục thay code mò.
