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

### Receipt recovery fix after 19:55 screenshot (2026-11-14)
- Live Sheet read showed 2 V7 ACTIVE rows while user reported confirmation error; no contact details or real request tokens copied to repository. POST can save; receipt transport needed hardening.
- Native receipt now uses CORS fetch credentials:omit and strict JSON parsing of the existing callback wrapper, with anonymous script fallback. Per-fetch deadline 12s, bounded verification window 40s, no access from opaque POST or timeout.
- Pending random request token only is stored in sessionStorage (24h maximum, cleared on success). Reload/check-again verifies the same request without new POST; valid not-yet-saved reply allows retry using the same ID. No contact data stored in the browser.
- Error states are distinct RCP-NETWORK/TIMEOUT/PROTOCOL/HTTP/PENDING/CLIENT. Check-only works after reload even with empty fields.
- 12 functional mock tests PASS, including response slower than old 3.6s, opaque response without ack, no duplicate POST on recheck, retry same ID, reload recovery, and no access before server ack.
- Real Chromium desktop/mobile-emulation read-only probes support anonymous receipt transport; anonymous live GET still returns proper boolean. No diagnostic POST or fake lead created.
- Only library-native-form.js and index asset versions changed in production. Code.gs, gate flags, 21 PDFs, news JSON and customer Sheet untouched. No Apps Script redeploy needed for this frontend fix.
- Evidence: RECEIPT_BROWSER_RESULT_20261114.json, RECEIPT_FIX_TESTS_20261114.json, RECEIPT_FIX_RELEASE_20261114.json. Actual owner-phone submission remains unverified; clean browser tests do not prove the precise cause on that device.

## Đã kiểm chứng trước khi phát hành
- Workflow sửa bản frontend `43597768914` hoàn thành thành công. Đọc lại source native có SHA `4f42068bfac59604d9410694e74895c304f1220e`, đúng fetch ẩn danh, parser JSON nghiêm ngặt và giữ mã xác nhận pending.
- Tất cả 12 bài test mô phỏng đều PASS. Phép GET thật cuối trả HTTP 200, text/javascript, `Access-Control-Allow-Origin: *`, callback boolean đúng; không POST bất kỳ lead thử nào.
- Phiên bản asset là `20261114-receipt-fix-2`. Commit bàn giao này dùng để đưa bản source đã kiểm thử vào lượt triển khai GitHub Pages thông thường.
- Chủ dự án **không cần thay Code.gs hoặc Deploy Apps Script lại** cho bản sửa này. Đây là sửa frontend, không sửa dữ liệu hoặc quyền Google Sheet.
- Trường hợp đang mở tab mã cũ cần tải trang bản mới. Bản cũ chưa lưu pending token nên không thể tự phục hồi các lượt cũ chỉ từ trình duyệt; sau bản sửa, các lượt mới sẽ giữ mã để kiểm tra lại mà không tự tạo thêm POST.
- Chưa khẳng định hết lỗi trên chính thiết bị của chủ dự án. Nếu còn lỗi, giao diện mới hiển thị mã RCP cụ thể; không tiếp tục gộp mọi lỗi thành thông báo chung hoặc yêu cầu đổi Apps Script mò.
