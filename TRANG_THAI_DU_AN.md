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
- Khi bắt đầu chat mới trong Project **hàng hóa phái sinh**, **đọc `CONG_VIEC_DANG_LAM.md` trước** để biết công việc đang dở, sau đó đọc `TRANG_THAI_DU_AN.md`, kiểm tra commit HEAD, `tin-tuc.json`, cấu trúc repo và thư mục Drive mới nhất. Không làm lại từ đầu và không suy đoán từ trí nhớ.
- Đọc yêu cầu mới của người dùng, đối chiếu việc đã làm, rồi làm tiếp trên mã hiện tại; không xây lại website từ đầu và không hỏi tải lại tệp đã có trên Drive.
- **Trong lúc làm việc dài**, cập nhật `CONG_VIEC_DANG_LAM.md` ngay từ đầu và sau mỗi chặng đã lưu được, không đợi tới cuối cuộc chat; ghi rõ bước đang dở, đường dẫn/commit, bước tiếp theo, rủi ro. Công việc chưa lưu có thể mất khi chat bị ngắt bất ngờ.
- **Sau mỗi phiên có thay đổi quan trọng**, cập nhật file này: ngày, HEAD commit, công việc đã hoàn thành, việc đang làm, trở ngại, quyết định chủ chốt, vị trí bàn giao trên Drive; đồng bộ bản mới lên Drive. Giữ nguyên lịch sử tệp cũ khi cần.
- Nếu không đọc được GitHub/Drive, nêu rõ giới hạn và yêu cầu khôi phục kết nối, không đoán.

## 6. Việc tiếp theo
- Xác minh lần chạy đầu tiên của tác vụ ChatGPT có quyền cập nhật GitHub (khi có tin thật), xem commit và kết quả Pages.
- Kiểm tra trang tin và SEO hiển thị với bài mới, nâng chất lượng biên tập, rà soát kỹ nguồn.
- Duy trì quy tắc cập nhật tài liệu bàn giao vào cuối mỗi phiên.

## 7. Xác minh trong chat mới ngày 14/11/2026
- Đã thành công truy cập qua kết nối trực tiếp: GitHub repo `nmtu1525-art/nongsan360` có quyền `push`, đọc được hai checkpoint, truy xuất được commit gần nhất và toàn bộ cây thư mục `main`. Truy cập được Drive gốc và thư mục V9.3.
- Kết quả kiểm đếm: 21 giáo trình PDF ở GitHub (5 CF, 5 NG, 5 LM, 6 PS); `tin-tuc.json` có 3 bài hiện tại (ICO cà phê tháng 10/2026; WASDE tháng 11 về ngô và lúa mì). Không phát hiện thay đổi mã nguồn/tin mới trước khi phiên này bắt đầu; HEAD đầu phiên `1c6df29008b4408d1d2101fc0648dbaaf41c3761`.
- Đã kiểm tra nguồn tin chính thức: báo cáo USDA WASDE ngày 10/11 và ICO Coffee Market Report 10/2026 đã được dùng cho 3 bài; trang USDA FAS liệt kê Weekly Export Sales ngày 13/11, tuy nhiên chưa đối chiếu được số liệu chi tiết của bản đó ở phiên này. **Không đăng tin mới** khi chưa có số liệu xác minh đầy đủ; bảo toàn `tin-tuc.json`.
- Đã ghi checkpoint đầu việc tại commit `666d4e7fd21ec5dc91aa326c45c8e945c795efe5`. Mốc kiểm thử **tự đọc khi chuyển chat đã thành công**; mốc kiểm thử **tác vụ 07:00 ngày 15/11 chưa xảy ra/chưa có kết quả thực tế**.
- Lưu ý: V9.3 ở Drive có bản ZIP kỹ thuật cũ, không tự khôi phục bot API đã tắt; GitHub main hiện tại là mã chuẩn.
- Bước tiếp theo: kiểm tra chi tiết bản Weekly Export Sales mới nhất và nguồn ICO/USDA mới công bố; nếu đủ điều kiện, biên tập, soát hai vòng rồi bổ sung tin không trùng. Sau 07:00 ngày 15/11 xác minh tác vụ ChatGPT có chạy và tạo commit được hay không. Cập nhật checkpoint thường xuyên.

## 8. Sắp xếp Google Drive và Facebook (14/11/2026)
- Đã phân loại thư mục Drive gốc `1e7PwORibeFRjdLieHlc-2nshZyUHMK9a` thành 4 khu vực: quản lý dự án, website, giáo trình/thư viện và Facebook.
- Tất cả 14 thư mục các phiên bản website đã nằm ở `01_WEBSITE/01_LUU_TRU_PHIEN_BAN`; 11 tài sản nguồn cũ ở `01_WEBSITE/02_MAU_NGUON_CU`. File GitHub `index.html` vẫn là mã nguồn chuẩn.
- Các thư viện, trung tâm 21 giáo trình, hồ sơ kiểm duyệt nằm ở `02_GIAO_TRINH_VA_THU_VIEN`; không thay đổi nội dung hoặc file ID của chúng.
- Thư mục Facebook: https://drive.google.com/drive/folders/19aUO-V0SCy5NJ1JUPW0wmZGWbbIi6MeA có sáu thư mục con `01_NHAN_DIEN_THUONG_HIEU`, `02_BAI_VIET`, `03_HINH_ANH_BAI_DANG`, `04_VIDEO_REELS`, `05_KE_HOACH_LICH_DANG`, `06_BAO_CAO`.
- Hai ảnh logo/cover đã được người dùng phê duyệt và xác minh ở `Facebook/01_NHAN_DIEN_THUONG_HIEU`, ID file giữ nguyên: logo `17f1PdxJMK5slfABFvDgeZFxkuRpvbB7h`, bìa `1pGGtE8cpY0CHbaG1KBF19cpybhpyXlRm`.
- Đã kiểm tra lại `list_folder`: Drive gốc chỉ còn đúng 4 thư mục; Facebook còn 6 thư mục; thư mục nhận diện có đúng 2 file PNG.
- Quy ước đặt tên bài và ảnh Facebook: dùng chung mã `FB-YYYYMMDD-XX` để dễ đối chiếu; các nhóm sau này lưu đúng folder tương ứng.
- Commit checkpoint xác nhận: `63c5ed53de6058c8b575661f5ce1f3cc195aa48b`. Fanpage Facebook thật vẫn chưa được tạo; không có quyền Facebook trực tiếp. Tiếp theo là biên soạn nội dung khai trương và thiết lập Fanpage bằng tài khoản chủ sở hữu.

## 9. Bổ sung liên kết SFVN Trading trên website (14/11/2026)
- Mục `Tìm hiểu & mở tài khoản` đã được bổ sung nút tải app SFVN Trading cho iOS (App Store) và Android (Google Play), bằng chỉnh sửa trực tiếp `index.html` trên GitHub, commit `559f7ae8d6c5590a3a857c9f68b6629f3e8d5917`.
- Hai URL store được kiểm tra với trang ứng dụng chính thức và cùng nhà phát triển SFVN INVESTMENT CORPORATION. Bản ghi đọc lại GitHub sau cập nhật đã xác nhận đúng cả hai URL, đúng một khối app, giữ nguyên QR đăng ký và cảnh báo. Chưa xác minh GitHub Pages live vì kết nối web không truy cập được.
- Bài Facebook chào mừng mã `FB-20261114-01` được đưa vào lịch Metricool lúc 11:15 ngày 14/11 (có checkpoint chi tiết trong `CONG_VIEC_DANG_LAM.md`), một tác vụ kiểm tra sau đăng được đặt 11:25 cùng ngày. Không tự suy đoán bài đã công khai nếu chưa có xác minh.

## 10. Video hướng dẫn tài khoản SFVN (14/11/2026)
- Đã nhận 2 video MP4 tại `01_WEBSITE/03_VIDEO_HUONG_DAN_TAI_KHOAN_SFVN`: mở tài khoản Drive ID `1-IFnUqU3VxvB9Gzwu_Jc1UVSUp7hNWev` và nạp tiền ID `1dzdSfBeYAU1oYMF74Otvb7LSzv1Yq-eW`.
- Đã sửa `index.html`, nhúng 2 video vào 2 ô hướng dẫn tương ứng (Drive iframe preview + liên kết dự phòng), commit `01324d9f38fd45690f129d2eda3db751d1524e78`, readback xác minh mã HTML và giữ nguyên tính năng cũ.
- Drive video **nạp tiền đã mở quyền anyone:reader**, video **mở tài khoản còn private**: cần chủ sở hữu cấp `Bất kỳ ai có liên kết → Người xem` cho video 01. Chưa kiểm thử phát video trên trang Pages công khai. Không xác nhận đã xem nội dung bên trong chỉ qua metadata.

## 11. Điều hướng nhanh tài khoản SFVN (14/11/2026)
- Đã biến 4 ô tổng quan trên trang `Tìm hiểu & mở tài khoản` thành liên kết tương tác đến bốn mục nội dung cùng trang: rủi ro, QR đăng ký, tải SFVN Trading, video. Sử dụng cơ chế anchor `@...` của router hiện hữu; CSS mobile và focus, scroll margin cho header.
- Commit website `84d12cedf357c42288879ec18d26be783898082f`. Readback nguồn thành công; chưa xác minh site GitHub Pages bên ngoài.

## 12. Liên hệ website qua Facebook và điện thoại (14/11/2026)
- Website đã bỏ toàn bộ nhắc Zalo, thay bằng Fanpage Nông Sản 360 và số **0985 272 776** theo yêu cầu người dùng.
- Link Page `https://www.facebook.com/122095198125555913` dựa trên URL post thực tế lấy qua Metricool, khớp Page Name `Nông Sản 360`. Link gọi `tel:0985272776`.
- Hai lựa chọn liên hệ hiện ở trang chủ mục `#/@lien-he`, chân trang và trong trang hướng dẫn tài khoản SFVN; commit `4a626795f4e51f96d6a6fd41df7e188f5bbc8918`. Readback GitHub đã xác minh, chưa kiểm thử giao diện Pages live.

## 13. Chỉnh liên kết Fanpage sau khi phản hồi lỗi (14/11/2026)
- Người dùng phản hồi link Fanpage trong mục Liên hệ hiển thị "Bạn hiện không xem được nội dung này". Đã thay liên kết dạng số suy ra từ bài đăng thành `https://www.facebook.com/profile.php?id=122095198125555913`, commit `ae363252af6298e3eefcf9aed4fa4b1c9da07724`; đã xác minh readback 3 link mới, điện thoại và các tính năng khác giữ nguyên.
- **Chưa xác minh thực tế liên kết mới mở được Facebook.** Nếu user vẫn thấy lỗi, yêu cầu họ sao chép link Trang trực tiếp trong app Facebook để thay bằng canonical share URL; không tiếp tục đoán ID.

## 14. Đổi liên hệ sang Messenger trực tiếp (14/11/2026)
- Theo phản hồi người dùng, hai cách link Facebook Page trước đó đều dẫn tới thông báo không thể xem; đã thay ba CTA Page thành `https://m.me/1388965107640064`, sử dụng Facebook Page ID trả về từ Metricool, đổi tên nút `Nhắn tin Messenger`. Số `0985 272 776` và tel link vẫn giữ nguyên.
- Commit mã `e97b633bcf118b86a88cce4285e8848c300e92ea`. GitHub readback OK nhưng **chưa thể xác minh đường dẫn m.me này trong trình duyệt Facebook đăng nhập**, cần chủ dự án test thật và đưa link Messenger chính chủ nếu còn lỗi.

## 15. Vận hành Fanpage 20 bài mỗi 4 tuần (14/11/2026)
- Đã xác minh qua Metricool rằng bài chào mừng Facebook `FB-20261114-01` đăng thành công `status=PUBLISHED`, URL https://facebook.com/122095198125555913/posts/122095197489555913 (sau lịch 11:15 ngày 14/11). Kết nối Facebook–Metricool brand `8097037` hoạt động.
- Đã chuẩn bị kế hoạch 20 chủ đề cho 4 tuần 16/11–11/12/2026, 5 bài/tuần T2–T6, Google Drive file ID `1mc4dTIG1Ej3oAOu7Qp7A2GiNLcXbmZAd`; bản GitHub `FACEBOOK_KE_HOACH_20_BAI_20261116_20261211.md` commit `c54765008d742b18f290af3346d4897ae61cfbd2`.
- Đã tạo automation `20 bài Fanpage Nông Sản 360`: chạy **08:00 T2–T6 (20 lần)**, bắt đầu **16/11/2026**, dự kiến lên lịch bài Facebook 10:00 cùng ngày nếu caption/ảnh/nguồn hợp lệ. Lưu Drive, kiểm chứng Metricool và cập nhật checkpoint từng lượt. Không trùng automation tin website 07:00.
- **Chưa khẳng định đã sản xuất hoặc đăng 20 bài**. Tác vụ chưa chạy nên khả năng tạo ảnh tự động, lưu Drive và Metricool cần kiểm thử vào lần chạy 16/11. Nếu thiếu công cụ/quyền, giữ nháp, báo lý do, không đăng thiếu ảnh hoặc số liệu chưa xác minh. Kết quả thực tế ghi trong `CONG_VIEC_DANG_LAM.md`.

## 16. Kế hoạch Fanpage đến 30/11 và 6 bản nháp đã soạn (14/11/2026)
- Theo người dùng, mục tiêu còn lại tháng 11: **11 bài mới** gồm 5 bài chiến dịch hội thảo SFVN, 2 bài phái sinh, 3 bài cà phê/ngô/lúa mì, 1 bài giới thiệu thư viện; cộng 1 bài chào mừng đã xuất bản = **12 bài dự kiến trong tháng 11**.
- Hội thảo SFVN **có thể** diễn ra thứ Bảy 21/11, **chưa xác thực**; chưa có poster, ngày giờ/địa điểm/chương trình/link đăng ký chính thức. Không mời khách hay công bố ngày giả định; bài tổng kết chỉ đăng khi có dữ kiện/ảnh sự kiện thực tế.
- **ĐÃ VIẾT TRƯỚC** 6 caption đủ nội dung, nguồn dựa trên PDF PS-01/PS-02/PS-03/CF-02/NG-02/LM-02 và bộ 21 PDF thư viện; đã lưu `facebook-drafts/2026-11/FB-20261117-01.md`, `FB-20261124-01.md`, `FB-20261125-01.md`, `FB-20261126-01.md`, `FB-20261127-01.md`, `FB-20261130-01.md` trên GitHub, và 6 Google Docs đầy đủ trong Drive `Facebook/02_BAI_VIET`. Link chi tiết ở checkpoint `CONG_VIEC_DANG_LAM.md`.
- Lịch 12 mục và link các bản nháp: GitHub `FACEBOOK_KE_HOACH_THANG_11_2026.md` và Drive https://docs.google.com/document/d/1G-wXcK6Vkp3zSlCl-t4eFJt8VfbMqO3sUv9tB8opQu8/edit .
- Automation của Fanpage được sửa từ 20 lượt đến 11/12 thành **11 lượt, T2–T6 08:00 từ 16/11 đến 30/11**; đọc lịch mới tháng 11 và chỉ lên lịch Facebook khi có bản được user duyệt, ảnh hợp lệ, thông tin SFVN được xác nhận. Lịch cũ 20 bài không xóa, chỉ là tham khảo. Automation tin website 07:00 không thay đổi.
- **Trạng thái hiện tại:** 6 bài là NHÁP CHỜ DUYỆT, **chưa tạo 6 ảnh**, chưa đặt 11 bài mới vào Metricool; bài chào mừng 14/11 vẫn PUBLISHED. Tránh tuyên bố tháng 11 đã đăng đủ 12 bài.

## 17. Rà soát 6 bài Facebook theo Social SEO, lưu ảnh nháp lên Drive (14/11/2026)
- **Đã kiểm tra trực tiếp** sáu Google Docs trong Drive `Facebook/02_BAI_VIET`, chỉnh và đọc lại 6 nội dung: tiêu đề có từ khóa chính, caption rõ ý, đúng nội dung giáo trình, liên kết nội bộ, 4 hashtag, CTA hỏi đáp; thêm phần metadata từ khóa và mô tả ảnh chỉ để biên tập, không đăng nguyên văn metadata. Bản thảo GitHub `facebook-drafts/2026-11/` đã đồng bộ bản cập nhật.
- **Đã lưu 6 ảnh PNG 1122x1402** lên Drive `Facebook/03_HINH_ANH_BAI_DANG`, mỗi ảnh tên `FB-YYYYMMDD-01_ANH_NHAP_CHUA_DUYET.png`; readback metadata và danh sách xác minh 7 file (6 nháp + ảnh chào mừng). Hình minh họa còn mang phong cách cách điệu/AI, **CHƯA DUYỆT CHẤT LƯỢNG**, không được đăng tự động trước khi được user duyệt. Chi tiết ID ảnh trong `CONG_VIEC_DANG_LAM.md`.
- Metricool gợi ý sơ bộ khung giờ: T2/T3/T5/T6 10:00, T4 12:00, cuối tuần T7/CN 10:00, **chưa chứng minh hiệu quả trên Fanpage còn mới**. Bài 25/11 ghi dự kiến 12:00; các bài khác 10:00. Lịch tháng 11 đã đồng bộ trên GitHub + Drive; chưa schedule/publish sáu bài trên Metricool.
- **Phân biệt SEO:** Đây là tối ưu nội dung để dễ đọc/tìm kiếm trên Facebook (Social SEO), **không phải audit technical SEO website hoặc bảo đảm thứ hạng Google**. Phần thư viện cần điền form một lần mới ở mức đề xuất, chưa thi công, không có backend lưu lead đã xác minh.

## 18. Bộ 6 ảnh Facebook V2 dạng đồ họa biên tập (14/11/2026)
- Đã thực hiện yêu cầu thay bộ ảnh kiểu AI bằng **6 ảnh PNG 4:5 (1080×1350) thiết kế bố cục vector/chữ trên PowerPoint**, không dùng image generator, không làm giả ảnh chụp hoặc dữ liệu. Không cam kết Meta không gắn nhãn AI.
- Toàn bộ 6 ảnh V2 lưu Google Drive `Facebook/03_HINH_ANH_BAI_DANG` (ID `1RadZa_wCwpC7xPVxZFORuXG9BZeq1opx`), tên `FB-YYYYMMDD-01_ANH_DO_HOA_BIEN_TAP_V2_CHO_DUYET.png`; bản nguồn PPTX editable ID `17kK1z7JMDociLH_g2-dCMSJz5SEa8MHY`. Đã xác minh qua metadata từng file.
- Giữ nguyên 6 ảnh nháp cũ và bài chào mừng. Đã cập nhật liên kết V2 trong 6 Google Docs và 6 GitHub draft tương ứng; lịch tháng 11 đã đồng bộ GitHub và Drive, trạng thái ảnh V2 **chờ anh duyệt**. Không đặt lịch/đăng Facebook mới. Website, 21 giáo trình PDF và `tin-tuc.json` không bị sửa.

## 19. Quyết định ảnh Facebook cuối cùng: quay lại 6 ảnh cũ (14/11/2026)
- Người dùng quyết định **sử dụng bộ 6 ảnh minh họa bản đầu**, không dùng 6 đồ họa V2 cho lịch Fanpage tháng 11. Đã thay đúng ID ảnh cũ trong **6 Google Docs + 6 draft GitHub**, kiểm tra lại mỗi file có link cũ, không còn tham chiếu V2; lịch tháng 11 Google Docs và GitHub cũng đã chỉnh.
- 6 ảnh V2 và file PPTX vẫn bảo toàn trên Drive như bản lưu trữ, không xóa/ghi đè. **Chưa đăng các bài mới**, ảnh được chọn nhưng caption vẫn cần phê duyệt trước khi xếp lịch Metricool. Facebook có thể quyết định gắn nhãn AI với ảnh minh họa cũ.

## 20. Đã xóa 6 PNG V2 không được duyệt; 6 bài Facebook hoàn tất Social SEO và lên lịch (14/11/2026)
- Đã xóa vĩnh viễn **đúng 6 ảnh PNG thiết kế V2 không duyệt**, giữ **6 ảnh bản đầu** đã được chủ dự án chọn + ảnh chào mừng + file PPTX chỉnh sửa (PPTX không nằm trong 6 ảnh yêu cầu xóa). Readback thư mục ảnh Drive xác minh chính xác.
- Đã đọc/rà 6 Google Docs, nguồn giáo trình và route website, xác minh ảnh cũ công khai theo link `anyone:reader`. Caption giữ đúng chuyên môn, từ khóa chính, liên kết đọc giáo trình, 4 hashtag, CTA hỏi đáp; tách riêng metadata SEO khỏi nội dung đăng.
- **Đã lên lịch Metricool tự động 6 bài, mỗi bài kèm ảnh bản đầu**, readback xác minh 6 provider Facebook **PENDING**, `autoPublish=true`:
  - 17/11 10:00 — ID `427792755`
  - 24/11 10:00 — ID `427792908`
  - 25/11 12:00 — ID `427792991`
  - 26/11 10:00 — ID `427793073`
  - 27/11 10:00 — ID `427793151`
  - 30/11 10:00 — ID `427793267`
- Đã cập nhật cả 6 Google Docs + 6 GitHub draft, lịch tháng 11 Drive/GitHub; automation tháng 11 đã cập nhật prompt chống trùng. **Chưa coi là published**, cần đối chiếu sau giờ đăng.
- Bài chào mừng 14/11 PUBLISHED; 5 slot SFVN còn thiếu poster/thông báo chính thức nên CHƯA schedule. Giữ an toàn website, `tin-tuc.json`, 21 giáo trình, automation website.

## 21. Dọn sạch bộ ảnh V2 bị từ chối (14/11/2026)
- Theo ảnh chụp phản hồi của người dùng, đã xóa **nốt file PowerPoint `NS360_6_ARTWORK_VECTOR_EDITORIAL_V2_EDITABLE.pptx` (ID `17kK1z7JMDociLH_g2-dCMSJz5SEa8MHY`)** khỏi Drive, API trả `success=true`.
- Readback thư mục ảnh xác minh chỉ còn **7 PNG: 6 ảnh bản đầu đã chọn + ảnh chào mừng**. Toàn bộ 6 PNG V2 và file PPTX V2 đã xóa khỏi Drive. Không sửa 6 post Metricool đã lên lịch và không chạm giáo trình, website hoặc tin tức.

## 22. Thu vien dang ky mot lan — cho ket noi Google Apps Script (14/11/2026)
- Google Sheet native RIENG TU da tao trong Drive/00_QUAN_LY_DU_AN/04_DATA_DANG_KY_THU_VIEN; tab Leads 12 cot va HuongDan, 0 leads; chi co owner duoc xem.
- Website GitHub Pages da them library-gate.js/.css va chinh-sach-du-lieu.html, da tich hop router sach vao index.html va footer privacy; du lieu sach PDF, news JSON, 31 templates, SFVN videos, cac bai Facebook da len lich khong bi thay doi.
- Backend Apps Script Code.gs + Form.html va README o Github/library-registration va Drive; form name/phone bat buoc, email optional, 2 consent khac nhau, browser luu marker khong PII.
- CHUA LIVE: const WEB_APP_URL = '' trong library-gate.js. Khong kich hoat form khi chua co Web App /exec da deploy va test. Chu du an can deploy Apps Script bang tai khoan Google va gui URL /exec de xac minh, sau do bat gate. Tinh nang chi ghi nho tren cung trinh duyet; PDF public URL van mo truc tiep.

## 23. Kết nối Google Apps Script Web App cho form thư viện — chế độ test (14/11/2026)
- Đã cài link `https://script.google.com/macros/s/AKfycbwOanbih1xPmM07lBtMdfkll3_8JNYRRKzW0x7qFGuWsVqjHDuYf5YmA9JNonthV5EWyQ/exec` vào `library-gate.js` (commit `1d2b00d810704e09ec23da1b6f624289fbe00880`), và cho chạy **chỉ với link kiểm thử** `https://nmtu1525-art.github.io/nongsan360/?ns360_signup_test=1#/giao-trinh/cf-01.html` (commit `703296b6c9d2391a746ecc29f93d0aa70bead4e7`), `LIVE_ENABLED=false`. Truy cập thư viện bình thường vẫn mở để tránh chặn khách khi chưa xác minh ghi dữ liệu.
- Local JS VM test PASS route control, origin/nonce messaging và lưu dấu đã đăng ký một lần, nhưng **chưa có end-to-end test thực trên Google Apps Script** do công cụ kiểm tra ngoài không mở được Web App. Sheet `1_fKgwxop4-pTIORlnhRVCNCWJXLhZIpPV2nBMv8dDEw` owner-only, 0 leads baseline. Chờ anh thử link riêng và xác nhận, rồi đối chiếu dòng ghi trên Sheet; chỉ khi PASS mới đổi `LIVE_ENABLED=true`.
- Bảo toàn 21 PDF, các bài Facebook Metricool, tin-tuc.json và QR/video SFVN.

## 24. Form thư viện không checkbox — bản v2 đã lưu GitHub và Drive (14/11/2026)
- Chủ dự án yêu cầu bỏ phần checkbox đồng ý. Đã cập nhật `library-registration/Form.html`: **không có checkbox**, thông báo xử lý dữ liệu + nút rõ ràng `Đồng ý và mở thư viện miễn phí`; gửi `privacyConsent:true` sau thao tác gửi, `newsConsent:false` (không xin phép gửi quảng cáo). RequestID có tiền tố `v2-` cho audit.
- `Form.html` GitHub và bản sao Drive ID `1yzk8DZC3hjffAvwDn2TT25eQ6FtXfig5` đã được readback đúng nội dung và khớp hoàn toàn; đã sửa bản giải thích gate, chính sách dữ liệu và README trên GitHub.
- **Chưa được cập nhật trên Google Apps Script Web App đang deploy**: cần chủ dự án copy Form.html mới vào editor và Deploy > Manage deployments > Edit > New version > Deploy. URL `/exec` hiện có giữ nguyên.
- Gate website `LIVE_ENABLED=false`, chỉ có link test. Sau redeploy, kiểm thử một lượt, xác minh trên Google Sheets `privacy=true, news=false, RequestID v2-` trước khi bật form toàn trang. Không đụng 21 giáo trình PDF và các bài Facebook đã scheduled.
