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
