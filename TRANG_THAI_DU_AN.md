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

## 25. Sửa test form đăng ký không xuất hiện trên ẩn danh (14/11/2026)
- Chủ dự án báo ẩn danh vẫn không thấy form. Đã cập nhật `library-gate.js` (commit `c2412126c6e964bc6a4ca113e073f60265bac123`) với **hash test route `#/thu-vien/kiem-tra-dang-ky`**, buộc show form dù có `localStorage` cũ, chuyển CF-01 chỉ sau khi Google Apps Script trả đăng ký thành công, bổ sung link kiểm tra App Script trực tiếp nếu khung iframe trống. Giữ chế độ `LIVE_ENABLED=false` cho người dùng thường.
- `index.html` commit `78e0059593948cce4993e5fba637830c00b2b2c3` cache-bust thư viện JS, `library-gate.css` commit `1483aff9a57454c0dba5165974a3cd07e99a9691` hỗ trợ link fallback.
- Readback GitHub: 31 templates, 21 giáo trình (42 link PDF), tin tức, Form v2 không checkbox và backend URL được giữ. **Chưa thể kiểm tra live browser hoặc xác nhận ghi bản đăng ký v2 trên Sheet** do giới hạn công cụ; chờ người dùng thử link `https://nmtu1525-art.github.io/nongsan360/#/thu-vien/kiem-tra-dang-ky` rồi đối chiếu Lead Sheet. Không bật đại trà khi chưa có bằng chứng.

## 26. Rút gọn form v3 và xoá 2 cột G:H thành công (14/11/2026)
- Đã bỏ đoạn thông báo dài `consent-notice` trong `library-registration/Form.html` và CSS của khung. Chỉ để câu ngắn dưới nút + link chính sách dữ liệu, không checkbox. Khách bấm nút `Đồng ý và mở thư viện miễn phí`; backend vẫn chỉ xử lý cho quyền đọc, KHÔNG xin phép marketing. Form mới dùng RequestID `v3-`.
- Tab `Leads` trên Google Sheet riêng tư `1_fKgwxop4-pTIORlnhRVCNCWJXLhZIpPV2nBMv8dDEw` đã **xóa cột G `DongYXuLyDuLieu` và H `DongYNhanTin`**. 10 tiêu đề A:J đã xác minh; **bản ghi khách hiện có được bảo toàn**, trạng thái ACTIVE, cột J validation giữ nguyên, quyền Sheet owner-only. Tab `HuongDan` được cập nhật.
- `Code.gs` đã sửa đúng 10 cột và RequestID cột I; Form v3 / policy / README đã cập nhật GitHub. 4 file bản sao trong Drive đã được ghi đè nội dung đúng ID cũ và đọc lại khớp hoàn toàn GitHub; thư mục không có staging trùng.
- **CHƯA LIVE**: Apps Script đang deploy chưa tự đồng bộ mã từ GitHub/Drive, chủ dự án phải thay cả `Code.gs`, `Form.html` rồi Deploy → Manage deployments → Edit → New version → Deploy. Lúc chưa redeploy, form test có thể lỗi do backend cũ vẫn mong 12 cột. `library-gate.js` vẫn `LIVE_ENABLED=false`. Sau khi user redeploy, thử v3 và đối chiếu Sheet mới; chỉ khi PASS mới bật gate public.
- Node VM test v3 PASS về cú pháp và vị trí 10 cột. 21 PDF, website news và Metricool không thay đổi.


## 27. Kiểm chứng chặng V3 sau khi tiếp tục từ checkpoint (14/11/2026)
- Đã xác minh GitHub kết nối có quyền push và Drive đang sẵn sàng, không phải làm lại website/Facebook.
- File `library-registration/Code.gs` trên GitHub đã đối chiếu **khớp byte với bản Drive** (đọc base64, do Drive để MIME octet-stream); `Form.html` khớp bản Drive 4434 ký tự. Không phát hiện bất đồng bộ giữa hai nguồn tệp.
- Trên Sheet riêng tư tab `Leads`, có đúng 10 cột A:J, `I2:J40` hiện chỉ thấy 1 RequestID bắt đầu bằng `v2-` và trạng thái ACTIVE; **chưa có bản ghi v3-**. Không tiết lộ thông tin cá nhân.
- `library-gate.js` vẫn `LIVE_ENABLED = false` và có route thử `#/thu-vien/kiem-tra-dang-ky`; không mở form bắt buộc cho người đọc. Không truy cập được trang Pages và Apps Script live qua công cụ web, do đó không xác nhận đã redeploy hoặc kiểm thử trình duyệt xong.
- Checkpoint công việc đã ghi commit `9ce8dd33371c9ac0495529bc36c8fae86bbd3409`. Bước kế tiếp phụ thuộc vào chủ dự án cập nhật **cả Code.gs + Form.html** tại Apps Script và redeploy cùng URL /exec; sau đó đăng ký thử, kiểm Sheet có RequestID `v3-` trạng thái ACTIVE và xác minh điều hướng CF-01 trước khi cân nhắc bật LIVE.
- Không chỉnh sửa các file PDF, dữ liệu tin tức, danh sách khách, bài Metricool, file website ngoài checkpoint; không dùng OpenAI API key.


## 28. Bật đăng ký thư viện V3 trên website (14/11/2026)
- Người dùng xác nhận mở **link thử** thì thấy form nhưng vào web bình thường không thấy. Nguyên nhân được xác minh trong `library-gate.js`: `LIVE_ENABLED=false` chỉ cho form chạy trên route thử, chưa chặn các route giáo trình thường.
- Readback bảng `Leads!I1:J80` cho thấy **01 v2- ACTIVE** và **01 v3- ACTIVE**, bảo đảm backend V3 đã có ghi thành công ít nhất một lượt; không truy cập/sao chép PII.
- Đã thay `library-gate.js` sang `LIVE_ENABLED = true`, commit `838a0afa1f32bb45e57b63399d0bccfe8e7b68b9`. `index.html` đổi script cache-bust thành `library-gate.js?v=20261114-live-v3-1`, commit `c943ec159b9271d4bfe5eaa67440d544f5e92a55`.
- Readback cả hai tệp GitHub xác nhận bật true, script đúng một lần, router điều hướng gọi gate. Chỉ chặn route `#/giao-trinh/...` với khách chưa có marker; **không chặn trang danh sách Thư viện**. Người đã đăng ký trên cùng browser không thấy form lại; mở ẩn danh để thử trải nghiệm khách mới.
- **Chưa xác minh GitHub Pages live trên trình duyệt** vì công cụ web báo không truy cập được Pages, và chưa kiểm chứng tự động chuyển về bài học ngay sau submit phiên live. Đề nghị user tự kiểm tra ẩn danh, từ Thư viện chọn giáo trình rồi đăng ký nếu cần.
- Gate là JavaScript giao diện, không khóa URL tĩnh `/pdf/*.pdf` trực tiếp; không tuyên bố bảo vệ tài liệu tuyệt đối. Đã giữ nguyên toàn bộ 21 PDF, `tin-tuc.json`, dữ liệu khách, các bài Facebook.
- Checkpoint công việc cập nhật commit `ba715a8eb7dbf03123e82f261c4c30d40991f6df`.


## 29. Bật form V3 ngay khi khách vào Thư viện từ menu (14/11/2026)
- Bổ sung sau mục 28: Người dùng cho biết mở trực tiếp link thử thấy form, nhưng đi từ web không thấy. Vì menu Thư viện dẫn tới `#/thu-vien/index.html`, đã mở rộng gate **chặn ngay danh mục thư viện** với khách chưa có dấu đăng ký, không chỉ chặn trang giáo trình.
- `library-gate.js` commit `cba714ba60c0087a89d9d14fe40537864bb024e8` với `LIVE_ENABLED=true` và `protectedRoute` gồm cả `/thu-vien/index.html`. `index.html` commit `6d79034157e70ca240192f93ce7843392157b50a` tham chiếu script `library-gate.js?v=20261114-live-v3-library-2`.
- Đọc lại mã nguồn xác nhận đầy đủ: gate bật, menu link đúng, route chặn đúng, script cache-bust duy nhất, router gọi `shouldBlock`. Backend Apps Script v3 trước đó đã có bản ghi `v3- ACTIVE` trong `Leads`. Bảo toàn bản v2 cũ.
- **Chưa xác minh bằng trình duyệt thật**: Pages live không mở được bằng công cụ web. Chủ dự án kiểm tra bằng **ẩn danh**: web → Thư viện kiến thức → form → gửi thành công → danh mục thư viện; người đã có localStorage marker cùng browser sẽ bỏ qua form đúng thiết kế.
- Gate client-side không chặn được URL file PDF tĩnh công khai; không tuyên bố dữ liệu PDF được bảo vệ. Không chạm 21 PDF, `tin-tuc.json`, bài Facebook, file Drive hoặc dữ liệu khách.


## 30. Ghi nhận thành phố ước tính và bỏ thông báo riêng trên form (14/11/2026)
- Theo yêu cầu chủ dự án, tab Leads Google Sheet đã thêm K `ThanhPhoUocTinh` và L `GoogleMapsUocTinh`, không chèn/xóa cột A:J, không lưu IP hoặc GPS. Mã `Code.gs` V4 trên GitHub tạo liên kết Google Maps cho khu vực từ city/region/country; `Form.html` V4 thử tra cứu ipwho.is khi người dùng bấm gửi, thất bại thì vẫn ghi nhận form bình thường.
- Chủ dự án không muốn hiện thông báo riêng lúc đăng ký. GitHub `Form.html` đã bỏ đoạn giải thích GeoIP trên giao diện và bỏ dòng "đang xác định khu vực", chỉ giữ link `Chính sách dữ liệu cá nhân` và thông báo gửi thành công/lỗi. Commit `0e057a029851dd7809b63ce903ed21dafd5cb851`. Chính sách dữ liệu vẫn nêu rõ việc ước tính theo IP và dịch vụ bên thứ ba, không che giấu cách xử lý.
- Tài liệu hướng dẫn đã cập nhật commit `d99c38750b50b8f4dc309fe7937855891f0cde76`. Đã đọc lại Sheet `Leads!I1:L4` thấy header đúng và chưa có bản ghi `v4-` để xác minh K/L.
- **Chưa hoạt động chính thức**: bản V4 mới trên GitHub, Drive `Form.html` hiện vẫn là V3 và Apps Script /exec độc lập chưa được triển khai V4. Chưa kiểm thử API geo-IP trong browser. Cần owner cập nhật cả `Code.gs` và `Form.html` cùng một deployment version, thực hiện đăng ký thử rồi đối chiếu K:L trước khi xác nhận.
- Bảo toàn website/21 PDF, tin tức, Facebook và dữ liệu đăng ký.


## 31. Sửa lấy thành phố V4.1 khi hai lượt đăng ký V4 K/L trống (14/11/2026)
- Người dùng gửi ảnh chụp 2 dòng V4 ACTIVE nhưng không có `ThanhPhoUocTinh`/Google Maps. Google Sheet readback `I1:L25` xác minh đúng trạng thái (một V3, hai V4, K/L trống). Không có IP lịch sử được lưu, không suy đoán địa điểm các đăng ký đã có.
- Đã cập nhật `library-registration/Form.html` sang V4.1 với lookup GeoJS HTTPS/CORS trước, ipwho.is làm dự phòng; khi lỗi vẫn ghi lead, không cần quyền GPS, không có dòng thông báo riêng trên form. `Code.gs` V4 và 12 cột Sheet không thay đổi. Form commit `b7045c0a80ba5b9adbe49ad37ffffc0f598d0722` (trước đó triển khai logic `583f75731b7e44cc2d5313f2a2453d0aa58f684e`).
- Chính sách dữ liệu nêu hai dịch vụ, commit `43f6dfd7579cc1fdd696c841beb72c571b08319f`. README mới commit `ef4e1cfc493bcad9b2c435e85650ea8f9f9507e5`. Đã chạy mock Node kiểm tra 4 kịch bản lookup PASS; chưa test thật trên Google Apps Script client.
- **Chờ chủ dự án thay Form.html bằng phiên bản GitHub V4.1 và Deploy New version cùng /exec hiện hữu**, thử đăng ký một dòng mới có K/L không trống (khi mạng hỗ trợ). Drive bản Form cũ chưa đồng bộ. Không tác động dữ liệu khách, 21 PDF, tin tức hay lịch Facebook.


## 32. V5 tùy chọn GPS → phường/xã, từ chối vẫn đăng ký (14/11/2026)
- Đã triển khai mã nguồn **V5** cho đăng ký thư viện: vị trí GPS chỉ được yêu cầu ở cửa sổ website chính sau cú nhấn gửi; browser tự hỏi quyền nếu cần, nếu đã cấp quyền thì có thể không hỏi lại. Khi từ chối/hết thời gian chờ, Form dùng tra cứu IP theo GeoJS/ipwho.is hoặc để trống nếu tất cả thất bại; **luôn cho khách đăng ký tiếp**.
- BigDataCloud Reverse Geocoding (API browser miễn phí, không cần khóa API) chuyển GPS đã đồng ý thành tên thành phố/phường xã hoặc khu vực khi có dữ liệu. BigDataCloud nhận tọa độ/IP trong truy vấn, được nêu rõ trong chính sách; Google Sheet và backend không nhận/lưu tọa độ GPS/IP. Link Google Maps ở cột L chỉ tìm địa danh, không ghim địa chỉ chính xác.
- Trên Google Sheets riêng tư `Leads` đã mở rộng từ 12 sang **14 cột**, thêm M `PhuongXaUocTinh`, N `NguonDinhVi`; giữ nguyên A:L, 4 dòng lịch sử, dropdown ACTIVE/WITHDRAWN/DELETED. Header và validation readback thành công.
- GitHub: `library-gate.js` (commit cuối `58bb2999e4a90aa117f35430697520d59b023fea`), `index.html` (`1007a7270dfa70dbde511c308161f14412a1715c`), Form V5 (`8a302704f1bca1630d0206c6dad8896214a8d4fd`), backend 14 trường (`b4b7e65cde82f3bfab7a871cfc4d12bd85a4812e`), policy (`a17f8101877b4893e65ad4e87b334794cecb3b44`), README (`32c3dc254d996061a0f8ee1e8c906a3b907723de`). Readback xác nhận nội dung cốt lõi.
- **Chưa có quyền tự cập nhật Web App Apps Script** qua connector; chủ dự án phải thay **cả Code.gs + Form.html** trong Apps Script đang chạy, Save rồi Deploy > Manage deployments > Edit > New version > Deploy, giữ cùng /exec. Chưa có v5 row hoặc bằng chứng geolocation trên điện thoại; không coi tính năng V5 đã hoạt động thực tế. Nếu thiếu permission GPS, vẫn có thể ghi thành phố IP.
- Chưa đồng bộ raw source GitHub V5 vào đúng file Drive cũ do connector thiếu file_uri cho nội dung mới; dùng GitHub làm nguồn chuẩn. Giữ nguyên 21 PDF, tin tức, các bài Facebook và dữ liệu hiện có.


## 33. Sửa cuối V5, cần redeploy Apps Script để hoạt động (14/11/2026)
- V5 đã cập nhật trên GitHub main và Google Sheets 14 cột; dữ liệu cũ bảo toàn. Phiên bản script website cuối `library-gate.js` commit `fcef6576bed9cdb2ac3acdae07b3a74efee132d2` dùng promise dùng chung khi form gửi lại; `index.html` cache-bust `library-gate.js?v=20261114-v5-optional-gps-2` commit `d6b7e0aeef0e930e33df0c7baf6aca1e00519100`. README commit `cf7994e0e42157200959dab417197582bf16ba16`.
- V5 chỉ có ý nghĩa cho khách mới sau khi chủ dự án **cập nhật cả Code.gs và Form.html ở Google Apps Script rồi Deploy New version**. Google Drive các bản raw source cũ chưa được đồng bộ; GitHub main là nguồn đúng. Chưa có kiểm chứng GPS/ward trong browser điện thoại. Không tuyên bố hoạt động chính thức trước kiểm thử.
- Bảo vệ quyền riêng tư: nếu trình duyệt chưa cho phép GPS sẽ hỏi quyền; từ chối không ảnh hưởng đăng ký, dùng IP dự phòng. Chỉ lưu địa danh và nguồn định vị; BigDataCloud có thể nhìn thấy GPS/IP trong yêu cầu sau khi khách cấp quyền (đã mô tả trong chính sách). Không lưu IP/tọa độ chính xác/địa chỉ nhà.


## 34. Android Apps Script hiển thị lỗi Google Drive trong iframe (14/11/2026)
- Ảnh người dùng: PC hiển thị form, Android trong trang Nông Sản 360 xuất hiện thông báo Google Drive "Rất tiếc, không thể mở tệp tại thời điểm này". Phân tích: lỗi trên tầng mở Web App của Google/Android, không phải GPS hay IP; chưa xác định 100% nguyên nhân riêng của thiết bị. Google Issue Tracker 520300212 và 574946511 đang ghi nhận các lỗi tương tự (Android chuyển App Script /exec sang Drive, nhiều tài khoản).
- Đã sửa GitHub UI hỗ trợ mobile: đưa link mở biểu mẫu ở tab riêng lên đầu iframe, bổ sung hướng dẫn Chrome/Samsung Internet ẩn danh và nút sao chép URL website. Các commits: JS `40ab4e850000dfa3f9404c7ec022f3a85a4fe8ef`, CSS `7a4b53398a1358905a7ed7768f5a483b1c9a9eef`, index cache `e9d6ae99be6a1961cfa7c22b7166cbd19c8e7c3f`, README `a4ca79f36ae9a48430c84d1cd1f49854086eccd0`.
- **Chưa xác minh kết quả trên máy Android thật**. Nếu vẫn lỗi trong Chrome/Samsung Internet ẩn danh và khi mở riêng /exec, có thể cần Google Apps Script redeploy/đổi nền backend; không thể khẳng định đã sửa được lỗi Google. Không đổi dữ liệu, PDF, backend V5, GPS hay Fanpage.


## 35. Chủ dự án chốt chỉ thành phố IP, bỏ GPS/Maps và ghi nhận lỗi Android còn tồn tại (14/11/2026)
- Chủ dự án thử Android lần nữa, ảnh Google Drive error trong iframe vẫn hiện. Quyết định không theo đuổi GPS/phường-xã/Google Maps, chỉ thu thành phố ước tính theo IP khi bấm đăng ký.
- Đã **hoàn thành chỉnh GitHub V6**: Form `v6-` chỉ GeoJS + ipwho.is (commit `1c18b013194e066b556880ace55dfd115d1cfe4b`); backend vẫn 14 cột nhưng ghi K city, L:N trống (commit `2c407916a72c5c17cf0d73d6a25a9994ccf3dfa6`); gate bỏ GPS, giữ đăng ký một lần/iframe (commit cuối `d47f8cfcd44946137173b75455a7040b25652e69`); CSS cleanup `1e778286ea88c8a2bbfb26040dec74d180a6280b`; cache index `afdb30dc6947df516e5af432f05cc01cdfd6baaf`; chính sách V6 `d09bf53b23405c17fade1bf7879f255dcb34a38d`; README `5bd97c6dfb74737238c7eb25814da3c6ec9b9755`.
- Google Sheet `Leads` **ẩn L:N**, không xóa cột/hàng cũ, giữ K=ThanhPhoUocTinh; ghi chú và `HuongDan` đã đổi theo V6. 5 bản lịch sử v3/v4/v5 vẫn được giữ nguyên khi đọc lại, J validation không hỏng.
- **Bản V6 đang ở GitHub/Sheet, chưa redeploy Apps Script đang chạy**. Cần chủ dự án cập nhật cả `Code.gs` và `Form.html`, Save, Deploy New version cùng /exec, đăng ký một bản thử `v6-` rồi kiểm K và L:N rỗng. Chưa nghiệm thu Android.
- **Lỗi Android Google Drive iframe chưa được sửa**, độc lập với bỏ GPS/map. Có thể cần làm một biểu mẫu first-party thay iframe / kiểm tra lại deployment Google Workspace, nhưng chưa tự thay luồng đăng ký công khai hoặc nới gate. Bảo toàn 21 PDF, tin tức, Facebook, dữ liệu riêng tư.

## 36. Sự cố đăng ký trên điện thoại và lộ trình chuyển form first-party an toàn (14/11/2026)
- Android ngay cả khi mở Web App /exec riêng vẫn gặp Google Drive error, nên khách mới có thể không đăng ký được. Không tiếp tục thử hướng dẫn đổi trình duyệt coi là bản sửa.
- **Tạm thời:** đã đưa liên kết đăng ký qua Fanpage Messenger vào giao diện smartphone, GitHub commits `b20320f403a4913088e7fb2923e8283c3f0a602d` và CSS `3c58741a6d27f9612bf2b4945fd0fbd7e6e53675`. Đây là hỗ trợ thủ công, không tự động cấp quyền hay ghi Lead.
- **Đã chuẩn bị bản mới chưa bật chính thức**: Form first-party `library-native-form.js`, Apps Script `doPost` + JSONP receipt boolean theo RequestID v7-, có cơ chế không coi `no-cors` POST là thành công, không gửi PII trong URL. Files GitHub đã có source và cú pháp JS/GS parse PASS. `NATIVE_ENABLED=false` bảo toàn legacy PC. URL thử `https://nmtu1525-art.github.io/nongsan360/?ns360_native_signup_test=1#/thu-vien/kiem-tra-dang-ky`.
- **Chưa triển khai backend Web App, chưa xác nhận Android**. Owner phải cập nhật Code.gs Apps Script, Save và Deploy New version; kiểm Who has access Anyone/Execute as Me. Cần test trên Android/PC, có bản v7- ACTIVE trong Leads và backend xác nhận receipt thành công mới bật native cho mọi người. Khi Android vẫn không xác nhận được GET receipt Google, cần backend độc lập có CORS thực sự.
- Không hứa vấn đề mobile đã khắc phục. Giữ nguyên Sheet và 21 PDFs, dữ liệu cũ, tin và Facebook.


### Registration diagnostic 2026-11-14 - read-only runtime probe
- User reports native signup cannot confirm registration on both mobile and desktop.
- Live Sheet read in chat found only headers in Leads!I1:J50; no Sheet writes were made.
- Anonymous GET receipt probe from GitHub Actions (no POST, no fake lead): HTML_INSTEAD_OF_JSONP_POSSIBLY_OLD_DEPLOYMENT.
- Evidence: REGISTRATION_DIAGNOSTIC_RESULT.json and KIEM_TRA_DANG_KY_20261114.md.
- Native flag remains OFF; successful anonymous receipt does not establish browser POST or Android success.


### Registration diagnostic 2026-11-14 - deployed backend markers
- Anonymous GET only; no POST, no new lead, no personal data in this probe.
- Result: LEGACY_REGISTRATION_FORM_INSTEAD_OF_RECEIPT. Static markers: leadForm, registerLead, NS360_LIBRARY_REGISTERED, v7-.
- Read REGISTRATION_DIAGNOSTIC_RESULT.json and KIEM_TRA_DANG_KY_20261114.md before further changes.
- Native signup remains staged OFF; do not claim Android/POST success from this read-only probe.
