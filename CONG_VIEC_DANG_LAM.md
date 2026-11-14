# NÔNG SẢN 360 — ĐIỂM KHÔI PHỤC CÔNG VIỆC ĐANG LÀM
> CHECKPOINT để bàn giao khi chuyển chat hoặc bị ngắt. Mốc cập nhật: 14/11/2026 (Asia/Ho_Chi_Minh).
> Nguồn sự thật là GitHub/Drive ở thời điểm truy cập, không chỉ nội dung tệp này.

## A. Công việc hiện tại
- **Trạng thái:** ĐÃ XONG chặng nghiệm thu chat mới và đối chiếu ban đầu; ĐANG CHỜ xác minh số liệu chi tiết nguồn mới và lần chạy tác vụ 07:00 ngày 15/11.
- **Kết quả nghiệm thu chat mới (14/11/2026):** Trong cuộc trò chuyện mới trong Project `hàng hóa phái sinh`, câu lệnh `Tiếp tục` đã dẫn tới việc đọc được `CONG_VIEC_DANG_LAM.md` và `TRANG_THAI_DU_AN.md`, xác minh quyền GitHub (repo permissions.push=true) và liệt kê được thư mục Google Drive dự án. **Đã nghiệm thu chức năng đọc/khôi phục**; chưa nghiệm thu quyền GitHub của môi trường *tác vụ chạy theo lịch* ngày 15/11.
- **HEAD lúc kiểm tra đầu phiên:** `1c6df29008b4408d1d2101fc0648dbaaf41c3761` (trước commit hiện tại); kho `nmtu1525-art/nongsan360` nhánh `main`.
- **Dữ liệu đầu vào đã kiểm:** `tin-tuc.json` có đúng 3 tin (ICO cà phê tháng 10, USDA ngô và lúa mì WASDE tháng 11), 21 PDF ở `pdf/` (CF 5, NG 5, LM 5, PS 6).
- **Drive đã đọc:** thư mục dự án gốc `1e7PwORibeFRjdLieHlc-2nshZyUHMK9a` và thư mục bản V9.3 `1jV9pOVDED3t-5T2zX37jZWopBED2zX7G`. Trong Drive có tài liệu bàn giao, các bản V9.x; V9.3 chứa bản ZIP *cũ* từng có bot API, không coi là mã nguồn chuẩn nếu khác với GitHub hiện tại.
- **Kết quả rà soát:** đã kiểm tra USDA/ICO; WASDE 10/11 và ICO CMR 10/2026 đã được dùng trong ba bài; USDA FAS có Weekly Export Sales 13/11 nhưng chưa trích xuất/xác minh đủ số liệu chi tiết để viết bài. Không đăng tin mới. Đã cập nhật `TRANG_THAI_DU_AN.md` tại commit `da3ae1300346a7c32dbaaff68c4c29f7b6bfec0e`. Đồng bộ bản cập nhật trạng thái lên Drive chưa thực hiện trong phiên này; bản Drive cũ vẫn còn nguyên.

## B. Các phần đã hoàn thành
1. Tạo hai tệp checkpoint trên GitHub và hướng dẫn tự tiếp tục trong Project.
2. Nghiệm thu truy cập GitHub + Drive ngay từ chat mới bằng lệnh `Tiếp tục`.
3. Xác nhận mã nguồn GitHub hiện có đủ 21 giáo trình PDF và 3 bản tin; không sửa hoặc xóa chúng trong quá trình nghiệm thu.
4. Bot GitHub Actions yêu cầu OpenAI API key đã bị vô hiệu hóa từ commit `9c917cefb90b3170f92b0c07ac5a327b941ff166`; phương án xuất bản là ChatGPT qua kết nối GitHub trực tiếp, không có API key.

## C. Thứ tự công việc còn lại
1. **Tiếp theo:** kiểm tra bản gốc Weekly Export Sales USDA ngày 13/11, đối chiếu số liệu chi tiết và chọn góc tin không trùng; không đăng cho tới khi chắc chắn.
2. `TRANG_THAI_DU_AN.md` đã cập nhật trên GitHub. Việc đồng bộ phiên bản mới lên Drive còn chờ; KHÔNG ghi đè V9.3 cũ và 21 giáo trình.
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

## F. CHẶNG MỚI: FANPAGE FACEBOOK NÔNG SẢN 360 (14/11/2026)
- **Lệnh người dùng:** Bắt đầu Fanpage Facebook, chuẩn bị tên, logo, ảnh bìa, mô tả, giới thiệu và nội dung trang; người dùng đã duyệt định hướng không quảng cáo mở tài khoản trên ảnh bìa/tiểu sử.
- **Mục tiêu thương hiệu công khai:** Nông Sản 360 là kênh tin tức, kiến thức, phân tích về thị trường nông sản và hàng hóa phái sinh; thông điệp `Hiểu thị trường, vững kiến thức`.
- **Mục tiêu kinh doanh nội bộ:** thu hút người quan tâm hợp pháp tới nội dung, rồi chuyển đổi người tự có nhu cầu mở tài khoản qua link giới thiệu affiliate; khi giới thiệu phải minh bạch quyền lợi liên kết, rủi ro giao dịch và không hứa lợi nhuận.
- **Trạng thái:** ĐANG THỰC HIỆN — chuẩn bị bộ thông số Fanpage, hình ảnh chính thức và bản nội dung giới thiệu; không đưa `mở tài khoản`, `affiliate` hay CTA bán hàng lên ảnh bìa, avatar, tiểu sử, bài ghim giới thiệu.
- **Nguyên tắc:** không đăng nội dung liên quan mở tài khoản khi chưa có đơn vị/đường dẫn đăng ký thật được kiểm tra; không dùng thông tin liên hệ hoặc URL giả. Chưa có quyền Facebook, không được báo đã tạo Fanpage thật.
- **Việc tiếp theo:** thiết kế logo/banner, hoàn thiện trường Fanpage và bài giới thiệu; lưu tệp bàn giao vào GitHub/Drive nếu có thể. Bảo toàn `index.html`, `tin-tuc.json` và 21 PDF.

### Tiến độ Fanpage đã lưu
- Đã tạo `KE_HOACH_FANPAGE_FACEBOOK.md` trên GitHub (commit `189e829fd39c249f4556811c7728a6672cd0eb3b`), có tên/username đề xuất, bio, giới thiệu, bài ghim, quy tắc nội dung và kế hoạch kênh chuyển đổi minh bạch.
- Đã tạo phương án hình logo và ảnh mô phỏng, **chưa phải file nhận diện đã duyệt hoặc ảnh bìa Facebook độc lập**. Không dùng ảnh mô phỏng có đường dẫn/tích xanh/lượt theo dõi giả làm trang thật.
- Chưa có truy cập tài khoản Facebook/Meta để tự tạo Page, chưa đăng bài. Bước kế tiếp: hoàn chỉnh và duyệt logo + ảnh bìa riêng, sau đó tạo Page và nhập các thông số trong bản kế hoạch.

### Duyệt thiết kế và yêu cầu lưu trữ (14/11/2026)
- Người dùng đã xác nhận **DUYỆT** 2 ảnh nhận diện tạo trong cuộc trò chuyện trước: logo hình vuông NS360 xanh/vàng và banner ngang phong cảnh nông nghiệp có khẩu hiệu `Hiểu thị trường, vững kiến thức`.
- Yêu cầu đã được duyệt: tạo **thư mục con `Facebook`** trong thư mục gốc Nông Sản 360 trên Google Drive `1e7PwORibeFRjdLieHlc-2nshZyUHMK9a`, lưu 2 ảnh vào đó; các hình ảnh và bài viết Facebook sau này cũng lưu tại thư mục này. Không đụng dữ liệu website hoặc giáo trình.
- **Trạng thái:** ĐANG THỰC HIỆN tạo thư mục và chuyển 2 ảnh đã duyệt lên Drive, xác minh đường dẫn/tệp sau thao tác; nếu kênh tải ảnh lên Drive bị giới hạn cần ghi rõ và duy trì tệp ảnh trong bản bàn giao khác.

### Hoàn tất lưu hai ảnh lên Google Drive (14/11/2026)
- **ĐÃ XONG:** Tạo thư mục `Facebook` trực tiếp bên trong Drive gốc `Nông Sản 360 - Website HTML`: https://drive.google.com/drive/folders/19aUO-V0SCy5NJ1JUPW0wmZGWbbIi6MeA
- **ĐÃ XONG:** Đã upload và đọc lại metadata xác minh chính xác hai PNG đã duyệt (không phải ảnh mockup):
  - Logo: `NS360_LOGO_FANPAGE_DA_DUYET_2026-11-14.png`, 1,601,564 bytes, https://drive.google.com/file/d/17f1PdxJMK5slfABFvDgeZFxkuRpvbB7h/view
  - Bìa: `NS360_ANH_BIA_FANPAGE_DA_DUYET_2026-11-14.png`, 2,597,652 bytes, https://drive.google.com/file/d/1pGGtE8cpY0CHbaG1KBF19cpybhpyXlRm/view
- **Quy ước từ giờ:** Mọi tài liệu Facebook của Nông Sản 360 (ảnh bài viết, avatar, banner, lịch bài, caption, bản thảo) sẽ được lưu trong thư mục Drive Facebook trên; không lưu lẫn vào các bản phát hành website, không xóa dữ liệu khác.
- **Tiếp theo:** tạo Fanpage Facebook thật và thiết lập hình ảnh/thông tin bằng tài khoản anh (hiện không có quyền Facebook), sau đó chuẩn bị các bài đăng khai trương. Chưa đăng gì lên Facebook.

## G. SẮP XẾP DRIVE GỐC VÀ FACEBOOK (14/11/2026) — ĐANG THỰC HIỆN
- **Yêu cầu:** Người dùng muốn phân loại rõ các ảnh đã duyệt trong Facebook, có chỗ riêng cho ảnh bài viết, nội dung bài viết, video, lịch đăng; đồng thời tổ chức lại thư mục Drive gốc Nông Sản 360.
- **Nguồn đã kiểm:** Drive gốc `1e7PwORibeFRjdLieHlc-2nshZyUHMK9a`, Facebook `19aUO-V0SCy5NJ1JUPW0wmZGWbbIi6MeA` có đúng hai PNG đã duyệt, và nhiều thư mục phiên bản website V8/V9, thư viện/giáo trình và tệp bàn giao ở gốc.
- **Phương án an toàn:** giữ nguyên ID các file và folder; chỉ tạo thư mục phân loại và DI CHUYỂN (không tạo bản sao, không ghi đè hay xóa). Facebook vẫn nằm trực tiếp dưới Drive gốc. `Facebook/01_NHAN_DIEN_THUONG_HIEU` chứa hai ảnh đã duyệt; các mục khác: `02_BAI_VIET`, `03_HINH_ANH_BAI_DANG`, `04_VIDEO_REELS`, `05_KE_HOACH_LICH_DANG`, `06_BAO_CAO`. Drive gốc sẽ có `00_QUAN_LY_DU_AN`, `01_WEBSITE`, `02_GIAO_TRINH_VA_THU_VIEN`, `Facebook`; giữ nguyên tên các folder/tệp cũ khi chuyển.
- **Chiến lược website:** gom folder release V8/V9 dưới `01_WEBSITE/01_LUU_TRU_PHIEN_BAN`, các HTML/ZIP mẫu cũ dưới `01_WEBSITE/02_MAU_NGUON_CU` — không coi các ZIP V9.3 là mã nguồn website chuẩn, GitHub vẫn là chuẩn.
- **Cách quay lui:** Drive file IDs giữ nguyên, nếu di chuyển nhầm trả lại bằng addParents=id_nguon/removeParents=id_dich. Tất cả tài sản hiện có đều ở parent Drive gốc, ngoại trừ 2 PNG ở parent Facebook. Trước khi move từng item phải kiểm tra parent ID thật bằng get_file_metadata, sau đó verify bằng metadata/list_folder.
- **Giới hạn:** không sửa mã nguồn GitHub, không động các tệp PDF chứa nội dung, chỉ di chuyển folder ngoài. Không đổi tên tệp cũ.

### Giai đoạn 1 — đã tạo các thư mục phân loại
- Drive gốc: `00_QUAN_LY_DU_AN` = 1fr6KNFoxzmIE9acK1vk-VS-QzeUsQH42; `01_WEBSITE` = 12sUvRlqtF1MX6IgfduYgVbkpKkZ-hbdu; `02_GIAO_TRINH_VA_THU_VIEN` = 1zhjm0RmCF9Ta_2gTWOygD7jeO-3j5Vku; vẫn giữ `Facebook` = 19aUO-V0SCy5NJ1JUPW0wmZGWbbIi6MeA.
- Website: `01_LUU_TRU_PHIEN_BAN` = 1hwVNUDMGQVSPinJst1n1yzxaOgxvV2wv; `02_MAU_NGUON_CU` = 1gKz4pzh9JPNNt_HZay0T4ZlxTvKMspY1.
- Giáo trình: `01_KIEM_DUYET_GIAO_TRINH` = 1QSYlvOdwJkcsWpy9gh1QK6bEWf_boSw2.
- Facebook: `01_NHAN_DIEN_THUONG_HIEU` = 1zwf2GnHuGfaNnhkTOGsgllpZRKIanvrp, `02_BAI_VIET` = 1Qpr8jkC6HuIfIErigLzcTDHue40W8uXZ, `03_HINH_ANH_BAI_DANG` = 1RadZa_wCwpC7xPVxZFORuXG9BZeq1opx, `04_VIDEO_REELS` = 1t8_tjV044gu52-lVKCS2CUjDP_v5Hgi6, `05_KE_HOACH_LICH_DANG` = 1g4y9gEZ32iXb2YvoKLvjuzoI7U3R4gLg, `06_BAO_CAO` = 12EbsqDeTvPYzbks6rFzspynsOquPHKs_.
- Thư mục được tạo thành công, **bước đang làm tiếp**: di chuyển tệp cũ an toàn theo từng cụm, xác minh đúng parent và nội dung sau mỗi chặng.

### Giai đoạn 2 — hoàn tất sắp xếp và kiểm chứng
- **ĐÃ XONG** chuyển hai ảnh đã duyệt vào `Facebook/01_NHAN_DIEN_THUONG_HIEU` (ID `1zwf2GnHuGfaNnhkTOGsgllpZRKIanvrp`), giữ nguyên ID ảnh: logo `17f1PdxJMK5slfABFvDgeZFxkuRpvbB7h`, ảnh bìa `1pGGtE8cpY0CHbaG1KBF19cpybhpyXlRm`; đã đọc lại metadata để xác nhận parent mới.
- **ĐÃ XONG** tổ chức lại Drive gốc thành chính xác 4 thư mục: `00_QUAN_LY_DU_AN`, `01_WEBSITE`, `02_GIAO_TRINH_VA_THU_VIEN`, `Facebook`. Đã xác minh bằng `list_folder` sau di chuyển.
- **ĐÃ XONG** thư mục `01_WEBSITE/01_LUU_TRU_PHIEN_BAN` có **14 thư mục phiên bản cũ**; `01_WEBSITE/02_MAU_NGUON_CU` có **11 tài sản cũ** (tệp và thư mục). Lưu ý: chính repo GitHub main mới là nguồn chuẩn website; chữ `Moi_Nhat` ở file HTML cũ chỉ là tên lịch sử, không mang nghĩa mới nhất thực tế.
- **ĐÃ XONG** thư mục `02_GIAO_TRINH_VA_THU_VIEN` có 6 mục con (4 thư viện/trung tâm và 1 thư mục kiểm duyệt cùng các mục còn lại); `01_KIEM_DUYET_GIAO_TRINH` có 5 tài sản kiểm duyệt. Giữ nguyên nội dung 21 PDF.
- **ĐÃ XONG** thư mục `00_QUAN_LY_DU_AN` có 2 file markdown bàn giao/trạng thái đã di chuyển. Gốc không còn file lẻ.
- **ĐÃ XONG** thư mục `Facebook` có chính xác 6 thư mục con, trong đó `01_NHAN_DIEN_THUONG_HIEU` chứa 2 ảnh đã duyệt; 5 nhóm còn lại đang trống, sẵn sàng nhận bài, ảnh bài đăng, video, lịch đăng, báo cáo.
- **Quy chuẩn lưu mới:** mỗi bài Facebook dùng cùng mã nội dung `FB-YYYYMMDD-XX` trong tên bản thảo và ảnh (ví dụ `FB-20261114-01_bai-viet.md`, `FB-20261114-01_anh.png`); ảnh thiết kế lưu `03_HINH_ANH_BAI_DANG`, caption/draft lưu `02_BAI_VIET`, không để file Facebook ở gốc.
- **Bước kế tiếp:** chuẩn bị bài khai trương/chuyên đề Facebook trong `02_BAI_VIET` và ảnh tương ứng trong `03_HINH_ANH_BAI_DANG`; bước tạo Fanpage thật vẫn cần tài khoản Facebook của anh.
- **Quy tắc an toàn:** chỉ thực hiện move parent, không xóa, không sửa nội dung, không đổi tên file cũ, không can thiệp website GitHub hoặc 21 PDF.

## H. FACEBOOK — CHUẨN BỊ BÀI RA MẮT ĐẦU TIÊN (14/11/2026)
- Người dùng xác nhận **OK** với bước tiếp theo: chuẩn bị bài chào mừng Fanpage và ảnh bài đăng riêng.
- Bắt đầu chặng: biên soạn bài đầu tiên `FB-20261114-01`, thiết kế ảnh minh họa, lưu bản thảo vào Drive `Facebook/02_BAI_VIET` và ảnh vào `Facebook/03_HINH_ANH_BAI_DANG`.
- Nguyên tắc: xây dựng thương hiệu tin tức & giáo dục thị trường; không dùng CTA mở tài khoản/affiliate trong nội dung khai trương; không hứa lợi nhuận hay tạo số liệu thị trường chưa kiểm chứng. Chưa tạo/đăng Facebook thật.
- Thư mục đích: bài viết `1Qpr8jkC6HuIfIErigLzcTDHue40W8uXZ`, hình ảnh `1RadZa_wCwpC7xPVxZFORuXG9BZeq1opx`. Cần xác minh file thực sự có trên Drive rồi mới đánh dấu hoàn tất.

### Kết quả chặng FB-20261114-01 (14/11/2026)
- **ĐÃ HOÀN THÀNH SOẠN & LƯU BẢN CHỜ DUYỆT, CHƯA ĐĂNG FACEBOOK.** Bài khai trương `FB-20261114-01_BAI_CHAO_MUNG_CHO_DUYET.md`, Google Drive file ID `1jhQueir0uAHO1Ib5LjRrnJuI9wXkHIHP`, vị trí `Facebook/02_BAI_VIET`, URL: https://drive.google.com/file/d/1jhQueir0uAHO1Ib5LjRrnJuI9wXkHIHP/view
- Ảnh kèm `FB-20261114-01_ANH_CHAO_MUNG_CHO_DUYET.png`, Drive file ID `1GUXWZphbAU6VVNQG6MXqklrpHAh0UUdf`, vị trí `Facebook/03_HINH_ANH_BAI_DANG`, URL: https://drive.google.com/file/d/1GUXWZphbAU6VVNQG6MXqklrpHAh0UUdf/view
- Đã xác minh hai file bằng `list_folder` sau upload (bài 2406 bytes; ảnh 2460210 bytes). Bản thảo theo hướng thương hiệu tin tức/giáo dục, không có link affiliate hoặc CTA mở tài khoản; sử dụng URL GitHub Pages thực tế.
- **TRẠNG THÁI:** CHỜ ANH DUYỆT bài và ảnh; không tự đăng. Tiếp theo sau duyệt: tạo Fanpage Facebook thật hoặc đăng bài chào mừng khi người dùng cấp quyền phù hợp; tiếp tục chuẩn bị 3 nội dung kiến thức đầu tiên. Giữ nguyên 21 PDF và website.

### FB-20261114-01 — ĐÃ DUYỆT, ĐÃ LƯU FILE TRÊN DRIVE (14/11/2026)
- Người dùng xác nhận `Duyệt, lưu lên file đi`. Đã tạo bản chính thức **ĐÃ DUYỆT** và đọc lại nội dung kiểm chứng.
- File bài chính thức: `Facebook/02_BAI_VIET/FB-20261114-01_BAI_CHAO_MUNG_DA_DUYET.md`, ID **1siBa1EcWXcAQCmWNGdEcDPV2gmUTHZ2-**, https://drive.google.com/file/d/1siBa1EcWXcAQCmWNGdEcDPV2gmUTHZ2-/view. Nội dung ghi `ĐÃ DUYỆT — CHƯA ĐĂNG FACEBOOK`.
- File ảnh chính thức: `Facebook/03_HINH_ANH_BAI_DANG/FB-20261114-01_ANH_CHAO_MUNG_DA_DUYET.png`, ID **1GUXWZphbAU6VVNQG6MXqklrpHAh0UUdf**, https://drive.google.com/file/d/1GUXWZphbAU6VVNQG6MXqklrpHAh0UUdf/view. Chỉ đổi tên, giữ nguyên bytes/ID.
- Bản thảo lịch sử được bảo toàn riêng tại `Facebook/02_BAI_VIET/FB-20261114-01_BAI_CHAO_MUNG_BAN_THAO_LUU_TRU.md`, ID `1jhQueir0uAHO1Ib5LjRrnJuI9wXkHIHP`. Không nhầm bản thảo với bản đã duyệt.
- Đã xác minh cả hai thư mục Drive bằng `list_folder`; bản bài đã duyệt bằng `fetch`. Do Drive không hỗ trợ overwrite trực tiếp qua Library, tạo bản đã duyệt riêng và bảo quản bản thảo cũ.
- **Bước tiếp:** Khi Fanpage Facebook thật được tạo qua tài khoản của anh, đăng bài + ảnh đã duyệt; trước đó không khẳng định đã đăng. Tiếp tục xây bài kiến thức cà phê/ngô/lúa mì và lưu vào đúng Drive Facebook.

## I. KỲ VỌNG TỰ ĐỘNG ĐĂNG FACEBOOK VÀ XỬ LÝ FILE TRÙNG (14/11/2026)
- Người dùng phản hồi có hai file hiển thị ở `Facebook/02_BAI_VIET`, muốn chỉ giữ bản chính trong folder đang làm, và mục tiêu là **về sau ChatGPT theo lịch tự tìm nguồn → viết bài → tạo ảnh → lưu Google Drive → tự xuất bản Fanpage → kiểm tra và báo cáo** không cần gọi từng lần.
- **ĐÃ XỬ LÝ PHÂN LOẠI:** Tạo thư mục con `Facebook/02_BAI_VIET/99_LUU_TRU_BAN_THAO` (ID `1uMT9KOTamGKHf4iyHHAKIYZXBwtGxLX9`); di chuyển bản nháp lịch sử ID `1jhQueir0uAHO1Ib5LjRrnJuI9wXkHIHP` vào đây, giữ nguyên ID và nội dung. `02_BAI_VIET` cấp chính còn đúng **1 file bài đã duyệt** ID `1siBa1EcWXcAQCmWNGdEcDPV2gmUTHZ2-` và 1 folder lưu trữ. Xác minh bằng list_folder và metadata sau move.
- **TỰ ĐỘNG HÓA:** Đã kiểm tra bằng automation peek: có tác vụ `Đăng tin Nông Sản 360` lịch 07:00 Asia/Ho_Chi_Minh từ 15/11, **chỉ dành cho GitHub website**, chưa có thành phần Facebook, chưa có lần chạy thực tế, không tự mở rộng hoặc chỉnh sửa tác vụ đó khi chưa xác minh.
- Đã tìm được plugin **Metricool** có tính năng quản lý bài và lịch đăng MXH, **chưa cài/chưa kết nối**; đã gợi ý người dùng kết nối. Cần kiểm tra quyền Page và khả năng đăng Facebook/ảnh sau khi kết nối; không được tuyên bố có khả năng tự xuất bản hay tự tạo ảnh trong tác vụ lịch trước thử nghiệm thực tế.
- **Quy trình đề xuất:** khi người dùng tạo Fanpage, kết nối công cụ xuất bản hỗ trợ Page và quyền upload ảnh, xác minh đăng thử 1 bài thật; thiết lập lịch riêng, quy tắc tránh trùng, giới hạn 1 bài/ngày khi có nguồn, checklist kiểm chứng/sửa lỗi và giám sát trạng thái; nếu lỗi không đăng hoặc cần quyền người dùng thì báo ngay.
- Về mục tiêu affiliate: công khai nội dung có ích, không spam liên kết mở tài khoản trong bài tin; khi thực hiện CTA riêng phải minh bạch giới thiệu và rủi ro giao dịch. Không yêu cầu OpenAI API key.
- **TRẠNG THÁI:** ĐÃ DỌN BẢN TRÙNG; chưa có Facebook Page/connector thật, chưa bật tự động đăng Facebook. Việc kế tiếp là liên kết Fanpage và kiểm thử khả năng đăng từ kết nối, sau đó thống nhất lịch cụ thể để thiết lập automation mới.

## J. METRICOOL ĐÃ KẾT NỐI CHATGPT, CHƯA KẾT NỐI FACEBOOK (14/11/2026)
- Người dùng thông báo `Kết nối metricool rồi`; đã gọi trực tiếp công cụ `Metricool.getBrandSettings` và kết quả trả về: **tài khoản Metricool chưa kết nối bất kỳ mạng xã hội nào**; công cụ hướng dẫn trang kết nối `https://app.metricool.com/brands/connections?blogId=8097037`.
- **Đã xác minh kết nối ChatGPT ↔ Metricool có phản hồi**, nhưng **chưa có Facebook Page** và **không thể lập lịch/đăng Facebook** cho tới khi anh tạo Fanpage thật và kết nối trang đó vào Metricool bằng tài khoản Facebook có quyền quản trị.
- Giữ nguyên 1 bài chào mừng + ảnh đã duyệt trên Drive, không đăng, không tạo bài trùng; tác vụ tự đăng website 07:00 là riêng và không dùng thay cho Facebook.
- **Bước tiếp theo:** anh tạo `Nông Sản 360` tại https://www.facebook.com/pages/create rồi kết nối Facebook Page tại địa chỉ Metricool nêu trên; khi hoàn thành, gọi lại `getBrandSettings`, lấy brandId/timezone và thử khởi tạo bài đăng có ảnh từ tài liệu Drive đã duyệt. Chưa hứa chạy toàn bộ chuỗi tự sinh ảnh qua automation cho tới khi được kiểm thử.

## K. FANPAGE — ẢNH BÌA MỚI KHÔNG LOGO ĐÃ DUYỆT (14/11/2026)
- Người dùng đã xác nhận **DUYỆT** ảnh bìa mới **không có logo tròn** nhằm tránh trùng với avatar Facebook trên giao diện điện thoại.
- **ĐÃ LƯU VÀ XÁC MINH** ảnh chính thức mới trên Drive tại `Facebook/01_NHAN_DIEN_THUONG_HIEU/NS360_ANH_BIA_FANPAGE_CHINH_THUC_KHONG_LOGO.png`, Drive ID `14lFBixBUqwuHZiKfPb7wDzyJML1wXyY1`: https://drive.google.com/file/d/14lFBixBUqwuHZiKfPb7wDzyJML1wXyY1/view
- **ĐÃ LƯU TRỮ** ảnh bìa cũ có logo: `Facebook/01_NHAN_DIEN_THUONG_HIEU/99_ANH_BIA_CU_LUU_TRU`, ID folder `1k1P4ppQH26AWGr-FqdIdWKxffRvZqiih`, ảnh ID `1pGGtE8cpY0CHbaG1KBF19cpybhpyXlRm`. Không xóa hoặc ghi đè.
- Avatar chính thức vẫn là logo NS360 ID `17f1PdxJMK5slfABFvDgeZFxkuRpvbB7h`.
- Đã dùng Drive `list_folder` xác nhận folder nhận diện chỉ có **logo mới nhất + bìa mới nhất**, và folder lưu trữ có đúng ảnh bìa cũ.
- Anh đang tạo Fanpage trên Facebook (đã gửi ảnh màn hình tạo trang, tiểu sử và ảnh đại diện); tên người dùng đang cân nhắc `nongsan360vn`, **chưa xác minh chốt thành công**. Anh cần tự tải bìa mới lên Facebook; chưa có quyền thao tác trực tiếp trên Page.
- Bước tiếp theo: hoàn thiện Page, kết nối Fanpage vào Metricool đang kết nối ChatGPT (trước đây Metricool báo chưa có mạng xã hội), rồi kiểm thử lịch đăng kèm ảnh. Chưa bật công việc đăng Facebook tự động.

## L. FANPAGE ĐÃ TẠO, CHỜ KẾT NỐI VỚI METRICOOL (14/11/2026)
- Người dùng đã gửi ảnh xác nhận Fanpage `Nông Sản 360` hoạt động với avatar NS360, cover mới không logo và tiểu sử về tin tức/phân tích; đã tạo trang trên Facebook, nhưng chưa biết URL/username cuối cùng.
- Khi người dùng yêu cầu tiếp tục với Metricool, gọi `Metricool.getBrandSettings` trực tiếp và nhận lỗi ứng dụng **"This brand doesn't have any social network connected yet"**, URL chính xác: https://app.metricool.com/brands/connections?blogId=8097037 . Kết nối ChatGPT↔Metricool có hiệu lực, nhưng **Metricool↔Facebook Page chưa có**, chưa thể lập lịch hoặc đăng.
- Đã kiểm tra hướng dẫn chính thức Metricool: mục Connections > Facebook > Connect Page, đăng nhập bằng **Facebook cá nhân giữ quyền quản trị/toàn quyền** của Fanpage; cho phép các quyền cần thiết và chọn Page `Nông Sản 360`. Không chọn Facebook profile cá nhân vì Metricool chỉ hỗ trợ Page. Nếu Page không hiện, kiểm tra sai tài khoản FB hoặc quyền Page, đăng xuất FB ở trình duyệt rồi kết nối lại.
- Tiếp theo: sau khi người dùng thao tác kết nối, **gọi lại getBrandSettings**, xác minh brandId, tên Page, timezone, rồi đọc lịch đang lên và chuẩn bị lịch bài chào mừng đã duyệt với ảnh từ Google Drive (ID bài `1siBa1EcWXcAQCmWNGdEcDPV2gmUTHZ2-`, ảnh `1GUXWZphbAU6VVNQG6MXqklrpHAh0UUdf`). KHÔNG đăng nếu Page chưa khớp hoặc chưa có đầy đủ quyền.
- Mục tiêu dài hạn: tự nghiên cứu, biên tập, tạo ảnh, lưu Drive, lên lịch Metricool và xác minh bài đăng; chức năng tạo ảnh trong tác vụ tự động vẫn chưa được nghiệm thu.

## M. XÁC MINH METRICOOL ĐÃ KẾT NỐI FACEBOOK (14/11/2026)
- Sau khi người dùng báo `ok xong rồi`, gọi `Metricool.getBrandSettings` thành công: có brand `8097037`, mạng `facebookData=1388965107640064`, múi giờ trả về `Asia/Saigon`. **ĐÃ KẾT NỐI FACEBOOK** vào Metricool.
- Gọi `Metricool.getScheduledPosts` giai đoạn 14–22/11, trả về `data: []`, **chưa có bài đang được hẹn lịch**. Không coi có kết nối là đã đăng hay có lịch hoạt động.
- Đã lấy khung giờ gợi ý từ `Metricool.getBestTimeToPostByNetwork` cho tuần 15–21/11; dữ liệu giá trị tương đối, Fanpage mới chưa có lịch sử nên không coi là đánh giá hiệu quả thực tế.
- Đối chiếu bản chính đã duyệt ở Drive: `FB-20261114-01_BAI_CHAO_MUNG_DA_DUYET.md` (ID `1siBa1EcWXcAQCmWNGdEcDPV2gmUTHZ2-`) và ảnh `FB-20261114-01_ANH_CHAO_MUNG_DA_DUYET.png` (ID `1GUXWZphbAU6VVNQG6MXqklrpHAh0UUdf`). Ảnh hiện quyền Drive riêng tư (shared=false), chưa xác minh có thể đưa vào media Metricool; tool đăng bài yêu cầu media public URL hoặc Google Drive đã liên kết thêm với Metricool.
- Tiếp theo: thử tạo **bản nháp/lịch với ảnh đã duyệt** nếu connector cho phép; không thay bằng bài không ảnh hoặc đăng bất kỳ nội dung nào khi media chưa xác minh. Ghi lại ID post/planner URL nếu tạo thành công và xác minh bằng `getScheduledPosts`.
- Tiếp tục mục tiêu tự động hóa có kiểm soát: ChatGPT biên tập → ảnh → Drive → Metricool → Facebook, bảo toàn tác vụ tin website 07:00 hiện có. Chưa có bằng chứng tự động sinh ảnh theo lịch chạy được.

### M.1. Thử lên lịch Facebook 15/11/2026 lúc 10:00 — BỊ CHẶN BỞI QUYỀN ẢNH
- Đã gọi `Metricool.createScheduledPost` với brand `8097037`, provider `facebook`, nội dung nguyên văn đã duyệt mã `FB-20261114-01` (chỉ bỏ cú pháp Markdown bold khi xuất bản), media là URL Google Drive ảnh cùng mã và thời điểm `2026-11-15T10:00:00+07:00`, `autoPublish: true`.
- **KẾT QUẢ: LỖI, KHÔNG TẠO BÀI/LỊCH**: Metricool báo `can't access the Google Drive file ... Make sure it is shared as 'Anyone with the link'`. Ảnh Drive hiện `shared=false`. Giữ nguyên quyền riêng tư, không tự mở công khai cho file và không lên lịch không ảnh.
- **Việc cần giải quyết:** anh chọn (1) trong Google Drive chia sẻ duy nhất ảnh bài đăng `FB-20261114-01_ANH_CHAO_MUNG_DA_DUYET.png` thành `Bất kỳ ai có đường liên kết - Người xem`, hoặc (2) kết nối Google Drive trong Metricool (nếu gói/hệ thống hỗ trợ) để Metricool tự lấy media mà không công khai, hoặc upload ảnh thủ công trực tiếp trong Metricool. Sau khi có quyền ảnh, chạy lại `getScheduledPosts` chống trùng và mới tiến hành thử lên lịch.
- Chưa xác nhận người dùng chọn **giờ đăng 10:00**; đây là giờ thử dựa trên đề xuất, không được xem là đã chốt lịch xuất bản. Không thông báo lịch hoạt động cho tới khi nhận post ID hoặc Planner URL và readback.

### M.2. Đã lên lịch bài chào mừng trên Metricool, ngày 14/11/2026
- Quyền ảnh Google Drive được người dùng mở `anyone:reader`; `get_file_metadata` kiểm chứng `shared=true`, riêng ảnh `1GUXWZphbAU6VVNQG6MXqklrpHAh0UUdf`, không công khai thư mục.
- **ĐÃ LÊN LỊCH THÀNH CÔNG** qua `Metricool.createScheduledPost` cho brand `8097037`, Facebook, nội dung bài đã duyệt `FB-20261114-01` + ảnh. Metricool đã nhập ảnh vào URL riêng `static.metricool.com`.
- Ngày giờ hẹn: **10:00 ngày 15/11/2026, múi giờ Asia/Saigon (=Asia/Ho_Chi_Minh)**. `autoPublish=true`, trạng thái mạng `facebook: PENDING`; ID `427715087`, UUID `6491152378912720177`.
- URL Planner đã xác minh: https://app.metricool.com/planner/calendar?blogId=8097037&openWithPostUuid=6491152378912720177
- Sau khi lập, `Metricool.getScheduledPosts` xác nhận 1 bài cùng ID, nội dung và media, **CHƯA ĐĂNG THẬT**. Kiểm tra kết quả sau 10:00 ngày 15/11 mới được kết luận thành công.
- **Lưu ý về giờ:** lúc người dùng nhắn, hiện là khoảng 11:05 ngày 14/11. Do đó lịch 10:00 ngày 15/11 là **sáng mai**, không phải mốc đã qua. Giờ này vốn là giờ assistant đề xuất chứ **chưa được người dùng chốt rõ**. Nếu anh muốn đăng ngay ngày 14/11 hoặc chọn giờ khác, cần điều chỉnh lịch hiện tại qua `updateScheduledPost` sau khi làm rõ mong muốn; không tạo bài trùng.
- Không bật lại GitHub Actions bot API, không sửa website/tin/21 PDF.

### M.3. Người dùng yêu cầu đổi lịch đăng hôm nay để kiểm thử — ĐÃ XONG (14/11/2026)
- Người dùng: `hôm nay đi để test ok thì lam tiếp để đẩy nhanh tiến độ`, xác nhận đổi thời điểm bài chào mừng đã duyệt sang **hôm nay** thay vì mai.
- `genui.time` trả về thời gian Việt Nam **14/11/2026 11:05:16 +07:00** trước khi đổi.
- `Metricool.getScheduledPosts` xác minh chỉ có 1 bài `FB-20261114-01`, trước đó ID `427715087`, UUID `6491152378912720177`, 10:00 ngày 15/11.
- **ĐÃ GỌI** `Metricool.updateScheduledPost` giữ nguyên caption, 1 ảnh đã được Metricool nhận, `autoPublish=true`, chỉ thay thời điểm thành **11:15 ngày 14/11/2026, Asia/Saigon**.
- `updateScheduledPost` thành công, **ID mới `427715826`**, UUID giữ nguyên `6491152378912720177`, planner https://app.metricool.com/planner/calendar?blogId=8097037&openWithPostUuid=6491152378912720177 .
- **ĐÃ XÁC MINH LẠI** bằng `getScheduledPosts`: duy nhất **1 bài**, thời gian 11:15 hôm nay, 1 ảnh `https://static.metricool.com/planner/202611/8097037-file-4100358833658287670.png`, `autoPublish=true`, mạng `facebook:PENDING`. Bài **chưa đăng công khai** tại thời điểm kiểm tra; không báo thành công xuất bản khi còn PENDING.
- **Việc tiếp theo:** kiểm tra bài thực sự xuất hiện trên Fanpage *sau 11:15* (tốt nhất khoảng 11:25); nếu thành công ghi link bài công khai và chuyển sang chuẩn bị nội dung kế tiếp, nếu lỗi thì báo nguyên nhân, tránh đăng trùng. Kiểm thử khả năng thực thi tác vụ theo lịch riêng; không thay thế lịch tin website 07:00, không dùng OpenAI API key.

### M.4. Đã tạo tác vụ kiểm thử sau giờ đăng (14/11/2026)
- **ĐÃ TẠO tác vụ ChatGPT một lần** `Kiểm tra bài Facebook NS360`, ID `6af7de31c8f88191a8971dad6d8babaa`, lịch chạy **11:25 ngày 14/11/2026**, múi giờ `Asia/Ho_Chi_Minh`; trạng thái khi tạo `is_enabled=true`, `next_run_time=2026-11-14T11:25:00+07:00`.
- Tác vụ được chỉ định kiểm tra bài đã hẹn 11:15 qua Metricool, cố gắng xác minh trên Fanpage (không lấy việc bài hết Pending làm kết luận), ghi checkpoint và báo cáo khi có bằng chứng; nếu thành công bắt đầu chuẩn bị kế hoạch 3 bài kiến thức, không tự đăng trùng bài chào mừng.
- **Giới hạn:** Tác vụ hẹn chưa chạy nên chưa biết quyền công cụ có hoạt động trong môi trường lịch hay không. Lúc ghi checkpoint, bài Facebook **đang PENDING**; KHÔNG tuyên bố đã đăng. Nếu tác vụ không thể gọi Metricool hoặc GitHub phải báo rõ.

### QR SFVN — Yêu cầu mới 14/11/2026 (đang thực hiện)
- Người dùng cung cấp QR, tự giải mã nhiều điểm bằng OpenCV: `https://onboarding.sfvn-invest.com.vn/register?code=046C0000554`. Cần thêm mã này vào web Nông Sản 360 để độc giả chủ động mở tài khoản.
- Đã đối chiếu website chính thức `sfvn-invest.com.vn` và danh sách MXV: SFVN là thành viên kinh doanh 046; subdomain onboarding nằm cùng tên miền đăng ký. Web fetch biểu mẫu onboarding từ môi trường tìm kiếm không truy cập được, nên **chưa kiểm thử trực tiếp luồng form**. Không hứa mở tài khoản thành công.
- Phương án: giữ nguyên website và các 21 PDF; đặt QR và liên kết bấm được vào khu chuyển đổi / mở tài khoản hiện có, kèm thông báo mã giới thiệu/khả năng hưởng lợi và cảnh báo rủi ro giao dịch. Dựng ảnh QR SVG nội bộ từ URL chính xác, tránh dịch vụ QR ngoài, thêm tài sản và sửa `index.html` tối thiểu, kiểm tra đầu ra và checkpoint. Không chèn CTA bán hàng vào ảnh bìa/intro Fanpage.

### QR SFVN — ĐÃ TÍCH HỢP VÀO WEBSITE (14/11/2026)
- QR người dùng gửi giải mã ra `https://onboarding.sfvn-invest.com.vn/register?code=046C0000554`; trong website tạo 2 liên kết bấm trực tiếp tới URL này (nút CTA + QR clickable).
- Đã tạo QR SVG tự lưu trong GitHub `assets/qr-sfvn-046C0000554.svg` (không dùng dịch vụ QR bên thứ ba), commit `aef8bae73d9a134439e685ad657cf121e085e60c`.
- Đã sửa duy nhất file `index.html`: chèn khối `id=ns-mo-tai-khoan` ở mục Trang chủ > Bước tiếp theo > Bắt đầu cùng Nông Sản 360; tối ưu mobile, CTA đăng ký SFVN, QR cho máy tính, disclosure mã giới thiệu và cảnh báo rủi ro, giữ nguyên nội dung học tập và 21 giáo trình. Commit `6f7308f786e8225c9f8e4701cb3a04e60401d735`.
- Đã fetch GitHub kiểm tra hai liên kết, SVG asset và nội dung đầy đủ; **chưa xác minh biểu mẫu SFVN có hoạt động đến bước hoàn tất hoặc bản GitHub Pages đã được deploy xong**. Không thực hiện đăng ký thử với dữ liệu cá nhân.
- Website: https://nmtu1525-art.github.io/nongsan360/#/@lien-he (mục chuyển đổi), hình QR: https://nmtu1525-art.github.io/nongsan360/assets/qr-sfvn-046C0000554.svg .
- Tiếp theo: kiểm tra giao diện Pages sau khi deploy, bấm link ngoài, xác minh có mở được trên thiết bị thật; nếu cần tiếp tục cấu hình Metricool thì gọi getBrandSettings rồi xác minh trạng thái bài đã hẹn.

### ĐANG TRIỂN KHAI: trang con “Tìm hiểu & mở tài khoản” (14/11/2026)
- Yêu cầu mới của người dùng: không hiển thị khối QR/đăng ký chi tiết trực tiếp trên trang chủ. Đổi thành lối dẫn tới **một trang con riêng**, có QR + đường dẫn bấm trực tiếp https://onboarding.sfvn-invest.com.vn/register?code=046C0000554 và khu vực chuẩn bị cho video hướng dẫn **mở tài khoản, nạp tiền** sẽ được người dùng cung cấp sau. Không bịa video đã có.
- Quyết định triển khai bằng route nội bộ `#/mo-tai-khoan/index.html` nhất quán với SPA GitHub Pages hiện hành; thêm mục truy cập từ trang chủ và chân trang; giữ nguyên tin tức & giáo trình.
- Đã tạo QR chính xác từ URL bằng Python qrcode và **quét kiểm tra được** bằng OpenCV. SVG QR hiện tại trong GitHub được viết thủ công từ turn trước: cần thay bằng dữ liệu kiểm thử chính xác để tránh khách quét lỗi.
- Chưa xong sửa website; tiếp theo cập nhật QR SVG, sửa index.html route/template/CSS và kiểm tra readback, cập nhật trạng thái.

### Trang con mở tài khoản & video hướng dẫn — ĐÃ TRIỂN KHAI (14/11/2026)
- Người dùng yêu cầu tách QR/đăng ký khỏi trang chủ; đã chuyển phần chi tiết sang route `#/mo-tai-khoan/index.html`, có lối dẫn từ trang chủ, menu và footer.
- Trang mới chứa QR, nút mở trang đăng ký SFVN bấm trực tiếp, URL hiển thị đầy đủ `https://onboarding.sfvn-invest.com.vn/register?code=046C0000554` (mã `046C0000554`); khai báo mã giới thiệu, không thu thập thông tin đăng ký trên Nông Sản 360.
- Bố trí 3 ô video chờ người dùng cung cấp: hướng dẫn mở tài khoản, hướng dẫn nạp tiền, hướng dẫn sử dụng tài khoản; **chưa có video thật**, không được báo đã đăng video.
- Cảnh báo rủi ro đòn bẩy và lừa đảo nạp tiền vào tài khoản cá nhân; dành không gian hiển thị trên mobile.
- Sửa `index.html` commit `63918698604496a72ee62efdf210815121595726`; tạo lại QR SVG bằng ma trận QR chính xác mã hóa từ URL, kiểm tra Python qrcode + OpenCV decode, commit `83ceea13b44b3cca8d49aed87de120dda12176b5`.
- Đã fetch lại GitHub kiểm tra route, template, links, 3 video placeholders và QR SVG. Web tool **không truy cập được URL GitHub Pages**, do đó chưa xác minh bản deploy trên trình duyệt thực tế. Không thay đổi 21 PDF, tin tức hoặc nguồn thư viện.
- URL dự kiến: https://nmtu1525-art.github.io/nongsan360/#/mo-tai-khoan/index.html
- Tiếp theo: người dùng đưa các video, kiểm tra hướng dẫn là chính xác và không tiết lộ tài khoản cá nhân; tải lên Drive/video hosting, nhúng vào 3 khung đã chuẩn bị rồi kiểm thử giao diện mobile.

### NÚT TÌM HIỂU TÀI KHOẢN CÒN TRỎ SAI — ĐANG SỬA (14/11/2026)
- Người dùng gửi 2 ảnh: khi nhấn CTA `Tìm hiểu tài khoản` từ phần giới thiệu trên trang chủ, trình duyệt cuộn tới cuối trang chủ (mục `lien-he`) thay vì vào trang riêng; ảnh còn hiển thị khu QR phiên bản cũ. Người dùng yêu cầu xóa câu `Liên kết dùng mã giới thiệu... Nông Sản 360 có thể được ghi nhận quyền lợi...` ở giao diện trang mới; không cần giới thiệu/quảng bá khoản đó.
- Đã kiểm tra trực tiếp mã nguồn GitHub: link CTA này vẫn `href="#/@lien-he"` (đúng nguyên nhân scroll cuối trang). Route trang riêng `#/mo-tai-khoan/index.html` đã tồn tại; trong nguồn mới homepage không còn QR trực tiếp, do đó ảnh QR cũ có thể do deploy/cache/chụp trước lần cập nhật (chưa khẳng định nguyên nhân).
- Cần thay chính xác link CTA `Tìm hiểu tài khoản` → `#/mo-tai-khoan/index.html`, xóa đoạn disclosure quảng bá khỏi giao diện (giữ `rel=sponsored` và URL đúng), sửa CSS dư thừa nếu an toàn; kiểm tra readback và phiên bản đã public khi có thể. Không thay giáo trình, tin tức.

### Đã sửa CTA điều hướng nhầm xuống cuối trang (14/11/2026)
- Ảnh người dùng chứng minh nút `Tìm hiểu tài khoản` ở phần giới thiệu trang chủ còn `href=#/@lien-he`, vì vậy nhảy xuống cuối trang. Đã thay bằng `href=#/mo-tai-khoan/index.html` (route trang con có sẵn).
- Đã xóa câu quảng bá `Liên kết dùng mã giới thiệu... Nông Sản 360 có thể được ghi nhận quyền lợi giới thiệu...` khỏi giao diện theo yêu cầu chủ dự án; vẫn giữ QR và URL có mã `046C0000554`, rel=sponsored để đánh dấu liên kết thương mại với máy tìm kiếm. Ảnh QR alt đổi sang mô tả trung lập, bỏ CSS cũ dư thừa.
- Readback GitHub: CTA đúng route, route template tồn tại, không còn QR ở trang chủ, có video placeholders, mẫu template cân bằng. Commit `24c0ad4da113c1d335c9221437ca417c72007751`.
- GitHub Pages live không đọc được bằng web tool, vì vậy không thể xác thực triển khai/ảnh còn cache; nếu ảnh trang cũ, người dùng nên refresh mạnh hoặc mở tab ẩn danh sau khi Pages deploy. Chưa thay đổi nội dung tin tức hoặc giáo trình.

## N. Bổ sung link tải ứng dụng SFVN vào mục Tìm hiểu & mở tài khoản (14/11/2026)
- Yêu cầu hiện tại: bổ sung hai liên kết tải SFVN Trading cho iOS và Android ngay trong khu vực `#/mo-tai-khoan/index.html` trên website, để khách vào trang có thể tải app. Chỉnh sửa trên GitHub `nmtu1525-art/nongsan360`, không làm lại website.
- Đã đối chiếu hai trang chính thức: App Store iOS `https://apps.apple.com/vn/app/sfvn-trading-%C4%91%E1%BA%A7u-t%C6%B0-h%C3%A0ng-h%C3%B3a/id6743525644` (publisher SFVN INVESTMENT CORPORATION); Google Play `https://play.google.com/store/apps/details?id=sfvn.com.maps.app` (cùng publisher).
- Mã nguồn hiện tại trong `index.html` chứa template trang `Tìm hiểu & mở tài khoản`, khối đăng ký bằng QR, khối video hướng dẫn và cảnh báo. Sẽ thêm khu vực tải app trong đúng template này, không thay đổi QR, đăng ký, video, giáo trình, tin tức.
- **Đang thực hiện**: kiểm tra CSS, đặt khối giao diện tải app gọn và rõ nền tảng, thêm chú thích đó là ứng dụng bên thứ ba của SFVN, xác minh HTML sau khi ghi và cập nhật checkpoint khi hoàn thành.

### N.1. Đã triển khai nút tải SFVN Trading iOS / Android trên website (14/11/2026)
- ĐÃ CHỈNH SỬA TRỰC TIẾP `index.html` trong repo `nmtu1525-art/nongsan360`, commit mã nguồn **`559f7ae8d6c5590a3a857c9f68b6629f3e8d5917`**.
- Trong template `id="ns-guide-account"` (route `#/mo-tai-khoan/index.html`), đã bổ sung mục `ỨNG DỤNG TRÊN ĐIỆN THOẠI / Tải ứng dụng SFVN Trading` ngay sau khối đăng ký QR và trước video hướng dẫn, gồm hai card/nút rõ hệ điều hành, hỗ trợ màn hình nhỏ và trạng thái hover/focus.
- Link iOS (nguồn App Store chính thức): `https://apps.apple.com/vn/app/sfvn-trading-%C4%91%E1%BA%A7u-t%C6%B0-h%C3%A0ng-h%C3%B3a/id6743525644`.
- Link Android (nguồn Google Play chính thức): `https://play.google.com/store/apps/details?id=sfvn.com.maps.app`.
- Cả hai đều xác nhận do `SFVN INVESTMENT CORPORATION` phát hành. Text trang lưu ý SFVN là bên cung cấp ứng dụng; Nông Sản 360 là kênh độc lập, tải app không bắt buộc mở tài khoản/giao dịch.
- Bước tóm tắt đầu trang đổi thành 4 mục: tìm hiểu rủi ro → đăng ký SFVN → tải ứng dụng → video hướng dẫn.
- **ĐÃ XÁC MINH READBACK** sau commit: đúng 1 khối tải app, đúng 1 URL mỗi nền tảng, CSS mới cho cả desktop và mobile, giữ nguyên link đăng ký mã `046C0000554`, QR, video, cảnh báo, tổng số template không thay đổi (31). Chưa thay đổi `tin-tuc.json` hoặc 21 giáo trình PDF.
- GitHub commit status không báo job checks; công cụ web không đọc được GitHub Pages live nên **chưa xác nhận giao diện đã deploy/cập nhật trên đường dẫn công khai**. Nếu giao diện cũ, cần đợi Pages deploy và tải lại trang.
- Đường dẫn để người dùng kiểm tra sau deploy: `https://nmtu1525-art.github.io/nongsan360/#/mo-tai-khoan/index.html`.

## O. Thư mục video hướng dẫn tài khoản SFVN (14/11/2026)
- Người dùng hỏi nơi upload video hướng dẫn mở tài khoản và nạp tiền để đưa vào mục Tìm hiểu & mở tài khoản của website.
- Đã kiểm tra Drive `01_WEBSITE` và tạo mới thư mục `03_VIDEO_HUONG_DAN_TAI_KHOAN_SFVN` ID `11DwfY6PBvu1fekK_p-1zPTmMFjJKpFu6`; URL https://drive.google.com/drive/folders/11DwfY6PBvu1fekK_p-1zPTmMFjJKpFu6 . Không dùng folder Facebook `04_VIDEO_REELS` vì đây là video hướng dẫn cho website.
- Quy ước file video: `SFVN_01_HUONG_DAN_MO_TAI_KHOAN.mp4` và `SFVN_02_HUONG_DAN_NAP_TIEN.mp4`. Nếu là định dạng gốc khác thì giữ đúng extension, ưu tiên MP4/H.264 dễ phát trên web.
- Bước tiếp theo sau khi anh tải 2 video lên: kiểm tra nội dung, chất lượng, che dữ liệu cá nhân/số tài khoản nhạy cảm nếu có, xin quyền phát phù hợp, tích hợp video vào đúng 2 ô video trong trang `#/mo-tai-khoan/index.html`; không tạo video giả hoặc thay đổi tư liệu gốc.

## P. Hai video SFVN đã được tải lên Drive — đang tích hợp website (14/11/2026)
- Người dùng xác nhận đã upload. Đọc trực tiếp Drive folder `03_VIDEO_HUONG_DAN_TAI_KHOAN_SFVN` ID `11DwfY6PBvu1fekK_p-1zPTmMFjJKpFu6` cho thấy đúng 2 video nguồn:
  - `SFVN_01_HUONG_DAN_MO_TAI_KHOAN.mp4` — Drive ID `1-IFnUqU3VxvB9Gzwu_Jc1UVSUp7hNWev`, `video/mp4`, 11453906 bytes, link https://drive.google.com/file/d/1-IFnUqU3VxvB9Gzwu_Jc1UVSUp7hNWev/view
  - `SFVN_02_HUONG_DAN_NAP_TIEN.mp4` — Drive ID `1dzdSfBeYAU1oYMF74Otvb7LSzv1Yq-eW`, `video/mp4`, 5800813 bytes, link https://drive.google.com/file/d/1dzdSfBeYAU1oYMF74Otvb7LSzv1Yq-eW/view
- Drive liệt kê **shared=false cho cả hai**. Chưa có quyền truy cập công khai cho khách; không được tuyên bố phát thành công cho khách hay nội dung video đã được xem/kiểm duyệt chi tiết nếu chưa thực sự truy cập luồng video.
- Đang tích hợp 2 khung video nguồn `/preview` vào đúng ô trong trang `#/mo-tai-khoan/index.html` và giữ placeholder video thứ 3. Kiểm tra HTML và cập nhật lại trạng thái sau commit. Trước khi hoạt động trên trang công khai, user cần đặt `Bất kỳ ai có đường liên kết - Người xem` cho **từng video**, đồng thời bảo đảm video không lộ dữ liệu cá nhân hoặc tài khoản và có quyền phát hành.

### P.1. ĐÃ NHÚNG HAI VIDEO VÀO WEBSITE; QUYỀN TRUY CẬP CẦN BỔ SUNG (14/11/2026)
- Commit `01324d9f38fd45690f129d2eda3db751d1524e78`: cập nhật `index.html` trong `#/mo-tai-khoan/index.html`, thay 2 placeholder đầu bằng iframe Google Drive `/preview` cho video mở tài khoản `1-IFnUqU3VxvB9Gzwu_Jc1UVSUp7hNWev` và video nạp tiền `1dzdSfBeYAU1oYMF74Otvb7LSzv1Yq-eW`. Mỗi video có link `/view` để mở trong Drive nếu trình duyệt không phát iframe; CSS 16:9 responsive, lazy loading và tiêu đề truy cập. Chưa có video thứ 3 (sử dụng tài khoản), giữ `Video sẽ cập nhật`.
- Readback GitHub sau commit xác nhận **2 iframe**, đúng hai Drive IDs, giữ nguyên QR affiliate, iOS/Android buttons, khối an toàn, 31 HTML templates. Không sửa giáo trình PDF hoặc tin tức.
- **Metadata Google Drive mới nhất**: `SFVN_02_HUONG_DAN_NAP_TIEN.mp4` đã `shared=true` và có quyền `anyone:reader` (có thể xem bằng liên kết); nhưng `SFVN_01_HUONG_DAN_MO_TAI_KHOAN.mp4` vẫn `shared=false`, chỉ chủ sở hữu xem. Cần người dùng chuyển **riêng video mở tài khoản** sang `Bất kỳ ai có đường liên kết → Người xem`; không chia sẻ cả folder.
- Chỉ mới xác minh định dạng và metadata, **chưa xem được luồng video** để đánh giá nội dung, số tài khoản/OTP hay chất lượng. Anh phải đảm bảo video công khai không lộ dữ liệu thật và có quyền sử dụng; không tuyên bố 2 video đã phát được trên GitHub Pages cho tới khi đọc được trạng thái quyền và kiểm tra phía khách.
- Kiểm tra lại sau khi người dùng cấp quyền video 01, không yêu cầu upload lại.

### P.2. Kiểm tra lại sau khi người dùng báo đã cấp quyền (14/11/2026)
- Sau khi anh nhắn `đã cấp`, gọi `Google_Drive.get_file_metadata` **2 lần** cho video mở tài khoản `1-IFnUqU3VxvB9Gzwu_Jc1UVSUp7hNWev`; cả hai kết quả vẫn **shared=false, chỉ có permission type=user role=owner**.
- Video nạp tiền `1dzdSfBeYAU1oYMF74Otvb7LSzv1Yq-eW` **shared=true, anyone:reader**.
- Mã website `index.html` vẫn chứa chính xác 2 iframe và link dự phòng. **Không cần tải lại video hoặc sửa mã HTML; chỉ còn quyền công khai video mở tài khoản**. Hướng dẫn người dùng mở đúng file ID `1-IFnUqU3VxvB9Gzwu_Jc1UVSUp7hNWev`, vào Chia sẻ → Quản lý quyền truy cập → Bất kỳ ai có liên kết → Người xem → Lưu, và xác nhận lại. Không khẳng định đã phát được ở phía khách khi video còn riêng tư.

## Q. Điều hướng nhanh 4 bước trong trang tìm hiểu tài khoản SFVN (14/11/2026)
- Người dùng gửi ảnh 4 ô `01. Tìm hiểu sản phẩm và rủi ro`, `02. Đăng ký tại SFVN`, `03. Tải ứng dụng SFVN`, `04. Xem video hướng dẫn` và đề nghị bấm vào là đến đúng phần.
- Đã đọc `index.html` bản hiện tại: 4 ô hiện là `<span>`, không tương tác. Đang triển khai thành điều hướng thực sự đến các mục trên **cùng trang**: thông tin/rủi ro; đăng ký QR; tải ứng dụng iOS/Android; video hướng dẫn.
- Cần xử lý đúng router hash `#/mo-tai-khoan/index.html`, tránh `#guide-...` làm hỏng SPA. Thêm hiệu ứng cuộn, trạng thái focus/hover cho desktop/mobile, bảo toàn nội dung, video và QR.
- Trạng thái: **ĐANG THỰC HIỆN**; chưa xác minh commit HTML. Sau thay đổi đọc lại GitHub, kiểm tra liên kết và cập nhật checkpoint.

### Q.1. ĐÃ HOÀN THÀNH bốn ô điều hướng nhanh (14/11/2026)
- Commit `84d12cedf357c42288879ec18d26be783898082f`: sửa `index.html`, thay 4 `<span>` không tương tác bằng 4 liên kết thật trong `<nav class="ns-guide-summary">`, điều hướng cùng trang bằng cú pháp `#/mo-tai-khoan/index.html@...` do router hiện có đã hỗ trợ.
- 01 `@guide-risk` → phần `Những lưu ý quan trọng` (rủi ro sản phẩm, ký quỹ, an toàn khi nạp tiền); 02 `@guide-register` → đăng ký và QR; 03 `@guide-apps` → nút SFVN Trading iOS/Android; 04 `@guide-videos` → hai video.
- Các đích đều gắn ID chính xác, không tạo route mới. CSS hỗ trợ hover/focus keyboard, 4 cột desktop, 1 cột điện thoại, `scroll-margin-top:110px` tránh header che tiêu đề. Giữ an toàn dữ liệu/QR/video/CTA/cảnh báo.
- **ĐÃ XÁC MINH GitHub readback**: đúng 4 link và 4 đích; router có xử lý `@anchor` và `scrollIntoView`, CSS đầy đủ, số lượng template vẫn 31; QR đăng ký, links app và 2 video không mất. Chưa kiểm chứng thực tế browser và GitHub Pages đã deploy.
- Trang để khách thử: https://nmtu1525-art.github.io/nongsan360/#/mo-tai-khoan/index.html . Nếu Pages cache bản cũ, tải lại/trình duyệt ẩn danh.

## R. Cập nhật liên hệ: Fanpage Facebook + điện thoại, bỏ Zalo (14/11/2026)
- Người dùng chỉ định liên hệ qua **Fanpage Facebook** và **số điện thoại 0985272776**, **không cần Zalo**.
- Đã kiểm tra `index.html`: hiện chỉ còn một chỗ nhắc Zalo ở `section.conversion#lien-he`; chưa có URL Facebook hay `tel:` trên website. Header và footer có liên kết nội bộ `#/@lien-he`.
- Đã xác minh trong Metricool brand `8097037`: `brandInfo BRIN03` trả về tên Facebook Page là `Nông Sản 360`. `facebookData` có ID nội bộ `1388965107640064` nhưng Metricool trả link bài viết thật theo dạng `https://facebook.com/122095198125555913/posts/<postid>`; dùng đường dẫn trang `https://www.facebook.com/122095198125555913` suy ra từ các URL bài viết (không dùng username chưa xác minh).
- Đang chỉnh sửa: cập nhật mục Liên hệ trang chủ bằng hai nút `Fanpage Facebook` và `Gọi 0985 272 776` (`tel:0985272776`), không đề cập Zalo. Tăng khả năng tiếp cận bằng liên kết liên hệ ở chân trang nhưng giữ nguyên các phần thư viện, QR, SFVN, video, PDF và tin tức.
- Sẽ đọc lại mã GitHub để xác minh và ghi commit; chưa khẳng định giao diện GitHub Pages đã cập nhật khi chưa test live.


## S. Xác minh kết quả đăng Facebook FB-20261114-01 — 14/11/2026
- Kiểm tra brand `8097037`, UUID `6491152378912720177`, lịch 11:15 ngày 14/11/2026 (Asia/Saigon/Việt Nam). Metricool getBrandSettings xác nhận kết nối Facebook `1388965107640064`.
- Metricool trả bài đúng caption chào mừng và 1 ảnh, ID lịch `427715826`, Facebook provider `status=PUBLISHED`, `detailedStatus=Published`, ID provider `122095197489555913`, **URL provider:** https://facebook.com/122095198125555913/posts/122095197489555913 .
- Facebook Posts Analytics của Metricool có caption tương ứng và **URL Analytics:** https://facebook.com/122095198125555913/posts/122095197531555913 (ID `1388965107640064_122095197531555913`). Hai ID Facebook KHÁC NHAU, chưa giải thích được. Đã thử mở hai URL ngoài Metricool nhưng công cụ truy cập Facebook báo `DisabledError`. Vì thế **đã xác nhận xuất bản theo Metricool và dấu vết trong Facebook Analytics, chưa chứng thực xem công khai trực tiếp bằng trình duyệt**; giữ cả hai URL để kiểm tra thủ công, ưu tiên URL provider gắn đúng UUID. Không đăng bài chào mừng lần hai.
- **Kế hoạch 3 bài tiếp theo**: `KE_HOACH_FACEBOOK_3_BAI_TIEP_THEO.md`, commit `bc8a9cbbd2bac705f8afb2ab57356a027e2a7ac7`. Chủ đề cà phê (cung-cầu, thời tiết, thương mại), ngô (đọc USDA WASDE), lúa mì (chủng loại, niên vụ và thương mại). Trạng thái **chỉ mới có kế hoạch**: chưa soạn bản đăng cuối, chưa tạo ảnh, chưa lưu Drive, chưa đặt lịch Metricool, chưa đăng.
- Quy trình thực hiện từng bài: nghiên cứu nguồn gốc/xác thực kỳ dữ liệu → biên tập/duyệt → tạo ảnh và kiểm tra → lưu vào Drive Facebook đúng hai folder nội dung/ảnh → kiểm tra lịch chống trùng trước khi đăng Metricool → kiểm chứng PUBLISHED, URL và Analytics. Không bịa số liệu, không sử dụng OpenAI API key/GitHub Actions bot; không sửa website, PDF hoặc dữ liệu Drive hiện có trong chặng kiểm tra này.

### R.1. Đã triển khai liên hệ Fanpage + điện thoại, loại Zalo (14/11/2026)
- **Commit `4a626795f4e51f96d6a6fd41df7e188f5bbc8918`** đã chỉnh `index.html` để thay đoạn liên hệ Zalo trên trang chủ bằng lời mời qua Fanpage Nông Sản 360 hoặc gọi `0985 272 776`.
- Nút Facebook sử dụng `https://www.facebook.com/122095198125555913`, lấy đường dẫn trang từ phần tiền tố các link bài Facebook do Metricool trả về `https://facebook.com/122095198125555913/posts/...`; Metricool brandInfo Facebook Page Name xác minh là `Nông Sản 360`. Tránh dùng username chưa xác minh.
- Nút điện thoại `href="tel:0985272776"`, hiển thị `0985 272 776`.
- Mục `#/@lien-he` trang chủ có hai nút nổi bật (Facebook và gọi điện) trước 3 nút thư viện/học viện/tài khoản hiện có; phần footer bổ sung hai link liên hệ; phần cuối hướng dẫn mở tài khoản SFVN cũng có hai link liên hệ. Không mạo nhận là bộ phận hỗ trợ chính thức SFVN hoặc MXV.
- **Đã đọc lại mã nguồn sau commit**: `Zalo` 0 lần, đúng 4 đường dẫn gọi điện, 3 đường dẫn Fanpage, contact buttons/fallback/footer/guide có đủ, 31 templates không đổi, video iOS/Android/QR/4 hướng dẫn còn nguyên.
- Không sửa giáo trình, `tin-tuc.json` hoặc bất kỳ hình ảnh/video nào. Chưa có bằng chứng GitHub Pages đã triển khai bản mới (commit combined statuses rỗng), nên người dùng nên mở `https://nmtu1525-art.github.io/nongsan360/#/@lien-he` sau deploy và kiểm tra cả nút Facebook/gọi điện trên điện thoại.

## S. Sửa liên kết Fanpage không mở được từ website (14/11/2026)
- Người dùng gửi ảnh Facebook `Bạn hiện không xem được nội dung này` sau khi bấm liên kết Fanpage trên website.
- **Phát hiện:** website đang dùng `https://www.facebook.com/122095198125555913`, được suy ra từ tiền tố link bài viết của Metricool. Dạng URL đó chưa được Facebook xác minh là đường dẫn công khai tới Page; ảnh user cho thấy không mở được.
- Metricool brand `8097037` tên `Nông Sản 360` có `facebookData=1388965107640064`; các link bài đăng Metricool có dạng `https://facebook.com/122095198125555913/posts/<post-id>`, cho thấy Facebook có thể dùng **hai ID khác nhau** cho Page API và Page profile.
- Web công khai không fetch được URL Facebook do chặn truy cập, nên chưa thể kết luận Page bị ẩn hay đường dẫn số bị lỗi. Đang sửa sang dạng URL Page profile chuẩn `https://www.facebook.com/profile.php?id=122095198125555913`, xem đây là **phương án cần user kiểm thử**, không khẳng định đã mở được. Nếu vẫn lỗi, cần người dùng dùng nút `Chia sẻ trang → Sao chép liên kết` trên Fanpage thật và gửi đúng URL để thay thế, đồng thời kiểm tra trạng thái Page đã công khai.
- Giữ nguyên điện thoại `0985272776` và các mục khác. Sẽ kiểm tra readback và cập nhật checkpoint.

### S.1. Đã thay đổi đường dẫn Facebook sau khi user báo lỗi
- Commit chỉnh website: `ae363252af6298e3eefcf9aed4fa4b1c9da07724`. Thay **cả 3 chỗ** trỏ tới Page URL kiểu `https://www.facebook.com/122095198125555913` (đã lỗi trong ảnh user) sang `https://www.facebook.com/profile.php?id=122095198125555913`.
- Readback GitHub: 3 chỗ URL mới, 0 URL cũ, 4 nút `tel:0985272776`, không có Zalo, cả 2 video và link iOS/Android còn nguyên, số template 31.
- **CHƯA XÁC MINH URL MỚI HOẠT ĐỘNG TRÊN FACEBOOK THỰC TẾ**: Facebook chặn browser không đăng nhập, không giả định URL profile bằng ID là đúng hoặc trang đã công khai. Người dùng cần thử bằng trình duyệt thật. Nếu vẫn lỗi, phải lấy URL chính thức bằng `Chia sẻ trang → Sao chép liên kết` từ Facebook Page Nông Sản 360, rồi thay đúng URL được người dùng cung cấp.

## T. Sửa liên hệ mở THẲNG Messenger, không qua Page URL lỗi (14/11/2026)
- Người dùng xác nhận link Page số và profile.php đều dẫn đến lỗi `Bạn hiện không xem được nội dung này`, yêu cầu có đường dẫn vào thẳng Messenger.
- Kiểm tra Meta Messenger Platform chính thức: link `https://m.me/<PAGE-ID hoặc PAGE-USERNAME>` dùng để mở hội thoại trực tiếp từ website; tra lại Metricool brand `8097037`, kết nối Facebook Page `Nông Sản 360`, `networksData.facebookData=1388965107640064`, là định danh Page kết nối, không phải tiền tố URL bài đăng `122095198125555913` vốn đã gây lỗi.
- Đang sửa các CTA Fanpage ở trang chủ, footer và hướng dẫn tài khoản sang `https://m.me/1388965107640064`, đổi câu chữ thành `Nhắn tin Messenger`, giữ số điện thoại `0985 272 776`.
- **Giới hạn cần kiểm thử:** web tool không truy cập được `m.me`/giao diện Meta đăng nhập để xác nhận chat chính xác. Sau commit phải nhờ người dùng thử nhấn ở trình duyệt; nếu Messenger cũng không mở đúng Trang, lấy URL messenger trực tiếp do Facebook cung cấp hoặc username Page đã chốt, tránh suy đoán tiếp.
- Chưa sửa 21 giáo trình và các tin tức.

### T.1. Đã chuyển 3 nút liên hệ sang Messenger (14/11/2026)
- Commit website `e97b633bcf118b86a88cce4285e8848c300e92ea`: thay tất cả 3 liên kết Page bị lỗi (`facebook.com/profile.php?id=122095198125555913`) bằng link **trò chuyện trực tiếp** `https://m.me/1388965107640064` theo ID Page kết nối trong Metricool. Đổi nội dung hiển thị thành **Nhắn tin Messenger**, và mô tả mở hộp thoại.
- Readback GitHub xác minh đúng **3 href Messenger, 0 href Page cũ, 4 tel:0985272776, 0 Zalo**, App Store, Google Play, hai iframe video và 31 templates còn đủ; không ghi đè tin tức/giáo trình.
- Định dạng `m.me/PAGE-ID` được chứng thực là dạng liên kết Messenger từ tài liệu Meta, nhưng **m.me cụ thể bị chặn đối với công cụ duyệt web**, nên chưa xác minh người dùng mở được hộp chat thật. Cần người dùng nhấn thử nút Messenger mới và kiểm tra Trang nhận tin; nếu vẫn không đúng, dùng Messenger URL do Facebook cung cấp từ giao diện quản trị Fanpage, không suy đoán thêm.

## U. Kế hoạch vận hành 20 bài/tháng Fanpage Nông Sản 360 (14/11/2026)
- Người dùng hỏi cách kết nối/viết **20 bài mỗi tháng** trên Fanpage. Đề xuất lịch 5 bài/tuần x 4 tuần, không đăng dồn, không bài trùng, ưu tiên SEO và nguồn tin chuẩn.
- **ĐÃ KIỂM CHỨNG đăng bài đầu tiên thành công**: gọi `Metricool.getScheduledPosts` cho brand `8097037`, mã bài `FB-20261114-01`, ID `427715826`, UUID `6491152378912720177`, provider Facebook `status=PUBLISHED`, `publicUrl=https://facebook.com/122095198125555913/posts/122095197489555913`, đăng giờ 11:15 ngày 14/11/2026 (Asia/Saigon). Không đăng lại bài này. Sự kiện này xác minh khả năng đăng bài văn bản + ảnh qua Metricool (ảnh lấy từ Drive công khai sau đó Metricool nhập vào media riêng); **không** chứng minh tác vụ tự động tạo ảnh theo lịch đã hoạt động.
- Lịch tự động website `Đăng tin Nông Sản 360` lúc 07:00 mỗi ngày từ 15/11 là **riêng biệt**, không đăng Facebook, không thay đổi hoặc tạo trùng.
- Mục tiêu nội dung tháng: 6 tin tức có nguồn, 4 bài phân tích cung/cầu/mùa vụ, 5 bài kiến thức phái sinh, 3 bài hướng dẫn đọc dữ liệu, 2 bài thư viện. Cấm bịa ngày/số liệu, không khuyến nghị giao dịch, không ép mở tài khoản/affiliate vào bài thông tin.
- Quy trình đề xuất: kiểm tra tin/giáo trình mới và bài cũ → biên tập → kiểm chứng 2 vòng → soạn bản MD vào Drive `Facebook/02_BAI_VIET` và ảnh vào `Facebook/03_HINH_ANH_BAI_DANG` cùng mã `FB-YYYYMMDD-XX` → kiểm tra quyền ảnh → đặt bài Facebook qua Metricool `8097037` → readback và kiểm tra PUBLISHED/publicUrl sau giờ.
- Bước đang thực hiện: xây dựng lịch 20 bài đầu (bắt đầu Thứ Hai 16/11, mỗi ngày làm việc trong 4 tuần), lưu Drive và GitHub và thử lịch tự động. Không ghi rằng 20 bài đã được lên lịch nếu chỉ mới có kế hoạch.

### U.1. Đã lập kế hoạch 20 bài và tạo lịch tự động thử nghiệm 4 tuần
- Kế hoạch **20 chủ đề chính xác** theo từng ngày đã lưu Google Drive `Facebook/05_KE_HOACH_LICH_DANG/NS360_KE_HOACH_FACEBOOK_20_BAI_20261116_20261211.md`, Drive ID `1mc4dTIG1Ej3oAOu7Qp7A2GiNLcXbmZAd`, URL https://drive.google.com/file/d/1mc4dTIG1Ej3oAOu7Qp7A2GiNLcXbmZAd/view .
- Đã đồng bộ bản kế hoạch lên GitHub `FACEBOOK_KE_HOACH_20_BAI_20261116_20261211.md` commit `c54765008d742b18f290af3346d4897ae61cfbd2`. Nhịp 5 bài/tuần T2–T6 cho 4 tuần, ngày **16/11–11/12/2026**, tổng 20 (6 tin, 4 phân tích, 5 kiến thức, 3 đọc dữ liệu, 2 thư viện), dự kiến đăng Facebook **10:00**.
- **ĐÃ TẠO ChatGPT automation** tên `20 bài Fanpage Nông Sản 360`, ID `Automation_7ffdf2af72088191acb4f4dcb23b9e00`, `is_enabled=true`, giờ chạy **08:00 thứ Hai–thứ Sáu, 20 lần** từ `2026-11-16T08:00:00+07:00`, RRULE `FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR;COUNT=20`, timezone `Asia/Ho_Chi_Minh`. Prompt từng lần: đọc kế hoạch, xác minh nguồn, soạn caption, tạo ảnh **nếu tool thực tế có**, lưu Drive đúng folder và đặt lịch Metricool 10:00 nếu đầy đủ, chống đăng trùng và checkpoint.
- **GIỚI HẠN CẦN GHI RÕ:** Đây là **tác vụ đã tạo thành công nhưng chưa chạy**, chưa chứng minh môi trường tự động có quyền tạo ảnh/upload Drive/đăng Metricool. 20 mục trong kế hoạch là **chủ đề**, chưa phải 20 bài đã viết hoặc đã hẹn. Nếu phiên tự động không tạo được ảnh hoặc không có quyền phải **giữ bản nháp và báo lỗi** chứ không tự đăng bài thiếu ảnh. Chưa có 20 post IDs trên Metricool.
- Lịch `Đăng tin Nông Sản 360` website lúc 07:00 hàng ngày vẫn độc lập và đang bật, không đụng tới, không dùng OpenAI API key.
- Sau lần tự động đầu vào **08:00 16/11/2026**, cần xem báo cáo lần chạy và xác minh trên Drive/Metricool/GitHub; nếu lỗi quyền hoặc tạo ảnh phải sửa trước khi tiếp tục 19 lượt còn lại, tránh bỏ sót.

### U.2. Hội thảo SFVN tuần 16–22/11/2026 — dành một bài thông báo mời tham dự
- Người dùng cho biết **SFVN có hội thảo tuần sau** (tuần 16–22/11) và muốn Fanpage Nông Sản 360 đăng bài **giới thiệu, mời khách tham dự**.
- Đã tra web: trang lịch tập huấn chính thức của SFVN có thông báo chương trình đào tạo/sự kiện **tháng 11/2026**, và SFVN công bố chuỗi đào tạo tháng 11, nhưng **chưa xác định được buổi cụ thể mà người dùng nói tới**, chưa có ngày giờ/địa điểm/chủ đề/link đăng ký đã đối chiếu. **Không tự gán hội thảo cụ thể hoặc link không đúng**.
- Ưu tiên 1 bài "Hội thảo SFVN — Nông Sản 360 thông tin mời tham dự" trước ngày diễn ra 2–4 ngày; có thể thay một chủ đề thuộc kế hoạch 20 bài, không làm 21 bài nếu vẫn mục tiêu 20 bài và không đăng trùng. Giữ tư cách Nông Sản 360 là kênh thông tin độc lập, SFVN là đơn vị tổ chức, không mạo nhận là đơn vị tổ chức hoặc yêu cầu mở tài khoản.
- **Đang chờ thông tin người dùng:** ảnh poster/thông báo chính thức hoặc ít nhất tiêu đề chủ đề, ngày/giờ, hình thức online/offline, địa điểm/link tham dự và đăng ký, phí tham dự nếu có. Khi có đủ, viết caption mời khách chuyên nghiệp, làm ảnh dựa trên poster được duyệt (nếu cần), lưu Drive Facebook/02_BAI_VIET và 03_HINH_ANH_BAI_DANG, rồi đưa vào Metricool sau khi đối chiếu lịch và tránh đè bài đã duyệt.
- Nhớ cập nhật lịch GitHub/Drive và prompt tự động 20 bài để không bỏ qua nội dung sự kiện khi lịch bắt đầu 16/11 lúc 08:00.

## V. Chốt lịch 14–30/11/2026 và biên tập ngay 6 bài evergreen (14/11/2026)
- Người dùng đã đồng ý cơ cấu phần còn lại tháng 11: **11 bài mới** + **1 bài chào mừng đã đăng** = **12 bài tháng 11**. Trong 11 bài: **5 bài chiến dịch SFVN (tính cả tổng kết sau sự kiện), 2 bài kiến thức phái sinh, 3 bài cà phê/ngô/lúa mì, 1 bài thư viện**.
- Hội thảo SFVN người dùng nhớ **thứ Bảy tuần sau, tạm hiểu 21/11/2026**, **CHƯA XÁC NHẬN** từ poster/thông báo, giờ, địa điểm, URL đăng ký; không công bố ngày/giờ như sự kiện chắc chắn. Trang SFVN có lịch đào tạo tháng 11 nhưng chưa đối chiếu được buổi cụ thể.
- Lịch đề nghị 16 SFVN giới thiệu (chờ poster), 17 PS-01, 18 SFVN nội dung, 19 SFVN lợi ích, 20 SFVN nhắc lịch, 23 SFVN tổng kết (chỉ khi có chứng cứ), 24 CF-02, 25 NG-02, 26 LM-02, 27 PS-03, 30 giới thiệu 21 giáo trình. 11 ngày làm việc.
- **ĐANG LÀM**: đọc PDF gốc từ các thư viện Drive, viết trước 6 caption 150–250 từ, lưu Drive vào Facebook/02_BAI_VIET (các mã tương ứng), GitHub vào thư mục bản thảo. Mỗi bài là **NHÁP CHỜ DUYỆT, CHƯA CÓ ẢNH/CHƯA LÊN METRICOOL**; các bài SFVN chờ poster.
- Cần sửa lịch tự động cũ `20 bài Fanpage Nông Sản 360` đang 16/11–11/12, `COUNT=20` thành lịch **11 buổi T2–T6 đến 30/11 (`COUNT=11`)**, để không ghi đè kế hoạch tháng 12; automation đọc kế hoạch tháng 11 mới, ưu tiên 6 bài đã viết; không đăng SFVN thiếu thông tin, không tự tạo dự báo giá/tin mới. Không ảnh/nguồn/kiểm duyệt = không đăng.
- Tuyệt đối không xóa/ghi đè lịch 20 bài cũ: chỉ ghi **đã thay thế cho hoạt động tháng 11** và bảo lưu làm thư viện kế hoạch tham khảo cho tháng 12 sau này.

### V.1. ĐÃ SOẠN XONG 6 BÀI, LƯU DRIVE/GITHUB VÀ ĐỔI LỊCH AUTOMATION (14/11/2026)
- **6 caption Facebook hoàn chỉnh (mỗi bài ~217–230 từ, 3–5 hashtag; là bài nền tảng không phải tin giá hiện hành), đã soát dựa trên giáo trình PDF gốc từ Drive**: PS-01, PS-02, PS-03, CF-02, NG-02, LM-02 và kiểm chứng 21 PDF tồn tại (5 CF + 5 NG + 5 LM + 6 PS).
- Đã lưu **6 bản gốc Markdown** trên GitHub ở `facebook-drafts/2026-11/FB-20261117-01.md`, `FB-20261124-01.md`, `FB-20261125-01.md`, `FB-20261126-01.md`, `FB-20261127-01.md`, `FB-20261130-01.md`. Không ghi đè file cũ. Từng file có caption, ngày dự kiến, nguồn và đề xuất ảnh.
- Đã tạo và điền nội dung, xác minh readback **6 Google Docs** trong Drive `Facebook/02_BAI_VIET` (folder `1Qpr8jkC6HuIfIErigLzcTDHue40W8uXZ`):
  - FB-20261117-01 — https://docs.google.com/document/d/1BoSe95szvIxQCkoaN-Ee_A_2mnOz_MmbgAauoFlT_TU/edit — PS-01/PS-02.
  - FB-20261124-01 — https://docs.google.com/document/d/1GOPJzk_2A2RCWPhT_kWWPF73ki7jvccAezA3p5biX0w/edit — CF-02.
  - FB-20261125-01 — https://docs.google.com/document/d/1NrmH4HZne6Tckjr9nKrNeVOppR8xHEv_2LgPSFwY5ZA/edit — NG-02.
  - FB-20261126-01 — https://docs.google.com/document/d/1Umhielo4ZjKVtOUUsqTx0FnOoL1cil645njXJw8zezc/edit — LM-02.
  - FB-20261127-01 — https://docs.google.com/document/d/1O83rXG0e3KFAxYNhzw_7HVLhBFGwPJU86cVnAQ3Dj00/edit — PS-03.
  - FB-20261130-01 — https://docs.google.com/document/d/1_HQTN7rJKXJrOZ19dh7rGxl28Q-r4bnG3l0rpg_a6jA/edit — 21 PDF.
- **Lịch ưu tiên tháng 11** được ghi GitHub `FACEBOOK_KE_HOACH_THANG_11_2026.md`, commit `6d95cf0eebdd6eb053fafbdf65283a07cd8d4854`, đồng thời Drive Google Doc https://docs.google.com/document/d/1G-wXcK6Vkp3zSlCl-t4eFJt8VfbMqO3sUv9tB8opQu8/edit trong folder Facebook/05_KE_HOACH_LICH_DANG. Lịch cũ 20 bài `FACEBOOK_KE_HOACH_20_BAI_20261116_20261211.md` vẫn nguyên nhưng được ghi là **thay thế cho các ngày thuộc tháng 11**.
- Automation ID `Automation_7ffdf2af72088191acb4f4dcb23b9e00` đã được **cập nhật thành `Fanpage NS360 — lịch 11 bài tháng 11`**, chạy 08:00 T2–T6 từ 16/11, **COUNT=11**, kết thúc 30/11. Prompt đọc lịch THÁNG 11 mới và draft đã viết, **chỉ đăng khi bài/ảnh đã được người dùng duyệt và thông tin SFVN được xác nhận**, nếu không báo trạng thái NHÁP; không tự động đăng bài chưa duyệt. Kiểm chứng `success=true`, `is_enabled=true`, `next_run=2026-11-16T08:00:00+07:00`.
- **Hiện chưa có hình cho 6 bài và 5 mục SFVN chưa có poster chính thức. Không có 11 bài mới nào được lịch Metricool xác nhận**. SFVN 21/11 thứ Bảy chỉ là mốc giả định. Cần user duyệt 6 caption, có ảnh và poster/chi tiết hội thảo để tiếp tục.
- Bài Facebook chào mừng 14/11 status PUBLISHED giữ nguyên. Lịch tin website 07:00, 21 PDF, index.html và tin-tuc.json không động đến.

### V.2. ĐÃ KIỂM TRA DRIVE + SOÁT SOCIAL SEO 6 BÀI + LƯU 6 ẢNH NHÁP (14/11/2026)
- Người dùng hỏi rõ `đã vào Drive chưa, bài viết đã rà soát lại chuẩn SEO chưa`. Đã mở **chính xác cả 6 Google Docs** và xác minh đầy đủ nội dung, ID file, trạng thái bản nháp tại `Facebook/02_BAI_VIET`. Ban đầu thư mục ảnh chỉ có 1 ảnh chào mừng.
- Đã tải lên Google Drive qua công cụ Files **6 ảnh PNG 1122x1402 (xấp xỉ 4:5)**, vào folder `Facebook/03_HINH_ANH_BAI_DANG` ID `1RadZa_wCwpC7xPVxZFORuXG9BZeq1opx`. Kiểm tra metadata từng ảnh: tất cả MIME `image/png`, đúng thư mục; list folder sau upload có **7 ảnh** (1 ảnh chào mừng + 6 ảnh nháp). ID:
  - 17/11 `1FDKGapP1o5psdDKKdCRqDjMTyvY09LOc` (hàng thực/futures ngô);
  - 24/11 `1CDdMMmD2UiM77eN0_T1Jvh1YNfHNE5fF` (cà phê);
  - 25/11 `1vaqObq_4DpLcttDlGLNB0Nem2me5PVBP` (ngô);
  - 26/11 `1__v5VotGrr4EJVgEbuCq4IJ2vdGfqDWY` (lúa mì);
  - 27/11 `10C4CTLml6qX3P6J6F6Cze3-o4dseWR7S` (ký quỹ);
  - 30/11 `1jbyc_ej_Mq3m47ewEbn-ayzV8g9tff3S` (thư viện 21 giáo trình).
- **ẢNH LÀ NHÁP CHƯA DUYỆT**, không đưa vào Metricool: là minh họa cách điệu, có thể trông quá AI so với sở thích user; cần đánh giá phong cách, chữ, logo, tính chính xác, rồi có thể làm lại theo hướng ảnh chụp/editorial. Không coi ảnh được duyệt chỉ vì đã tải lên Drive, không tự public permission và không tự đăng.
- Đã rà soát 6 caption ở mức **Social SEO cho Facebook**, không phải bảo đảm xếp hạng Google/web: chỉnh tiêu đề tự nhiên có cụm từ khóa chính (hợp đồng tương lai hàng hóa, giá cà phê, giá ngô, giá lúa mì, ký quỹ hàng hóa phái sinh, thư viện Nông Sản 360), giữ thuật ngữ đúng theo giáo trình, 4 hashtag liên quan, liên kết nội bộ tới bài học, thêm câu hỏi CTA phù hợp. Không gán dữ liệu giá thị trường hiện tại/tin nóng chưa kiểm chứng.
- Đã cập nhật **trực tiếp 6 Google Docs** bằng `batch_update_document` với write-control revision; từng phép thay đều thành công (6 trường/bài), và đọc lại cả 6 xác minh từ khóa chính, ảnh Drive, CTA, liên kết giáo trình, vẫn `CHƯA ĐĂNG`. Bổ sung metadata SEO Facebook và alt mô tả ảnh nằm ngoài phần `NỘI DUNG FACEBOOK`, ghi rõ không sao chép vào Facebook.
- Đồng bộ **6 bản thảo GitHub** `facebook-drafts/2026-11/FB-202611[17,24,25,26,27,30]-01.md` bằng nội dung đã sửa từ Google Docs để automation không dùng bản cũ. Các file khác không thay đổi.
- **Đã kiểm tra khung giờ gợi ý Metricool** brand `8097037` với `getBestTimeToPostByNetwork` trong hai tuần 16–29 và 30/11. Gợi ý sơ bộ: thứ Hai/Ba/Năm/Sáu **10:00**, thứ Tư **12:00** (điểm giờ 12 nhỉnh hơn 10 rất ít); cuối tuần nếu có bài: thứ Bảy/Chủ nhật **10:00**. **Fanpage mới, dữ liệu không đủ để gọi đây là giờ tối ưu đã được kiểm chứng.** Giờ thứ Tư 25/11 đã chỉnh **12:00** trong Google Docs + GitHub bản nháp.
- Đã cập nhật lịch GitHub `FACEBOOK_KE_HOACH_THANG_11_2026.md` và Drive Google Doc `1G-wXcK6Vkp3zSlCl-t4eFJt8VfbMqO3sUv9tB8opQu8` về 6 bài SEO + 6 ảnh nháp, thêm khung giờ dự kiến.
- **Đã xác minh thư mục Drive** sau cùng có 6 Docs trong 02_BAI_VIET, 6 ảnh nháp trong 03_HINH_ANH_BAI_DANG; 5 bài SFVN còn chờ poster chính thức. **Chưa có 6 bài mới được user phê duyệt, chưa lên lịch Metricool hoặc xuất bản.** Không sửa website, 21 PDF và tin-tuc.json; đề xuất form một lần cho thư viện vẫn CHƯA triển khai vì cần thiết kế quyền/đồng ý/lưu lead, không tự ý chặn nội dung hiện có.

## W. Thay thế 6 ảnh bài Facebook bằng thiết kế đồ họa mới, không dùng image-generation (14/11/2026)
- Người dùng yêu cầu `tạo lại 6 ảnh sao cho Fb ko đánh dấu là A.I`, do ảnh nháp sinh bởi công cụ AI hiện tại quá giống minh họa AI. **Không thể hứa Meta không gắn nhãn** vì Meta tự kiểm tra provenance/các tín hiệu khác.
- Phương án được chọn: không dùng image_gen hoặc hình tổng hợp, thay bằng **6 social graphic dạng biên tập 4:5 dựng thủ công theo vector/type/layout qua PptxGenJS**, dùng hình khối/biểu tượng tối giản do thiết kế trực tiếp, chữ tiếng Việt và màu xanh navy/kem/vàng theo trang web; nếu logo gốc được sử dụng thì lấy từ tài sản có sẵn. Đây không phải mẹo xóa metadata hoặc vượt qua hệ thống nhãn của Facebook. Không tuyên bố do con người thiết kế 100%.
- Giữ nguyên 6 ảnh cũ trên Google Drive `Facebook/03_HINH_ANH_BAI_DANG` và 6 bài đã soát SEO; tạo **file ảnh mới với hậu tố `ANH_DO_HOA_BIEN_TAP_V2_CHO_DUYET.png`** để tránh ghi đè. Khi có 6 ảnh mới, xác minh tồn tại trên Drive và liên kết trong bản nháp/Google Docs, cập nhật checkpoint, chưa tự đăng Metricool vì người dùng chưa duyệt.
- Đang thực hiện: thiết kế bản gốc slide 4:5 có thể chỉnh sửa, xuất 6 PNG, kiểm tra ảnh/độ nét/nội dung, lưu bản PNG và tùy chọn PPTX thiết kế trên Drive.

### W.1. Hoàn thành 6 ảnh phiên bản V2 dạng đồ họa biên tập (14/11/2026)
- Đã tạo bộ **6 thiết kế hình học/chữ trên PptxGenJS**, tỷ lệ 4:5, xuất PNG thực tế **1080×1350**, độ phân giải xác minh bằng `file`/PIL. Không dùng image_gen cho phiên bản V2; dùng shape/text trên canvas kiểu thẻ thông tin chuyên nghiệp. Slide PPTX đã chạy `slides_test.py` **PASS (không có overflow)**, render PNG và quan sát mẫu; không mô phỏng dữ liệu giá, không làm giả ảnh chụp.
- **Không đảm bảo Facebook không gắn nhãn AI** — Meta tự quyết định. Đây là cách tạo đồ họa từ bố cục và chữ, không phải thao tác giả mạo xuất xứ hay xóa nhãn.
- Đã lưu **6 file V2 mới** lên Google Drive folder Facebook/03_HINH_ANH_BAI_DANG (`1RadZa_wCwpC7xPVxZFORuXG9BZeq1opx`) **mỗi file là ảnh mới không ghi đè ảnh cũ**, metadata readback đúng `image/png`, đúng folder:
  - `FB-20261117-01_ANH_DO_HOA_BIEN_TAP_V2_CHO_DUYET.png`: `1IeEmTDtByVipn6mk276siITck1Dl15dW` — so sánh hàng thực/futures.
  - `FB-20261124-01_ANH_DO_HOA_BIEN_TAP_V2_CHO_DUYET.png`: `1VKSOjTB88IxjcYEO9wLQVa9RLhx4aIxv` — 4 yếu tố cà phê.
  - `FB-20261125-01_ANH_DO_HOA_BIEN_TAP_V2_CHO_DUYET.png`: `1yoat8m7zJR-eA6qlv7edt6-vccNd7CKB` — 4 nhóm dữ liệu ngô.
  - `FB-20261126-01_ANH_DO_HOA_BIEN_TAP_V2_CHO_DUYET.png`: `19y2t6O6ghMjsDo8i8lyVQ6Ob8ntyz4VZ` — 4 câu hỏi lúa mì.
  - `FB-20261127-01_ANH_DO_HOA_BIEN_TAP_V2_CHO_DUYET.png`: `1fZ8NXU8UIbpHzwLmMqGhP7MEYqGeeh1g` — ký quỹ không phải mức lỗ tối đa.
  - `FB-20261130-01_ANH_DO_HOA_BIEN_TAP_V2_CHO_DUYET.png`: `1ALg9So0aBQbyjXNY_VUwRvtDNNh6kD7p` — 21 giáo trình 5+5+5+6.
- Nguồn **PPTX có thể chỉnh sửa** cùng folder Drive ID `17kK1z7JMDociLH_g2-dCMSJz5SEa8MHY`, tên `NS360_6_ARTWORK_VECTOR_EDITORIAL_V2_EDITABLE.pptx`; metadata readback xác minh file PowerPoint ở đúng folder.
- **Đã cập nhật 6 Google Docs bản nháp** bằng quyền sửa Docs, thay link ảnh cũ thành V2 và ghi rõ `ẢNH V2 ĐỒ HỌA BIÊN TẬP (ĐÃ LƯU DRIVE, CHƯA DUYỆT)`, không thay caption đã soát SEO, không đăng; kết quả mỗi file 4 thay thế thành công.
- **Đã cập nhật 6 bản nháp GitHub** `facebook-drafts/2026-11/FB-202611[17,24,25,26,27,30]-01.md` bằng liên kết ảnh V2, giữ ảnh cũ nguyên trên Drive. Đồng bộ lịch `FACEBOOK_KE_HOACH_THANG_11_2026.md` GitHub + Google Doc `1G-wXcK6Vkp3zSlCl-t4eFJt8VfbMqO3sUv9tB8opQu8`.
- **TRẠNG THÁI**: ĐÃ TẠO VÀ LƯU DRIVE, **CHỜ ANH DUYỆT ẢNH V2**. Không đưa post mới vào Metricool, không hứa Meta không gắn nhãn. Khi duyệt mới xếp lịch bài.

### W.2. Chủ dự án chọn quay lại dùng 6 ảnh cũ (14/11/2026)
- Người dùng nói rõ: `thoi dùng 6 ảnh cũ đi` — **chọn lại bộ 6 ảnh minh họa đầu tiên** (ID cũ trong mục V.2), không dùng bộ 6 đồ họa V2 cho bài đăng.
- Đang đổi 6 tham chiếu ảnh trong Google Docs + GitHub draft và lịch tháng 11 về file ảnh cũ, giữ nguyên cả hai bộ trên Drive, không ghi đè/xóa. Các bài vẫn chưa được đặt lịch Metricool/đăng khi chưa kiểm duyệt nội dung.

### W.3. ĐÃ KHÔI PHỤC 6 ẢNH CŨ VÀ XÁC MINH (14/11/2026)
- Theo quyết định mới nhất của người dùng **`thoi dùng 6 ảnh cũ đi`**, 6 ảnh bản đầu là bản **được chọn sử dụng** cho FB-202611[17,24,25,26,27,30]-01. Không sử dụng bộ V2 làm ảnh đăng. **Cả hai bộ ảnh vẫn nằm trên Drive, không xóa/ghi đè**.
- Đã chỉnh 6 Google Docs ở `Facebook/02_BAI_VIET`: link ảnh trở về ID cũ: 17 `1FDKGapP1o5psdDKKdCRqDjMTyvY09LOc`; 24 `1CDdMMmD2UiM77eN0_T1Jvh1YNfHNE5fF`; 25 `1vaqObq_4DpLcttDlGLNB0Nem2me5PVBP`; 26 `1__v5VotGrr4EJVgEbuCq4IJ2vdGfqDWY`; 27 `10C4CTLml6qX3P6J6F6Cze3-o4dseWR7S`; 30 `1jbyc_ej_Mq3m47ewEbn-ayzV8g9tff3S`.
- Đã đồng bộ 6 file GitHub `facebook-drafts/2026-11/FB-202611[17,24,25,26,27,30]-01.md`, thay toàn bộ tham chiếu ảnh V2 bằng ảnh cũ, trạng thái `ANH ĐÃ CHỌN ẢNH BẢN ĐẦU — CHƯA ĐĂNG`; không thay câu chữ caption đã soát SEO. Lịch `FACEBOOK_KE_HOACH_THANG_11_2026.md` GitHub và Google Doc Drive ID `1G-wXcK6Vkp3zSlCl-t4eFJt8VfbMqO3sUv9tB8opQu8` đã cập nhật.
- **Đã READBACK cả 6 Docs và 6 draft GitHub**: mỗi bài có ID ảnh cũ, không còn ID ảnh V2, vẫn có trạng thái `CHƯA ĐĂNG`. Bộ V2 chỉ để lưu trữ khi cần.
- Lưu ý: Chủ dự án chọn ảnh cũ **không có nghĩa đã đồng ý mọi caption tự đăng**. Chưa được xác minh đã có lịch Metricool mới; giữ quy tắc phê duyệt bài trước khi phát hành. Không cam kết Facebook không hiển thị nhãn AI cho ảnh cũ.

## X. Người dùng yêu cầu xóa 6 ảnh V2 không duyệt, chuẩn hóa SEO và lên lịch 6 bài (14/11/2026)
- Yêu cầu trực tiếp: `xóa 6 ảnh ko dc duyệt đi, 6 bản nháp bài viết rà soát chuẩn seo đi rồi lên lịch đăng`.
- Đã đối chiếu Drive `Facebook/03_HINH_ANH_BAI_DANG`: có chính xác 6 ảnh `FB-202611[17,24,25,26,27,30]-01_ANH_DO_HOA_BIEN_TAP_V2_CHO_DUYET.png` (ID 17 `1IeEmTDtByVipn6mk276siITck1Dl15dW`, 24 `1VKSOjTB88IxjcYEO9wLQVa9RLhx4aIxv`, 25 `1yoat8m7zJR-eA6qlv7edt6-vccNd7CKB`, 26 `19y2t6O6ghMjsDo8i8lyVQ6Ob8ntyz4VZ`, 27 `1fZ8NXU8UIbpHzwLmMqGhP7MEYqGeeh1g`, 30 `1ALg9So0aBQbyjXNY_VUwRvtDNNh6kD7p`).
- Sẽ **xóa đúng 6 ảnh PNG V2** theo yêu cầu, không xóa 6 PNG ảnh cũ đã chọn, không xóa ảnh chào mừng và **không xóa file PPTX editable** vì người dùng chỉ nói 6 ảnh.
- Đã kiểm tra Metricool lịch 14/11–02/12: chỉ bài chào mừng đã PUBLISHED, **chưa có 6 bài mới**. Chủ dự án đã ủy quyền lên lịch (autoPublish cho ngày tương lai) sau rà soát SEO và dữ kiện, dùng 6 ảnh cũ. Giờ dự kiến 17/11 10:00; 24/11 10:00; 25/11 12:00; 26/11 10:00; 27/11 10:00; 30/11 10:00 Asia/Saigon; có thể cần nhập media qua Metricool nếu ảnh Drive không public.
- Phải đọc lại nguyên văn 6 Google Docs, giáo trình gốc đã có, loại bỏ metadata biên tập khỏi caption khi đăng, rà nguồn, hashtag, tiêu đề; mọi sửa trực tiếp Docs và GitHub, rồi đặt lịch bằng `createScheduledPost` lần lượt, readback từng mã, chống trùng. Không can thiệp lịch SFVN thiếu poster, 21 PDF, tin-tuc.json, website. Cập nhật checkpoint theo từng chặng.
- Trạng thái hiện tại: **ĐANG THỰC HIỆN**.
