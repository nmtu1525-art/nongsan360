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

### X.1. ĐÃ XÓA 6 ẢNH V2, SOÁT SEO VÀ LÊN LỊCH 6 BÀI FACEBOOK (14/11/2026)
- **Đã xóa vĩnh viễn đúng 6 file PNG không được duyệt**: `1IeEmTDtByVipn6mk276siITck1Dl15dW`, `1VKSOjTB88IxjcYEO9wLQVa9RLhx4aIxv`, `1yoat8m7zJR-eA6qlv7edt6-vccNd7CKB`, `19y2t6O6ghMjsDo8i8lyVQ6Ob8ntyz4VZ`, `1fZ8NXU8UIbpHzwLmMqGhP7MEYqGeeh1g`, `1ALg9So0aBQbyjXNY_VUwRvtDNNh6kD7p` qua `Google_Drive.delete_file`: cả sáu trả `success=true`.
- **Readback thư mục** `Facebook/03_HINH_ANH_BAI_DANG` sau xóa: còn **8 files** = **6 ảnh bản đầu đã chọn + 1 ảnh chào mừng + 1 file PPTX chỉnh sửa** (PPTX không nằm trong phạm vi "6 ảnh" yêu cầu xóa); 0 PNG V2 không duyệt. **Không xóa 21 PDF hoặc dữ liệu khác.**
- Rà trực tiếp nội dung 6 Google Docs đã soát Social SEO: tiêu đề tự nhiên có từ khóa chính, giải thích không gán tin/giá chưa kiểm chứng, link giáo trình đã đối chiếu route website `index.html` (PS-01/PS-03/CF-02/NG-02/LM-02, thư viện/học viện đều hiện diện), 4 hashtag, CTA hỏi đáp; phần `NỘI DUNG FACEBOOK` được tách sạch khỏi metadata/ghi chú. Sáu ảnh cũ đều `anyone:reader` với MIME image/png.
- **ĐÃ TẠO 6 bài Facebook POST trên Metricool brand `8097037`, `autoPublish=true`, mỗi bài **1 ảnh cũ đã nhập thành media riêng trên static.metricool.com**, trạng thái Facebook **PENDING**; toàn bộ trong múi giờ Asia/Saigon:
  1. 17/11 10:00 `FB-20261117-01` — ID `427792755`, UUID `3337223766451964816`, ảnh Drive ID `1FDKGapP1o5psdDKKdCRqDjMTyvY09LOc`.
  2. 24/11 10:00 `FB-20261124-01` — ID `427792908`, UUID `7078376323180218337`, ảnh `1CDdMMmD2UiM77eN0_T1Jvh1YNfHNE5fF`.
  3. 25/11 12:00 `FB-20261125-01` — ID `427792991`, UUID `-4519204595844625623`, ảnh `1vaqObq_4DpLcttDlGLNB0Nem2me5PVBP`.
  4. 26/11 10:00 `FB-20261126-01` — ID `427793073`, UUID `-7607156822577820498`, ảnh `1__v5VotGrr4EJVgEbuCq4IJ2vdGfqDWY`.
  5. 27/11 10:00 `FB-20261127-01` — ID `427793151`, UUID `6054798094436680609`, ảnh `10C4CTLml6qX3P6J6F6Cze3-o4dseWR7S`.
  6. 30/11 10:00 `FB-20261130-01` — ID `427793267`, UUID `2892558411312677904`, ảnh `1jbyc_ej_Mq3m47ewEbn-ayzV8g9tff3S`.
- **QUAN TRỌNG: Readback** `Metricool.getScheduledPosts` từ 16/11–01/12 xác minh **đúng 6 bài** với các ID, ngày giờ, `media.length=1`, `autoPublish=true`, Facebook provider `status=PENDING`. Chưa phải đã xuất bản; sau lịch cần xác minh provider `PUBLISHED`, `publicUrl`.
- Đã sửa **6 Google Docs**, **6 bản thảo GitHub** với ID lịch, UUID, status `PENDING`; không thay caption đã soát SEO. Đã **viết lại lịch HIỆN HÀNH** `FACEBOOK_KE_HOACH_THANG_11_2026.md` trên GitHub commit `fe2887721e8a2d8393000a3745a3fed558e84b53` và cập nhật Google Doc Drive ID `1G-wXcK6Vkp3zSlCl-t4eFJt8VfbMqO3sUv9tB8opQu8` đầy đủ 6 planner URLs. Đã readback Drive thấy đủ sáu ID, không còn sai trạng thái V2.
- **ĐÃ SỬA automation** `Fanpage NS360 — lịch 11 bài tháng 11` ID `Automation_7ffdf2af72088191acb4f4dcb23b9e00` để **KHÔNG tạo lại sáu bài đã schedule**, chỉ kiểm PUBLISHED sau giờ, năm slot hội thảo SFVN tiếp tục chờ poster và sự phê duyệt riêng; `update success=true`, schedule 08:00 T2–T6, next 16/11 08:00.
- Bài chào mừng 14/11 `PUBLISHED`, giữ nguyên. Năm bài hội thảo SFVN vẫn **chưa đăng/chưa lên lịch** vì thiếu poster/chủ đề/giờ/nơi đăng ký. **Không tự ý thay đổi website/tin-tuc.json/21 PDF**.

### X.2. ĐÃ XÓA NỐT FILE POWERPOINT V2 KHÔNG ĐƯỢC DUYỆT (14/11/2026)
- Anh gửi ảnh chụp cho thấy file `NS360_6_ARTWORK_VECTOR_EDITORIAL_V2_EDITABLE.pptx` vẫn nằm trong thư mục ảnh Facebook và yêu cầu xóa nốt.
- Đã xác minh metadata và vị trí trong `Facebook/03_HINH_ANH_BAI_DANG`: PowerPoint ID `17kK1z7JMDociLH_g2-dCMSJz5SEa8MHY` là bản thiết kế V2 không dùng.
- Đã gọi `Google_Drive.delete_file` cho chính xác file đó; trả `success=true`.
- **Readback folder sau xóa**: chính xác **7 file = 6 ảnh PNG bản đầu được chọn cho FB-202611[17,24,25,26,27,30]-01 + 1 ảnh chào mừng**. **Không còn 6 PNG V2 và không còn PowerPoint V2**. Không xóa dữ liệu khác.
- Lịch Metricool 6 bài đã tạo ở mục X.1 giữ nguyên trạng thái PENDING/autoPublish, không tạo hoặc đăng thêm bài.

## Y. Bắt đầu triển khai form đăng ký đọc 21 giáo trình một lần (14/11/2026)
- Chủ dự án đồng ý đề xuất: khi khách nhấn Đọc tài liệu sẽ đăng ký họ tên, SĐT bắt buộc, email không bắt buộc; tách riêng sự đồng ý xử lý dữ liệu cho cung cấp quyền đọc và ô tùy chọn nhận bản tin/hội thảo. Điền một lần trên cùng trình duyệt, giữ thư viện danh mục/tin tức công khai cho SEO; không yêu cầu tài khoản giao dịch.
- Readback `index.html`: GitHub Pages là SPA hash-router (`ROUTES`, `render`), các giáo trình PDF trực tiếp `pdf/*.pdf`; chưa có backend, form, localStorage. **Không thể dùng gate JavaScript để bảo mật PDF gốc**; việc chặn UI chỉ phục vụ thu đăng ký tự nguyện, URL PDF gốc vẫn có thể được truy cập trực tiếp.
- Kiến trúc đang làm: form nhúng qua **Google Apps Script HTML Service** chạy dưới quyền chủ sở hữu, ghi vào **Google Sheet riêng tư**; chỉ khi server báo ghi dữ liệu thành công mới gửi thông điệp tới website để lưu trạng thái `localStorage` không chứa PII, dùng một lần mỗi trình duyệt; bật form khi endpoint triển khai và xác minh; nếu không có endpoint, **giữ thư viện truy cập như hiện tại** để không chặn khách mà không thu được dữ liệu.
- Không có connector triển khai Apps Script web app trong các công cụ đã kết nối: cần chủ sở hữu thực hiện bước **Deploy Web app** một lần, sao chép URL `/exec` vào cấu hình GitHub. Tuyệt đối không nhận form thật khi chưa lưu dữ liệu; không tuyên bố đã hoạt động end-to-end trước khi deploy và test.
- Đã xác minh Luật Bảo vệ dữ liệu cá nhân 91/2025/QH15 có hiệu lực 01/01/2026, consent phải rõ mục đích và có quyền yêu cầu chỉnh sửa/xóa; cần chú ý phân tách marketing opt-in.
- Bước thực hiện: tạo bảng dữ liệu lead riêng tư trên Drive, GitHub Apps Script code/form và hướng dẫn cấu hình, tích hợp modal chặn đường đọc PDF qua router với feature flag an toàn, kiểm tra readback và cập nhật checkpoint. Giữ nguyên 21 PDF và các tin/website khác.

### Y.1. Da chuan bi cong cu dang ky thu vien (14/11/2026)
- Da tao Google Sheet RIENG TU: NS360 - DATA DANG KY THU VIEN (RIENG TU), 2 tab Leads/HuongDan, 12 cot, 0 leads, shared=false chi owner; folder quan ly 04_DATA_DANG_KY_THU_VIEN ID 1vPruaqJ0NQ5QFdXIv1MJT8Qf3YjcPHFv.
- Da tao frontend library-gate.js va library-gate.css; backend library-registration/Code.gs, Form.html; privacy chinh-sach-du-lieu.html; huong dan library-registration/README.md. Da luu ban copy 6 file tren Drive va GitHub. Apps Script su dung google.script.run luu private Sheet, chi gui tin hieu mo thu vien sau khi ghi thanh cong; form ho ten va SDT bat buoc, email tuy chon, marketing consent doc lap, browser chi luu marker khong co PII.
- Da tich hop vao index.html commit abc0ded06c1f1266ae1122a613a4277a65679ac8; footer link privacy commit ce8e916bff6c9817cba5912f20c153fa8cebea12. Readback xac minh 31 templates, route, QR, video, tin tuc, 21 PDF khong doi. Node --check JS PASS; logic test gate off neu chua co URL, on chi khi URL /exec hop le va nguoi dung chua dang ky.
- DANG CHO KICH HOAT: library-gate.js const WEB_APP_URL = ''; hien khong co form dang ky hoat dong tren trang va chua thu duoc lead. Can chu du an mo private Sheet > Extensions > Apps Script, dan Code.gs, tao Form.html, Script Properties SPREADSHEET_ID, Deploy Web app (Execute as Me; Access Anyone), sao chep /exec URL; sau do cau hinh library-gate.js va thu gui du lieu real. Connector Drive khong deploy Apps Script duoc; KHONG tu nhan hoan tat end-to-end.
- PDF pdf/*.pdf con cong khai, gate JS khong phai bao ve tai lieu thuc su; thu vien muc luc va tin tuc giu mo. Nguoi dung phai kiem tra chinh sach du lieu truoc khi mo thu lead.

### Y.2. Người dùng cung cấp Web App /exec (14/11/2026)
- Đã nhận đúng endpoint Google Apps Script: `https://script.google.com/macros/s/AKfycbwOanbih1xPmM07lBtMdfkll3_8JNYRRKzW0x7qFGuWsVqjHDuYf5YmA9JNonthV5EWyQ/exec`.
- Đã kiểm tra file frontend `library-gate.js`, Apps Script `library-registration/Code.gs`, `Form.html` và `index.html` từ GitHub; server backend dùng Script Property `SPREADSHEET_ID` và Sheet tab `Leads`, chỉ khi `registerLead()` trả `ok=true` mới gửi postMessage để mở quyền đọc.
- Đã thử truy cập endpoint qua công cụ web nhưng nhận `Cache miss`; container HTTP không phân giải DNS từ runtime. **Chưa xác minh endpoint công khai hoặc Google Sheet ghi đúng dữ liệu. Không khẳng định đã đăng ký thành công.**
- **Đang thực hiện**: cấu hình URL này trên `library-gate.js`, thêm điều hướng/fallback nếu iframe bị chặn, kiểm tra readback và JS, sau đó cần thử một lượt đăng ký thực tế từ trình duyệt user và đọc lại bảng Google Sheets. Không bịa dòng lead thử.

### Y.3. ĐÃ KẾT NỐI /exec VÀ TẠO LINK KIỂM THỬ RIÊNG, CHƯA BẬT CHO KHÁCH (14/11/2026)
- Người dùng đã cung cấp Apps Script Web App URL `https://script.google.com/macros/s/AKfycbwOanbih1xPmM07lBtMdfkll3_8JNYRRKzW0x7qFGuWsVqjHDuYf5YmA9JNonthV5EWyQ/exec`. Đã gắn chính xác vào `library-gate.js` trên GitHub, commit `1d2b00d810704e09ec23da1b6f624289fbe00880`.
- **AN TOÀN TRƯỚC KHI LIVE:** Chưa thể GET Web App qua công cụ web (Cache miss) hoặc HTTP runtime (lỗi DNS), chưa thể gửi biểu mẫu thật để xác nhận đã ghi Sheet. Vì thế đã bổ sung `const LIVE_ENABLED = false;` và `OWNER_TEST_MODE` chỉ bật khi query `?ns360_signup_test=1`, commit `703296b6c9d2391a746ecc29f93d0aa70bead4e7`. Khách thường chưa bị chặn; form test tại `https://nmtu1525-art.github.io/nongsan360/?ns360_signup_test=1#/giao-trinh/cf-01.html`.
- Đã chạy Node VM test local khớp logic `library-gate.js`: trạng thái bình thường không chặn; chủ dự án dùng link test sẽ chặn các route giáo trình; mục lục/tin tức/học viện không chặn; form iframe tạo URL `/exec?nonce=...&src=...`; origin + nonce + Google PostMessage đã test mô phỏng và PASS. ĐÂY CHỈ LÀ TEST LOCAL, không chứng minh Web App deployment và Sheet hoạt động thật.
- Đã readback GitHub: `library-gate.js` chứa endpoint + test-only flag, `index.html` giữ nguyên 31 templates, 2 video SFVN, tin-tuc.json, policy link. Google Sheet `NS360 - DATA DANG KY THU VIEN (RIENG TU)` vẫn `shared=false`, owner-only, tab Leads có đúng 12 header cột và **0 data rows** trước lượt thử.
- **CHỜ NGƯỜI DÙNG TEST MỘT LƯỢT THẬT**: mở link test trên browser PC, dùng Họ tên/SĐT của chính họ trong form (không gửi PII qua chat), chọn consent đầu, chọn/không chọn marketing riêng, nhấn Mở thư viện; nếu thành công sẽ đến giáo trình CF-01 và truy cập các tập khác cùng browser không cần form. Sau khi user xác nhận, đọc lại Google Sheet để kiểm chứng có 1 dòng lead và consent đúng, sau đó đổi `LIVE_ENABLED = true` trên GitHub để bật chính thức. Nếu có lỗi, cần ảnh lỗi và kiểm tra Apps Script property `SPREADSHEET_ID` bằng Sheet ID `1_fKgwxop4-pTIORlnhRVCNCWJXLhZIpPV2nBMv8dDEw`, deployment permissions Execute as Me/Anyone. Tránh bịa thử nghiệm.
- Cần lưu ý GitHub Pages có thể cần một vài phút để phục vụ file mới; công cụ web không xác minh được giao diện live. Không chạm 21 PDF/Metricool.

### Y.4. Chủ dự án yêu cầu bỏ checkbox trên form đọc thư viện (14/11/2026)
- Người dùng: "bỏ mục đồng ý đi, ko cần tíc chon đâu". Yêu cầu cập nhật **giao diện form Apps Script**, không bắt click tick checkbox.
- Đã kiểm tra tài liệu pháp lý: Điều 9 Luật Bảo vệ dữ liệu cá nhân 91/2025/QH15 (sự đồng ý rõ ràng, theo từng mục đích, im lặng không phải đồng ý); Điều 6 Nghị định 356/2025/NĐ-CP quy định hình thức điện tử kiểm chứng được và không mặc định/gây hiểu nhầm. Phương án: thay checkbox đồng ý cung cấp quyền đọc bằng **nội dung thông báo gắn với hành động nhấn nút "Đồng ý và mở thư viện miễn phí"**; giữ link chính sách, lưu privacyConsent=true chỉ sau hành động gửi chủ động; **bỏ hoàn toàn checkbox nhận tin và luôn gửi newsConsent=false**. Không tự suy ra khách đồng ý marketing.
- Phải cập nhật bản GitHub `library-registration/Form.html`, copy Drive và chính sách dữ liệu, README và lời giải thích trên website `library-gate.js`. **Dự án Apps Script người dùng đang vận hành là bản deploy độc lập**: chỉ sửa GitHub/Drive không tự cập nhật bản Deploy Apps Script; người dùng phải thay nội dung Form.html trong script.google.com và Deploy -> Manage deployments -> Edit -> New version -> Deploy. Không bật LIVE_ENABLED trước khi kiểm thử form mới, xác nhận 1 lượt Sheets ghi `DongYXuLyDuLieu = TRUE`, `DongYNhanTin = FALSE`.
- Không yêu cầu OpenAI API key. Bảo toàn PDF, tin tức, Metricool và mã ghi dữ liệu/Sheet.

### Y.5. Hoàn thành cập nhật form không checkbox — CHỜ ANH REDEPLOY (14/11/2026)
- Theo yêu cầu `bỏ mục đồng ý đi, ko cần tíc chon đâu`, đã xóa **cả hai checkbox** trong `library-registration/Form.html`: không cần tick đồng ý xử lý dữ liệu hoặc nhận tin.
- Thay bằng thông báo ngắn gắn với nút **`Đồng ý và mở thư viện miễn phí`**: khi khách chủ động nhấn nút, `privacyConsent:true` gửi cùng dữ liệu phục vụ mục đích cấp quyền đọc. `newsConsent:false` luôn, KHÔNG tự động chấp thuận tin thị trường/quảng cáo/hội thảo. `RequestID` tiền tố `v2-` để phân biệt phiên bản giao diện trong bảng `Leads`. Không chỉnh server `Code.gs`, server vẫn xác minh `privacyConsent===true` và lưu `DongYNhanTin=FALSE`.
- GitHub đã cập nhật `library-registration/Form.html` commit `88e8b2169556ffc9be8a075e4a580194a1b8b97b`, `library-gate.js` commit `69f32c1459c9a7c79fcdf7aa56c7ceb5ca652ed5`, `chinh-sach-du-lieu.html` commit `4cd25618244d4161e222ad6f452e108a8d149842`, README mới nhất commit `aa46e3b950460d51c0dfaf28ba66a05bd27bd3e4`.
- **ĐÃ CẬP NHẬT ĐÚNG FILE `Form.html` TRÊN DRIVE tại ID `1yzk8DZC3hjffAvwDn2TT25eQ6FtXfig5`** bằng `Google_Drive.update_file`; readback Drive và GitHub Form.html **khớp chính xác 4998 ký tự**, 0 checkbox, tiêu đề đồng ý rõ, `privacyConsent:true`, `newsConsent:false`; HTMLParser và JS syntax `node --check` PASS.
- **Chưa thay đổi Apps Script Deployment đã chạy trên tài khoản Google của anh**: thao tác cập nhật GitHub/Drive không tác động phiên bản Web App /exec. Anh phải mở Apps Script -> `Form.html` -> thay toàn bộ bằng bản GitHub/Drive mới -> Save -> Deploy -> Manage deployments -> Edit -> New version -> Deploy để công khai giao diện v2 trên cùng URL /exec.
- Website gate vẫn `LIVE_ENABLED=false` (chỉ chủ dự án có URL `?ns360_signup_test=1` được test); chưa bật cho khách rộng rãi. Cần thử đăng ký thực tế, đọc Google Sheet kiểm tra cột `DongYXuLyDuLieu=TRUE`, `DongYNhanTin=FALSE`, `RequestID` bắt đầu `v2-` trước khi bật thật. Giữ toàn bộ 21 PDF, site, bản tin, 6 bài Metricool.
- Pháp lý: đã kiểm chứng Điều 6 Nghị định 356/2025/NĐ-CP yêu cầu phương thức đồng ý điện tử rõ ràng, kiểm chứng được, không mặc định hay gây hiểu lầm. Không suy diễn việc gửi form là đồng ý marketing; yêu cầu riêng nếu muốn gửi thông tin thương mại về sau.

### Y.6. Kiểm tra sau khi anh xác nhận đã cập nhật Apps Script (14/11/2026)
- Người dùng nói `ok rồi` sau hướng dẫn cập nhật `Form.html` bỏ checkbox và redeploy Web App.
- Readback GitHub: `library-registration/Form.html` hiện không còn checkbox, có nút `Đồng ý và mở thư viện miễn phí`, `privacyConsent:true` và `newsConsent:false`; `library-gate.js` vẫn `LIVE_ENABLED=false`, URL Apps Script đã cấu hình.
- Kiểm tra Google Sheet tab `Leads` thời điểm hiện tại: **chưa phát hiện lượt đăng ký có `RequestID` tiền tố `v2-`**, nên chưa đủ bằng chứng form mới đã ghi thành công; một lượt đọc có quan sát bản ghi kiểu cũ, nhưng lượt đọc sau chỉ thấy header và không còn dòng đó (có thể người quản lý xóa dữ liệu thử). Không lưu nội dung cá nhân vào checkpoint.
- Truy cập `/exec` bằng web tool chưa thành công (`Cache miss`), không thể xác minh trực tiếp giao diện sau redeploy. Chỉ bật public `LIVE_ENABLED=true` sau khi chủ dự án **thử 1 lượt gửi form v2** qua URL `https://nmtu1525-art.github.io/nongsan360/?ns360_signup_test=1#/giao-trinh/cf-01.html`, thấy mở giáo trình, sau đó đọc Sheet chứng minh `DongYXuLyDuLieu=TRUE`, `DongYNhanTin=FALSE`, `RequestID v2-`. Không công khai PII của khách trong chat.
- Chưa đụng website công khai, 21 PDF, tin-tuc.json, lịch Metricool.

### Y.7. Debug: ẩn danh vẫn không thấy form thử (14/11/2026)
- Anh xác nhận đã bấm link kiểm thử bằng cửa sổ ẩn danh nhưng không thấy form. Chưa có v2 row xác nhận ghi dữ liệu, **giữ LIVE_ENABLED=false**.
- Đã đối chiếu nguồn GitHub: regex URL /exec và route CF-01 đều hợp lệ, index.html có chỗ gọi gate, nhưng không truy cập được trang/asset thực qua web tool; không thể khẳng định nguyên nhân thực tế.
- Cần làm test route độc lập chỉ dùng URL hash #/thu-vien/kiem-tra-dang-ky (không phụ thuộc query có thể bị bỏ), cưỡng bức hiển thị form khi thử kể cả có localStorage trước đó, chuyển đến CF-01 sau khi lưu thành công; thêm cache-bust JS và đọc lại tài liệu. Nếu browser vẫn không thấy màn hình, kiểm tra việc GitHub Pages phục vụ JS / Apps Script iframe trực tiếp. Không bật rộng trước test.

### Y.8. Đã sửa test form không hiện trong ẩn danh (14/11/2026)
- Người dùng báo **mở ẩn danh bằng link cũ vẫn không thấy form**. Không có quyền browser trực tiếp, web.run open các URL live đều không truy cập được, không khẳng định đã test browser sản xuất.
- **Đã sửa `library-gate.js`** commit `c2412126c6e964bc6a4ca113e073f60265bac123`:
  - Tạo route kiểm thử độc lập `#/thu-vien/kiem-tra-dang-ky` không phụ thuộc query `?ns360_signup_test=1` (link query cũ vẫn hỗ trợ).
  - Ở chế độ kiểm thử, bỏ qua localStorage đăng ký cũ; chỉ cho qua sau khi chính biểu mẫu trong lần test này gửi thành công (`accessThisSession=true`).
  - Sau khi nhận message thành công đúng nonce từ Google Apps Script, chuyển sang `#/giao-trinh/cf-01.html`; không còn tình trạng kẹt ở route kiểm thử.
  - Bổ sung link `Kiểm tra trang Google Apps Script` dưới iframe nếu embed trống.
  - `LIVE_ENABLED=false` được giữ, **không bật form công khai**.
- **`index.html`** commit `78e0059593948cce4993e5fba637830c00b2b2c3`: thêm query cache-bust `library-gate.js?v=20261114-test-route-1`. **`library-gate.css`** commit `1483aff9a57454c0dba5165974a3cd07e99a9691`: style link chẩn đoán fallback.
- **Readback toàn bộ GitHub**: gate route + skip storage + nonce + endpoint hợp lệ, index gọi gate, 31 templates, 42 link PDF (2 mỗi giáo trình), tin-tuc.json, Form v2 không checkbox còn nguyên, CSS fallback có mặt. Không động 21 PDF, tin tức, Metricool, Drive dữ liệu.
- **Link test mới cho người dùng:** `https://nmtu1525-art.github.io/nongsan360/#/thu-vien/kiem-tra-dang-ky`. Mong đợi: hiện màn đăng ký (không tick), bấm ghi thành công thì mở CF-01; nếu iframe trống thì dùng link Apps Script trực tiếp dưới khung để phân biệt lỗi Apps Script/iframe với lỗi GitHub Pages. Nếu vẫn vào thẳng CF-01 hay 404 thì cần kiểm tra GitHub Pages file triển khai thực tế, không được kết luận rằng đã hoạt động.
- **Chưa có xác minh cuối-cùng form ghi Google Sheet** nên vẫn phải test một lượt thật và chỉ bật `LIVE_ENABLED=true` khi có bản ghi `v2-` với `DongYXuLyDuLieu=TRUE` và `DongYNhanTin=FALSE`. Không yêu cầu khách gửi PII qua chat.

### Y.9. Chuẩn hóa form gọn và xoá đúng 2 cột G:H của Leads (14/11/2026)
- Anh yêu cầu bỏ khung thông báo dài "Khi nhấn Đồng ý và mở thư viện ..." khỏi Form.html; xoá 2 cột hiển thị `DongYXuLyDuLieu` và `DongYNhanTin` (G:H) khỏi Google Sheet. Giữ liên kết chính sách dữ liệu nhỏ gọn thay vì khung dài hoặc checkbox.
- Đã kiểm tra `Leads!A1:L25`: đúng header 12 cột và **1 dòng đăng ký thật phiên bản v2** (`RequestID` có tiền tố `v2-`, trạng thái ACTIVE), xác minh không in PII vào checkpoint. Không được xóa dòng đăng ký hoặc các cột dữ liệu khác. Trước khi xoá cột, chỉnh `Code.gs` từ 12 sang 10 cột, cột RequestID sau khi xóa trở thành I (số 9); tránh lỗi ghi và trùng.
- Vì Web App Apps Script do anh deploy độc lập với GitHub/Drive, muốn backend sản xuất tiếp tục nhận đăng ký sau thao tác xoá cột phải cập nhật cả **Code.gs và Form.html** trong Apps Script rồi **Deploy > Manage deployments > Edit > New version > Deploy**. Website đang `LIVE_ENABLED=false` (chỉ test) nhằm bảo vệ khách trong lúc chuyển đổi. Không thay đổi 21 PDF, bài tin, Metricool.
- Lưu dấu xác nhận qua hành động nút ĐỒNG Ý mở thư viện (không được sử dụng dữ liệu này để gửi marketing nếu không có đồng ý riêng). Chỉ xóa hai cột G:H được yêu cầu, giữ version và timestamp cho hồ sơ đăng ký, cập nhật hướng dẫn và chính sách theo layout mới.

### Y.10. Hoàn thành form v3 không khung dài và Google Sheet 10 cột (14/11/2026)
- Theo yêu cầu bỏ toàn bộ khung lời nhắc `Khi nhấn “Đồng ý và mở thư viện miễn phí”...`, **đã xóa** đoạn `<p class="consent-notice">` và CSS của khung khỏi `library-registration/Form.html`. Chỉ giữ dưới nút 1 dòng chữ nhỏ nêu mục đích cấp quyền đọc và link `Chính sách dữ liệu cá nhân` (không checkbox), nút `Đồng ý và mở thư viện miễn phí` còn nguyên. RequestID của form v3 có tiền tố `v3-`; payload gửi `privacyConsent:true` theo cú nhấn chủ động nhưng không gửi `newsConsent` hoặc tự suy diễn đồng ý tiếp thị.
- **Đã xóa đúng hai CỘT G:H của tab Leads** bằng Google Sheets `deleteDimension` (Sheet ID `1_fKgwxop4-pTIORlnhRVCNCWJXLhZIpPV2nBMv8dDEw`, tab ID `1033306523`, startIndex 6 endIndex 8). Cột còn lại A:J: `ThoiGianDangKy, HoTen, SoDienThoai, Email, ChuDeQuanTam, NguonTruyCap, PhienBanChinhSach, ThoiDiemDongY, RequestID, TrangThai`. Readback Sheet **1 dòng đăng ký có sẵn còn nguyên** (RequestID tiền tố v2-, trạng thái ACTIVE); đã xác minh cột J vẫn có dropdown validation. Google Sheet vẫn **shared=false, owner-only**. Tab HuongDan dòng 4 và 8 cập nhật hướng dẫn theo 10 cột.
- **Đã đổi backend `library-registration/Code.gs` từ 12 sang 10 trường**, dùng `getRange(1,1,1,10)`, lookup RequestID ở cột I (9), appendRow 10 phần tử, không còn ghi bool consent/marketing vào cột G/H. Còn lưu `PhienBanChinhSach`, `ThoiDiemDongY` và `RequestID` để nhận biết phiên bản/hành động đăng ký.
- GitHub commit `Code.gs` `a9496938cff7cf1c25850f20dfcf7fce843d5675`; `Form.html` `a8eea9621327e956f7c33e1ccdcedb100eac1ec0`; `chinh-sach-du-lieu.html` `ada5f1956a2528baac4c7addc66e5e80f86bc4f6`; `library-registration/README.md` `63c3addccba39e5788b19165cb9457486abc3829`.
- Đã **đồng bộ nguyên file vào đúng ID cũ trên Drive** trong thư mục `04_DATA_DANG_KY_THU_VIEN`: Code.gs `1NOv9o_3U4k78QeobxQJOW-9xIAKXp5sW`, Form.html `1yzk8DZC3hjffAvwDn2TT25eQ6FtXfig5`, policy `1RtuEB5yE6EU94kVfQd6fq5p881Psj_9U`, README `1x9bluTBVVZFs38QJLBdAh6fyZ2kznK2p`. Readback Drive/GitHub **khớp tuyệt đối** nội dung ký tự: 3737, 4434, 4302, 3787 tương ứng. 4 file staging _TEMP_v3_ đã được xóa (API success=true); folder readback còn 7 file (4 file trên, 2 library gate CSS/JS, 1 Google Sheet), không bản trùng.
- **Local Node VM test PASS** `/mnt/data/ns360_form_v3/test_v3.js`: kiểm tra cú pháp script nhúng, không checkbox/consent-notice, backend ghi 10 cột, RequestID ở I, status ở J, không tạo trùng, backend vẫn từ chối khi thiếu `privacyConsent=true`. Không dùng dữ liệu khách thật cho local test.
- **CẦN CHỦ DỰ ÁN REDEPLOY**: vì Google Apps Script Web App sống độc lập với GitHub/Drive, owner phải **dán lại cả 2 file `Code.gs` + `Form.html`** trong Apps Script đang chạy và chọn `Deploy > Manage deployments > Edit > New version > Deploy`, giữ `/exec` cũ. Nếu không, script cũ 12 cột sẽ báo lỗi với Sheet 10 cột. Không bật `LIVE_ENABLED=true` trước khi thử một đăng ký `RequestID v3-` mới trên link riêng và xác minh Sheet. Thư viện khách bình thường vẫn mở vì `LIVE_ENABLED=false`. Không sửa PDF, tin tức hay bài FB.


### Y.11. Tiếp tục phiên mới — đối chiếu sẵn sàng triển khai V3 (14/11/2026, sau 16:00 ICT)
- Đã đọc lại hai tệp checkpoint và commit gần nhất; HEAD khi kiểm tra đầu phiên: `435ac67ec7e88eabf5d67076b86d3964b1965a23`. GitHub repo `nmtu1525-art/nongsan360` nhánh main còn quyền push, Drive gốc và các thư mục Facebook truy cập được.
- Đã xác minh trực tiếp `library-registration/Form.html` GitHub khớp **tuyệt đối 4434 ký tự** bản Drive ID `1yzk8DZC3hjffAvwDn2TT25eQ6FtXfig5`; `library-registration/Code.gs` GitHub khớp **byte-to-byte theo base64** bản Drive ID `1NOv9o_3U4k78QeobxQJOW-9xIAKXp5sW`. Lưu ý Code.gs do Drive gắn MIME `application/octet-stream` nên fetch dạng text trả rỗng; đã xác minh lại qua base64, không coi đó là file mất nội dung.
- Đã đọc Google Sheet riêng tư `1_fKgwxop4-pTIORlnhRVCNCWJXLhZIpPV2nBMv8dDEw`: tab `Leads` vẫn có 10 header A:J đúng chuẩn V3; cột RequestID I và TrangThai J. Đọc giới hạn `I2:J40` thấy **1 bản ghi v2- ACTIVE**, **0 bản ghi v3-**. Không đọc/ghi nội dung cá nhân để báo cáo, không xóa dòng.
- Đã kiểm tra nguồn GitHub: `library-gate.js` vẫn có `LIVE_ENABLED = false`, route thử `#/thu-vien/kiem-tra-dang-ky`, endpoint `/exec` cấu hình. Công cụ web không truy cập được trang GitHub Pages hoặc Apps Script `/exec`, vì vậy **chưa thể xác nhận phiên bản Apps Script đã deploy, hiển thị thật hay gửi form v3 thành công**.
- **CHƯA THAY ĐỔI backend sản xuất hay bật public.** Ứng dụng Apps Script không có connector chỉnh mã/deploy trực tiếp trong phiên này. Chủ dự án cần mở dự án Apps Script hiện tại, dán đúng bản `Code.gs` và `Form.html` V3 từ GitHub/Drive, Save, `Deploy > Manage deployments > Edit > New version > Deploy` trên URL /exec đang dùng, sau đó đăng ký thử bằng thông tin của chính mình trên `https://nmtu1525-art.github.io/nongsan360/#/thu-vien/kiem-tra-dang-ky`.
- **Bước tiếp theo sau khi chủ dự án xác nhận deploy/thử:** kiểm tra `Leads!I:J` để thấy RequestID `v3-` và ACTIVE; nếu xác nhận form chuyển được CF-01 và ghi bản v3 đúng, tiếp tục chạy kiểm tra bảo vệ nội dung rồi mới chuyển `LIVE_ENABLED = true` sau chấp thuận. Không tự bịa kết quả.
- Bảo toàn toàn bộ 21 PDF, tin-tuc.json, mã website khác, bài Facebook đã lên lịch, dữ liệu khách và thư mục Drive.


### Y.12. Người dùng xác nhận link test thấy form nhưng website thường không thấy (14/11/2026)
- Đã rà soát mã `library-gate.js`: `LIVE_ENABLED=false` nên đây là khác biệt có chủ đích giữa route test `#/thu-vien/kiem-tra-dang-ky` và route giáo trình từ website; `index.html` đang gọi `window.NS360_LIBRARY_GATE.shouldBlock(route)` đúng.
- **Kiểm tra mới** tab `Leads!I1:J80` (không đọc PII): 2 bản ghi `ACTIVE`, gồm một `v2-` và **một `v3-`**; chứng minh backend V3 đã ghi được ít nhất một lượt đăng ký. Người dùng xác nhận link test thực tế đã hiển thị form. Kiểm tra URL Pages trực tiếp qua web tool không truy cập được, không khẳng định đã chạy E2E chuyển trang trên browser.
- Quyết định thực hiện theo phản hồi người dùng: bật gate trên route giáo trình website chính thức do đã có bằng chứng `v3- ACTIVE`; cập nhật cache-bust script trong `index.html` để browser lấy file mới. Bảo toàn 21 PDF và mọi dữ liệu; kiểm lại GitHub sau từng bước.
- Lưu ý: gate chỉ áp dụng điều hướng trang giáo trình trong website, không phải kiểm soát quyền truy cập PDF trực tiếp; dấu đã đăng ký lưu trên trình duyệt có thể khiến cùng browser không thấy form nữa, thử ở cửa sổ ẩn danh để xác minh khách mới.
- Bắt đầu triển khai; trạng thái từng commit sẽ ghi bổ sung ở dưới, không xóa dữ liệu.


### Y.13. ĐÃ BẬT live gate đọc thư viện trên GitHub sau khi thấy lead V3 (14/11/2026)
- **Đã thực hiện** thay `const LIVE_ENABLED = false;` thành `true;` trong `library-gate.js`. Commit `838a0afa1f32bb45e57b63399d0bccfe8e7b68b9`. Readback GitHub xác nhận `LIVE_ENABLED = true`, route chỉ chặn `/giao-trinh/{cf|ng|lm|ps}-NN.html` nếu browser chưa có dấu đã đăng ký; thư mục danh mục `/thu-vien/index.html` vẫn cho khách xem danh sách trước khi đăng ký.
- **Đã thực hiện** đổi script src trong `index.html` thành `library-gate.js?v=20261114-live-v3-1` để tránh cache JS cũ. Commit `c943ec159b9271d4bfe5eaa67440d544f5e92a55`. Đọc lại `index.html` xác nhận đúng một script mới và lời gọi `NS360_LIBRARY_GATE.shouldBlock(route)` còn nguyên.
- Trước thay đổi, đọc `Leads!I1:J80`: 1 bản ghi `v2-` ACTIVE và **1 bản ghi `v3-` ACTIVE**. Không đọc hoặc chép PII. Đây là xác minh backend đã ghi V3, nhưng chưa xác minh browser thật sau GitHub Pages publish.
- **Chờ kiểm thử từ người dùng trên web public**: mở cửa sổ ẩn danh → `https://nmtu1525-art.github.io/nongsan360/` → `Thư viện kiến thức` → chọn một giáo trình như CF-01, phải thấy form; gửi đăng ký nếu là chủ sở hữu thử nghiệm và kiểm tra vào bài. Khi đã đăng ký trên cùng browser sẽ **không** xuất hiện form lần nữa theo thiết kế. Chỉ nhấn mục thư viện ở menu sẽ vào danh sách, chưa xuất hiện form cho đến khi nhấn giáo trình.
- URL trang Pages qua web tool không truy cập được, nên đã xác minh GitHub commits/readback nhưng **chưa xác minh end-to-end trên site live**. URL PDF `/pdf/CF-01.pdf` trực tiếp không được bảo vệ bằng gate frontend; chức năng chỉ yêu cầu đăng ký ở các route giáo trình trong trang, không phải DRM.
- Không thay đổi thư mục `pdf/`, `tin-tuc.json`, dữ liệu bảng Leads, nội dung Fanpage/Metricool; đã bảo toàn chúng.


### Y.14. Điều chỉnh điểm kích hoạt form từ menu Thư viện (14/11/2026)
- Sau khi bật `LIVE_ENABLED=true`, rà soát `index.html` cho thấy menu chính `Thư viện kiến thức` trỏ đến `#/thu-vien/index.html`. Gate phiên vừa bật chỉ chặn `/giao-trinh/...`, vì vậy khách nhấn menu Thư viện vẫn thấy danh sách chứ chưa hiện form; chưa giải quyết trọn vẹn hiện tượng người dùng mô tả.
- **Quyết định:** mở rộng `protectedRoute` cho `/thu-vien/index.html` để người chưa đăng ký thấy form ngay khi bấm Thư viện; người đã đăng ký đi thẳng vào thư viện như cũ. Giữ các route giáo trình được bảo vệ. Đổi cache-bust thêm một phiên bản, kiểm GitHub readback.
- Không sửa backend `Code.gs`, `Form.html`, dữ liệu khách, 21 PDF, tin tức hay Facebook. Kiểm thử live browser sau commit vẫn cần người dùng xác nhận.


### Y.15. Hoàn thành bật form ngay từ nút Thư viện (14/11/2026)
- Đã bật `LIVE_ENABLED=true` cho các khách chưa có marker đăng ký trong browser.
- Sau phát hiện menu `Thư viện kiến thức` vào `#/thu-vien/index.html`, đã mở rộng `protectedRoute` chặn thêm `/thu-vien/index.html` (vẫn chặn các route giáo trình) cho người chưa đăng ký, commit `cba714ba60c0087a89d9d14fe40537864bb024e8`.
- Đã cập nhật `index.html` script `library-gate.js?v=20261114-live-v3-library-2` để tải JS mới, commit `6d79034157e70ca240192f93ce7843392157b50a`.
- Readback GitHub xác minh `gateLive=true`, `libraryIndexProtected=true`, route giáo trình còn bảo vệ, menu trỏ đúng library index, script mới chỉ xuất hiện đúng 1 lần, và router gọi `shouldBlock(route)`.
- **Hướng dẫn thử**: ở tab ẩn danh mới, mở `https://nmtu1525-art.github.io/nongsan360/`, bấm **Thư viện kiến thức** → mong đợi thấy form V3. Nếu đã đăng ký trong cùng trình duyệt, dấu `localStorage` khiến form không hiện nữa đúng thiết kế. Cần xác nhận GitHub Pages live và submit → hiển thị thư viện trên thiết bị thật; công cụ web bên này không truy cập được URL live.
- Đã kiểm `Leads!I1:J80` thấy 1 v2 ACTIVE và 1 v3 ACTIVE trước khi bật; không chỉnh dữ liệu, không yêu cầu thêm thông tin cá nhân trong chat. Không sửa tài liệu/tin tức/Metricool.


### Y.16. Chẩn đoán hiển thị form khác nhau giữa ẩn danh và điện thoại (14/11/2026)
- Người dùng báo: tab ẩn danh lần đầu hiện form, lần hai không hiện; thử điện thoại cũng không thấy, hỏi có phải do IP. Đã đọc lại GitHub `library-gate.js` và `index.html`: `LIVE_ENABLED=true`, protectedRoute gồm `/thu-vien/index.html` + các trang `/giao-trinh/...`, tham chiếu JS `library-gate.js?v=20261114-live-v3-library-2` đúng.
- **Không có kiểm tra IP** trong logic gate. Chỉ kiểm tra marker `ns360-library-reader-v1` trên `localStorage` cùng origin và `accessThisSession` trong bộ nhớ tab. Sau gửi đăng ký thành công, marker `granted-2026-11-14` có thể được lưu. Các tab ẩn danh vẫn có thể dùng chung storage cho tới khi đóng *tất cả* phiên/tab ẩn danh; điện thoại khác không dùng chung localStorage với máy tính.
- `#/thu-vien/kiem-tra-dang-ky` là route chẩn đoán cưỡng bức form kể cả đã có marker; mở thẳng trang chủ không tự hiển thị form, phải vào menu `Thư viện kiến thức`.
- **Chưa xác định nguyên nhân điện thoại không hiện**: có thể thiếu thao tác vào Thư viện, cache phiên JS cũ, trình duyệt đã lưu marker riêng, hoặc JS/script trang live khác với mã GitHub. Công cụ web không mở được URL Pages và URL JS live, nên chưa xác minh triển khai qua trình duyệt thật. Không khẳng định do IP hay sửa mã khi chưa có bằng chứng.
- Bước kiểm tra người dùng: đóng mọi tab ẩn danh, mở một phiên mới → trang chủ → Thư viện; trên điện thoại mở riêng `https://nmtu1525-art.github.io/nongsan360/#/thu-vien/kiem-tra-dang-ky` xem form có hiện. Đối chiếu hai trường hợp trước khi sửa gate; không yêu cầu nhập PII vào chat.
- Không thay đổi `library-gate.js`, `index.html`, form Apps Script, Leads, PDF, tin, Facebook/Metricool.


### Y.17. Xác nhận hiện form trên trình duyệt Cốc Cốc (14/11/2026)
- Sau khi người dùng báo trình duyệt trước đó không hiện form trong lần mở lại và điện thoại, đã thử **trình duyệt Cốc Cốc và xác nhận form đăng ký xuất hiện**.
- Kết quả này **phù hợp với cơ chế lưu dấu đăng ký theo browser/localStorage**: trên browser khác chưa có marker thì hiện form, browser đã có marker sẽ bỏ qua; không có logic kiểm tra IP trong `library-gate.js`.
- Đã xác nhận ít nhất một trình duyệt thực tế tải giao diện form qua website theo phản hồi của chủ dự án. Chưa có chứng cứ để khẳng định mọi trình duyệt và bước submit/điều hướng sau đó đều hoạt động hoàn toàn.
- **Không sửa mã thêm** vì đây là hành vi dự kiến cho khách đã đăng ký. Giữ `LIVE_ENABLED=true`, bảo toàn 21 giáo trình, dữ liệu Leads, tin tức và 6 bài Fanpage đã lên lịch.
- Bước nghiệm thu còn lại: nếu cần, kiểm tra 1 phiên khách mới thực tế hoàn tất form V3 và vào thư viện, kiểm tra `RequestID v3-` trên Sheet mà không đưa thông tin cá nhân vào chat.


### Y.18. Bắt đầu thêm tỉnh/thành phố và liên kết Google Maps cho lead mới (14/11/2026)
- Yêu cầu: thêm cột thành phố cho đăng ký thư viện, có vị trí tương đối trên Google Maps càng tốt. Chỉ lưu **thành phố ước tính**, không lưu IP, tọa độ chính xác hay lịch sử di chuyển.
- Trước khi chỉnh, đã xác minh `Leads` có 24 cột, 10 header A:J hiện có, dữ liệu khách cũ và `TrangThai` cột J; `Code.gs` hiện `appendRow` 10 trường. Sẽ **thêm K:L** ngoài schema hiện hữu, không chèn vào giữa để tránh phá bảng đang hoạt động.
- Phương án: form có ô thành phố không bắt buộc và nút chủ động `Ước tính qua IP` (thông báo rằng truy vấn IP tới bên cung cấp dịch vụ chỉ khi khách nhấn nút), tự điền city nếu thành công; có thể nhập tay khi thất bại. Backend xác thực/sanitize tên thành phố, tạo Google Maps URL chỉ theo tên thành phố + quốc gia Việt Nam (không ghim tọa độ nhà); không lưu IP. Nếu trống vẫn đăng ký bình thường.
- Sẽ giữ nguyên cơ chế gate, 21 PDF, tin tức, Facebook, dữ liệu cũ. Cần chủ dự án cập nhật Apps Script `Code.gs` + `Form.html` và redeploy phiên bản mới vì connector không chỉnh deployment Apps Script.


### Y.19. Thực thi geo-IP tự động lúc đăng ký, không hỏi GPS (14/11/2026)
- Chủ dự án muốn thêm cột thành phố xác định ngầm và liên kết Google Maps tương đối. Chốt phương án **tự tra cứu geo-IP sau khi người dùng bấm gửi form**; không bật popup GPS, không dùng `navigator.geolocation`, không lưu IP/tọa độ người dùng hoặc tracking lịch sử.
- Dùng dịch vụ IP geolocation HTTPS có CORS `https://ipwho.is/?fields=success,city,region,country` với giới hạn miễn phí ~1.000 lượt/ngày theo tài liệu nhà cung cấp; thất bại/trễ thì gửi form bình thường với thành phố để trống. Mỗi lượt gửi chỉ dùng city, region, country, không truyền tên hoặc số điện thoại cho nhà cung cấp GeoIP. Có thông báo ngắn tên dịch vụ và mục đích trước nút đăng ký/chính sách.
- Google Maps URL chuẩn `https://www.google.com/maps/search/?api=1&query=` + mã hóa thành phố, khu vực, quốc gia. Link đánh dấu khu vực hành chính ước tính, không phải nơi ở.
- Kế hoạch mở rộng cuối bảng `Leads`: **K = ThanhPhoUocTinh; L = GoogleMapsUocTinh**, giữ A:J như hiện tại, bảo toàn dữ liệu cũ và dropdown trạng thái J. Backend phải kiểm 12 header, append 12 fields; form bản v4 `RequestID v4-`. `Code.gs`, `Form.html`, policy, README cần cập nhật GitHub và bản sao Drive khi có thể.
- LƯU Ý QUAN TRỌNG: Apps Script deploy trên tài khoản người dùng là bản độc lập, connector GitHub/Drive/Sheets không có quyền tự redeploy dự án đó. Không khẳng định tính năng live cho đến khi chủ dự án triển khai Code.gs + Form.html, thử có RequestID v4- và Google Maps hợp lệ. Giữ gate website hiện có, 21 PDF, tin tức và Facebook.


### Y.20. Gọn form V4, không thông báo riêng về thành phố (14/11/2026)
- Chủ dự án yêu cầu "không cần thông báo khi đăng ký đâu" sau chặng bổ sung geo-IP. Diễn giải: **không hiển thị một lời nhắc riêng về định vị**, không ghi trạng thái "đang xác định khu vực" trong form; giữ biểu mẫu gọn và phản hồi thành công/lỗi cơ bản.
- Vẫn phải duy trì liên kết `Chính sách dữ liệu cá nhân` trên form, trong chính sách mô tả dùng IP để suy ra thành phố qua dịch vụ bên thứ ba, không thu GPS hay lưu IP. Không âm thầm ẩn thông tin xử lý dữ liệu trong chính sách.
- Mã V4 `library-registration/Form.html` trên GitHub đã được soạn nhưng **chưa redeploy Apps Script**; bản Drive cũ vẫn V3 lúc đọc. Giữ K:L trên Sheet, không sửa dữ liệu cũ hoặc thay đổi gate live. Cần sửa Form và tài liệu hướng dẫn, kiểm chứng readback rồi đồng bộ Drive nếu có đường upload hợp lệ. Không tuyên bố việc định vị chạy thật nếu chưa test phiên V4.


### Y.21. Đã bỏ thông báo riêng về định vị khỏi form V4 (14/11/2026)
- Theo yêu cầu "không cần thông báo khi đăng ký đâu", đã sửa GitHub `library-registration/Form.html` commit `0e057a029851dd7809b63ce903ed21dafd5cb851`: xóa đoạn nhỏ riêng giải thích GeoIP và không còn dòng trạng thái `Đang xác định khu vực gần đúng...`. Form chỉ giữ liên kết `Chính sách dữ liệu cá nhân` với lời giải thích chung, trạng thái `Đang ghi nhận đăng ký...`, thành công/lỗi vẫn hiển thị.
- **Không bỏ công khai thông tin quan trọng trong chính sách**: `chinh-sach-du-lieu.html` vẫn giải thích dịch vụ ipwho.is nhận IP khi truy cập, trang lưu khu vực ước tính và Maps URL chứ không lưu IP/GPS.
- Đã cập nhật README commit `d99c38750b50b8f4dc309fe7937855891f0cde76` tương ứng. Readback form cho thấy vẫn có request `v4-`, tra cứu `ipwho.is`, liên kết chính sách và không có thông báo địa điểm riêng.
- Google Sheet `Leads!I1:L4` đã có cột `ThanhPhoUocTinh` (K), `GoogleMapsUocTinh` (L); không sửa dữ liệu khách. Hiện đọc thấy một bản ghi v3 còn lại, không có bản ghi v4. Bản Form trên Drive ID `1yzk8DZC3hjffAvwDn2TT25eQ6FtXfig5` vẫn v3 cũ — **chưa đồng bộ bản V4 lên Drive**, không khẳng định đã làm.
- **Apps Script Web App hiện chưa được redeploy sang V4**; muốn dùng tính năng khu vực phải copy cả Code.gs V4 và Form.html V4 từ GitHub vào dự án Apps Script, Save và Deploy New version, thử một đăng ký `v4-` rồi kiểm K:L. Giữ website gate live, 21 PDF, tin tức, lịch Facebook nguyên trạng.


### Y.22. Chủ dự án xác nhận đã cập nhật Apps Script V4 (14/11/2026)
- Người dùng xác nhận đã cập nhật Apps Script sau hướng dẫn bản V4 (thành phố ước tính và Google Maps, không thông báo định vị riêng).
- Đã đọc lại Google Sheet riêng tư `1_fKgwxop4-pTIORlnhRVCNCWJXLhZIpPV2nBMv8dDEw`, tab `Leads!I1:L60`. Header hiện vẫn `RequestID, TrangThai, ThanhPhoUocTinh, GoogleMapsUocTinh`. Hiện quan sát **1 bản ghi v3 ACTIVE**, **chưa có v4**; không đọc/chia sẻ họ tên, SĐT, email; các cột K:L của bản ghi cũ trống, đúng dự kiến.
- Đã thử mở Web App /exec và GitHub Pages bằng công cụ web nhưng công cụ không truy cập được; chưa có khả năng đọc phiên bản thực tế từ /exec, nên không thể độc lập chứng nhận redeploy thành công chỉ từ xác nhận người dùng.
- **Bước nghiệm thu**: trên một trình duyệt chưa lưu marker đăng ký, đi `https://nmtu1525-art.github.io/nongsan360/#/thu-vien/index.html`, điền đăng ký thử bằng thông tin của chính chủ dự án; trang cần mở thư viện và bảng Leads thêm RequestID `v4-` cột I, trạng thái ACTIVE J. K có thể ghi tên thành phố; L là link Maps tìm thành phố. Nếu K/L trống mà v4 có ghi, kiểm tra GeoIP/CORS mà không ngăn khách đọc. Nếu vẫn v3 hoặc báo lỗi, xem lại Apps Script Deploy > Manage deployments > Edit > New version cho cả Code.gs và Form.html.
- **Chưa chỉnh website/Apps Script/Sheet**, giữ nguyên lead cũ, PDF, tin tức, Metricool; chỉ cập nhật checkpoint. Không tuyên bố tính năng GeoIP đã chạy chính thức.


### Y.23. Kiểm tra hai đăng ký V4 không có thành phố, sửa GeoIP dự phòng (14/11/2026)
- Người dùng gửi ảnh tab Leads: hai bản ghi RequestID `v4-` ACTIVE, cột K `ThanhPhoUocTinh` và L `GoogleMapsUocTinh` đều trống. Đã đọc lại đúng bảng `Leads!I1:L25` qua Drive: 01 bản v3, 02 bản v4, cả ba K/L trống; không truy xuất PII.
- Kết luận được hỗ trợ: phiên bản Google Apps Script V4 đã ghi `v4-` vào bảng thành công, nhưng bước client-side `estimateCity()` trong `Form.html` trả trống (có thể API hoặc trình duyệt/iframe/CORS/timing); **không xác định được chính xác lỗi kết nối chỉ qua Sheet**, cần tránh gán chắc chắn cho CORS khi chưa có console.
- Tại thời điểm kiểm tra, `Form.html` V4 chỉ gọi `ipwho.is/?fields=success,city,region,country` với timeout 2200 ms và trả `{}` cho mọi ngoại lệ. K/L phụ thuộc city, nên luôn rỗng khi nguồn API không trả được.
- Chuẩn bị phương án v4.1: thử API GeoJS `https://get.geojs.io/v1/ip/geo.json` (có city/region/country, CORS/HTTPS được nhà cung cấp mô tả) làm nguồn đầu, ipwho.is làm dự phòng, không yêu cầu GPS/API key, không lưu IP, không ngăn đăng ký khi API thất bại. Giữ link chính sách gọn, bổ sung tên GeoJS vào chính sách dữ liệu và README; không thay backend/schema 12 cột/website gate/21 PDF.
- Chủ dự án cần cập nhật `Form.html` mới trong Apps Script và **Deploy New version**, trừ khi có cách sửa trực tiếp deployment được kiểm chứng. Hai bản ghi v4 K/L trống không thể hồi tố vị trí mà không có IP trước đây; không tự suy ra hay điền vị trí.


### Y.24. ĐÃ SỬA Form V4.1 lấy thành phố theo GeoJS + nguồn dự phòng (14/11/2026)
- Đã xác nhận trực tiếp Google Sheet tab `Leads!I1:L25`: **1 bản v3 ACTIVE, 2 bản v4 ACTIVE**, tất cả K/L trống; chứng minh form V4 ghi được đăng ký nhưng GeoIP không trả city. Không thu thập/tái sử dụng IP và không điền ngược K/L lịch sử.
- **Đã sửa GitHub `library-registration/Form.html`**: `lookupApproximateCity` dùng `https://get.geojs.io/v1/ip/geo.json` là nguồn chính và `https://ipwho.is/?fields=success,city,region,country` dự phòng. Mỗi nguồn timeout 2600 ms; nếu chỉ có vùng/tỉnh sẽ dùng vùng đó làm giá trị xấp xỉ; nếu cả hai lỗi thì vẫn ghi form bình thường, K/L để trống. Không gửi PII cho nhà cung cấp, không yêu cầu GPS, không thông báo riêng trên form. Commits `583f75731b7e44cc2d5313f2a2453d0aa58f684e`, `b7045c0a80ba5b9adbe49ad37ffffc0f598d0722`.
- Chính sách dữ liệu `chinh-sach-du-lieu.html` đã bổ sung GeoJS và ipwho.is dự phòng, commit `43f6dfd7579cc1fdd696c841beb72c571b08319f`. README cập nhật V4.1, commit `ef4e1cfc493bcad9b2c435e85650ea8f9f9507e5`.
- Đã kiểm tra local Node các nhánh: GeoJS thành công, GeoJS lỗi rơi về ipwho, chỉ có region, hai nguồn lỗi đều xử lý bình thường (PASS). Việc thử bằng mock **không thay thế test trên browser/Apps Script thực**.
- **CHƯA CẬP NHẬT APPS SCRIPT ĐANG DEPLOY**: chủ dự án phải thay duy nhất `Form.html` bản V4.1 trong Apps Script, Save -> Deploy -> Manage deployments -> Edit -> New version -> Deploy. `Code.gs` V4 đã xử lý 12 cột đúng; không cần chỉnh Sheet, trang website, gate.
- Sau deploy thử một đăng ký mới, kiểm K/L có tên thành phố hoặc vùng và URL Google Maps. Nếu vẫn trống, cần log console trình duyệt hoặc kiểm tra nơi gọi dịch vụ GeoIP trong iframe. Bản Drive Form ID `1yzk8DZC3hjffAvwDn2TT25eQ6FtXfig5` trước đó vẫn V3, **chưa đồng bộ bản V4.1 lên Drive**; dùng GitHub làm nguồn chính.
- Bảo toàn PDF/News/Website, 6 bài Facebook, dữ liệu cũ; không bịa vị trí.


### Y.25. Bắt đầu bổ sung GPS có xin quyền và phường/xã tùy chọn (14/11/2026)
- Yêu cầu: khách mở GPS thì dùng kết quả đã cấp quyền; nếu chưa cấp thì trình duyệt hỏi quyền, từ chối vẫn đăng ký thành công và dùng geo-IP ước tính; phường/xã nếu xác định được, link Maps gần khu vực.
- Đã đọc lại GitHub `library-gate.js`, `library-registration/Form.html`, `Code.gs`, policy, README và tab Sheets. Hiện có 12 header A:L và 4 lượt đăng ký trong phạm vi đọc, các bản cũ phải giữ nguyên; `LIVE_ENABLED=true`.
- Kỹ thuật lựa chọn: yêu cầu Geolocation API ở **trang chủ GitHub Pages (top-level)** qua postMessage từ Form iframe Apps Script và nonce một lần, vì quyền geolocation trong iframe bên thứ ba có thể bị chặn. Khi người dùng bấm gửi form, browser sẽ hỏi quyền nếu chưa granted; nếu từ chối/timeout thì GeoJS/ipwho.is ước tính theo IP. Không làm giả phường/xã khi bản đồ thiếu dữ liệu.
- Đảo tọa độ thành tên khu vực bằng endpoint browser BigDataCloud `https://api.bigdatacloud.net/data/reverse-geocode-client` chỉ khi người dùng đồng ý GPS; dịch vụ bên thứ ba thấy tọa độ và IP của kết nối, phải ghi rõ trong chính sách dữ liệu. Chỉ gửi về Apps Script **tên thành phố/region/ward hoặc khu vực**, không gửi IP/lat/lon; Google Maps vẫn dựa trên tên địa danh, không lưu tọa độ chính xác.
- Dự kiến thêm M:`PhuongXaUocTinh` và N:`NguonDinhVi` bên phải K:L; backend 14 trường, không đổi các cột A:L hoặc dữ liệu cũ. Không bật thay đổi trong Apps Script /exec nếu chưa user redeploy. Cần nghiệm thu ba nhánh: GPS granted có phường (nếu có nguồn), denied fallback IP, lỗi toàn bộ vẫn đăng ký. Website giữ 21 PDF, news JSON, Facebook.
- Chỉ cập nhật checkpoint và mã sau khi đọc SHA mới, readback và kiểm tra cú pháp; không tự nhận đã test trên điện thoại thật.


### Y.26. ĐÃ TẠO MÃ V5 GPS tùy chọn / phường-xã và 14 cột Sheets (14/11/2026)
- Đã hoàn tất sửa mã nguồn theo yêu cầu: Google Sheets `Leads` có 14 header A:N, **bổ sung M=`PhuongXaUocTinh` và N=`NguonDinhVi`**, giữ A:L, dropdown J, 4 dòng lịch sử (01 v3 + 03 v4 trong phạm vi đọc); các M/N cũ trống đúng thiết kế. Đã kiểm tra metadata cell (header in đậm, trạng thái J còn validation).
- `library-gate.js`: xử lý `NS360_LIBRARY_LOCATION_REQUEST` từ iframe Apps Script bằng nonce khớp + origin Google được tin cậy; yêu cầu `navigator.geolocation.getCurrentPosition` ở **GitHub Pages top-level** sau submit. Khi được phép mới gọi BigDataCloud từ trình duyệt với tọa độ hiện tại; parse thành phố, tỉnh, phường/xã/khu vực và lọc bỏ lat/lon; khi phản hồi `NS360_LIBRARY_LOCATION_RESULT` chỉ có tên địa danh và nguồn `GPS_CHO_PHEP`. Giới hạn chờ và đảm bảo fallback. Commit `ea5f6e27f6db2bd3db7ce5624b37b82194cacacf` và sửa phân biệt nguồn IP, Unicode phường/xã commit `58bb2999e4a90aa117f35430697520d59b023fea`.
- `library-registration/Form.html`: V5 (`v5-`) bắt đầu yêu cầu vị trí sau cú nhấn đăng ký, chờ tối đa khoảng 7,7 giây; nếu không được GPS thì tra thành phố GeoJS rồi ipwho.is, vẫn ghi bình thường khi không có dữ liệu. Payload chỉ city, region, country, ward, locationSource; không có IP, lat/lon. Commit `8a302704f1bca1630d0206c6dad8896214a8d4fd`.
- `library-registration/Code.gs`: V5 kiểm 14 header và append 14 trường, giữ RequestID I và status J; liên kết Maps tìm tên phường/xã + thành phố, **không có tọa độ GPS chính xác**. `NguonDinhVi` chỉ GPS_CHO_PHEP / IP_UOC_TINH / KHONG_XAC_DINH; phường/xã chỉ lấy từ GPS được cho phép. Commit `b4b7e65cde82f3bfab7a871cfc4d12bd85a4812e`.
- `index.html` đổi cache bust `library-gate.js?v=20261114-v5-optional-gps-1`, commit `1007a7270dfa70dbde511c308161f14412a1715c`; vẫn có 42 liên kết PDF và router gate. Chính sách dữ liệu cập nhật quyền GPS tự nguyện, dịch vụ BigDataCloud thấy IP/tọa độ, IP fallback, giữ quyền từ chối, commit `a17f8101877b4893e65ad4e87b334794cecb3b44`. README V5 commit `32c3dc254d996061a0f8ee1e8c906a3b907723de`.
- Đã readback GitHub 6 file và Google Sheets M:N, xác minh tất cả đặc điểm chính và không có dòng lịch sử bị thay đổi. **Chưa xác minh end-to-end trên điện thoại/GitHub Pages public**. Google Apps Script `/exec` đang chạy là bản deploy độc lập, chưa được chủ dự án cập nhật `Code.gs` + `Form.html` V5. Cần chủ dự án cập nhật **cả hai file**, Deploy > Manage deployments > Edit > New version rồi thử 3 trường hợp GPS cho phép, từ chối, API lỗi.
- Bản code raw trong Drive còn cũ (trước đó Form Drive ID `1yzk8DZC3hjffAvwDn2TT25eQ6FtXfig5` bản V3); chưa có đường connector được hỗ trợ để upload source GitHub vào đúng ID Drive nên **chưa tuyên bố đã đồng bộ Drive code**. GitHub main là bản nguồn để copy.
- Không yêu cầu OpenAI API key, không thay đổi 21 PDF, `tin-tuc.json`, lịch Facebook hoặc dữ liệu khách.


### Y.27. Kiểm tra cuối V5 và sửa cơ chế gửi lại (14/11/2026)
- Đã thay `locationRequestHandled` bằng `locationLookupPromise` trong `library-gate.js` để Form khi gửi lại vẫn nhận được kết quả GPS trước đó, không kích hoạt nhiều yêu cầu quyền. Commit `fcef6576bed9cdb2ac3acdae07b3a74efee132d2`.
- Đã đổi cache-bust duy nhất trong `index.html` sang `library-gate.js?v=20261114-v5-optional-gps-2`, commit `d6b7e0aeef0e930e33df0c7baf6aca1e00519100`; README khớp, commit `cf7994e0e42157200959dab417197582bf16ba16`.
- Readback `index.html` không có CSP meta gây chặn fetch mới, có đúng một import JS V5 và router gate; `library-gate.js` kiểm nonce, nguồn Google, request location; regex phường/xã dùng `(?:\\s|$)` thay vì word boundary ASCII. `Form.html` V5 còn yêu cầu GPS, timeout, IP fallback; `Code.gs` append 14 trường; chính sách giải thích GPS opt-in và nhà cung cấp thấy tọa độ.
- Đã kiểm lại Sheets `Leads!A1:N1`: header 14 cột đúng, 4 lượt lịch sử trong phạm vi đọc vẫn còn (v3 + 3 v4), hai cột M:N chưa có dữ liệu; `TrangThai` cột J vẫn giữ dropdown ở những hàng kiểm tra. Không tạo bản ghi giả.
- Kết quả kiểm tra là **đối chiếu mã GitHub + cấu trúc Sheet**, chưa phải kiểm thử browser thực/live GPS và chưa xác nhận Apps Script V5 deploy. Thử tải file từ raw GitHub qua container không được (DNS/cache miss), nên chưa chạy node --check trực tiếp trên đúng source GitHub; không tự nhận đã chạy.
- Đang chờ chủ dự án **copy cả Code.gs và Form.html V5 sang Apps Script /exec, Save và Deploy New version**; rồi thử cho phép GPS, từ chối GPS, và lỗi mạng. Nếu cần sửa thì tiếp tục từ đây. Không tự ý cập nhật dữ liệu lịch sử hay bật lại workflow API.


### Y.28. Android hiển thị lỗi Google Drive trong iframe Apps Script (14/11/2026)
- Người dùng gửi ảnh Android: khi vào đăng ký đọc thư viện trên điện thoại, trong khung có logo Google Drive và thông báo "Rất tiếc, không thể mở tệp tại thời điểm này. Vui lòng kiểm tra địa chỉ và thử lại", trong khi PC hiển thị Form.
- Đã đối chiếu GitHub: website `library-gate.js` nhúng Google Apps Script Web App `/exec` vào `iframe#ns-libgate-frame`, direct fallback hiện đang nằm SAU iframe cao 700px trên điện thoại nên người dùng khó thấy. `library-gate.css` định nghĩa iframe cao 700px dưới 520px.
- Google công bố các sự cố Apps Script trên Android khi ứng dụng Google Drive can thiệp vào URL/multiple logged-in accounts: Issue Tracker 520300212 (05/06/2026) và 574946511 (18/10/2026); tài liệu Apps Script Troubleshooting khuyên thử Chrome incognito chỉ một Google account. Screenshot phù hợp nhưng KHÔNG khẳng định chắc một nguyên nhân duy nhất.
- Kế hoạch bản vá không phá form PC: đưa đường dẫn hỗ trợ lên TRƯỚC iframe và hiện hướng dẫn Android mở website bằng Chrome/Samsung Internet chế độ ẩn danh; bổ sung khả năng sao chép link test website nhanh, giữ direct Apps Script URL fallback; không tùy tiện sửa chế độ chia sẻ Google Drive, không thay backend/GPS/Sheets.
- Cần kiểm tra sau commit trên Android thật. Không thể dùng kết quả truy cập web.open /exec/GitHub Pages trong công cụ để chứng minh chạy live vì bên công cụ vẫn không mở được hai URL này.


### Y.29. ĐÃ THÊM HƯỚNG DẪN VÀ NÚT SAO CHÉP LINK TRÊN ĐIỆN THOẠI (14/11/2026)
- Sau khi xác minh lỗi hiển thị trong `iframe#ns-libgate-frame` là trang Drive, đã sửa `library-gate.js` đưa phần hướng dẫn dành cho Android lên **trước iframe**, nút `Sao chép liên kết đăng ký` sao chép URL **GitHub Pages** tại route Thư viện hoặc route test, không sao chép Apps Script. Copy API thất bại sẽ hiện cửa sổ manual-copy URL. Chuyển liên kết trực tiếp tới Apps Script từ bên dưới iframe lên phía trên để dễ thấy. Commit `40ab4e850000dfa3f9404c7ec022f3a85a4fe8ef`.
- `library-gate.css` thêm card hỗ trợ hiển thị khi viewport <=800px, ẩn trên PC, nút rõ ràng, commit `7a4b53398a1358905a7ed7768f5a483b1c9a9eef`.
- `index.html` cache-bust `library-gate.css?v=20261114-mobile-error-help-1` và `library-gate.js?v=20261114-v5-android-help-3`, commit `e9d6ae99be6a1961cfa7c22b7166cbd19c8e7c3f`. GitHub readback xác nhận JS enabled, iframe vẫn còn, URL /exec không thay, 42 href PDF không đổi, script/CSS mới đúng một lần.
- README `library-registration/README.md` ghi rõ báo cáo lỗi Google Drive trong Apps Script Android và cách thử Chrome/Samsung Internet ẩn danh, commit `a4ca79f36ae9a48430c84d1cd1f49854086eccd0`.
- **CHƯA GIẢI QUYẾT TRIỆT ĐỂ** lỗi Google Workspace nếu trang /exec cũng bị chặn trong mọi browser trên điện thoại; đây là phương án phục hồi giao diện thay vì khẳng định sửa được Google. Nếu người dùng test Chrome ẩn danh vẫn lỗi, phải xem deployment scope, nhiều tài khoản Google, hoặc đổi kiến trúc tránh iframe Apps Script. Không chỉnh Apps Script backend, Google Sheet, 21 PDF, tin tức, Facebook hoặc dữ liệu khách. Người dùng cần gửi ảnh khi thử ở Chrome/Samsung Internet ẩn danh.


### Y.30. Chủ dự án quyết định chỉ giữ thành phố IP, ngừng GPS/Maps (14/11/2026, 18:36 ICT)
- Chủ dự án gửi ảnh Android vẫn báo Google Drive không thể mở tệp trong iframe ngay cả khi đã bổ sung nút hỗ trợ, quyết định **dừng yêu cầu GPS/phường-xã và không cần liên kết Google Maps; chỉ giữ thành phố ước tính theo IP**.
- Đã đọc lại hai checkpoint, GitHub source V5 và Google Sheets. Tại `Leads!I1:N20` đang có **5 lượt đăng ký trong khoảng đọc**, gồm một V3, ba V4, một V5; một số bản có city/map; bản V5 có nguồn định vị. Không xóa hoặc điền lại các bản ghi cũ.
- Kế hoạch V6 ổn định: giữ lại **14 cột A:N vật lý và mọi dữ liệu lịch sử** để Apps Script không lệch dữ liệu; trong bản đăng ký mới chỉ ghi cột K thành phố ước tính GeoJS/ipwho.is, L:N để trống (không tạo Maps/GPS/ward/source mới); ẩn L:N trong Google Sheet (có thể hiện lại) để giao diện chỉ cần cột K. Form bỏ mọi yêu cầu GPS/postMessage vị trí, chỉ tra IP không bắt buộc; thông tin đăng ký vẫn ghi và chuyển vào thư viện kể cả geo-IP lỗi.
- `library-gate.js` website xóa tất cả logic GPS/BigDataCloud; giữ registration gate và đường dẫn Apps Script hiện tại. Dữ liệu khách cũ, 21 PDF, tin tức, lịch Facebook nguyên vẹn; chính sách dữ liệu sửa về GeoIP đơn thuần.
- **Lỗi Android Google Drive là vấn đề nhúng Google Apps Script độc lập với định vị**, không tự giải quyết nhờ bỏ GPS/Maps; vẫn cần kiểm tra lại Web App /exec, Android browser hoặc đổi kiến trúc form nếu khách không truy cập được. Không tuyên bố đã khắc phục lỗi điện thoại khi chưa kiểm chứng.
- Trước thao tác dài đã lưu checkpoint. Sau thay đổi, phải cập nhật cả `Code.gs` và `Form.html` trên Apps Script và Deploy New version vì GitHub độc lập với Web App đang chạy.


### Y.31. ĐÃ GIẢM VỀ V6 CHỈ THÀNH PHỐ THEO IP, NGỪNG GPS/MAPS (14/11/2026, 18:36 ICT)
- Theo xác nhận chủ dự án, không tiếp tục định vị GPS/phường-xã và không cần liên kết Google Maps. Đã cập nhật GitHub `library-registration/Form.html` V6 (RequestID `v6-`, chỉ GeoJS→ipwho.is tùy chọn, không xin quyền GPS, không gửi ward/source) commit `1c18b013194e066b556880ace55dfd115d1cfe4b`.
- `library-registration/Code.gs` V6 giữ xác thực **14 header A:N** để tương thích dữ liệu cũ nhưng chỉ ghi thành phố tại **K**; để **L, M, N trống** cho mọi đăng ký mới; không tạo map URL. Commit `2c407916a72c5c17cf0d73d6a25a9994ccf3dfa6`.
- `library-gate.js` đã loại bỏ toàn bộ `getCurrentPosition`, BigDataCloud, sự kiện vị trí và card "Sao chép liên kết" từng thất bại trên Android; vẫn bật gate, giữ iframe Apps Script và đường dẫn thử mở form ở tab riêng. Commits `60d27f403e03107b30b3bab3d616b40e1d55f189`, `d47f8cfcd44946137173b75455a7040b25652e69`. `library-gate.css` xóa CSS không dùng commit `1e778286ea88c8a2bbfb26040dec74d180a6280b`. `index.html` cache-bust `library-gate.js?v=20261114-city-ip-v6` và `library-gate.css?v=20261114-city-ip-v6`, commit `afdb30dc6947df516e5af432f05cc01cdfd6baaf`. Readback đảm bảo còn 42 href PDF và router `shouldBlock`.
- `chinh-sach-du-lieu.html` V6 bỏ thông tin GPS/BigDataCloud/Maps, nêu tra cứu IP thành phố và không gửi PII tới GeoJS/ipwho.is, đồng thời giữ thông báo dữ liệu lịch sử; commit `d09bf53b23405c17fade1bf7879f255dcb34a38d`. README V6 commit `5bd97c6dfb74737238c7eb25814da3c6ec9b9755`.
- Google Sheets `Leads`: **đã ẩn L:N** (không xóa cột/dữ liệu cũ), chỉ K thành phố hiện ra; ghi chú header K:N và sheet `HuongDan!A11:B12` được cập nhật V6. Đọc lại `Leads!I1:N20` thấy 5 bản ghi lịch sử (v3:1, v4:3, v5:1) vẫn còn, trong đó các bản có link Maps cũ được giữ nguyên nhưng ẩn. Data validation trạng thái J không bị thay đổi.
- **Cần owner thực hiện cuối**: thay cả `Code.gs` và `Form.html` trong Google Apps Script đang triển khai, Save và `Deploy → Manage deployments → Edit → New version → Deploy`, giữ cùng URL /exec. Hiện **chưa có bản v6-** hay kiểm chứng Android end-to-end. Không khẳng định website đã có V6 thực chạy chỉ vì GitHub đã cập nhật.
- **Lỗi Google Drive trên Android vẫn còn**, đã được ảnh người dùng xác nhận sau khi thử workaround. Đây là vấn đề tải Web App iframe, không phải do GPS/Maps; muốn sửa triệt để cần phân tích Web App quyền và cân nhắc form không phụ thuộc iframe. Không tự bỏ gate/mở quyền xem thư viện trên mobile vì chủ dự án chưa yêu cầu. Không động PDF, tin tức, Facebook, dữ liệu khách.


### Y.32. Android lỗi Drive cả khi mở riêng: chuẩn bị form first-party an toàn (14/11/2026, sau 19:18 ICT)
- Chủ dự án chụp lại màn Android khi mở trực tiếp Apps Script /exec: **Google Drive báo không thể mở tệp**. Như vậy không chỉ là CSS iframe mà còn là luồng điều hướng URL Apps Script trên Android. Nhiều tài khoản Google / xử lý Android có bug công khai (Google Issue Tracker 520300212, 574076813), nhưng chưa khẳng định nguyên nhân duy nhất.
- Yêu cầu ngầm từ việc báo lỗi lần nữa: sửa **gốc trải nghiệm điện thoại** mà không bỏ yêu cầu khách đăng ký và không mất dữ liệu. Đã kiểm tra mã đang chạy dùng Apps Script HTML UI `google.script.run`, không có endpoint HTTP xác nhận POST. GitHub Pages tĩnh không thể gọi `google.script.run` trực tiếp.
- Thiết kế giai đoạn an toàn: **Form nhập ngay trên GitHub Pages (first-party)**; gửi JSON qua `fetch POST mode:no-cors` tới Apps Script `doPost` (không render UI Google); **không coi opaque fetch là thành công** mà xác nhận server đã lưu qua JSONP `doGet?action=receipt` (chỉ công khai trạng thái tồn tại của RequestID ngẫu nhiên, tuyệt đối không trả PII). Chỉ khi xác nhận có bản ghi thì mở thư viện và lưu marker. Giữ RequestID cố định khi thử lại để chống trùng. Do Google Apps Script ContentService cũng có thể redirect Googleusercontent, không chắc hoạt động trên Android cho đến khi thử thực tế.
- Cần triển khai Apps Script `Code.gs` V7 thêm doPost + JSONP receipt song song `doGet` cũ, không bỏ `google.script.run` cho PC. File `library-native-form.js` thêm UI trực tiếp. **Flag native frontend mặc định OFF**, chỉ bật sau khi owner deploy backend và có thử thành công; như vậy PC vẫn hoạt động như trước, không gây gián đoạn khi backend chưa deploy. Không thay Web App URL hay 14 cột Google Sheet.
- Thông tin gửi vẫn Họ tên, SĐT, email tùy chọn, chủ đề, GeoIP city optional; không GPS/Maps. Quyền riêng tư: URL chỉ chứa request ID ngẫu nhiên khi kiểm tra receipt; tuyệt đối không gửi PII trong query hoặc JSONP. Không cấp quyền đọc nếu chưa có xác nhận ghi thực tế.
- Phải cập nhật checkpoint sau mã, verify GitHub readback, hướng dẫn owner triển khai và test trên Android. Không hứa đã fix Google khi chưa có test. Giữ 21 PDF, tin tức, Facebook, dữ liệu khách.

### Y.33. Khách mobile đang bị chặn → fallback Messenger + staged first-party form (14/11/2026)
- Khi người dùng hỏi "Khách dùng dt thì sao", đã trả lời rõ: hiện khách chưa đăng ký trên điện thoại có thể bị chặn bởi Google Drive error; không tuyên bố đã sửa Android. **Tạm hỗ trợ nhận khách:** sửa `library-gate.js` thêm liên kết mobile tới Fanpage Messenger `https://m.me/1388965107640064` để được hỗ trợ đăng ký, commit `b20320f403a4913088e7fb2923e8283c3f0a602d`; thêm CSS chỉ hiện trên mobile commit `3c58741a6d27f9612bf2b4945fd0fbd7e6e53675`.
- Đã tạo `library-native-form.js` commit `ada4b0aac736560dd5ea1ccb9080eeba8b6bebc5` (giao diện first-party, POST no-cors đến Apps Script, rồi xác minh bằng JSONP receipt request ID v7- entropy 160-bit; không đánh dấu truy cập nếu chưa xác nhận ACTIVE). Không gửi PII qua GET receipt, không lưu IP/GPS/Maps. Khi lỗi vẫn chỉ báo chưa xác nhận và cho retry cùng ID.
- Đã sửa `library-registration/Code.gs` commit `0c9f15a20803621aaad2b39b411695aa2ec45956`: thêm `doPost` dùng `registerLead` như cũ, và `doGet?action=receipt&id=v7-...&callback=NS360_RC_...` trả **boolean** (không có PII), vẫn giữ `doGet` HTML legacy cho PC.
- Đã sửa `library-gate.js` commit `d5bc2aee0d7fca8a92c38227549f2e31ca2a3965`: `NATIVE_ENABLED=false` mặc định, thử native chỉ qua URL `?ns360_native_signup_test=1#/thu-vien/kiem-tra-dang-ky`. PC legacy iframe giữ nguyên cho đến khi test E2E. Đã cập nhật CSS native commit `061d2931ef13f435c7af5901588215f774114212`, thêm `library-native-form.js` vào `index.html` nhưng chưa bật, commit `16badd957f0995f978835778eec10249798144b6` (42 href PDF vẫn nguyên).
- Readback GitHub và dùng JS parser `new Function` kiểm 2 JS + `Code.gs`: **PASS syntax**; `index.html` chỉ nạp file native mới và không đổi gate chế độ live. README cập nhật deploy/giới hạn commit `9d354e9bcbb56406c047803fad28411017d07176`.
- **TRẠNG THÁI CHƯA TRIỂN KHAI/NGHIỆM THU:** Apps Script đang deploy chưa tự nhận `doPost` và receipt; owner phải copy `Code.gs` mới vào Apps Script hiện hữu, Save + Deploy New version; kiểm quyền Execute as Me/Who has access Anyone. Sau đó test URL preview native thật trên Android và kiểm bản ghi v7- ACTIVE trong Leads. Nếu thành công mới chuyển NATIVE_ENABLED=true cho khách công khai; nếu còn lỗi Googleusercontent cần backend CORS độc lập, không bật native.
- Messenger fallback là hỗ trợ thủ công, **không phải tự động ghi Google Sheets**. Chủ dự án cần biết khách mobile còn bị lỗi form legacy cho đến khi triển khai giải pháp. Giữ 21 PDF, tin, các bản lead, Facebook và các cột lịch sử.


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


### Mobile signup routing check 2026-11-14 - screenshot 19:45
- User reports PC works; Android screenshot still shows legacy Google iframe. Native production flag was false at inspection.
- Live Sheet read in chat found one v6 ACTIVE in Leads!I1:J30, no v7 in this range; no Sheet modifications.
- Anonymous GET receipt only, no POST/no new lead: RECEIPT_JSONP_OK.
- Evidence: REGISTRATION_DIAGNOSTIC_RESULT.json and MOBILE_SIGNUP_20261114.md. This is not an Android end-to-end test.


### Native signup enabled after 19:45 mobile report (2026-11-14)
- Confirmed root routing issue: NATIVE_ENABLED was false, so normal visitors still received the Google iframe.
- Fresh anonymous receipt probes with desktop and Android user-agent strings returned the expected JSONP boolean. No POST/new lead/personal data in probes.
- Enabled native form for normal visits and updated all three asset cache versions. Missing native asset now shows a local retry, never silently loads the Google iframe.
- Routing/syntax/no-access-before-server-ack tests PASS. PDFs (21), news JSON, Sheets data and Facebook were not changed.
- Evidence: NATIVE_SIGNUP_RELEASE_20261114.json. Android user-agent probe is NOT a test on the owner phone; final device submission remains to be confirmed.


### Receipt browser diagnosis after 19:55 (2026-11-14)
- Live Sheet chat inspection found 2 V7 ACTIVE records despite client confirmation error. No customer identifiers were committed.
- Chromium read-only receipt probes, with all POST requests blocked; clean desktop/mobile-emulated contexts, not the owner phone.
- desktop/classic_script: CALLBACK_EXECUTED; seconds=2.7.
- desktop/anonymous_script: CALLBACK_EXECUTED; seconds=1.92.
- desktop/fetch_omit: CALLBACK_PARSED; seconds=1.92.
- mobile_emulation/classic_script: CALLBACK_EXECUTED; seconds=2.22.
- mobile_emulation/anonymous_script: CALLBACK_EXECUTED; seconds=1.72.
- mobile_emulation/fetch_omit: CALLBACK_PARSED; seconds=1.44.
- Evidence: RECEIPT_BROWSER_RESULT_20261114.json and RECEIPT_FIX_20261114.md. No lead writes or access bypass.


### Receipt recovery fix after 19:55 screenshot (2026-11-14)
- Live Sheet read showed 2 V7 ACTIVE rows while user reported confirmation error; no contact details or real request tokens copied to repository. POST can save; receipt transport needed hardening.
- Native receipt now uses CORS fetch credentials:omit and strict JSON parsing of the existing callback wrapper, with anonymous script fallback. Per-fetch deadline 12s, bounded verification window 40s, no access from opaque POST or timeout.
- Pending random request token only is stored in sessionStorage (24h maximum, cleared on success). Reload/check-again verifies the same request without new POST; valid not-yet-saved reply allows retry using the same ID. No contact data stored in the browser.
- Error states are distinct RCP-NETWORK/TIMEOUT/PROTOCOL/HTTP/PENDING/CLIENT. Check-only works after reload even with empty fields.
- 12 functional mock tests PASS, including response slower than old 3.6s, opaque response without ack, no duplicate POST on recheck, retry same ID, reload recovery, and no access before server ack.
- Real Chromium desktop/mobile-emulation read-only probes support anonymous receipt transport; anonymous live GET still returns proper boolean. No diagnostic POST or fake lead created.
- Only library-native-form.js and index asset versions changed in production. Code.gs, gate flags, 21 PDFs, news JSON and customer Sheet untouched. No Apps Script redeploy needed for this frontend fix.
- Evidence: RECEIPT_BROWSER_RESULT_20261114.json, RECEIPT_FIX_TESTS_20261114.json, RECEIPT_FIX_RELEASE_20261114.json. Actual owner-phone submission remains unverified; clean browser tests do not prove the precise cause on that device.


### Y.34. Đổi lịch 6 bài Facebook theo nhịp Thứ 2–4–6 (14/11/2026, khoảng 20:26 ICT)
- Người dùng chủ động yêu cầu **sắp xếp lại lịch và giờ đăng đúng 6 bài đã lên Metricool**, không tạo bài mới, không chỉnh caption/ảnh.
- Đã đọc lại 2 checkpoint, lịch Facebook `FACEBOOK_KE_HOACH_THANG_11_2026.md`, brand Metricool 8097037 (`Asia/Saigon`) và 6 provider posts PENDING (autoPublish=true). Metricool giờ đề xuất cho tài khoản mới chỉ là tín hiệu sơ bộ: thứ Hai 10:00, thứ Tư 12:00, thứ Sáu 10:00 có điểm tương đối tốt; chưa chứng minh hiệu quả thực tế.
- Lịch mới chọn **2 tuần, mỗi tuần ba bài**: 
  1. **16/11 10:00 (T2)**: Thư viện 21 giáo trình, từ 30/11, Metricool post cũ #427793267, uuid 2892558411312677904.
  2. **18/11 12:00 (T4)**: Hàng thực vs hợp đồng tương lai, từ 17/11, post cũ #427792755, uuid 3337223766451964816.
  3. **20/11 10:00 (T6)**: Cà phê & cung cầu, từ 24/11, post cũ #427792908, uuid 7078376323180218337.
  4. **23/11 10:00 (T2)**: Ngô ngoài thời tiết, từ 25/11, post cũ #427792991, uuid -4519204595844625623.
  5. **25/11 12:00 (T4)**: Lúa mì, từ 26/11, post cũ #427793073, uuid -7607156822577820498.
  6. **27/11 10:00 (T6)**: Ký quỹ & rủi ro, vẫn 27/11 10:00, post cũ #427793151, uuid 6054798094436680609.
- Cần cập nhật **5 bài phải đổi giờ/ngày**, bài cuối đã đúng lịch nên giữ nguyên (tổng vẫn 6); `updateScheduledPost` làm thay ID, uuid giữ; thay đúng ngày/giờ và giữ toàn bộ nội dung, ảnh, mediaAltText, Facebook POST, autoPublish, firstCommentText, metadata quan trọng. Readback `getScheduledPosts` sau mỗi chặng và cuối.
- Sau khi xác nhận Metricool, đồng bộ lịch GitHub/Drive nếu có quyền và ghi checkpoint cuối. Mã bài `FB-YYYYMMDD-01` là **mã tài sản ban đầu**, ngày trong tên có thể khác lịch đăng mới; tuyệt đối không tạo thêm bài vì đổi tên mã.
- Giữ nguyên 21 PDF, `tin-tuc.json`, bản ghi khách, website, bài chào mừng, 5 ô SFVN chưa xác minh, automation khác. Không tuyên bố bài PUBLISHED trước giờ hẹn.


### Y.35. ĐÃ HOÀN TẤT đổi lịch 6 bài Metricool và đọc lại (14/11/2026, khoảng 20:27 ICT)
- Chủ dự án yêu cầu sắp xếp lại lịch và giờ đăng sáu bài. Đã đọc trực tiếp Metricool brand `8097037` (Asia/Saigon), 6 pending và khung giờ Facebook đề xuất, quyết định **3 bài/tuần Thứ Hai 10:00, Thứ Tư 12:00, Thứ Sáu 10:00** trong hai tuần 16–27/11.
- ĐÃ THỰC HIỆN `updateScheduledPost` tại Metricool với toàn bộ text/ảnh/alt text/autoPublish/Facebook POST giữ nguyên, chỉ thay ngày/giờ cho 5 bài và để nguyên bài ký quỹ 27/11 10:00:
  - **16/11 10:00:** Giới thiệu thư viện 21 giáo trình, UUID `2892558411312677904`, ID mới `427999607`, từ 30/11.
  - **18/11 12:00:** Hàng thực / hợp đồng tương lai, UUID `3337223766451964816`, ID mới `427999763`, từ 17/11.
  - **20/11 10:00:** Cà phê & cung cầu, UUID `7078376323180218337`, ID mới `427999835`, từ 24/11.
  - **23/11 10:00:** Ngô ngoài thời tiết, UUID `-4519204595844625623`, ID mới `427999900`, từ 25/11.
  - **25/11 12:00:** Lúa mì, UUID `-7607156822577820498`, ID mới `427999964`, từ 26/11.
  - **27/11 10:00:** Ký quỹ / rủi ro, UUID `6054798094436680609`, ID giữ nguyên `427793151`.
- **ĐÃ READBACK Metricool** lịch 14/11–02/12: 1 bài chào mừng `PUBLISHED` (14/11 11:15) + đúng 6 bài `PENDING`, 1 media mỗi bài, `autoPublish=true`. Không tạo bài trùng, chưa có bài nào trong 6 mới được đăng trước lịch.
- Đã đồng bộ GitHub `FACEBOOK_KE_HOACH_THANG_11_2026.md` (commit `f38464b59f7e56d99c9bc6ca9d03b93db635f0d7`). Mã `FB-YYYYMMDD-01` của ảnh và bài gốc vẫn giữ như ban đầu, dù ngày lịch đăng khác; không đổi tên file/ID tài sản hoặc nội dung Google Docs.
- Còn tồn tại 5 slot SFVN chưa có poster chính thức, **không** tự đăng. Trước lượt đăng 16/11 10:00, nên kiểm tra lại website vào Thư viện và link mở tài khoản; khi đăng xong xác minh trạng thái PUBLISHED/publicURL và tương tác. Automation Facebook không được tự tạo trùng 6 UUID đã có.
- Bảo toàn website, 21 giáo trình PDF, `tin-tuc.json`, Google Sheet khách, các bài Fanpage cũ và các nguồn Drive.


### Y.36. Đã đồng bộ lịch mới vào Google Docs Drive (14/11/2026)
- Đồng bộ tài liệu kế hoạch Google Docs ID `1G-wXcK6Vkp3zSlCl-t4eFJt8VfbMqO3sUv9tB8opQu8`: cập nhật đúng 6 dòng lịch và khung giờ thành 16/11 10:00 thư viện, 18/11 12:00 hàng thực/hợp đồng tương lai, 20/11 10:00 cà phê, 23/11 10:00 ngô, 25/11 12:00 lúa mì, 27/11 10:00 ký quỹ; thay ID Metricool đúng sau update và giữ link nội dung/ảnh. Đã readback 7 dòng gồm bài chào mừng và 6 bài lịch mới, đúng thứ tự; revision mới được Drive xác nhận. Không thay các bản caption hay ảnh, không tạo post trùng.
- GitHub plan `FACEBOOK_KE_HOACH_THANG_11_2026.md`, Google Docs Drive và Metricool đã đồng bộ. Bước theo dõi tiếp: xác nhận trạng thái bài thư viện sau 10:00 ngày 16/11, không suy đoán bài đã published trước giờ.


### Y.37. Nhận nội dung chính thức từ người dùng: tập huấn SFVN 20/11 (14/11/2026, sau lịch 6 bài Facebook)
- Chủ dự án cung cấp thông tin **buổi tập huấn Hàng hóa Phái sinh dành cho IB và đối tác trong lĩnh vực tài chính/đầu tư**: **thứ Sáu 20/11/2026, 09:00–12:00**, **SFVN Academy tầng 2 Tòa nhà Mekong, 92A–94 Bạch Đằng, phường Tân Sơn Hòa, TP.HCM**. Đây là bản bổ sung thông tin từ chủ dự án, **thay thế ghi chú cũ dự kiến thứ Bảy 21/11**.
- Các quyền lợi theo nội dung người dùng: giấy chứng nhận hoàn thành khi đạt điều kiện chương trình; cơ hội hợp tác SFVN, chính sách hỗ trợ marketing/văn phòng **tối đa USD 2.000/tháng chỉ dành cho đối tác đủ điều kiện**; kết nối IB và đối tác tài chính; tìm hiểu thị trường trong khuôn khổ hoạt động MXV. **Không diễn giải mức hỗ trợ là cam kết hay được cấp mặc nhiên.**
- Web xác minh địa chỉ SFVN Academy và vai trò đối tác qua sfvn-academy.com.vn/contact, sfvn-partner.com; chưa tìm thấy thông cáo lịch 20/11 hoặc văn bản chính sách USD 2.000/tháng trên trang chính thức công khai, vì vậy tách rõ phần user-supplied khỏi externally verified. Chưa có poster chính thức, link ghi danh, chi phí, số chỗ, đơn vị tiếp nhận hoặc điều khoản hỗ trợ đầy đủ.
- Metricool brand 8097037 đã có 6 bài kiến thức PENDING (16/11 10:00, 18/11 12:00, 20/11 10:00, 23/11 10:00, 25/11 12:00, 27/11 10:00), 1 bài chào mừng PUBLISHED. **Không tự ý sửa, đăng hoặc tạo thêm bài** khi người dùng mới cung cấp dữ liệu sự kiện, chưa xác nhận nhu cầu đăng, định dạng ảnh hay cách tiếp nhận đăng ký.
- Chặng tiếp theo: cập nhật brief SFVN và bản thảo thông báo Fanpage kèm điều kiện chính xác, cập nhật kế hoạch GitHub + Google Doc Drive; gợi ý bài thông báo 17/11 10:00 và nhắc 19/11 10:00 chỉ sau khi biết đường ghi danh/đã duyệt. Bài cà phê 20/11 10:00 trùng giờ tập huấn nên cần xem xét điều chỉnh nếu chiến dịch SFVN được duyệt.


### Y.38. Đã cập nhật thông tin buổi tập huấn SFVN 20/11 vào kế hoạch và soạn bài chờ duyệt (14/11/2026)
- Đã tạo bản thảo GitHub `facebook-drafts/2026-11/SFVN_TAP_HUAN_IB_2026-11-20_CHO_DUYET.md` commit `35ab2677718c1fb4351bb08c6aae751c0e5d44a1`; nội dung đúng đối tượng IB/đối tác, **thứ Sáu 20/11/2026 9:00–12:00**, SFVN Academy tầng 2 Mekong, 92A–94 Bạch Đằng, P. Tân Sơn Hòa TP.HCM; giấy chứng nhận/hỗ trợ đến USD 2.000/tháng **chỉ nếu đáp ứng điều kiện**. Không đưa CTA đăng ký giả khi chưa có link.
- Đã sửa `FACEBOOK_KE_HOACH_THANG_11_2026.md` commit `ed70d98cd401ff919029d7d1c4a433b959ffa12b`: xóa giả định sự kiện thứ Bảy 21/11, thay thông tin do chủ dự án cung cấp; tách đối chiếu địa điểm chính thức so với quyền lợi/chính sách chưa thấy công khai. Gợi ý lịch riêng bài thông báo 17/11 10:00, nhắc 19/11 10:00 chỉ sau khi có phương thức ghi danh, **chưa schedule**.
- Đã cập nhật kế hoạch Google Docs trên Drive ID `1G-wXcK6Vkp3zSlCl-t4eFJt8VfbMqO3sUv9tB8opQu8`, 4 replaceAllText được xác nhận và readback thành công. Không còn giả định 21/11. Mức tài trợ không trình bày như cam kết mặc định.
- Đọc lại Metricool: vẫn 7 bài tổng (1 PUBLISHED, 6 PENDING theo lịch 16,18,20,23,25,27/11), **0 bài SFVN đã schedule**, không sửa/xóa ảnh hay caption hoặc thay giờ bài cà phê 20/11 10:00 dù trùng buổi tập huấn.
- Chưa có poster chương trình, form/link đăng ký, điều kiện cấp giấy, điều kiện tài trợ hoặc chính sách tham gia; cần chủ dự án gửi thông tin khi có, không coi đã xác minh từ SFVN công khai chỉ vì người dùng cung cấp. Chỉ tiếp tục lên lịch/đăng khi có thông tin cơ bản và duyệt nội dung.


### Y.40. Chốt điều kiện chứng nhận và xét duyệt hỗ trợ SFVN (14/11/2026)
- Chủ dự án bổ sung điều kiện ràng buộc: **"Giấy chứng nhận phụ thuộc điều kiện hoàn thành tập huấn; hỗ trợ tối đa $2.000/tháng phụ thuộc chính sách và xét duyệt của SFVN, không phải quyền lợi tự động."** Quy tắc này phải áp dụng nhất quán trên Fanpage, website, tài liệu tư vấn, thông báo tập huấn; tuyệt đối không nói khách tham gia mặc nhiên được chứng nhận hoặc khoản hỗ trợ.
- Đã sửa bản thảo `facebook-drafts/2026-11/SFVN_TAP_HUAN_IB_2026-11-20_CHO_DUYET.md` và `FACEBOOK_KE_HOACH_THANG_11_2026.md` (commits `c344034a1412798809db57971bdd29003d98852c`, `76ac1b5b9987d01e72823d445ad478d3a2579a3f`).
- Đã cập nhật nội bộ `SFVN_DANH_GIA_HO_SO_VA_GIAO_TRINH_20261114.md` commit `8743809c61219b23124d0c37d1a7c142b535a2d3`; hai file nguồn SFVN chưa có văn bản quy chế/duyệt 2.000 USD/tháng.
- Đã cập nhật và xác nhận 1 vị trí thay thế trên **Google Docs kế hoạch Facebook** Drive ID `1G-wXcK6Vkp3zSlCl-t4eFJt8VfbMqO3sUv9tB8opQu8`; lưu đúng điều kiện của chủ dự án.
- Không thay sáu bài Metricool đã đặt lịch, không đăng bài SFVN đang chờ duyệt, không chia sẻ tài liệu gốc, không sửa website hay dữ liệu khách.


### Y.41. Đã soạn 2 bài SEO + 2 ảnh 4:5 cho SFVN 20/11, CHỜ DUYỆT (14/11/2026)
- Chủ dự án yêu cầu ngoài 6 bài Metricool có sẵn, đề xuất bao nhiêu bài quảng bá sự kiện 20/11, viết Facebook chuẩn Social SEO và hình kèm. Chốt **2 bài mới**: 17/11 10:00 (giới thiệu tập huấn SFVN/IB), 19/11 10:00 (còn 1 ngày/nhắc lịch/checklist); không chèn bài vào 20/11 khi có bài cà phê 10:00.
- Đã đọc GitHub SFVN event draft, SFVN audit 35 trang PDF/46 slide PPT được kiểm tra ở chặng trước, kế hoạch Facebook, và readback Metricool: 1 bài chào mừng PUBLISHED, các bài evergreen 16/11,18/11,20/11 vẫn PENDING. Đã kiểm tra SFVN Academy `https://sfvn-academy.com.vn/contact`: địa chỉ học viện khớp. Trang khóa học IB khác có form riêng nhưng **không thể dùng thay đường ghi danh cụ thể buổi 20/11**.
- Caption SEO hoàn chỉnh và thông số ảnh đã được lưu GitHub: `facebook-drafts/2026-11/SFVN_IB_20261117_THONG_BAO_CHO_DUYET.md` (commit `3665ce5a5b641189af28f113e68923be0a7173b9`) và `facebook-drafts/2026-11/SFVN_IB_20261119_NHAC_LICH_CHO_DUYET.md` (commit `08432dd333cd884c9e582c3b273c6dd0ef9ca536`). Có từ khóa tự nhiên đầu bài, đối tượng IB, địa điểm, 4 hashtag; bản nhắc lịch ghi 3 gợi ý chuẩn bị **không gán thành agenda chính thức**.
- Đã tạo 2 ảnh riêng 1080x1350 PNG trong cuộc trò chuyện: `NS360_SFVN_Bai1_ThongBao_17-11-2026.png`, `NS360_SFVN_Bai2_NhacLich_19-11-2026.png` dưới `/mnt/data/`; đã mở ảnh xem và kiểm tra chữ ngày 20/11/2026, 09:00–12:00, SFVN Academy. Đây là **visual minh họa Nông Sản 360, không phải poster chính thức SFVN**. Không có lời hứa tài trợ tiền trên ảnh. **CHƯA TẢI LÊN DRIVE, CHƯA THÊM MEDIA METRICOOL** cho đến khi chủ dự án duyệt.
- Đã thêm section kế hoạch 2 bài chờ duyệt vào `FACEBOOK_KE_HOACH_THANG_11_2026.md` commit `5f59eaa15c360e95d60dbd712f80cde1ff6c7b3f`; không thay 6 bài đã đặt lịch.
- **Yêu cầu khi tiếp tục:** nếu anh duyệt, upload đúng 2 ảnh vào folder Facebook dưới Nông Sản 360 trên Drive trước; sau đó tạo đúng 2 post Metricool 17/11 10:00 và 19/11 10:00, giữ 6 post cũ. Trước khi đăng thực cần xác nhận thông tin điều kiện, ghi danh nếu có; không dùng form khóa IB trực tuyến khác làm form sự kiện. Rà lại logo nếu cần thay bằng bộ nhận diện đã phê duyệt.


### Y.42. Cân lịch đăng liên tục 16–21/11, bổ sung 2 bài SFVN (14/11/2026)
- Chủ dự án yêu cầu cân lịch **mỗi ngày từ thứ Hai 16 tới thứ Bảy**, nhưng ghi `thứ Bảy ngày 19` (ngày 19/11/2026 thực tế là **thứ Năm**, thứ Bảy là **21/11/2026**). Lựa chọn đúng ngày trong tuần, xếp lịch 6 ngày **16–21/11**, **1 bài/ngày** để không đăng dồn; cần ghi rõ trong phản hồi.
- Readback Metricool brand 8097037: 6 evergreen PENDING ngày 16,18,20,23,25,27; bài chào mừng 14/11 PUBLISHED. Đã có bài SFVN draft chuẩn Social SEO 17 & 19 nhưng chưa schedule.
- Kế hoạch triển khai: 16/11 10:00 thư viện (giữ), 17/11 10:00 SFVN giới thiệu (thêm), 18/11 12:00 hàng thực/hợp đồng tương lai (giữ), 19/11 10:00 SFVN nhắc lịch (thêm), 20/11 10:00 cà phê (giữ), **21/11 10:00 ngô (dời từ 23/11)**, 25/11 12:00 lúa mì (giữ), 27/11 10:00 ký quỹ (giữ). Tổng 8 bài sắp đăng + bài chào mừng cũ.
- Hai ảnh 1080×1350 đã upload thành công vào Drive `Nông Sản 360 - Website HTML/Facebook/03_HINH_ANH_BAI_DANG`, IDs `1K9dCywhaPLNUUdLszjeHSmzC-gFCo252` và `1x0gn2DINKSxwygJq1rpOjzlfs9m1HiCn`. Metadata readback xác nhận `anyone:reader` và đúng phụ huynh; là minh họa Nông Sản 360, không phải poster chính thức SFVN. Chỉ dùng thông tin do chủ dự án cấp: 20/11 9–12, SFVN Academy; quyền lợi chứng chỉ và trợ cấp phụ thuộc điều kiện/xét duyệt, không tự động.
- Khi lên Metricool: lấy đúng đoạn `## NỘI DUNG FACEBOOK` từ 2 file draft; media dùng 2 Drive URLs được Google xác nhận; không tạo bản trùng/đổi 6 caption cũ. Bài ngô `uuid=-4519204595844625623` dùng updateScheduledPost giữ nguyên text/ảnh/alt text và bật autoPublish; sau đó readback cả lịch.
- Cập nhật `FACEBOOK_KE_HOACH_THANG_11_2026.md` và Google Doc Drive kế hoạch FB, rồi checkpoint cuối; không động 21 PDF, tin tức, Sheet khách, mã nguồn web. Kiểm soát sự kiện không có link ghi danh riêng, CTA chỉ xác nhận thông tin với SFVN Academy.


### Y.43. Sửa hiểu nhầm: giữ 6 evergreen, đúng 4 bài SFVN 16–19/11 (14/11/2026, sau yêu cầu hiệu chỉnh)
- Chủ dự án xác nhận lại rõ: **sáu bài kiến thức đã lên lịch trước đó phải giữ nguyên**, ngoài ra phải đăng **bốn bài mới về tập huấn SFVN, một bài/ngày từ thứ Hai 16/11 đến thứ Năm 19/11/2026**. Ngày trùng với evergreen thì chỉ đổi **giờ bài SFVN**, không thay giờ evergreen.
- **Lịch 6 evergreen gốc bất biến phải phục hồi và giữ:** thư viện 16/11 10:00; hàng thực/hợp đồng tương lai 18/11 12:00; cà phê 20/11 10:00; ngô 23/11 10:00 (sửa lại vì lần trước đã dời sang 21/11 trái ý người dùng); lúa mì 25/11 12:00; ký quỹ 27/11 10:00.
- **Lịch đề xuất 4 SFVN:** thứ Hai 16/11 18:30 bài 1 giới thiệu lý do IB nên quan tâm đến tập huấn/kiến thức, thứ Ba 17/11 10:00 bài 2 thông báo chương trình (đã lên), thứ Tư 18/11 18:30 bài 3 câu hỏi nên chuẩn bị khi tìm hiểu hợp tác IB, thứ Năm 19/11 10:00 bài 4 nhắc lịch (đã lên). Hai bài ngày 16 và 18 sẽ có caption Social SEO riêng, ảnh 4:5 mới, không gọi nội dung gợi ý là giáo trình chính thức SFVN.
- Tất cả chỉ nêu đúng buổi 20/11 09:00–12:00, SFVN Academy tầng 2 tòa Mekong 92A–94 Bạch Đằng P. Tân Sơn Hòa TP.HCM do người dùng cung cấp; chứng nhận theo điều kiện hoàn thành, tối đa USD 2.000/tháng theo chính sách và xét duyệt SFVN (không tự động); chưa có form ghi danh chính thức buổi này.
- Đã đọc 2 checkpoint và Metricool 8097037: 1 bài chào mừng PUBLISHED, 8 bài PENDING gồm 6 evergreen + 2 SFVN (17 và 19). Cần restore ngô về 23, tạo đúng 2 SFVN 16 và 18 kèm ảnh upload Drive/Facebook, lưu Github plan và Google Docs rồi readback Metricool **10 PENDING = 6 evergreen + 4 SFVN**, giữ 1 PUBLISHED.
- **Không tạo trùng 17/19**, không thay 6 caption, ảnh, cài đặt hiện có; giữ 21 PDF, tin tức, dữ liệu khách và website.


### Y.44. HOÀN THÀNH sửa lịch theo ý chủ dự án: 6 evergreen giữ nguyên + 4 SFVN (14/11/2026)
- Đã xác nhận ý cuối: **không chuyển sáu bài kiến thức theo lịch 16,18,20,23,25,27/11**; **đăng thêm bốn bài về buổi tập huấn SFVN một bài/ngày 16–19/11**. Hai ngày trùng bài kiến thức chỉ đổi giờ bài SFVN.
- Đã **khôi phục bài ngô 23/11 10:00**, giữ nguyên nội dung, ảnh, alt text, autoPublish và UUID `-4519204595844625623`; Metricool ID mới `428033042`.
- Lịch bài SFVN đã tạo/giữ, tất cả **PENDING, autoPublish=true, 1 ảnh/bài**:
  - **16/11 18:30** “Vì sao IB nên tìm hiểu hàng hóa phái sinh?”; ID `428039062`, UUID `-5232083627600753537`, caption `SFVN_IB_20261116_LY_DO_THAM_GIA_DA_LEN_LICH.md`, Drive art ID `1POHdGLXENTqklSPyxar19TvaRYpIu23d`.
  - **17/11 10:00** “Thông báo tập huấn SFVN”; ID `428028880`, UUID `7906905485232523003`, Drive art ID `1K9dCywhaPLNUUdLszjeHSmzC-gFCo252`.
  - **18/11 18:30** “Ba câu hỏi cần chuẩn bị”; ID `428039173`, UUID `-8895106555576431118`, caption `SFVN_IB_20261118_CAU_HOI_CHUAN_BI_DA_LEN_LICH.md`, Drive art ID `1INX0tpduWoAwZd0XmmiTMMmauS__DugR`.
  - **19/11 10:00** “Còn 1 ngày – nhắc lịch”; ID `428029358`, UUID `-9108208944996138606`, Drive art ID `1x0gn2DINKSxwygJq1rpOjzlfs9m1HiCn`.
- Hai artwork ngày 16 và 18 được tạo bản 1080×1350 từ ảnh AI gốc kết hợp bố cục chữ Nông Sản 360 do trợ lý biên tập, đã **kiểm tra trực quan** và upload đúng `Nông Sản 360 - Website HTML/Facebook/03_HINH_ANH_BAI_DANG`; Google Drive metadata readback xác nhận `anyone:reader`, parent chuẩn, Metricool nhập media thành công.
- Đã cập nhật **GitHub `FACEBOOK_KE_HOACH_THANG_11_2026.md`** commit `1ac3889b66d8d713d81ceb703ea81a80eb0ef6ba` và **Google Docs kế hoạch FB** `1G-wXcK6Vkp3zSlCl-t4eFJt8VfbMqO3sUv9tB8opQu8`. Readback cả ba: **10 dòng đăng sắp tới / 10 PENDING**, đúng các mốc **16 10:00, 16 18:30, 17 10:00, 18 12:00, 18 18:30, 19 10:00, 20 10:00, 23 10:00, 25 12:00, 27 10:00**; 1 bài chào mừng PUBLISHED ngoài 10 này. Không có giờ trùng.
- Có lưu ý chưa có form ghi danh chính thức ngày 20/11, CTA chỉ liên hệ SFVN Academy, giấy chứng nhận theo điều kiện hoàn thành, hỗ trợ đối tác đến USD 2.000/tháng theo chính sách & xét duyệt SFVN, không cam kết tự động. Nội dung 16/18 không mạo nhận agenda chính thức.
- Từ đây **đọc đúng checkpoint Y.44**, không dùng chỉ dẫn Y.42 (đã bị chủ dự án bác bỏ). Không chỉnh 21 PDF, tin tức, Google Sheet khách, website hay bản đăng cũ. Sau ngày 16/11 xác minh trạng thái PUBLISHED và publicURL trên Fanpage.


### Y.45. Ưu tiên viết duyệt 4 bài SEO trước, ảnh sau (14/11/2026)
- Chủ dự án phản hồi rõ: phải **viết hoàn chỉnh 4 bài Facebook chuẩn Social SEO trước, duyệt nội dung trước, rồi mới thiết kế/điều chỉnh ảnh theo từng bài**. Những lượt tạo ảnh và đặt lịch trước khi duyệt nội dung là làm ngược quy trình; không được tái diễn.
- Đã đọc lại bốn caption đang có trong `facebook-drafts/2026-11`, bản đánh giá hai tài liệu `SFVN_DANH_GIA_HO_SO_VA_GIAO_TRINH_20261114.md` và lịch 6 evergreen + 4 SFVN. Các thông tin được phép dùng: IB/đối tác tài chính; 20/11/2026 09:00–12:00; SFVN Academy tầng 2 Mekong, 92A–94 Bạch Đằng, P. Tân Sơn Hòa TP.HCM; giấy chứng nhận theo điều kiện hoàn thành; hỗ trợ tối đa 2.000 USD/tháng theo chính sách + xét duyệt SFVN, không tự động. Không có form ghi danh chính thức buổi 20/11; bài gợi ý kiến thức không mạo nhận agenda.
- **Chặng này chỉ làm chữ:** soạn bản chính 4 bài độc lập, 16/11 lý do IB tìm hiểu, 17/11 thông tin chính thức theo chủ dự án và quyền lợi có điều kiện, 18/11 câu hỏi thực tế chuẩn bị, 19/11 nhắc lịch chi tiết. SEO: từ khóa chính trong tiêu đề và đoạn đầu, từ khóa phụ tự nhiên trong bài, CTA minh bạch và tối đa 4 hashtag liên quan; không nhồi từ khóa/hứa lợi nhuận.
- Lưu một bản gộp riêng `facebook-drafts/2026-11/SFVN_4_BAI_SOCIAL_SEO_CHO_DUYET_TRUOC_ANH_20261114.md` để người dùng duyệt trước khi chỉnh caption đã đặt Metricool hoặc tạo ảnh mới. **Không tạo ảnh trong chặng viết**, không ghi đè 6 bài evergreen, không xóa ảnh cũ, không gửi lại người dùng hình minh họa đã tạo như thể được duyệt.
- Lưu ý 4 bài SFVN trong Metricool đang PENDING với `autoPublish=true` theo lượt trước, **chưa đồng bộ với bản chữ SEO mới**. Khi người dùng duyệt, mới thay nội dung 4 post theo UUID, sau đó thiết kế lại ảnh đúng câu chuyện từng bài, QA, upload Drive, cập nhật Metricool, readback. Không tự nhận các bài đã được duyệt.


### Y.46. HOÀN TẤT BƯỚC CHỮ: 4 bài Facebook Social SEO về tập huấn SFVN (14/11/2026)
- Theo yêu cầu người dùng, **bốn bài phải được viết, soát, và duyệt trước khi thiết kế lại ảnh**. Đã tạo bản gộp độc lập `facebook-drafts/2026-11/SFVN_4_BAI_SOCIAL_SEO_CHO_DUYET_TRUOC_ANH_20261114.md` (commit `96074da6edc5bc583db6d82f3326059b5a31c5df`), CHỜ DUYỆT NỘI DUNG.
- Thứ tự bản chữ: (1) 16/11 18:30 **IB cần hiểu thị trường và rủi ro trước khi giới thiệu**; (2) 17/11 10:00 **thông tin buổi tập huấn và quyền lợi có điều kiện**; (3) 18/11 18:30 **3 câu hỏi IB nên chuẩn bị, không mạo nhận nội dung đào tạo**; (4) 19/11 10:00 **nhắc lịch, checklist xác nhận tham dự và địa điểm**. Các chủ đề không trùng nhau.
- Đã readback file GitHub và kiểm tự động: **đúng 4 bài**, ~272–318 từ/bài, mỗi bài 4 hashtag, ngày 20/11/2026 + địa chỉ 92A–94 Bạch Đằng + link liên hệ SFVN Academy chính xác. Có quy tắc giấy chứng nhận phụ thuộc điều kiện hoàn thành, tài trợ tối đa 2.000 USD/tháng theo xét duyệt SFVN; không hứa lợi nhuận hay ghi link ghi danh sai.
- **Chặng này KHÔNG tạo ảnh mới, KHÔNG sửa lại 6 bài evergreen, KHÔNG thay caption/ảnh 4 bài đang PENDING trên Metricool.** Các phiên bản trước đã có ảnh và được đặt lịch `autoPublish=true`; **lưu ý rủi ro nếu chưa duyệt mà đến ngày đăng: cần xử lý trước 16/11/2026**. Không tuyên bố 4 caption mới đã thay trên Metricool; chỉ là bản thảo chờ người dùng xem.
- Bước tiếp theo sau khi chủ dự án duyệt: cập nhật 4 caption đúng UUID đã có trên Metricool; **sau đó** phát triển ý tưởng và tạo 4 ảnh theo nội dung đã duyệt, QA rồi đưa lên Drive/Metricool theo đúng thứ tự. Bảo toàn tài liệu học, 21 PDF, tin, Sheet khách.


### Y.47. Thay CTA sự kiện SFVN thành Messenger Fanpage (14/11/2026, 21:31 ICT)
- Người dùng yêu cầu câu **“Để xác nhận cách thức và điều kiện tham dự, vui lòng liên hệ tại đây”** trong 4 bài SFVN phải dẫn trực tiếp vào chat Messenger Fanpage **Nông Sản 360**, không sang trang liên hệ SFVN Academy.
- Đã xác thực URL Messenger từ 2 nguồn thuộc tài khoản: `library-gate.js` đang dùng `https://m.me/1388965107640064`, và Metricool Brand Settings brand 8097037 `networksData.facebookData=1388965107640064`. Không dùng ID Page được suy ra từ URL bài viết.
- Facebook feed caption không biến riêng cụm “tại đây” thành link nhúng có nhãn qua Markdown; cần viết **tại đây: https://m.me/1388965107640064** dưới dạng URL đầy đủ để Meta tự nhận liên kết có thể bấm.
- Chỉ thay CTA của 4 caption SFVN trong **bản gộp Social SEO** và 4 draft nguồn, và nếu cập nhật 4 bài Metricool đã PENDING, chỉ sửa link/CTA, giữ nguyên nguyên văn các phần khác, 1 ảnh/bài, autoPublish, ngày giờ, UUID; **không tự coi toàn bộ bộ caption mới đã duyệt**. Giữ ghi chú việc ghi danh/suất tham dự phải xác nhận theo quy trình SFVN, Fanpage chỉ hỗ trợ liên hệ.
- Không chỉnh 6 bài evergreen, poster/ảnh, Google Sheet khách, 21 PDF, website. Sau khi hoàn tất, readback chính xác 4 CTA Messenger và cập nhật checkpoint.


### Y.48. XONG: bốn CTA SFVN mở Messenger Fanpage Nông Sản 360 (14/11/2026, 21:31 ICT)
- Chủ dự án muốn chạm câu **“Để xác nhận cách thức và điều kiện tham dự, vui lòng liên hệ tại đây”** thì chuyển vào chat Messenger **Fanpage Nông Sản 360**, không qua SFVN Academy /contact. Đã đối chiếu Metricool Brand Settings 8097037 `networksData.facebookData=1388965107640064` với link trên website `library-gate.js`. URL chính xác: **https://m.me/1388965107640064**.
- Facebook caption thường không hỗ trợ gắn hyperlink ẩn sau chữ “tại đây”, vì vậy dùng CTA tiếng Việt + **URL Messenger đầy đủ trên dòng riêng** để khách bấm vào liên kết. Chú thích Fanpage hỗ trợ thông tin; xác nhận suất tham dự vẫn theo hướng dẫn của SFVN, không nhận đăng ký tự động nếu chưa có quy trình.
- ĐÃ sửa **bản tổng hợp 4 bài Social SEO chờ duyệt** và 4 draft riêng trên GitHub; không thay kiến thức, ngày giờ, quyền lợi có điều kiện, hoặc ảnh. ĐÃ sửa trực tiếp **chỉ CTA** của 4 post SFVN PENDING trong Metricool, không thay các phần caption khác đang có, không đưa nguyên bản Social SEO mới chưa duyệt vào lịch.
- **Readback Metricool**: đúng 10 bài PENDING (6 evergreen + 4 SFVN), 1 PUBLISHED chào mừng. Bốn bài SFVN đều `autoPublish=true`, 1 media, khớp các giờ **16/11 18:30, 17/11 10:00, 18/11 18:30, 19/11 10:00**, mỗi caption chứa **đúng một** `https://m.me/1388965107640064`, không còn đường Academy /contact. ID mới sau update lần lượt **428049489, 428049582, 428049677, 428049751**; UUID giữ nguyên.
- Đã sửa `FACEBOOK_KE_HOACH_THANG_11_2026.md` và Google Docs kế hoạch Drive `1G-wXcK6Vkp3zSlCl-t4eFJt8VfbMqO3sUv9tB8opQu8`, xác nhận readback link Messenger, IDs mới.
- **Bốn bài viết Social SEO ở nguồn tổng hợp vẫn chờ anh duyệt toàn bộ** trước khi đồng bộ nội dung (ngoài CTA) hoặc thiết kế ảnh lại. Không sửa 6 evergreen, không tạo ảnh, không tác động 21 PDF/tin tức/Sheet khách.

### Y.49. ĐÃ RÀ SOÁT LẠI 4 BÀI FACEBOOK CHUẨN SOCIAL SEO, CHỜ DUYỆT (14/11/2026)
- Người dùng yêu cầu rà soát lại bốn bài về buổi tập huấn để dùng đăng Fanpage Facebook Nông Sản 360. Đã đọc đúng file nguồn `facebook-drafts/2026-11/SFVN_4_BAI_SOCIAL_SEO_CHO_DUYET_TRUOC_ANH_20261114.md`, checkpoint, lịch Metricool và báo cáo soát hai tài liệu SFVN.
- Kiểm tra nguồn công khai: trang chính thức `sfvn-academy.com.vn/contact` xác nhận SFVN Academy ở tầng 2 Mekong, 92A–94 Bạch Đằng, P. Tân Sơn Hòa, TP.HCM; trang MXV `mxv.com.vn/thanh-vien/cong-ty-co-phan-dau-tu-sfvn-m57.html` xác nhận SFVN TVKD 046, đang hoạt động. **Không tìm thấy công bố riêng về sự kiện ngày 20/11 hoặc điều khoản chính thức hỗ trợ 2.000 USD/tháng**; tất cả nội dung đặc thù chương trình gắn nhãn theo thông tin chủ dự án cung cấp.
- Đã cập nhật **bốn caption** cùng file nguồn (commit `5bbda3e4a5605d52a84461b0a474c8567b046603`): (1) 16/11 18:30 kiến thức/rủi ro IB; (2) 17/11 10:00 thông báo SFVN và chứng nhận/hỗ trợ **có điều kiện**; (3) 18/11 18:30 ba câu hỏi MXV – IB – ký quỹ (không mạo nhận agenda); (4) 19/11 10:00 nhắc lịch/checklist. Mở đầu có từ khóa phù hợp, văn bản thuần để Facebook không in ký hiệu Markdown, 1 CTA Messenger `https://m.me/1388965107640064` và 4 hashtag mỗi bài.
- Đã readback GitHub và kiểm tra **đúng 4 bài**; mỗi bài có ngày giờ và địa chỉ sự kiện, 1 link Messenger, 4 hashtag; không chèn link form đăng ký giả. Nêu Fanpage chỉ hỗ trợ thông tin, xác nhận suất tham dự thuộc SFVN; giấy chứng nhận phụ thuộc điều kiện hoàn thành, hỗ trợ marketing/văn phòng tối đa 2.000 USD/tháng chỉ sau chính sách và xét duyệt SFVN.
- **BẢN SOCIAL SEO MỚI VẪN CHỜ ANH DUYỆT.** Chưa sửa bốn caption PENDING trên Metricool (vẫn chỉ đổi CTA theo checkpoint Y.48), chưa làm ảnh mới/đụng ảnh cũ. 6 bài kiến thức và tổng 10 bài lịch giữ nguyên. Sau khi anh duyệt cần cập nhật 4 caption trên Metricool đúng UUID, rồi thiết kế lại 4 ảnh dựa theo chữ đã chốt, upload Drive, sửa media, readback trước giờ bài đầu **16/11/2026 18:30**.


### Y.50. Yêu cầu form quan tâm tập huấn SFVN (14/11/2026)
- Chủ dự án muốn sửa CTA của 4 bài: **cần thêm thông tin hoặc thắc mắc -> nhắn Messenger Fanpage Nông Sản 360**, đồng thời tạo **biểu mẫu riêng để khách tự nguyện điền họ tên, số điện thoại, email**.
- Phân định rõ mục đích biểu mẫu: **đăng ký nhận thông tin/hỗ trợ về tập huấn SFVN 20/11**, **không phải đăng ký tham dự chính thức/giữ chỗ, không cấp chứng chỉ, không hứa hỗ trợ 2.000 USD/tháng**. Không dùng thông tin này để nhắn quảng cáo sự kiện khác/affiliate nếu khách chưa đồng ý.
- Đã kiểm tra source: website dùng GitHub Pages; backend Apps Script URL trong `library-gate.js` hoạt động cho đăng ký library với POST no-cors + GET receipt; `Code.gs` cho phép `source` riêng, `topic=phai-sinh`, RequestID v7. Phần dữ liệu cá nhân hiện lưu trong Google Sheet `Leads` bảo mật, đã có trường nguồn và trạng thái. Đề xuất tận dụng backend đang deploy để không yêu cầu chủ dự án triển khai lại Apps Script, gắn tag `sfvn20261120` trong source, phân biệt với lead thư viện.
- Bảo vệ riêng sự đồng ý xử lý cho mục đích tư vấn sự kiện; update chính sách để có phần dành cho form SFVN độc lập, **không đụng đăng ký thư viện đang hoạt động**. Form 3 trường bắt buộc, honeypot, xác nhận receipt trước khi báo thành công, giữ token ngẫu nhiên nếu cần retry; không lưu họ tên/điện thoại/email trong sessionStorage/localStorage, không GeoIP/GPS.
- Tạo trang độc lập của website và link vào 4 bài Facebook chỉ **sau khi trang đã xuất bản và kiểm tra**, 6 bài evergreen giữ nguyên. Lời mời Messenger là hỗ trợ câu hỏi, link form dùng khi muốn để lại liên hệ; hai CTA phân biệt.
- Mọi thay đổi cần test static/receipt ẩn danh, KHÔNG gửi POST lead thử, KHÔNG sửa/xóa PDF, tin tức, khách hàng có sẵn. Nếu không thể xác minh E2E thiết bị thì ghi rõ.


### Y.51. HOÀN THÀNH bước CTA Messenger + form quan tâm tập huấn SFVN (14/11/2026)
- Chủ dự án muốn sửa 4 caption thành 2 cách liên hệ: (1) **có thắc mắc/cần thêm thông tin -> Messenger Fanpage Nông Sản 360** `https://m.me/1388965107640064`; (2) **muốn được liên hệ lại -> form để lại họ tên, số điện thoại, email**.
- **Trang form đang chạy trên GitHub Pages:** `https://nmtu1525-art.github.io/nongsan360/sfvn-tap-huan-20-11-2026.html`; mỗi post thêm query `?src=fb16/fb17/fb18/fb19`. Có ba ô bắt buộc, checkbox đồng ý xử lý/nhận liên hệ riêng về chương trình; honeypot; giao diện mobile; không GPS/IP/GeoIP, không yêu cầu Google login.
- Form dùng **Apps Script endpoint ĐÃ TRIỂN KHAI cho thư viện**, chỉ gửi `topic=phai-sinh`, `source=sfvn20261120-<tag>`, `privacyConsent=true`, RequestID v7. Nhận `no-cors` POST không được tính thành công; phải kiểm tra `GET receipt` (CORS fetch + JSONP fallback) đúng `ok=true` mới báo đã ghi nhận. Trong browser chỉ lưu token ngẫu nhiên trong `sessionStorage` tối đa 24h nếu chưa xác nhận, **không lưu PII**, không cấp quyền thư viện. Không tạo hoặc gửi giả lead.
- Cập nhật `chinh-sach-du-lieu.html` mục `#sfvn-interest`: giải thích tách biệt đăng ký thư viện và nhận thông tin tập huấn; cho phép Nông Sản 360 liên hệ về đúng sự kiện, **không consent quảng cáo/affiliate**, không tự chuyển danh tính khách cho SFVN; **form không xác nhận suất tham dự/giữ chỗ**.
- Google Sheets riêng tư `1_fKgwxop4-pTIORlnhRVCNCWJXLhZIpPV2nBMv8dDEw`: đã tạo tab `SFVN_TapHuan_20_11` (sheetId `2026112026`) có 6 cột `Thời gian yêu cầu,Họ và tên,Số điện thoại,Email,Nguồn bài viết,Trạng thái`. Dùng công thức QUERY từ `Leads` chỉ lấy `NguonTruyCap` bắt đầu `sfvn20261120-`, không chép lại dữ liệu/hàng cũ. Đã đọc lại tab chỉ có hàng tiêu đề trước khi khách gửi.
- GitHub Actions workflow kiểm tra chỉ-đọc `sfvn-interest-form-check.yml`, run `43607805528` hoàn thành **SUCCESS**: HTML/JS/checkbox/privacy đúng, trang live GET HTTP 200, backend receipt GET HTTP 200 trả `ok:false` khi requestId ngẫu nhiên; **không POST nên chưa xác thực end-to-end bằng khách thực/điện thoại**.
- Bản copy 4 bài đã duyệt và có Messenger + form: `facebook-drafts/2026-11/SFVN_4_BAI_FB_DA_DUYET_CTA_MESSENGER_FORM_20261114.md` (mỗi bài link nguồn riêng), 4 draft lẻ đồng bộ. ĐÃ UPDATE đúng 4 post Metricool theo UUID cũ, IDs mới: **16/11 18:30 #428072540; 17/11 10:00 #428072673; 18/11 18:30 #428072813; 19/11 10:00 #428072942**. Readback: cả 4 PENDING, autoPublish=true, 1 ảnh, đủ 2 liên kết và giữ giờ; không tạo bài trùng.
- Sáu evergreen nguyên 16/11 10:00, 18/11 12:00, 20/11 10:00, 23/11 10:00, 25/11 12:00, 27/11 10:00; Metricool tổng **1 PUBLISHED chào mừng + 10 PENDING**. Không sửa 21 PDF, website library registration, tin tức, bài Facebook evergreen hay dữ liệu Leads cũ.
- Đã cập nhật `FACEBOOK_KE_HOACH_THANG_11_2026.md`, kế hoạch Google Docs Drive `1G-wXcK6Vkp3zSlCl-t4eFJt8VfbMqO3sUv9tB8opQu8` và readback đúng IDs mới, 2 CTA. **Bước E2E tiếp theo:** chỉ khi có một khách tự nguyện gửi form, kiểm xem `Leads` nhận source `sfvn20261120-*`, tab event xuất hiện dòng và browser báo thành công; nếu có lỗi, giữ mã để chẩn đoán; không tự báo hoàn tất E2E.


### Y.52. Duyệt 4 ảnh sửa cuối và bài viết SFVN (14/11/2026)
- Chủ dự án nói **"duyệt 4 ảnh mới sửa xong, và bài viết"** sau khi yêu cầu giữ nguyên bốn poster SFVN chỉ bỏ **thanh xanh lá “Nhắn tin Fanpage Nông Sản 360…” và dòng chữ nhỏ in nghiêng ngay bên dưới**. Đây là duyệt 4 poster phiên bản cuối, **không phải yêu cầu tạo hình mới**.
- Đã rà soát ảnh thực trong phiên làm việc và đối chiếu 4 thiết kế với ảnh người dùng đánh dấu đỏ: bản IB 16/11, thông báo quyền lợi 17/11, 3 câu hỏi 18/11, còn 1 ngày 19/11. Bốn ảnh chỉnh sau khi bỏ footer xanh và dòng dưới có kích thước 1122×1402 (xấp xỉ 4:5) được giữ nguyên nguyên vẹn, copy tên rõ ràng:
  - `/mnt/data/NS360_SFVN_20261116_DA_DUYET_KHONG_CTA.png` (nguồn `a_clean_high_resolution_professional_vietnamese.png`).
  - `/mnt/data/NS360_SFVN_20261117_DA_DUYET_KHONG_CTA.png` (nguồn `a_clean_professional_high_resolution_infographic.png`).
  - `/mnt/data/NS360_SFVN_20261118_DA_DUYET_KHONG_CTA.png` (nguồn `a_polished_high_resolution_infographic_poster_in.png`).
  - `/mnt/data/NS360_SFVN_20261119_DA_DUYET_KHONG_CTA.png` (nguồn `a_clean_high_resolution_vietnamese_infographic_po.png`).
- Bộ caption chính đang ở `facebook-drafts/2026-11/SFVN_4_BAI_FB_DA_DUYET_CTA_MESSENGER_FORM_20261114.md`, 4 post Metricool UUID bất biến:
  - 16/11 18:30 UUID `-5232083627600753537`, hiện ID `428072540`
  - 17/11 10:00 UUID `7906905485232523003`, hiện ID `428072673`
  - 18/11 18:30 UUID `-8895106555576431118`, hiện ID `428072813`
  - 19/11 10:00 UUID `-9108208944996138606`, hiện ID `428072942`.
- Bước thực hiện: upload 4 ảnh DA_DUYET vào Drive `Nông Sản 360 - Website HTML/Facebook/03_HINH_ANH_BAI_DANG` **bằng tên mới, không ghi đè/xóa bốn ảnh cũ**, xác minh file IDs và permissions anyone reader rồi cập nhật media của **chỉ 4 UUID SFVN** trên Metricool, giữ caption/giờ/autoPublish. Đối chiếu yêu cầu trước: bỏ dòng "Lưu ý: Biểu mẫu chỉ tiếp nhận yêu cầu nhận thông tin..." khỏi caption công khai nếu còn, còn trang form vẫn ghi rõ bản chất yêu cầu thông tin.
- Readback đủ 10 PENDING (6 evergreen+4 SFVN), Media bốn bài mới. Đồng bộ link ảnh, Metricool ID mới vào GitHub plan + Google Docs kế hoạch và ghi checkpoint cuối. Không sửa 21 PDF, tin tức, website form, Google Sheets khách hay nội dung sáu bài kiến thức.


### Y.54. Đã xóa chính xác bốn ảnh SFVN cũ, giữ bốn ảnh final (14/11/2026)
- Người dùng gửi screenshot chọn **bốn ảnh cũ** trong thư mục `Nông Sản 360 - Website HTML/Facebook/03_HINH_ANH_BAI_DANG`, yêu cầu xóa để không nhầm với bốn poster SFVN cuối đã duyệt.
- Đã đối chiếu tên/ID/parent folder, xác minh cả bốn bài Metricool đã ingest 4 ảnh final (UUID bất biến, PENDING), rồi **xóa vĩnh viễn đúng bốn Drive files cũ**:
  - `NS360_SFVN_Bai1_16-11-2026.png` — ID `1POHdGLXENTqklSPyxar19TvaRYpIu23d`.
  - `NS360_SFVN_Bai1_ThongBao_17-11-2026.png` — ID `1K9dCywhaPLNUUdLszjeHSmzC-gFCo252`.
  - `NS360_SFVN_Bai3_18-11-2026.png` — ID `1INX0tpduWoAwZd0XmmiTMMmauS__DugR`.
  - `NS360_SFVN_Bai2_NhacLich_19-11-2026.png` — ID `1x0gn2DINKSxwygJq1rpOjzlfs9m1HiCn`.
- Bốn lệnh Google Drive `delete_file` đều trả `success=true`; **readback list_folder** cho thấy thư mục còn 11 ảnh (giảm từ 15), không có bốn ID trên, giữ nguyên bốn ảnh final:
  - 16/11 `NS360_SFVN_20261116_DA_DUYET_KHONG_CTA.png`, ID `19GZZ7sFTGBh5wgJrzDRlKJjCqR976aLb`
  - 17/11 `NS360_SFVN_20261117_DA_DUYET_KHONG_CTA.png`, ID `1yIpvHhPrne492V5QBEdOk7XvXMW2QJFX`
  - 18/11 `NS360_SFVN_20261118_DA_DUYET_KHONG_CTA.png`, ID `1RmqlP9jQUtl2-7H41i8OAH56LWN_QYKF`
  - 19/11 `NS360_SFVN_20261119_DA_DUYET_KHONG_CTA.png`, ID `1Z3dWmoFzUEmvA169yvYBP1zfR47h3kjG`.
- Giữ lại nguyên 7 ảnh Facebook kiến thức/chào mừng, 6 bài evergreen và bốn bài SFVN trên Metricool. Không thay caption, lịch, form, 21 PDF, tin tức hoặc Google Sheet khách.

### Y.55. Bổ sung 4 bài viết SFVN vào Drive/02_BAI_VIET (14/11/2026)
- Người dùng không thấy 4 bài viết trong Google Drive. Kiểm tra folder Facebook/02_BAI_VIET ID `1Qpr8jkC6HuIfIErigLzcTDHue40W8uXZ`: hiện mới có 6 Google Docs evergreen và 1 markdown chào mừng, chưa có 4 Docs SFVN. Đây là thiếu sót so với kỳ vọng, vì caption chỉ lưu ở GitHub và Metricool.
- Đã đối chiếu 4 caption **đang PENDING trên Metricool** (post IDs 428100194, 428100359, 428100588, 428100803), đã duyệt, có 2 CTA Messenger/form, đã bỏ lưu ý dài; sẽ dùng **nguyên văn caption từ Metricool** làm nguồn để đưa lên Drive.
- Tạo 4 Google Docs riêng trong `Facebook/02_BAI_VIET`, tiêu đề gắn FB-SFVN-20261116/17/18/19, ngày giờ ICT, trạng thái ĐÃ DUYỆT. Bảo đảm không sửa các bài lịch khác, không sao chép ảnh vào thư mục bài viết. Readback từng doc và vị trí trước khi thông báo, rồi cập nhật checkpoint.


### Y.56. Đã lưu đủ bốn bài viết SFVN đã duyệt vào Drive Facebook/02_BAI_VIET (14/11/2026)
- Người dùng không tìm thấy 4 bài viết trên Drive do trước đó chỉ có caption trên GitHub và Metricool, folder `02_BAI_VIET` chưa được bổ sung; đã xác nhận và khắc phục.
- Tạo 4 **Google Docs native riêng biệt**, định dạng tiêu đề, trạng thái **ĐÃ DUYỆT**, lịch đăng, link ảnh cuối và nguyên văn caption đã đặt trên Metricool, trong `Nông Sản 360 - Website HTML/Facebook/02_BAI_VIET` (folder ID `1Qpr8jkC6HuIfIErigLzcTDHue40W8uXZ`):
- **16/11:** [IB hàng hóa phái sinh](https://docs.google.com/document/d/167Z9-4JkZUlpHvX0rPMlEKvKm44bqtuaWIQ-tiZMhok/edit)
- **17/11:** [Giới thiệu tập huấn SFVN](https://docs.google.com/document/d/1-erF3kmmg4JDPLBkYaQ_KpVWJ6qMCsBDYEJcqcQyW_U/edit)
- **18/11:** [Ba câu hỏi IB chuẩn bị](https://docs.google.com/document/d/1XGfq3Ip1CBd66VyOCt-C4NOruenwoGDdLnGDH5OZJg4/edit)
- **19/11:** [Nhắc lịch tập huấn SFVN](https://docs.google.com/document/d/1GXw6Znrg1uvj5SK8o8UvfYl7kMJUSA6Fs-0pxP5X-dM/edit)
- Đã xác minh Drive parent đúng, đủ 4 tài liệu, readback 4 Docs đối chiếu **nguyên văn từng caption** với Metricool; có Messenger `https://m.me/1388965107640064` và link form `src=fb16/17/18/19`. Không tạo bài mới trên Metricool, không sửa 6 bài evergreen, ảnh, form, 21 PDF hay dữ liệu khách.


### Y.57. Kịch bản Messenger và quy trình chăm sóc khách SFVN (14/11/2026)
- Người dùng yêu cầu triển khai **ưu tiên 1**: viết đầy đủ kịch bản trả lời Messenger Fanpage Nông Sản 360 và quy trình chăm sóc khách quan tâm tập huấn SFVN 20/11/2026, lưu lên Drive, **giữ nguyên 10 bài PENDING trên Metricool**.
- Đã kiểm tra checkpoint hiện hành, 4 caption được duyệt và thẩm định SFVN; Metricool brand 8097037 readback 1 PUBLISHED + 10 PENDING (6 evergreen + 4 SFVN), có media và autoPublish. Lưu snapshot toàn bộ UUID/ngày/giờ/status để đối chiếu khi kết thúc, **không gọi cập nhật bài**.
- Phạm vi mới: tạo tài liệu Google Docs nội bộ gồm (1) lời chào và 12+ mẫu trả lời nhanh theo tình huống, FAQ xác thực, không bảo đảm giấy chứng nhận hoặc trợ cấp 2.000 USD/tháng, (2) SOP xử lý lead SFVN từ Messenger/form, cách phân loại, thời hạn phản hồi tham khảo, theo dõi nguồn và consent, hướng dẫn xử lý khi khách quan tâm mở tài khoản, rút đồng ý/xóa dữ liệu và chuyển SFVN khi vượt thẩm quyền.
- **Không thiết lập tin nhắn tự động thực tế trong Meta Business Suite** khi chưa có công cụ inbox/permission; tài liệu là bản cấu hình sẵn để chủ trang áp dụng, không được tuyên bố đã kích hoạt.
- Drive tạo folder riêng `Facebook/07_CHAM_SOC_KHACH_HANG` hoặc dùng thư mục hiện có nếu đã có, giữ nguyên các thư mục/21 giáo trình/dữ liệu khách. Tạo hai Google Docs native và đọc lại cả hai; cập nhật checkpoint sau hoàn thành.
- Thông tin được phép: 20/11/2026 09:00–12:00, SFVN Academy tầng 2 Tòa nhà Mekong 92A–94 Bạch Đằng P. Tân Sơn Hòa TP.HCM do người dùng cung cấp; giấy chứng nhận chỉ khi đủ điều kiện; hỗ trợ marketing/văn phòng tối đa USD 2.000/tháng theo xét duyệt SFVN, không tự động; không có form đăng ký suất chính thức.
- Fanpage Messenger `https://m.me/1388965107640064`, biểu mẫu nhận thông tin `https://nmtu1525-art.github.io/nongsan360/sfvn-tap-huan-20-11-2026.html`, Google Sheet `SFVN_TapHuan_20_11` chỉ lấy consent buổi tập huấn, không tự gửi marketing/affiliate. Không sao chép dữ liệu PII vào tài liệu hoặc GitHub.


### Y.58. HOÀN THÀNH kịch bản Messenger và SOP SFVN trên Drive (14/11/2026)
- Đã triển khai ưu tiên 1 theo yêu cầu chủ dự án: tạo Drive folder riêng `Facebook/07_CHAM_SOC_KHACH_HANG` (ID `1jl9BvJZK4VVGCbhBJ-ej5kbp6a4G1kAC`; https://drive.google.com/drive/folders/1jl9BvJZK4VVGCbhBJ-ej5kbp6a4G1kAC).
- Google Doc 1: **Kịch bản trả lời Messenger** `NS360 | 01_KICH_BAN_MESSENGER_SFVN_20-11-2026 | V1`, https://docs.google.com/document/d/1DEW2xOaoZgzCASlN01likzE8y718k-hJEZ3HIme8u4U/edit ; gồm lời chào, 16 mẫu trả lời, xử lý tình huống nhạy cảm, hướng dẫn soạn Saved Replies, checklist cài đặt Meta. Đã đọc lại 8.615 ký tự và 7 heading.
- Google Doc 2: **Quy trình chăm sóc khách SFVN** `NS360 | 02_QUY_TRINH_CHAM_SOC_KHACH_SFVN_20-11-2026 | V1`, https://docs.google.com/document/d/1IFihEKfdrRH2-IzhdCmHeko9Tg7pxFvFeXWWVh6jf8k/edit ; gồm luồng chat/form, 7 bước xử lý, trạng thái nội bộ, giờ phản hồi tham khảo, các trường CRM đề xuất, chính sách dữ liệu, quy tắc đối soát và checklist nghiệm thu. Đã đọc lại 9.061 ký tự và 11 heading.
- Đã xác minh cả hai tài liệu là **Google Docs native**, trong đúng parent folder mới, không chứa PII khách, có dẫn đúng Messenger và mẫu form. Trang form được người dùng xác nhận hoạt động ở cuộc trò chuyện trước nhưng không tuyên bố dữ liệu đã được nhập CRM tự động.
- **Chưa bật/chưa kiểm thử** Instant Reply/Saved Replies thực tế trên Meta Business Suite vì công cụ kết nối hiện có không cho thao tác Inbox Fanpage. Chủ trang cần vào Meta Business Suite để kích hoạt thủ công, thử từ Facebook khác; không tuyên bố đã có auto-reply.
- **Metricool readback lần cuối không thay đổi:** 1 PUBLISHED chào mừng và đúng 10 PENDING, cả 10 UUID đúng giờ, autoPublish=true, media=1. 6 evergreen nguyên lịch và 4 SFVN 16–19/11; KHÔNG gọi updateScheduledPost.
- Bước tiếp theo hợp lý: chủ dự án duyệt nội dung hai tài liệu và kích hoạt Messenger Instant Reply trong Meta; kiểm thử 3 câu hỏi và form thật, rồi thiết kế bảng CRM nội bộ có quyền phù hợp (không ghi đè sheet Leads/form nguồn).


### Y.59. Bắt đầu chặng mẫu CRM chăm sóc khách (14/11/2026, phiên tiếp tục)
- Đã đọc lại hai checkpoint, HEAD GitHub và Drive gốc; xác nhận Y.58 đã hoàn thành hai tài liệu Messenger/SOP và lịch Metricool được giữ nguyên tại lần kiểm trước.
- Chặng mới: tạo **mẫu CRM rỗng**, phân luồng khách hỏi tập huấn / kiến thức / chủ động hỏi hợp tác hoặc mở tài khoản, có trường ghi nhận consent, trạng thái, ngày hẹn và chủ phụ trách. Không sao chép PII, không chỉnh Sheet `Leads` hoặc lịch Metricool.
- Trước khi ứng dụng thực tế cần người dùng duyệt mẫu; không tuyên bố đồng bộ tự động nếu chưa kiểm thử.

### Y.60. Kết quả chặng mẫu CRM rỗng (14/11/2026)
- Đã tạo local workbook `NS360_MAU_CRM_CHAM_SOC_KHACH_SFVN_20261114.xlsx` gồm 3 sheet: `CRM_Khach_quan_tam` (18 cột, nhập rỗng, data validation), `HUONG_DAN` (consent và bảo mật), `TONG_QUAN` (đếm trạng thái bằng công thức).
- Đã mở lại workbook bằng openpyxl để xác minh đúng 3 sheet và không có hồ sơ khách thật.
- **CHƯA upload Drive**: công cụ import Google Sheets trả schema mismatch `source_file` yêu cầu object trong khi đầu vào được công bố dạng string; không được tuyên bố đã tạo Google Sheet native. File local có thể tải trực tiếp qua chat hiện tại.
- Không sửa Sheet Leads, lịch Metricool, website hay 21 PDF. Việc tiếp theo: đưa bản đã duyệt lên Drive bằng luồng import hỗ trợ object/file ref hợp lệ, kiểm thử trực tiếp Meta Messenger và form khách tự nguyện; không nhập giả PII.

### Y.61. Quay lại đúng bước Meta Messenger theo ảnh checkpoint (14/11/2026)
- Chủ dự án chỉ rõ ảnh checkpoint: **ưu tiên cấu hình lời chào và câu trả lời nhanh trong Meta Business Suite**, sau đó thử Messenger thật, mới hoàn thiện CRM. Không coi mẫu CRM rỗng Y.60 là thay thế bước Meta.
- Đã mở lại hai Google Docs Messenger/SOP trực tiếp từ Drive để đối chiếu nguyên văn, xác nhận 16 mẫu và quy trình 7 bước tồn tại.
- Đã cung cấp thao tác thủ công `Meta Business Suite → Inbox → Automations → Instant reply`, lời chào dễ đọc và saved reply SFVN_06 có link form `?src=messenger`.
- **CHƯA kích hoạt được Meta**: kết nối công cụ hiện có không có quyền thao tác Inbox/Automations Fanpage; cần chủ trang mở giao diện, thao tác và xác minh bằng tin nhắn tài khoản khác. Chưa khẳng định bật thành công.
- Giữ nguyên lịch Metricool 10 PENDING theo checkpoint gần nhất; không gọi update post, không thay 21 PDF/Leads/site.

### Y.62. Biên soạn lại Messenger + SOP V2 (14/11/2026)
- Chủ dự án phản hồi hai Docs V1 khó đọc và hỏi kịch bản có phải chatbot tự động không. Đã mở lại cả hai tài liệu native để rà đúng nguồn.
- Mục tiêu V2: phân biệt Meta Instant Reply/Away (auto), keyword/FAQ nếu có trên Page (rule-based), Saved Replies (người trực bấm), bot AI tích hợp (chưa có); đơn giản hóa kịch bản và quy trình chăm sóc 7 bước.
- Tạo bản Docs V2 mới trong `Facebook/07_CHAM_SOC_KHACH_HANG`, giữ bản V1 để đối chiếu, không thay lịch Metricool, không tự động kích hoạt bot chưa kiểm thử.
