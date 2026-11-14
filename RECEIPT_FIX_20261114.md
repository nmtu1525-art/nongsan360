# Đăng ký native — xử lý lỗi xác nhận sau ảnh 19:55 (14/11/2026)

## Bằng chứng đầu chặng
- Ảnh chủ dự án cho thấy form native hiện đúng nhưng báo không xác nhận được đăng ký; không chép họ tên/SĐT/email từ ảnh vào repo.
- Đọc riêng `Leads!I1:J40` bằng Google Drive: hiện có 1 dòng v6 ACTIVE và **2 dòng v7 ACTIVE**. Điều này chứng minh POST native đã lưu được dữ liệu; chưa tự gán một dòng cụ thể cho ảnh khi không đọc thông tin cá nhân.
- Đã đọc hai checkpoint và `library-native-form.js` bản hiện tại. POST gửi `credentials:omit`, nhưng receipt dùng thẻ script không có crossorigin/referrerPolicy; timeout mỗi receipt chỉ 3600 ms, mọi lỗi transport và kết quả chưa có bản ghi đều bị gom thành false. Không lưu RequestID qua lần tải lại, dễ gây đăng ký lại khi người dùng đổi link.
- Các probe trước là HTTP GET từ máy chủ với user-agent Android, KHÔNG phải kiểm tra thực thi JavaScript trong trình duyệt. Không coi đó là nghiệm thu mobile.

## Kế hoạch sửa
1. Chạy kiểm tra receipt bằng Chromium desktop/mobile-emulation từ origin website, chỉ GET với mã ngẫu nhiên chưa tồn tại, không POST hoặc tạo lead giả. So sánh script cũ, script anonymous và fetch credentials:omit, ghi trạng thái/timing không có PII.
2. Sửa đường nhận xác nhận theo kết quả: đồng nhất không gửi cookie Google, tăng thời gian chờ phù hợp, phân biệt trạng thái chưa lưu và không thể nhận phản hồi. Không cấp quyền từ no-cors POST/timeout.
3. Giữ RequestID pending trên sessionStorage (không tên/điện thoại/email), phục hồi xác nhận khi tải lại và dùng lại mã khi retry, không tự gửi đăng ký mới chỉ vì phản hồi chậm.
4. Kiểm thử mock mọi nhánh, xác minh asset triển khai và cập nhật hai checkpoint. Giữ nguyên Code.gs đang deploy nếu frontend-only fix đủ; không yêu cầu owner deploy lại khi chưa có lý do.

## An toàn dữ liệu
Không ghi sửa/xóa dữ liệu Sheet, không đưa RequestID khách thật lên repo/log công khai, không nới gate để báo thành công giả, không thay 21 PDF/tin tức/Facebook. Tính năng vẫn chỉ lấy thành phố IP, không GPS/Maps.
