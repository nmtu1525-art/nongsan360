# Nông Sản 360 — Đăng ký đọc thư viện (phiên bản V4, thành phố ước tính)

**Cập nhật 14/11/2026.** Website đã bật thư viện cho khách mới qua form một lần theo trình duyệt (`library-gate.js`, `LIVE_ENABLED = true`). Backend Apps Script trên tài khoản chủ dự án cần **triển khai lại phiên bản V4** mới để lưu thêm khu vực. Không được coi tính năng V4 đã live nếu chưa redeploy và kiểm thử.

## 1. Trải nghiệm

- Khách mới bấm **Thư viện kiến thức** hoặc một trang giáo trình → hiện form đăng ký; sau khi ghi thành công, trình duyệt lưu marker không chứa dữ liệu cá nhân để không phải đăng ký lại.
- Form có họ tên và số điện thoại bắt buộc, email tùy chọn, chủ đề quan tâm. Không checkbox marketing, không xin quyền GPS.
- **Khi khách chủ động nhấn nút `Đồng ý và mở thư viện miễn phí`**, trình duyệt thử gọi GeoJS `https://get.geojs.io/v1/ip/geo.json` qua HTTPS; nếu không có thành phố/khu vực thì thử ipwho.is làm nguồn dự phòng để ước tính thành phố. Nhà cung cấp GeoJS hoặc ipwho.is được gọi sẽ nhìn thấy IP kết nối, nhưng **không nhận họ tên, số điện thoại hoặc email** từ Form. Chỉ city/region/country được gửi tới Apps Script. **Không lưu IP, GPS, địa chỉ chi tiết hay tọa độ người dùng.**
- Nếu cả hai nguồn GeoIP lỗi, không có CORS hoặc trả về rỗng, form vẫn gửi và K:L để trống; mỗi nguồn có giới hạn chờ 2,6 giây. GeoIP có thể sai với VPN/4G và tuyệt đối không phải địa chỉ nhà.
- Form không có thông báo riêng về tra cứu khu vực hoặc tiến trình định vị; chỉ giữ liên kết **Chính sách dữ liệu cá nhân** (trong chính sách nêu rõ GeoIP và bên thứ ba). Trạng thái gửi thành công/lỗi vẫn hiển thị bình thường, không bật hộp xin quyền GPS.
- RequestID V4 có tiền tố `v4-`. Nếu khách đã được đăng ký trước khi nâng cấp, việc quay lại thư viện **không** tự tạo một vị trí lịch sử.

## 2. Bảng Google Sheets riêng tư

[NS360 - DATA DANG KY THU VIEN (RIENG TU)](https://docs.google.com/spreadsheets/d/1_fKgwxop4-pTIORlnhRVCNCWJXLhZIpPV2nBMv8dDEw/edit), tab `Leads`:

| Cột | Trường | Ghi chú |
|---|---|---|
| A | ThoiGianDangKy | Giữ nguyên |
| B | HoTen | Giữ nguyên |
| C | SoDienThoai | Giữ nguyên |
| D | Email | Giữ nguyên |
| E | ChuDeQuanTam | Giữ nguyên |
| F | NguonTruyCap | Giữ nguyên |
| G | PhienBanChinhSach | Giữ nguyên |
| H | ThoiDiemDongY | Giữ nguyên |
| I | RequestID | Chống trùng, bản V4 tiền tố `v4-` |
| J | TrangThai | Dropdown ACTIVE/WITHDRAWN/DELETED giữ nguyên |
| K | ThanhPhoUocTinh | Thành phố và tỉnh/bang ước tính, có thể trống |
| L | GoogleMapsUocTinh | Liên kết tìm kiếm khu vực trên Google Maps, **không** phải vị trí chính xác |

Không bổ sung hay tự đoán vị trí cho các dòng cũ. Giữ quyền truy cập Sheet riêng tư, không chia sẻ công khai.

## 3. Bắt buộc cập nhật Apps Script để V4 hoạt động

**GitHub và bản sao Drive không tự động cập nhật Apps Script Web App đang triển khai.**

1. Trên Google Apps Script hiện tại của anh, sao lưu phiên bản đang chạy nếu muốn.
2. Thay hoàn toàn `Code.gs` bằng `library-registration/Code.gs` mới (đọc/ghi 12 cột, RequestID vẫn cột I, bản ghi 12 trường).
3. Thay hoàn toàn `Form.html` bằng `library-registration/Form.html` mới (tra cứu geo-IP khi nhấn đăng ký, gửi city/region/country, `v4-`).
4. Xác nhận Script Property `SPREADSHEET_ID=1_fKgwxop4-pTIORlnhRVCNCWJXLhZIpPV2nBMv8dDEw`.
5. **Save → Deploy → Manage deployments → Edit → New version → Deploy**, giữ URL `/exec` và các quyền như phiên bản đang hoạt động.

Để tránh lệch dữ liệu, cần triển khai **cả hai file trong cùng một version**. Google Sheet đã mở rộng 12 header: bản backend V3 đang chạy có thể vẫn ghi 10 cột và để K:L trống đến khi redeploy.

## 4. Nghiệm thu

Mở trang khách mới bằng trình duyệt chưa có dấu đăng ký:
`https://nmtu1525-art.github.io/nongsan360/#/thu-vien/index.html`.

Gửi một đăng ký thử bằng thông tin của chính chủ dự án. Kết quả mong đợi:
- Khách vào được Thư viện sau khi form báo thành công.
- Tab `Leads` có dòng mới `RequestID` tiền tố `v4-`, `TrangThai=ACTIVE` cột J.
- Nếu geo-IP khả dụng: K là thành phố/khu vực ước tính, L là đường dẫn Google Maps tìm khu vực. Nếu không khả dụng, K:L trống nhưng đăng ký vẫn thành công.
- Giữ nguyên các dòng lịch sử và 21 PDF. Không nhập dữ liệu cá nhân vào chat.

## 5. Quyền riêng tư và giới hạn

- Ghi nhận khu vực phục vụ thống kê vùng độc giả. IP là dữ liệu bên cung cấp geo-IP có thể nhận từ yêu cầu mạng; trang chỉ lưu tên thành phố/khu vực và link Google Maps tương đối.
- Chính sách dữ liệu: `chinh-sach-du-lieu.html` trên website.
- Không dùng số điện thoại khách đăng ký để gửi marketing khi chưa có đồng ý riêng.
- Tài liệu `pdf/*.pdf` công khai trên GitHub Pages vẫn có thể được mở trực tiếp; gate chỉ xử lý luồng truy cập trên giao diện trang.

Checkpoint để tiếp tục: `CONG_VIEC_DANG_LAM.md`, `TRANG_THAI_DU_AN.md`.

## 6. Ghi nhận sự cố và sửa V4.1 (14/11/2026)

- Ảnh chụp từ chủ dự án và đọc lại `Leads!I:L` xác nhận **hai** bản ghi V4 ở trạng thái ACTIVE nhưng K:L trống. Do không lưu IP, **không thể xác định lại vị trí các bản cũ**.
- Khả năng: trình duyệt/iframe không tải kịp hoặc không nhận kết quả từ ipwho.is; chưa có log lỗi trình duyệt để khẳng định CORS là nguyên nhân chính xác.
- `Form.html` đã được chỉnh thành **V4.1**: GeoJS cung cấp dữ liệu thành phố/vùng qua HTTPS+CORS, ipwho.is là dự phòng. Mỗi lần đăng ký thử từng nguồn tối đa 2,6 giây; lỗi định vị không làm mất đăng ký. Không dùng GPS/API key; chỉ gửi city/region/country cho Apps Script, không đưa IP vào Sheet.
- `Code.gs` V4 đã nhận 12 cột nên **không cần thay đổi thêm**. Cần cập nhật **Form.html V4.1** vào dự án Apps Script và `Deploy → Manage deployments → Edit → New version → Deploy`; không phải thay đổi `library-gate.js` hay bảng Google Sheet.
- Form vẫn **không hiện lời nhắc định vị riêng**; chỉ có liên kết chính sách dữ liệu, trong đó minh bạch GeoJS và ipwho.is.
- Sau khi redeploy, thử một lượt từ trình duyệt mới: mong đợi bản ghi `v4-` ACTIVE và K:L có thành phố/link Maps. Chưa tuyên bố đã hoạt động trên browser của khách cho đến khi test thành công.
