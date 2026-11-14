# Nông Sản 360 — Đăng ký đọc thư viện V5: GPS tùy chọn, IP dự phòng

Cập nhật 14/11/2026. **GitHub và Google Sheets đã có mã/cột V5, nhưng Google Apps Script Web App độc lập chưa được xác nhận triển khai V5.** Không công bố tính năng GPS đã chạy thật cho tới khi người quản lý triển khai và kiểm thử.

## 1. Trải nghiệm khi đăng ký

1. Khách mới bấm menu **Thư viện kiến thức** hoặc một giáo trình → trang đăng ký hiện trên website.
2. Sau khi khách nhấn **Đồng ý và mở thư viện miễn phí**, Form gửi một thông điệp có nonce sang cửa sổ website chính (GitHub Pages). Website thực hiện `navigator.geolocation.getCurrentPosition` trên HTTPS, **không yêu cầu GPS từ iframe Apps Script**.
3. Nếu trình duyệt đã được cấp quyền trước đó, có thể không hỏi lại. Nếu chưa cấp quyền, trình duyệt hiển thị hộp thoại **Cho phép / Từ chối**. Việc bật dịch vụ vị trí trên điện thoại **không** tự động cấp quyền cho website.
4. Nếu người dùng cho phép, trình duyệt cố lấy tọa độ và gọi BigDataCloud free client-side Reverse Geocoding API trực tiếp từ thiết bị để suy ra **thành phố/tỉnh và phường/xã hoặc khu vực gần đúng khi dữ liệu bản đồ có**. Chỉ chuyển chuỗi tên địa danh về Apps Script, không chuyển tọa độ hay IP vào Google Sheets.
5. Nếu người dùng từ chối, tắt định vị, không hỗ trợ, hết thời gian chờ hoặc nhà cung cấp lỗi, Form quay về `estimateCity()` dùng GeoJS → ipwho.is từ trình duyệt. **Mọi trường hợp vẫn đăng ký và mở được thư viện**, kể cả không tìm thấy thành phố.
6. Website lưu dấu đã đăng ký một lần trên trình duyệt, không lưu PII trong localStorage; cùng trình duyệt đã đăng ký sẽ không bị hỏi lại trừ khi xóa dấu. Form giữ 4 trường cơ bản, liên kết chính sách dữ liệu, không hiển thị thông báo riêng về định vị.

Trình duyệt chỉ gửi GPS khi người dùng cấp quyền. BigDataCloud có thể nhận IP và GPS của phiên để cung cấp reverse geocoding và cải thiện dịch vụ theo chính sách riêng; **phải có thông tin này trong chính sách dữ liệu**. Không lấy GPS lén, không giả mạo tọa độ, không lưu tọa độ chính xác ở Sheet.

## 2. Google Sheets riêng tư — tab Leads

[NS360 - DATA DANG KY THU VIEN](https://docs.google.com/spreadsheets/d/1_fKgwxop4-pTIORlnhRVCNCWJXLhZIpPV2nBMv8dDEw/edit), ID tab `1033306523`. A:L cũ giữ nguyên, thêm M:N ở cuối:

| Cột | Tên trường |
| --- | --- |
| A | ThoiGianDangKy |
| B | HoTen |
| C | SoDienThoai |
| D | Email |
| E | ChuDeQuanTam |
| F | NguonTruyCap |
| G | PhienBanChinhSach |
| H | ThoiDiemDongY |
| I | RequestID |
| J | TrangThai |
| K | ThanhPhoUocTinh |
| L | GoogleMapsUocTinh |
| M | PhuongXaUocTinh |
| N | NguonDinhVi |

`NguonDinhVi` nhận một trong: `GPS_CHO_PHEP`, `IP_UOC_TINH`, `KHONG_XAC_DINH`. Cột M có thể trống ngay cả khi GPS được cho phép, nếu dịch vụ không trả tên phường/xã phù hợp hoặc độ chính xác thiết bị kém. Cột L là URL **tìm kiếm tên khu vực** trên Google Maps, **không phải ghim nhà riêng hay vị trí GPS chính xác**.

Đăng ký lịch sử giữ nguyên, không tự điền vị trí quá khứ; A:J không bị chèn/xóa; dropdown TrangThai giữ nguyên. Google Sheet không công khai, không gửi số điện thoại cho dịch vụ bản đồ.

## 3. Thành phần cần triển khai

- `library-gate.js` trên GitHub Pages: xử lý quyền GPS ở top-level, gọi BigDataCloud theo tọa độ *thiết bị hiện tại có quyền*, lọc về tên địa danh và gửi phản hồi nonce cho Form.
- `index.html` trên GitHub: đã đổi `library-gate.js?v=20261114-v5-optional-gps-1` để tránh cache.
- `library-registration/Form.html` phiên V5: gửi yêu cầu vị trí từ iframe, timeout hợp lý; nếu không có GPS thì gọi GeoJS → ipwho.is, gửi `requestId` tiền tố `v5-`, `ward` và `locationSource` sang Apps Script backend.
- `library-registration/Code.gs` V5: kiểm cấu trúc 14 header, ghi đủ 14 cột, giữ RequestID tại I và trạng thái tại J. L tạo Google Maps bằng tên phường/xã + thành phố/tỉnh (nếu có) chứ không bằng lat/lon.
- `chinh-sach-du-lieu.html`: mô tả quyền GPS tùy chọn, dịch vụ BigDataCloud, nguồn IP dự phòng và các thông tin được lưu.

**Bắt buộc chủ dự án triển khai trong tài khoản Google Apps Script**: thay **cả `Code.gs` và `Form.html`** bằng bản V5 trên GitHub, Save → Deploy → Manage deployments → Edit → New version → Deploy. Giữ nguyên `/exec`, Script Property `SPREADSHEET_ID=1_fKgwxop4-pTIORlnhRVCNCWJXLhZIpPV2nBMv8dDEw`, Execute as Me và quyền truy cập như trước. **Chỉ sửa GitHub/Drive không tự cập nhật Web App đang chạy.**

Nếu chỉ triển khai Form mới mà backend vẫn V4, đăng ký vẫn có thể ghi 12 cột nhưng M:N không có dữ liệu; nếu cập nhật cả hai sẽ đúng cấu trúc V5.

## 4. Thử nghiệm bắt buộc

Dùng trình duyệt mới/ẩn danh và link `https://nmtu1525-art.github.io/nongsan360/#/thu-vien/index.html`. Thử tối thiểu:
- **Cho phép định vị**: có thể nhận tên thành phố và phường/xã/khu vực (không đảm bảo dịch vụ có tên phường/xã); cột N `GPS_CHO_PHEP` chỉ khi GPS và reverse geocoding thành công.
- **Từ chối định vị**: vẫn mở thư viện, N `IP_UOC_TINH` khi IP có địa danh; M trống.
- **Mất kết nối dịch vụ định vị**: vẫn mở thư viện, N có thể `KHONG_XAC_DINH`.
- I bắt đầu bằng `v5-`, J là ACTIVE. Không gửi tên, số điện thoại hoặc tọa độ thử nghiệm lên chat.

Bản đồ chỉ là địa danh hành chính/khu vực gần đúng; ranh giới, thiết bị và dữ liệu API có thể khác nhau. Đường dẫn PDF công khai vẫn truy cập trực tiếp qua GitHub Pages; form không phải DRM.

## 5. Trạng thái và checkpoint

- Đã bổ sung cột M:N vào Google Sheets; các đăng ký cũ không thay đổi.
- Đã sửa GitHub `library-gate.js`, `index.html`, `Form.html`, `Code.gs`, chính sách và README.
- **Chưa xác minh chạy thật**: quyền trình duyệt/Google Apps Script /exec trong phiên bản V5 vẫn phải test trên thiết bị thực.
- Drive file sao lưu V4/V3 cần đồng bộ riêng nếu chưa có cách upload trực tiếp qua kết nối; GitHub `main` là nguồn mã chính.

Checkpoint: `CONG_VIEC_DANG_LAM.md` và `TRANG_THAI_DU_AN.md`.
