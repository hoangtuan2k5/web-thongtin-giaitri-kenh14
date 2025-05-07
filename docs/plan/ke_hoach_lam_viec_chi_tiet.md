# KẾ HOẠCH LÀM VIỆC CHI TIẾT

## Đồ án học phần 1: Xây dựng Website thông tin giải trí [Kenh14.vn](http://kenh14.vn/)

### THÔNG TIN NHÓM

- **Nhóm:** 3, K47 cơ sở Thạch Thất
- **Nhóm trưởng:** Hoàng Chiều Nguyễn Tuấn (MSV: 2300536)
- **Thành viên:** Phạm Thị Thu Thuỷ (MSV: 2300960)

### I. PHẠM VI VÀ MỤC TIÊU DỰ ÁN

### 1. Mục tiêu

- Xây dựng website thông tin giải trí dựa trên giao diện và bố cục của [Kenh14.vn](http://kenh14.vn/)
- Đảm bảo website có giao diện responsive, tương thích với nhiều thiết bị
- Áp dụng kiến thức về HTML, CSS (StyleSheet), và JavaScript để xây dựng website hoàn chỉnh
- Đáp ứng các yêu cầu đánh giá của đồ án học phần

### 2. Phạm vi

- **Số lượng trang cần xây dựng:** 5 trang chính với nội dung được render bằng JavaScript
    - Trang chủ (Homepage)
    - Trang chi tiết bài viết (Article)
    - Trang tìm kiếm (Search page)
    - Trang thẻ (Tags page)
    - Trang chủ đề (Topics page)
- **Yêu cầu kỹ thuật:**
    - Sử dụng HTML để xây dựng cấu trúc trang web
    - Sử dụng StyleSheet để tạo giao diện đẹp mắt và nhất quán
    - Sử dụng JavaScript/Vanilla JS để render nội dung động (bài báo, tag, topics)
    - Thu thập dữ liệu từ [Kenh14.vn](http://kenh14.vn/) bằng Java + Jsoup (nếu cần)

### II. PHÂN CÔNG NHIỆM VỤ CHI TIẾT

### 1. Hoàng Chiều Nguyễn Tuấn (Nhóm trưởng)

### a. Nhiệm vụ chính

- Quản lý dự án và phối hợp công việc giữa các thành viên
- Thiết kế và phát triển Trang chủ đề (10-50 chủ đề)
- Thiết kế và phát triển Trang thẻ (20-100 tag)
- Phát triển một phần Trang chi tiết bài viết (300-1000 bài báo)
- Thiết lập hệ thống quản lý mã nguồn với Git/GitHub
- Tạo các component cho header, footer

### b. Công việc chi tiết

1. **Quản lý dự án**
    - Tạo repository GitHub và thiết lập cấu trúc dự án
    - Tạo các nhánh phát triển và quy trình merge code
    - Theo dõi tiến độ và đảm bảo chất lượng code
    - Liên hệ với GVHD hàng tuần và báo cáo tiến độ
2. **Trang chủ đề (Topics page)**
    - Thiết kế layout tổng thể theo mẫu Kenh14
    - Xây dựng header và footer đồng nhất với các trang khác
    - Tạo cấu trúc dữ liệu JSON cho 10-50 chủ đề
    - Phát triển JavaScript để render nội dung chủ đề động
    - Tạo các thành phần: tin nổi bật, danh sách tin mới, tin phụ theo chủ đề con
    - Đảm bảo responsive trên các thiết bị
3. **Trang thẻ (Tags page)**
    - Thiết kế layout tổng thể theo mẫu Kenh14
    - Tạo cấu trúc dữ liệu JSON cho 20-100 tag
    - Phát triển JavaScript để render danh sách bài viết theo tag
    - Tạo hệ thống phân trang cho danh sách bài viết
    - Tạo phần thẻ liên quan trong sidebar
    - Đảm bảo responsive trên các thiết bị
4. **Trang chi tiết bài viết (Article) - Phần 1**
    - Thiết kế layout tổng thể theo mẫu Kenh14
    - Tạo cấu trúc dữ liệu JSON cho bài viết
    - Phát triển JavaScript để render tiêu đề, tác giả, thời gian đăng
    - Tạo các nút chia sẻ xã hội và lưu bài
    - Phát triển phần "TIN CÙNG CHUYÊN MỤC" dạng lưới 3 cột

### 2. Phạm Thị Thu Thuỷ

### a. Nhiệm vụ chính

- Thiết kế và phát triển Trang chủ (Homepage)
- Thiết kế và phát triển Trang tìm kiếm (Search page)
- Phát triển một phần Trang chi tiết bài viết (Article)
- Thiết kế StyleSheet chung cho toàn bộ website

### b. Công việc chi tiết

1. **Trang chủ (Homepage)**
    - Thiết kế layout tổng thể theo mẫu Kenh14
    - Xây dựng header với thanh điều hướng trên cùng, logo, trending tags
    - Tạo menu chính với các danh mục
    - Phát triển JavaScript để render tin tức mới nhất
    - Tạo slider tin nổi bật với các tin chính và tin phụ
    - Phát triển các mục tin tức phân theo chuyên mục
    - Xây dựng footer với logo, thông tin đóng góp, liên hệ
    - Đảm bảo responsive trên các thiết bị
2. **Trang tìm kiếm (Search page)**
    - Thiết kế layout tổng thể theo mẫu Kenh14
    - Tạo form tìm kiếm nổi bật
    - Phát triển JavaScript để xử lý tìm kiếm và hiển thị kết quả
    - Tạo cấu trúc hiển thị kết quả dạng danh sách với hình ảnh thu nhỏ
    - Phát triển sidebar với chuyên mục nổi bật và từ khóa phổ biến
    - Đảm bảo responsive trên các thiết bị
3. **Trang chi tiết bài viết (Article) - Phần 2**
    - Phát triển JavaScript để render nội dung bài viết
    - Tạo công cụ nghe đọc bài với các tùy chọn
    - Phát triển phần nguồn bài viết và các bài liên quan
    - Tạo phần "ĐỪNG BỎ LỠ" với tin nóng dạng slider
    - Đảm bảo responsive trên các thiết bị
4. **StyleSheet chung**
    - Thiết kế và phát triển CSS chung cho toàn bộ website
    - Tạo các biến CSS cho màu sắc và giá trị thường xuyên sử dụng
    - Phát triển các media queries để đảm bảo responsive
    - Tạo các hiệu ứng tương tác (hover, focus, active states)
    - Đảm bảo tính nhất quán về giao diện giữa các trang

### 3. Trách nhiệm chung

- Đảm bảo tính nhất quán về giao diện và trải nghiệm người dùng giữa các trang
- Tối ưu hiệu suất website
- Kiểm thử chéo công việc của nhau
- Tham gia các buổi họp nhóm và báo cáo với GVHD
- Chuẩn bị tài liệu báo cáo cuối cùng

### III. LỊCH TRÌNH DỰ ÁN

### Tuần 1: Khởi động dự án (05/05/2025 - 11/05/2025)

- **Hoàng Chiều Nguyễn Tuấn:**
    - Tạo repository GitHub và thiết lập cấu trúc dự án
    - Phân tích chi tiết giao diện Trang chủ đề và Trang thẻ
    - Thiết kế cấu trúc dữ liệu JSON cho chủ đề và tag
    - Liên hệ với GVHD để báo cáo kế hoạch làm việc
    - Tạo wireframe cho các trang
    - Tạo các component cho header và footer
- **Phạm Thị Thu Thuỷ:**
    - Phân tích chi tiết giao diện Trang chủ và Trang tìm kiếm
    - Bắt đầu thiết kế StyleSheet chung
    - Thu thập tài nguyên (hình ảnh, icon, font chữ)
    - Thiết kế cấu trúc dữ liệu JSON cho trang chủ
- **Công việc chung:**
    - Họp nhóm để thống nhất về cấu trúc dự án và quy ước code
    - Phân tích chi tiết giao diện Trang chi tiết bài viết
    - Thiết kế cấu trúc dữ liệu JSON cho bài viết

### Tuần 2: Phát triển cơ bản (12/05/2025 - 28/05/2025)

- **Hoàng Chiều Nguyễn Tuấn:**
    - Phát triển cấu trúc HTML cơ bản cho Trang chủ đề
    - Phát triển cấu trúc HTML cơ bản cho Trang thẻ
    - Bắt đầu viết JavaScript để render nội dung chủ đề và tag
    - Bắt đầu phát triển phần 1 của Trang chi tiết bài viết
    - Liên hệ với GVHD để báo cáo tiến độ
- **Phạm Thị Thu Thuỷ:**
    - Phát triển cấu trúc HTML cơ bản cho Trang chủ
    - Phát triển cấu trúc HTML cơ bản cho Trang tìm kiếm
    - Hoàn thiện StyleSheet chung
    - Bắt đầu viết JavaScript để render nội dung trang chủ
    - Bắt đầu phát triển phần 2 của Trang chi tiết bài viết
- **Công việc chung:**
    - Họp nhóm để đánh giá tiến độ và giải quyết vấn đề
    - Tích hợp StyleSheet chung vào các trang
    - Thống nhất cách thức xử lý dữ liệu JSON và render nội dung

### Tuần 3: Phát triển chi tiết (19/05/2025 - 25/05/2025)

- **Hoàng Chiều Nguyễn Tuấn:**
    - Hoàn thiện JavaScript để render nội dung chủ đề
    - Hoàn thiện JavaScript để render nội dung tag
    - Tiếp tục phát triển phần 1 của Trang chi tiết bài viết
    - Tạo chức năng chuyển đổi giữa các chủ đề và tag
    - Liên hệ với GVHD để báo cáo tiến độ
- **Phạm Thị Thu Thuỷ:**
    - Hoàn thiện JavaScript để render nội dung trang chủ
    - Phát triển chức năng tìm kiếm với JavaScript
    - Tiếp tục phát triển phần 2 của Trang chi tiết bài viết
    - Cập nhật và tối ưu StyleSheet chung
- **Công việc chung:**
    - Họp nhóm để đánh giá tiến độ và giải quyết vấn đề
    - Tích hợp các trang với nhau
    - Kiểm thử chéo công việc của nhau

### Tuần 4: Hoàn thiện và kiểm thử (26/05/2025 - 01/06/2025)

- **Hoàng Chiều Nguyễn Tuấn:**
    - Hoàn thiện tất cả chức năng JavaScript cho Trang chủ đề và Trang thẻ
    - Hoàn thiện phần 1 của Trang chi tiết bài viết
    - Tối ưu hiệu suất render JavaScript
    - Kiểm thử và sửa lỗi
    - Liên hệ với GVHD để báo cáo tiến độ
- **Phạm Thị Thu Thuỷ:**
    - Hoàn thiện tất cả chức năng JavaScript cho Trang chủ và Trang tìm kiếm
    - Hoàn thiện phần 2 của Trang chi tiết bài viết
    - Kiểm thử và sửa lỗi
    - Tối ưu hiệu suất website
- **Công việc chung:**
    - Họp nhóm để đánh giá tiến độ và giải quyết vấn đề
    - Tích hợp hoàn chỉnh các trang
    - Kiểm thử toàn diện trên nhiều thiết bị và trình duyệt
    - Bắt đầu chuẩn bị báo cáo

### Tuần 5: Hoàn thiện và nộp báo cáo (02/06/2025 - 08/06/2025)

- **Hoàng Chiều Nguyễn Tuấn:**
    - Sửa lỗi cuối cùng
    - Viết phần báo cáo liên quan đến Trang chủ đề, Trang thẻ và phần 1 của Trang chi tiết bài viết
    - Viết phần báo cáo về cách sử dụng JavaScript để render nội dung
    - Liên hệ với GVHD để báo cáo tiến độ cuối cùng
- **Phạm Thị Thu Thuỷ:**
    - Sửa lỗi cuối cùng
    - Viết phần báo cáo liên quan đến Trang chủ, Trang tìm kiếm và phần 2 của Trang chi tiết bài viết
    - Viết phần báo cáo về StyleSheet chung
- **Công việc chung:**
    - Họp nhóm để hoàn thiện báo cáo
    - Kiểm tra lại toàn bộ website
    - Hoàn thiện và nộp báo cáo cuối cùng
    - Chuẩn bị cho buổi bảo vệ đồ án (nếu có)

### IV. CÔNG NGHỆ SỬ DỤNG

### 1. Frontend Development

- **HTML:** Xây dựng cấu trúc trang web
- **CSS/StyleSheet:** Tạo giao diện đẹp mắt, responsive
- **Vanilla JS:** Xử lý tương tác người dùng và render nội dung động

### 2. Data Collection

- **Java + Jsoup:** Thu thập dữ liệu từ [Kenh14.vn](http://kenh14.vn/)

### 3. Infrastructure & Tools

- **Visual Studio Code & WebStorm:** IDE phát triển
- **Git/GitHub:** Quản lý mã nguồn, phiên bản
- **Trello:** Quản lý dự án, theo dõi tiến độ

### V. CẤU TRÚC DỮ LIỆU VÀ PHƯƠNG PHÁP RENDER

### 1. Cấu trúc dữ liệu

- **Bài viết:** JSON chứa thông tin về tiêu đề, tác giả, ngày đăng, nội dung, hình ảnh, chủ đề, tags
- **Chủ đề:** JSON chứa thông tin về tên chủ đề, mô tả, danh sách bài viết thuộc chủ đề
- **Tag:** JSON chứa thông tin về tên tag, danh sách bài viết thuộc tag

### 2. Phương pháp render

- **Single Page Application (SPA):** Sử dụng JavaScript để thay đổi nội dung trang mà không cần tải lại trang
- **Dynamic Content Loading:** Tải dữ liệu JSON và render nội dung động
- **Event Handling:** Xử lý sự kiện người dùng để chuyển đổi giữa các trang và hiển thị nội dung tương ứng

### VI. LIÊN HỆ VỚI GVHD

- Gửi email báo cáo tiến độ cho GVHD ít nhất 1 lần/tuần
- Nội dung email bao gồm:
    - Tiến độ công việc đã hoàn thành trong tuần
    - Kế hoạch công việc cho tuần tiếp theo
    - Các vấn đề gặp phải và giải pháp đề xuất
    - Link đến repository GitHub của dự án

### VII. YÊU CẦU ĐÁNH GIÁ

### 1. Mức đạt

- Xây dựng được ít nhất 5 page
- Các mục trên Menu phải Link được tới các Page tương ứng

### 2. Mức khá

- Các page tương tác với nhau theo chiều sâu của thông tin
- Sử dụng được StyleSheet

### 3. Mức tốt

- Toàn bộ thiết kế được sử dụng StyleSheet
- Có sử dụng JavaScript để render nội dung động

### VIII. KẾT QUẢ BÀN GIAO

- Mã nguồn chương trình (đã được push lên GitHub)
- USB chứa mã nguồn
- File báo cáo theo mẫu của bộ môn
- Demo website hoạt động