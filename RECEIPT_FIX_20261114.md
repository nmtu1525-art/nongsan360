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
