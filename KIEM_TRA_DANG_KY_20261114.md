# Kiểm tra sự cố đăng ký — 14/11/2026, ảnh lúc 19:26

## Bằng chứng đã xác minh
- Người dùng báo form native hiện được nhưng trả "Chưa xác nhận được đăng ký" trên cả điện thoại và máy tính. Không sao chép thông tin cá nhân từ ảnh vào repo.
- GitHub `library-native-form.js` gửi POST no-cors, sau đó kiểm JSONP receipt; mọi lỗi gửi, callback và không tìm thấy bản ghi đều bị gộp thành một thông báo.
- `library-gate.js` hiện vẫn `NATIVE_ENABLED=false`; form native chỉ được gọi ở URL kiểm thử. Không kết luận PC production cũng đổi thành native.
- Google Sheet `Leads!A1:N1` vẫn đủ 14 tiêu đề. Lượt đọc `Leads!I1:J50` hiện chỉ có hàng tiêu đề, chưa thấy RequestID nào trong phạm vi đó. Không thực hiện xóa/sửa dữ liệu Sheet, không suy đoán lý do khác với số dòng ở checkpoint cũ.
- Mã `Code.gs` trên GitHub có doPost + receipt, nhưng chưa có bằng chứng bản /exec đang phục vụ đúng mã đó. Công cụ web không mở được URL /exec; môi trường container không phân giải được raw.githubusercontent.com.

## Việc đang làm
- Chạy kiểm tra chỉ-đọc từ GitHub Actions vào endpoint công khai đã cấu hình, sử dụng RequestID kiểm tra không có dữ liệu cá nhân. Không POST, không tạo lead giả, không yêu cầu API key, không thay đổi quyền Sheet.
- Phân biệt endpoint trả JSONP hợp lệ, HTML form cũ, trang yêu cầu đăng nhập/quyền hoặc lỗi HTTP. Không đổ lỗi cho số điện thoại, GPS hoặc trình duyệt khi chưa có log chứng minh.
- Giữ flag native OFF cho tới khi nghiệm thu ghi Sheet + xác nhận trả về thành công.

## Chưa hoàn tất
Chưa xác định nguyên nhân runtime và chưa sửa xong đăng ký thực tế. Không yêu cầu người dùng thử điền lại liên tục khi chưa kiểm tra đường máy chủ.
