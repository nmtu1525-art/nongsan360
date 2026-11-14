# Checkpoint — Đăng ký đã được chủ dự án xác nhận hoạt động; chuyển sang vận hành

Ngày 14/11/2026, Asia/Ho_Chi_Minh. Mốc này bổ sung cho CONG_VIEC_DANG_LAM.md và TRANG_THAI_DU_AN.md; cần đọc cùng các checkpoint đó khi tiếp tục. Không khôi phục các hướng GPS/Google Maps đã bị chủ dự án bỏ.

## 1. Xác nhận mới nhất

Sau bản sửa receipt frontend `20261114-receipt-fix-2`, chủ dự án nói: “ok giờ dc rồi. giờ tiếp theo anh cần làm gì?”. Ghi nhận **người dùng xác nhận đăng ký đã hoạt động** trên luồng vừa thử. Không diễn giải thành bảo đảm mọi trình duyệt hoặc mọi đăng ký tương lai đều không lỗi.

Đã đọc lại hai checkpoint bắt buộc, lịch Fanpage tháng 11, chính sách dữ liệu và các commit gần nhất. HEAD trước checkpoint này là `bf521f6c9898b0aaa123d597b30dffce61862866` (publish tested receipt recovery fix). `library-gate.js` đang `LIVE_ENABLED=true` và `NATIVE_ENABLED=true` (blob `e5a2acb2ac711622f6c1ff503f64f60c8a85d0c4`). Không sửa code website hoặc Apps Script trong chặng này.

Đã truy cập Google Sheets bằng kết nối Drive, xác nhận đúng spreadsheet và tab Leads. Phạm vi chỉ-đọc `Leads!I1:J30` trong lượt này chỉ trả header; không suy đoán nguyên nhân, không tuyên bố đây là bằng chứng độc lập về một lượt đăng ký mới. Không đọc thông tin họ tên/điện thoại/email, không xóa/sửa dữ liệu. Mốc hoạt động ở trên là xác nhận của chủ dự án.

## 2. Facebook — đã kiểm tra trực tiếp

Metricool brand 8097037, tên Nông Sản 360, timezone Asia/Saigon. Lượt đọc lịch 15/11–01/12 xác nhận 6 bài Facebook PENDING, autoPublish=true:
- 17/11 10:00 — 427792755: Hàng thực và hợp đồng tương lai.
- 24/11 10:00 — 427792908: Giá cà phê và cung cầu.
- 25/11 12:00 — 427792991: Giá ngô ngoài thời tiết.
- 26/11 10:00 — 427793073: Giá lúa mì.
- 27/11 10:00 — 427793151: Ký quỹ và rủi ro.
- 30/11 10:00 — 427793267: Thư viện 21 giáo trình.

Không tạo bài trùng, không tự đổi lịch hoặc đăng bài trong lượt này. Lịch repo còn 5 ô hội thảo SFVN chưa có thông báo chính thức; không tự công bố ngày/giờ/địa điểm.

## 3. Mục tiêu và thứ tự đề xuất tiếp theo — CHƯA THỰC HIỆN

Mục tiêu chủ dự án: thu hút người quan tâm nông sản/hàng hóa phái sinh; cung cấp tài liệu, tạo tin cậy; người có nhu cầu tự nguyện mở tài khoản qua link/mã giới thiệu của anh. Không biến nội dung nhận diện thành quảng cáo mở tài khoản liên tục, không hứa lợi nhuận.

1. Kiểm chứng link/QR mở tài khoản hiện có với phía đối tác: tài khoản được giới thiệu có ghi nhận đúng mã của anh không. Trang mở được không chứng minh hoa hồng/attribution đã được ghi nhận. Chưa nghiệm thu phía đối tác trong lượt này; không yêu cầu gửi lại link đã có nếu chưa kiểm tra tài sản dự án.
2. Chuẩn bị bộ tiếp đón khách Fanpage: bài ghim giới thiệu thư viện miễn phí, tin nhắn chào mừng/FAQ, đường dẫn từ bài vào thư viện. Đề xuất dùng bài thư viện sớm hơn 30/11, nhưng chỉ thay lịch sau khi chủ dự án chấp thuận; không tự nhân đôi bài.
3. Quy trình phản hồi: hỗ trợ tài liệu theo nhu cầu; tư vấn mở tài khoản khi khách chủ động yêu cầu/đồng ý, không lấy đăng ký đọc thư viện làm sự đồng ý marketing. Chính sách hiện tại nói rõ không xin phép nhận quảng cáo/bản tin/hội thảo.
4. Vận hành thử một tuần với lượng người đọc nhỏ, chia sẻ nội dung hữu ích và trả lời bình luận; chưa đề xuất chi quảng cáo lớn trước khi quy trình ghi nhận và theo dõi khách hoạt động ổn định.
5. Theo dõi bốn chỉ tiêu: người đăng ký thật (không tính test), người chủ động hỏi tư vấn, lượt chuyển sang link mở tài khoản, tài khoản được đối tác xác nhận gắn mã giới thiệu. UTM có thể bổ sung để phân biệt nguồn/bài khi có cấu hình đo lường phù hợp; chưa tuyên bố đã cài hệ thống analytics.

## 4. Phân công gợi ý

- Chủ dự án: xác nhận mã giới thiệu với đối tác; duyệt bài ghim và tin nhắn chào; trực tiếp tiếp nhận nhu cầu tư vấn và đối chiếu tài khoản mở.
- Trợ lý trong các lượt được yêu cầu tiếp theo: soạn nội dung dựa trên giáo trình đã có, rà soát, lưu đúng thư mục Facebook, đồng bộ lịch đã được duyệt và kiểm chứng trạng thái. Không hứa chạy nền nếu chưa có automation thực.

Bước gần nhất đề xuất: **bộ bài ghim thư viện + tin nhắn tiếp đón + quy trình phản hồi khách**. Không tiếp tục nâng cấp định vị hoặc sửa lại form vừa được người dùng xác nhận hoạt động.

Bảo toàn mã nguồn đang chạy, 21 PDF, tin-tuc.json, Google Sheet riêng tư, nội dung/lịch Facebook và các automation hiện có. Không tạo automation mới hoặc thay đổi quyền chia sẻ trong lượt này.
