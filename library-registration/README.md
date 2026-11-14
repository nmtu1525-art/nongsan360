# Nông Sản 360 — Đăng ký thư viện V6: chỉ thành phố ước tính theo IP

Cập nhật 14/11/2026. Theo quyết định của chủ dự án, ngừng yêu cầu GPS/phường-xã và **không tạo liên kết Google Maps mới**. Bảng Google Sheets được giữ nguyên cấu trúc dữ liệu lịch sử. Mã GitHub đã sửa, nhưng Web App Apps Script là bản triển khai độc lập: cần owner cập nhật và deploy V6 mới để người dùng nhận bản mới.

## 1. Trải nghiệm đăng ký

- Khách mới vào **Thư viện kiến thức** từ website hoặc vào một giáo trình thấy form đăng ký một lần trên trình duyệt này, theo `library-gate.js`.
- Form có họ tên, số điện thoại, email không bắt buộc và chủ đề quan tâm; giữ liên kết tới Chính sách dữ liệu cá nhân. Không có checkbox marketing hoặc hộp xin quyền GPS.
- Khi bấm gửi, `Form.html` V6 thử tra thành phố qua `https://get.geojs.io/v1/ip/geo.json`, dự phòng qua `https://ipwho.is/?fields=success,city,region,country`. Không gửi tên, số điện thoại, email hay mã đăng ký đến bên tra cứu. Khi cả hai nguồn lỗi, khách vẫn đăng ký và đọc tài liệu được; thành phố để trống.
- Khi Apps Script xác nhận đã ghi thành công, website lưu dấu đăng ký trên browser để lần sau không phải nhập lại. Không lưu PII trong localStorage.
- Không dùng GPS; không lấy tọa độ hay phường/xã; không tạo link Google Maps.

## 2. Google Sheets riêng tư — tab Leads

[NS360 - DATA DANG KY THU VIEN (RIENG TU)](https://docs.google.com/spreadsheets/d/1_fKgwxop4-pTIORlnhRVCNCWJXLhZIpPV2nBMv8dDEw/edit).

Cột A:J giữ nguyên; **K = `ThanhPhoUocTinh`** là dữ liệu vị trí duy nhất được bổ sung cho đăng ký mới.

Để không xóa hoặc lệch thông tin lịch sử, **L = `GoogleMapsUocTinh`, M = `PhuongXaUocTinh`, N = `NguonDinhVi` vẫn tồn tại nhưng đã ẩn** (có thể hiện lại khi cần kiểm toán). `Code.gs` V6 kiểm đủ 14 header và ghi 14 trường; **các trường L:N luôn rỗng với đăng ký mới**. Không xóa, sửa hoặc suy đoán vị trí của các đăng ký trước. Dropdown trạng thái J giữ nguyên.

## 3. Cập nhật Apps Script V6 để kích hoạt

Thực hiện **cả hai file**, không chỉ sửa một file:

1. Mở Apps Script Web App hiện đang phục vụ URL `/exec` của website.
2. Copy `library-registration/Code.gs` V6 từ GitHub, thay toàn bộ `Code.gs` đang dùng. V6 vẫn hỗ trợ bảng 14 cột để không phải xóa dữ liệu lịch sử, chỉ ghi thành phố K.
3. Copy `library-registration/Form.html` V6 từ GitHub, thay toàn bộ `Form.html` đang dùng. Bản này không gửi yêu cầu GPS; RequestID có tiền tố `v6-`.
4. Đảm bảo Script Property `SPREADSHEET_ID=1_fKgwxop4-pTIORlnhRVCNCWJXLhZIpPV2nBMv8dDEw`.
5. **Save → Deploy → Manage deployments → Edit → New version → Deploy**, giữ nguyên URL /exec hiện đang được gắn trong `library-gate.js`, quyền truy cập hiện tại.

## 4. Lỗi Google Drive trên Android — riêng với định vị

Android vẫn hiển thị “Rất tiếc, không thể mở tệp tại thời điểm này” ngay trong iframe Google Apps Script trong khi PC có thể hiển thị. Đã thử đưa link và hướng dẫn mở ngoài khung nhưng chưa giải quyết. **Bỏ GPS hoặc Maps không tự sửa được lỗi này.** Hiện website vẫn dùng Apps Script iframe để lấy form. Muốn đảm bảo mobile hoạt động cần xác minh URL /exec trực tiếp trên Android và quyền Web App; nếu vẫn lỗi, phải thiết kế form first-party và backend khác phù hợp thay vì tiếp tục thêm mã định vị.

Website hiện có một liên kết “Thử mở biểu mẫu ở tab riêng” ở phía trên iframe như cách xử lý tạm. Không yêu cầu khách chia sẻ thông tin cá nhân trong chat.

## 5. Kiểm thử khi deploy V6

- Trình duyệt mới PC: mở `https://nmtu1525-art.github.io/nongsan360/#/thu-vien/kiem-tra-dang-ky`, đăng ký bằng thông tin tự sở hữu; xác nhận vào thư viện và Google Sheets ghi `v6-` ACTIVE.
- Cột K có thể là thành phố ước tính; L:N của dòng V6 phải rỗng.
- Trên Android: nếu vẫn thấy Google Drive error, **không báo nghiệm thu thành công cho thiết bị** chỉ vì PC hoạt động. Ghi nhận lỗi và xử lý kiến trúc form riêng.
- Giữ nguyên 21 PDF, `tin-tuc.json`, danh sách khách và Facebook.

Checkpoint: `CONG_VIEC_DANG_LAM.md`, `TRANG_THAI_DU_AN.md`.
