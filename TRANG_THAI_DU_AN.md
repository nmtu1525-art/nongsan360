# NÔNG SẢN 360 — TRẠNG THÁI & BÀN GIAO DỰ ÁN
> Tài liệu đầu vào bắt buộc khi bắt đầu một cuộc trò chuyện mới. Cập nhật: 14/11/2026 (Asia/Ho_Chi_Minh).
> **Nguồn sự thật:** kiểm tra trạng thái GitHub hiện thời và nội dung Drive; không mặc nhiên cho rằng tài liệu này luôn mới nhất.

## 1. Mục tiêu dự án
- Website Nông Sản 360: giáo dục và cập nhật thị trường cà phê, ngô, lúa mì và hàng hóa phái sinh; bài viết khách quan, dùng nguồn xác thực, chuẩn SEO, tiếng Việt chuyên nghiệp.
- Người dùng muốn chính trợ lý ChatGPT thực hiện công việc như biên tập viên: tìm tin → kiểm chứng → viết → soát chính tả/câu từ/số liệu hai vòng → đăng qua kết nối GitHub; **không dùng OpenAI API key**.
- Sau mỗi việc cần cập nhật kho nguồn và, khi phù hợp, lưu bản phát hành/tài liệu trên Drive.

## 2. Vị trí tài sản
- Kho mã nguồn chính: https://github.com/nmtu1525-art/nongsan360 (nhánh main).
- Website GitHub Pages: https://nmtu1525-art.github.io/nongsan360/
- Dữ liệu tin tức (nguồn đang chạy): https://github.com/nmtu1525-art/nongsan360/blob/main/tin-tuc.json
- Website chính: `index.html` ở gốc repo.
- 21 tài liệu PDF: thư mục `pdf/` trong repo (CF-01..05, NG-01..05, LM-01..05, PS-01..06).
- Thư mục Drive dự án gốc: https://drive.google.com/drive/folders/1e7PwORibeFRjdLieHlc-2nshZyUHMK9a
- Bản V9.2: https://drive.google.com/drive/folders/16WPJ-Y_h9YySIyfpSEhyQB5Uq99S6j6g
- Bản V9.3: https://drive.google.com/drive/folders/1jV9pOVDED3t-5T2zX37jZWopBED2zX7G
- Quy trình đăng bài không API: `QUY_TRINH_DANG_TIN_CHATGPT_KHONG_API.md` trong repo.
- Tài liệu này: `TRANG_THAI_DU_AN.md` trong repo, đồng bộ phiên bản lên Drive khi có thay đổi quan trọng.

## 3. Trạng thái kiểm tra tại 14/11/2026
- Website đã qua nhiều bản V9.0 → V9.3. V9.2 sửa kiểm tra ngày/slug của tin và thêm trang không tìm thấy.
- Hiện tại `tin-tuc.json` có 3 bài đã xuất bản (cần đọc tệp bản mới nhất để xác nhận lại số bài).
- 21 PDF trong kho mã được đối chiếu trong các phiên trước. Khi cập nhật phải kiểm tra lại số lượng và liên kết.
- V9.3 từng tạo bot GitHub Actions dựa vào API key, **nhưng bị người dùng từ chối**. File `.github/workflows/daily-news.yml` được thay bằng workflow vô hại, **không có schedule tự đăng** (commit 9c917cefb90b3170f92b0c07ac5a327b941ff166). Không yêu cầu người dùng thêm khóa API.
- Đã thiết lập một tác vụ ChatGPT tên **Đăng tin Nông Sản 360**, lịch **07:00 hằng ngày (Asia/Ho_Chi_Minh), từ 15/11/2026**, prompt yêu cầu vai trò chuyên gia, SEO, kiểm dữ liệu/chính tả/câu chữ hai lượt trước đăng, tránh bài trùng. **Quyền truy cập GitHub trong môi trường tác vụ chạy theo lịch chưa được xác minh bằng lần xuất bản thực tế.** Không hứa tự đăng nếu không thấy commit.
- Các bản ZIP V9.3 trên Drive được tạo khi còn bot API ở mã kỹ thuật; tham chiếu phiên bản nguồn GitHub mới nhất khi có xung đột.

## 4. Quy chuẩn khi viết và xuất bản tin
1. Xác minh nguồn phát hành thật (ưu tiên USDA, ICO, nguồn có thẩm quyền), ngày công bố, số liệu, thời kỳ thống kê, biến động/tồn kho/mùa vụ; không bịa thông tin.
2. Đối chiếu với bài cũ trong `tin-tuc.json`; không trùng nguồn hoặc chủ đề; không đăng cho đủ chỉ tiêu.
3. Soạn bài 1–2 tin/lần nếu có nguồn mới chất lượng. Bài viết chuẩn SEO tự nhiên: từ khóa chính đúng chủ đề, tiêu đề không giật tít, phần mở bài rõ, H2/H3 có logic, giọng chuyên gia dễ hiểu, URL trích dẫn cụ thể.
4. Soát lần 1 (sự kiện, ngày, số, %, đơn vị và chứng cứ), lần 2 (chính tả tiếng Việt, dấu câu, logic, thuật ngữ, cách viết, SEO và tính dễ đọc).
5. Bảo toàn toàn bộ tin cũ; đọc SHA bản mới nhất và cập nhật đúng `tin-tuc.json` qua GitHub. Giữ nguyên các tài liệu PDF và giao diện nếu không có yêu cầu.
6. Sau cập nhật, xác minh commit; kiểm tra GitHub Pages và link bài khi có thể. Không khẳng định đã đăng khi chưa có commit hoặc chưa thể kiểm chứng.
7. Báo cho anh bài nào được đăng, ngày công bố nguồn, nguồn, URL bài và ghi rõ điểm còn hạn chế.

## 5. Quy tắc bàn giao giữa các chat
- Khi bắt đầu chat mới trong Project **hàng hóa phái sinh**, đọc file `TRANG_THAI_DU_AN.md` từ GitHub trước; tiếp theo kiểm tra commit HEAD, `tin-tuc.json`, cấu trúc repo, và thư mục Drive bản mới nhất. So sánh chứ không tự tin vào bộ nhớ hội thoại.
- Đọc yêu cầu mới của người dùng, đối chiếu việc đã làm, rồi làm tiếp trên mã hiện tại; không xây lại website từ đầu và không hỏi tải lại tệp đã có trên Drive.
- **Sau mỗi phiên có thay đổi quan trọng**, cập nhật file này: ngày, HEAD commit, công việc đã hoàn thành, việc đang làm, trở ngại, quyết định chủ chốt, vị trí bàn giao trên Drive; đồng bộ bản mới lên Drive. Giữ nguyên lịch sử tệp cũ khi cần.
- Nếu không đọc được GitHub/Drive, nêu rõ giới hạn và yêu cầu khôi phục kết nối, không đoán.

## 6. Việc tiếp theo
- Xác minh lần chạy đầu tiên của tác vụ ChatGPT có quyền cập nhật GitHub (khi có tin thật), xem commit và kết quả Pages.
- Kiểm tra trang tin và SEO hiển thị với bài mới, nâng chất lượng biên tập, rà soát kỹ nguồn.
- Duy trì quy tắc cập nhật tài liệu bàn giao vào cuối mỗi phiên.
