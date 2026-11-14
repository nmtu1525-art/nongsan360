# Nông Sản 360 — Đăng ký đọc thư viện (phiên bản v3)

**Cập nhật 14/11/2026.** Form miễn phí trước khi đọc 21 giáo trình. Hiện website đang `LIVE_ENABLED = false` và chỉ cho phép kiểm tra bằng đường dẫn riêng; phải xác nhận ghi Google Sheets thành công sau khi cập nhật bản Apps Script rồi mới bật công khai.

## 1. Trải nghiệm

- Người đọc chọn một giáo trình: website hiển thị form ở lần đăng ký đầu; trên cùng trình duyệt `localStorage` ghi nhớ dấu đã hoàn thành. Không lưu họ tên, số điện thoại hay email tại client.
- Form chỉ gồm họ tên và số điện thoại bắt buộc, email tùy chọn, chủ đề quan tâm. **Không có checkbox; đã bỏ khung thông báo dài**.
- Nút `Đồng ý và mở thư viện miễn phí`; dưới nút có một **liên kết nhỏ** tới `chinh-sach-du-lieu.html`, mô tả mục đích xử lý để cấp quyền đọc.
- Không thu thập hoặc suy diễn đồng ý nhận bản tin/hội thảo/quảng cáo. Chỉ dùng thông tin đúng mục đích đã công bố; muốn marketing cần cơ chế đồng ý riêng.
- Khi gửi thành công qua Google Apps Script mới báo quyền đọc cho website; không báo thành công trước khi Sheet ghi dữ liệu.

## 2. Bảng Google Sheets

Google Sheet riêng tư `NS360 - DATA DANG KY THU VIEN (RIENG TU)`:
`https://docs.google.com/spreadsheets/d/1_fKgwxop4-pTIORlnhRVCNCWJXLhZIpPV2nBMv8dDEw/edit`

Tab `Leads` giữ **10 cột**, theo đúng thứ tự:

| Cột | Trường |
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

Hai cột cũ `DongYXuLyDuLieu`, `DongYNhanTin` (G–H trước đây) **đã được yêu cầu xóa**. Không xóa các cột khác, không xóa dòng đăng ký của khách. Phiên bản chính sách, thời điểm và RequestID vẫn được giữ để kiểm tra lịch sử thao tác đăng ký. Bảng Sheet không được chia sẻ công khai.

## 3. Đồng bộ bản Google Apps Script đang chạy

**Bắt buộc cập nhật cả 2 file**, vì Apps Script đang chạy là bản triển khai độc lập với GitHub:

1. Mở dự án Apps Script hiện tại (nút Extensions → Apps Script từ Google Sheet nếu cần).
2. Thay **toàn bộ** `Code.gs` bằng nội dung mới trong `library-registration/Code.gs` trên GitHub. Đây là bản **v3 10 cột**, định vị `RequestID` tại cột I.
3. Thay **toàn bộ** file `Form.html` bằng `library-registration/Form.html` trên GitHub. Form v3 không còn khung thông báo dài/checkbox và gửi RequestID bắt đầu bằng `v3-`.
4. Kiểm tra **Project Settings → Script Properties**: `SPREADSHEET_ID=1_fKgwxop4-pTIORlnhRVCNCWJXLhZIpPV2nBMv8dDEw`.
5. Nhấn Save. Chọn **Deploy → Manage deployments → Edit → Version: New version → Deploy**, giữ `Execute as: Me`, `Who has access: Anyone`. Đường dẫn Web App `/exec` đang dùng giữ nguyên.
6. Nếu thay mã mà chưa Deploy New version, `/exec` vẫn chạy backend cũ 12 cột và sẽ báo lỗi khi Sheet chỉ còn 10 cột.

## 4. Kiểm tra trước khi mở công khai

Mở link: `https://nmtu1525-art.github.io/nongsan360/#/thu-vien/kiem-tra-dang-ky`. Trước khi gửi form phải thấy bản mới chỉ có trường thông tin và link chính sách nhỏ. Điền thông tin kiểm thử được phép sử dụng, nhấn đăng ký; phải mở được CF-01.

Đối chiếu một dòng mới ở tab `Leads` với `RequestID` bắt đầu `v3-`, đúng vị trí **I**, trạng thái `ACTIVE` tại **J**, và dữ liệu không bị lệch cột. Chỉ sau khi thử thành công mới đổi `const LIVE_ENABLED = true` trong `library-gate.js` để bật đại trà.

## 5. Lưu ý bảo vệ tài liệu và dữ liệu

GitHub Pages không phải hệ thống xác thực nội dung thật: các file `pdf/*.pdf` vẫn có thể truy cập qua đường dẫn gốc. Form dùng cho việc đăng ký tự nguyện và tổ chức luồng đọc, không bảo đảm DRM. Không dùng thông tin thu được cho quảng cáo/hội thảo nếu chưa có đồng ý riêng.

Checkpoint dự án: `CONG_VIEC_DANG_LAM.md`, `TRANG_THAI_DU_AN.md`. Không ghi đè PDF, tin tức hay nội dung xã hội để triển khai form.
