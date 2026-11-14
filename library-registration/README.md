# Nông Sản 360 — Đăng ký một lần trước khi đọc 21 giáo trình

**Trạng thái triển khai:** đã chuẩn bị frontend, biểu mẫu Apps Script, bảng Google Sheets riêng tư; **CHƯA BẬT form trên website** cho đến khi triển khai và thử nghiệm Web App nhận dữ liệu thật. Việc cấu hình đầu cuối cần chủ tài khoản Google thao tác một lần. Không phải hệ thống tài khoản và không bảo vệ được URL PDF gốc đang công khai.

## Thành phần

- `library-gate.js`, `library-gate.css` trong thư mục gốc website; router `index.html` gọi gate trước khi hiển thị trang `/giao-trinh/XX-YY.html`.
- `chinh-sach-du-lieu.html`: thông báo quyền riêng tư công khai.
- `backend/Code.gs`, `backend/Form.html`: Google Apps Script HTML Service + `google.script.run` ghi trực tiếp vào Google Sheets riêng tư; không cần OpenAI API key.
- Google Sheet riêng tư trong Drive dự án `00_QUAN_LY_DU_AN/04_DATA_DANG_KY_THU_VIEN`, gồm tab `Leads` (12 cột) và `HuongDan`. Không bật chế độ Anyone with link.

## Cài đặt một lần bằng tài khoản Google chủ dự án

1. Mở Google Sheet **NS360 - DATA DANG KY THU VIEN (RIENG TU)** trong Drive, tab `Leads`, xác minh dòng tiêu đề 12 cột và quyền chỉ chủ sở hữu. Sao chép **ID** từ URL `https://docs.google.com/spreadsheets/d/<ID>/edit`.
2. Trong Sheet chọn **Tiện ích mở rộng (Extensions) → Apps Script**. Xóa mã mẫu (chỉ trong script mới). Dán toàn bộ `backend/Code.gs` vào file `Code.gs`.
3. Trong Apps Script thêm **HTML file** tên `Form` (không nhập `.html` ở ô tên), dán toàn bộ `backend/Form.html` vào đó.
4. Chọn **Project Settings → Script properties → Add script property**: Name `SPREADSHEET_ID`, Value là ID Sheet riêng tư từ bước 1. Không dán mã này vào trang web hoặc các biểu mẫu công khai.
5. Chọn **Deploy → New deployment → Web app**. Thiết lập **Execute as: Me (chủ dự án)**; **Who has access: Anyone** (để khách không cần đăng nhập Google). Chấp thuận quyền chạy script/ghi Sheets khi Google yêu cầu. Sao chép URL cuối dạng `https://script.google.com/macros/s/AKfy.../exec`.
6. Mở file `library-gate.js` trên GitHub `nmtu1525-art/nongsan360`. Thay đúng dòng `const WEB_APP_URL = '';` bằng URL `/exec` đã sao chép (giữ dấu nháy và chấm phẩy). Lưu commit. Khi URL hợp lệ, gate được bật ở trang giáo trình, các trang danh mục và tin tức vẫn mở.
7. Mở website bằng cửa sổ **ẩn danh** → Thư viện → chọn một giáo trình → điền thông tin giả phục vụ kiểm thử + tích đồng ý cần thiết → gửi. Xác nhận xuất hiện **một dòng mới** trong tab `Leads` của Sheet; đồng thời giáo trình được mở và chuyển sang giáo trình khác không cần nhập lại. Kiểm tra nếu không chọn nhận tin thì cột `DongYNhanTin = FALSE`. Xóa **dòng kiểm thử** sau khi hoàn thành.
8. Thử kịch bản lỗi: Apps Script hoặc Sheet không sẵn sàng → form phải thông báo lỗi và **không ghi nhớ quyền đọc**. Thử lại trên trình duyệt khác sẽ cần đăng ký lại vì localStorage không đồng bộ giữa các thiết bị.

## Vì sao tạm giữ website mở khi chưa cấu hình?

Website hiện là **GitHub Pages tĩnh**, không có server ghi Google Sheets trực tiếp. Nếu bật form trước khi Web App Google Apps Script được triển khai, khách có thể điền mà không lưu được dữ liệu hoặc bị chặn khỏi tài liệu. Vì vậy `WEB_APP_URL` để rỗng và **gate tự tắt** cho đến khi URL thật được nhập và đã kiểm thử.

## Cấu trúc dữ liệu và quy tắc

`Leads`: ThoiGianDangKy, HoTen, SoDienThoai, Email, ChuDeQuanTam, NguonTruyCap, DongYXuLyDuLieu, DongYNhanTin, PhienBanChinhSach, ThoiDiemDongY, RequestID, TrangThai.

- Họ tên/SĐT bắt buộc, email tùy chọn. Chỉ lưu dữ liệu nếu có `DongYXuLyDuLieu = TRUE`.
- Đồng ý nhận tin/hội thảo **tùy chọn, không được tích sẵn**.
- Apps Script dùng `LockService`, ID chống gửi trùng, kiểm tra dữ liệu và chống công thức giả trong bảng Sheets; cần giới hạn truy cập Sheet, theo dõi spam.
- Website chỉ lưu một dấu xác nhận đăng ký trong `localStorage`, **không lưu số điện thoại hay email trên trình duyệt**.
- Khách có thể yêu cầu xem/sửa/xóa qua điện thoại 0985 272 776 hoặc Messenger chính thức. Trước khi hoạt động công khai, chủ dự án cần xác nhận quy trình quản lý yêu cầu quyền dữ liệu theo pháp luật.
- **Không quảng cáo sai rằng PDF đã được bảo vệ truy cập hoàn toàn.** Các URL `pdf/*.pdf` trong kho GitHub Pages vẫn công khai. Để bảo vệ thật sự cần di chuyển PDF sang backend hoặc lưu trữ có xác thực, không thể chỉ dùng JavaScript.

## Kiểm thử kỹ thuật

- `node --check library-gate.js` để kiểm tra cú pháp JavaScript; markup Apps Script HTML cần chạy trong môi trường Apps Script, không thể xác minh đầu-cuối khi chưa deploy.
- Đảm bảo bộ 21 PDF, `tin-tuc.json`, thư mục giáo trình, banner, nội dung và các link Metricool không thay đổi.

## Tài liệu chính thức

- Google Apps Script Web apps: https://developers.google.com/apps-script/guides/web
- Luật Bảo vệ dữ liệu cá nhân 91/2025/QH15 (hiệu lực 01/01/2026): https://bocongan.gov.vn/chinh-sach-phap-luat/bai-viet/luat-bao-ve-du-lieu-ca-nhan-chinh-thuc-co-hieu-luc-thi-hanh-tu-ngay-01-01-2026-1767186124

## Phiên bản giao diện v2 — không yêu cầu ô tích chọn (14/11/2026)
- Người dùng chọn bỏ các ô tick. `Form.html` trên GitHub đã đổi: chỉ có nút **"Đồng ý và mở thư viện miễn phí"** và thông báo ngắn gọn về mục đích sử dụng dữ liệu kèm link chính sách.
- Bấm nút là hành động đồng ý cụ thể cho **đăng ký/cấp quyền đọc thư viện**; logic backend hiện tại vẫn cần `privacyConsent === true`, được gửi **chỉ sau thao tác nhấn nút**.
- **Không xin phép nhận tin quảng cáo qua form mới.** Giao diện không có ô nhận tin; `newsConsent: false` cố định. Không dùng dữ liệu này để gửi thông báo hội thảo/bản tin nếu chưa có một cơ chế đồng ý riêng, rõ ràng.
- Mã yêu cầu mới có tiền tố `v2-` và được lưu tại cột RequestID nhằm phân biệt bản biểu mẫu để kiểm tra sau này.
- Backend `Code.gs` và `SPREADSHEET_ID` **không đổi**; chỉ cần **cập nhật `Form.html` trong dự án Apps Script đang hoạt động**. Trong Apps Script: lưu → **Deploy → Manage deployments → Edit (bút chì) → Version: New version → Deploy** để URL `/exec` cũ chạy bản v2. **Chỉ sửa GitHub không thay đổi bản Web App đã được deploy**.
- Website `library-gate.js` vẫn ở `LIVE_ENABLED=false`, chỉ mở form qua URL kiểm thử `?ns360_signup_test=1`. Sau khi deploy v2, thử một đăng ký chủ động và xác minh tab `Leads`: `DongYXuLyDuLieu = TRUE`, `DongYNhanTin = FALSE`, `RequestID` bắt đầu `v2-`. Chỉ bật chính thức sau khi thử thành công.
- Nếu phát hiện hướng dẫn cũ trong README nói "tích checkbox", áp dụng **phiên bản v2 tại mục này**.
