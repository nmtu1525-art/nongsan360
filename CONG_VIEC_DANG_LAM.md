# NÔNG SẢN 360 — ĐIỂM KHÔI PHỤC CÔNG VIỆC ĐANG LÀM
> CHECKPOINT để bàn giao khi chuyển chat hoặc bị ngắt. Mốc cập nhật: 14/11/2026 (Asia/Ho_Chi_Minh).
> Nguồn sự thật là GitHub/Drive ở thời điểm truy cập, không chỉ nội dung tệp này.

## A. Công việc hiện tại
- **Trạng thái:** ĐANG LÀM — đã nghiệm thu khôi phục chat mới; đang đối chiếu nguồn tin thị trường mới và chuẩn bị đồng bộ báo cáo lên Drive.
- **Kết quả nghiệm thu chat mới (14/11/2026):** Trong cuộc trò chuyện mới trong Project `hàng hóa phái sinh`, câu lệnh `Tiếp tục` đã dẫn tới việc đọc được `CONG_VIEC_DANG_LAM.md` và `TRANG_THAI_DU_AN.md`, xác minh quyền GitHub (repo permissions.push=true) và liệt kê được thư mục Google Drive dự án. **Đã nghiệm thu chức năng đọc/khôi phục**; chưa nghiệm thu quyền GitHub của môi trường *tác vụ chạy theo lịch* ngày 15/11.
- **HEAD lúc kiểm tra đầu phiên:** `1c6df29008b4408d1d2101fc0648dbaaf41c3761` (trước commit hiện tại); kho `nmtu1525-art/nongsan360` nhánh `main`.
- **Dữ liệu đầu vào đã kiểm:** `tin-tuc.json` có đúng 3 tin (ICO cà phê tháng 10, USDA ngô và lúa mì WASDE tháng 11), 21 PDF ở `pdf/` (CF 5, NG 5, LM 5, PS 6).
- **Drive đã đọc:** thư mục dự án gốc `1e7PwORibeFRjdLieHlc-2nshZyUHMK9a` và thư mục bản V9.3 `1jV9pOVDED3t-5T2zX37jZWopBED2zX7G`. Trong Drive có tài liệu bàn giao, các bản V9.x; V9.3 chứa bản ZIP *cũ* từng có bot API, không coi là mã nguồn chuẩn nếu khác với GitHub hiện tại.
- **Việc đang tiếp tục:** kiểm tra nguồn tin chính thức mới công bố trước hoặc vào 14/11/2026, so bài cũ; chỉ biên tập/đăng nếu xác minh chắc chắn. Sau đó cập nhật trạng thái chung và đồng bộ báo cáo vào Drive không ghi đè dữ liệu cũ.

## B. Các phần đã hoàn thành
1. Tạo hai tệp checkpoint trên GitHub và hướng dẫn tự tiếp tục trong Project.
2. Nghiệm thu truy cập GitHub + Drive ngay từ chat mới bằng lệnh `Tiếp tục`.
3. Xác nhận mã nguồn GitHub hiện có đủ 21 giáo trình PDF và 3 bản tin; không sửa hoặc xóa chúng trong quá trình nghiệm thu.
4. Bot GitHub Actions yêu cầu OpenAI API key đã bị vô hiệu hóa từ commit `9c917cefb90b3170f92b0c07ac5a327b941ff166`; phương án xuất bản là ChatGPT qua kết nối GitHub trực tiếp, không có API key.

## C. Thứ tự công việc còn lại
1. **Đang xử lý:** kiểm tra tin thị trường mới từ USDA/ICO; xác minh thời gian/số liệu/URL nguồn, không đăng trùng chủ đề đã có. Nếu không đủ nguồn, ghi rõ chưa đăng.
2. Ghi lại kết quả, cập nhật `TRANG_THAI_DU_AN.md`; lưu một bản báo cáo tiếp tục mới trên Drive dự án, KHÔNG ghi đè V9.3 cũ và 21 giáo trình.
3. Vào ngày 15/11/2026 sau 07:00 (giờ Việt Nam), kiểm tra liệu tác vụ ChatGPT `Đăng tin Nông Sản 360` có thực sự chạy và quyền ghi GitHub có hoạt động trong môi trường lịch hay không. Chỉ xác nhận có tin đăng khi có commit.
4. Khi có yêu cầu thiết kế website mới, tiếp tục từ `index.html` phiên bản đang chạy, không dựng lại site từ đầu.

## D. Lưu ý an toàn
- Không được yêu cầu OpenAI API key; không bật lại workflow tự đăng cũ.
- Giữ nguyên 21 PDF và 3 bài cũ trong `tin-tuc.json`. Không viết bừa số liệu hoặc ghi đè các bản ZIP trên Drive.
- Không nói đã kiểm chứng tác vụ 07:00 khi tác vụ chưa chạy lần đầu.
- Trước mọi cập nhật trên GitHub phải đọc SHA mới nhất; sau commit phải đọc lại kết quả.
- Khi bị ngắt giữa bước tra nguồn tin, ưu tiên hoàn thành việc đó, sau đó cập nhật báo cáo trạng thái và Drive.

## E. Các địa chỉ
- GitHub: https://github.com/nmtu1525-art/nongsan360
- Website: https://nmtu1525-art.github.io/nongsan360/
- Drive gốc: https://drive.google.com/drive/folders/1e7PwORibeFRjdLieHlc-2nshZyUHMK9a
- Bản trạng thái: `TRANG_THAI_DU_AN.md`
- Quy trình tin: `QUY_TRINH_DANG_TIN_CHATGPT_KHONG_API.md`

## Quy tắc checkpoint
- Trước việc dài, cập nhật mục tiêu và bước đang làm.
- Sau mỗi chặng lưu được kết quả, ghi tiếp SHA/đầu ra và bước tiếp theo.
- Không có chứng cứ GitHub/Drive thì không tự suy ra đã hoàn thành.
