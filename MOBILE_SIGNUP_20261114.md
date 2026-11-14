# Nông Sản 360 — Kiểm tra form trên điện thoại, ảnh 19:45 ngày 14/11/2026

## Bằng chứng đầu chặng
- Chủ dự án xác nhận PC đã đăng ký được; ảnh Android vẫn hiển thị giao diện iframe Google Drive cũ với liên kết mở tab riêng và hỗ trợ Messenger.
- Đã đọc lại `library-gate.js`: `NATIVE_ENABLED = false`; form first-party chỉ chạy nếu query `ns360_native_signup_test=1`. Vì vậy vào website thông thường vẫn bị đưa tới iframe, không phải giao diện native đã thử trước đó.
- Đã đọc metadata bảng riêng tư và phạm vi `Leads!I1:J30`: hiện thấy một RequestID tiền tố v6 với trạng thái ACTIVE, chưa có v7 trong phạm vi này. Không đọc họ tên, điện thoại hoặc email, không chỉnh dữ liệu Sheet.
- Đã đọc hai checkpoint, ghi nhận yêu cầu chỉ giữ thành phố ước tính theo IP, không GPS/Maps. Không suy ra đã nghiệm thu native chỉ từ lời báo PC hoạt động, vì bản ghi hiện thấy là v6.

## Kế hoạch ngay trong phiên
1. Kiểm tra lại endpoint receipt chỉ-đọc trên deployment hiện tại. Công cụ mạng trực tiếp trong chat/container chưa truy cập được nên dùng workflow chẩn đoán GitHub đã có; không POST hoặc tạo lead giả.
2. Nếu endpoint trả được callback đúng giao thức, chuyển giao diện website sang form native và kiểm thử routing/cú pháp, giữ điều kiện server xác nhận trước khi cấp quyền.
3. Không tuyên bố gửi/lưu trên Android thành công khi chưa có bản ghi và kết quả thực tế từ thiết bị.
4. Giữ 21 PDF, tin tức, mã nguồn không liên quan, Google Sheet và Facebook nguyên vẹn; lưu kết quả sau từng chặng.

### Native signup enabled after 19:45 mobile report (2026-11-14)
- Confirmed root routing issue: NATIVE_ENABLED was false, so normal visitors still received the Google iframe.
- Fresh anonymous receipt probes with desktop and Android user-agent strings returned the expected JSONP boolean. No POST/new lead/personal data in probes.
- Enabled native form for normal visits and updated all three asset cache versions. Missing native asset now shows a local retry, never silently loads the Google iframe.
- Routing/syntax/no-access-before-server-ack tests PASS. PDFs (21), news JSON, Sheets data and Facebook were not changed.
- Evidence: NATIVE_SIGNUP_RELEASE_20261114.json. Android user-agent probe is NOT a test on the owner phone; final device submission remains to be confirmed.

## Kết quả đã đối chiếu sau sửa
- Đã đọc lại GitHub: `NATIVE_ENABLED=true`, bản `library-gate.js` SHA `e5a2acb2ac711622f6c1ff503f64f60c8a85d0c4`.
- Website dùng chung form trực tiếp cho các lượt vào Thư viện thông thường và trang giáo trình; không cần URL kiểm thử để thấy form mới. Nếu file giao diện chưa tải được, hiện lời nhắc tải lại trên website, không tự rơi lại khung Google.
- Phiên bản asset: `20261114-native-live-1` cho gate JS, native JS và CSS. Mọi phiên trình duyệt đang mở mã cũ cần tải lại trang; không yêu cầu khách đổi trình duyệt hoặc đăng nhập Google để hiện giao diện.
- Backend hiện đã đáp ứng GET receipt đúng giao thức. Trong bước sửa cấu hình website này KHÔNG cần chủ dự án thay Code.gs/Deploy thêm.
- Giữ nguyên kiểm tra xác nhận lưu trước khi mở thư viện. Chưa có bằng chứng POST + receipt thành công trên chính Android của chủ dự án; không ghi nhận đã nghiệm thu toàn bộ mobile.
- Thao tác cuối là mở lại trang web, vào Thư viện kiến thức: phải hiện trực tiếp các ô Họ tên, Số điện thoại, Email, Chủ đề; không có logo Google Drive hoặc link mở biểu mẫu ở tab riêng. Sau một lượt đăng ký thực tế, kiểm dòng v7 ACTIVE trong Sheets để kết thúc nghiệm thu.
- Hai checkpoint gốc đã được append kết quả bởi workflow. Không sửa Sheet, 21 PDF, tin tức, Facebook hoặc công khai thông tin khách.
