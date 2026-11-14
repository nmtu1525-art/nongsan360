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

Kết luận tại lần kiểm tra: **Endpoint website đang dùng trả lại giao diện HTML khi được yêu cầu xác nhận, không tương thích với giao thức của form native mới.** Chỉ điều này đã đủ khiến form không xác nhận thành công trên cả PC và điện thoại. Không khẳng định doPost đã ghi hoặc chưa ghi chỉ từ GET; vùng Sheet đã đọc lúc chẩn đoán chưa có RequestID.

Chi tiết không chứa PII: `REGISTRATION_DIAGNOSTIC_RESULT.json`. Workflow chẩn đoán không có lịch tự chạy, chỉ chạy khi sửa chính file workflow hoặc kích hoạt thủ công. Hai checkpoint gốc đã được append kết quả bằng bot, không ghi đè nội dung lịch sử.

## Đối chiếu ảnh và URL do chủ dự án gửi — đã giải quyết nghi vấn sai URL
- Chủ dự án đã gửi URL đầy đủ: `https://script.google.com/macros/s/AKfycbwOanbih1xPmM07lBtMdfkll3_8JNYRRKzW0x7qFGuWsVqjHDuYf5YmA9JNonthV5EWyQ/exec`.
- Đã đọc lại `library-gate.js`: URL này **khớp chính xác** `WEB_APP_URL`. Không cần đổi URL website, tạo deployment khác hay hỏi lại URL này.
- Ảnh chủ dự án hiển thị **Version 7 on Nov 14, 2026, 7:14 PM** (19:14 theo giờ của phiên người dùng).
- Đã đọc metadata commit `0c9f15a20803621aaad2b39b411695aa2ec45956`: phần `doPost` và `doGet?action=receipt` mới được thêm vào GitHub lúc **12:21:55Z = 19:21:55 ICT**, sau snapshot 19:14 trong ảnh.
- Hai chứng cứ thời gian này cùng kết quả GET 19:32 giải thích sự không khớp: deployment trong ảnh vẫn trỏ tới snapshot trước bản hỗ trợ native. **Version 7 trong Google Apps Script là số snapshot riêng của Google, không phải bằng chứng mã nhận RequestID v7- đã được triển khai.**
- Không đọc được toàn bộ quyền Execute as/Who has access từ ảnh vì phần đó bị cắt; không khẳng định quyền đã đúng chỉ từ ảnh.
- Trong lượt đối chiếu này chỉ đọc lại kết quả GET 19:32, KHÔNG chạy phép thử HTTP mới và KHÔNG gửi đăng ký thử.

## Bước tiếp theo chính xác
1. Trong đúng dự án Apps Script đang quản lý deployment này, thay toàn bộ `Code.gs` bằng nội dung hiện tại tại `library-registration/Code.gs` trên GitHub. Bản cần có `function doPost(e)`, nhánh `action === receipt` trong doGet và `findActiveLeadByRequestId_`. Không chỉ thay `Form.html`.
2. Save rồi **Deploy → Manage deployments → chọn đúng deployment hiện tại → Edit (bút chì) → Version: New version → Deploy**. Không chọn lại snapshot Version 7 lúc 19:14 và không cần New deployment. Việc tạo New version rồi cập nhật deployment giữ nguyên URL /exec theo tài liệu Google.
3. Không sửa thêm GPS/Maps/form layout, không yêu cầu nhập lại hàng loạt, không bỏ kiểm tra lưu để báo thành công giả.
4. Khi owner báo đã deploy snapshot mới, chạy lại GET receipt chỉ-đọc. Chỉ khi trả callback boolean hợp lệ mới thử một đăng ký E2E và kiểm tra v7- ACTIVE trên Sheet. Giữ `NATIVE_ENABLED=false` trước nghiệm thu.

## Trạng thái cuối phiên
**Đã đối chiếu đúng URL và xác định snapshot đang hiển thị trong ảnh có trước phần backend hỗ trợ form native. CHƯA cập nhật deployment Apps Script thay chủ dự án và CHƯA xác nhận đăng ký đã hoạt động.** Không thay đổi mã form công khai, dữ liệu Sheet, PDF, tin tức hoặc Facebook trong lượt đối chiếu này.
