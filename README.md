# Đồ Án Học Phần 1: Xây Dựng Website Thông Tin Giải Trí Kenh14.vn

![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=flat&logo=css3)
![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/-Responsive-blue)
![Web Development](https://img.shields.io/badge/-Web%20Development-green)
![JSON](https://img.shields.io/badge/-JSON-lightgrey)
![License](https://img.shields.io/badge/License-MIT-brightgreen)
![Author](https://img.shields.io/badge/Author-Ho%C3%A0ng%20Chi%E1%BB%81u%20Nguy%E1%BB%85n%20Tu%E1%BA%A5n-blueviolet)
![Author](https://img.shields.io/badge/Author-Ph%E1%BA%A1m%20Th%E1%BB%8B%20Thu%20Thu%E1%BB%B7-pink)


## Thông Tin Sinh Viên
- **Lớp:** K4728-CNTT1
- **Nhóm:** 3, K47 cơ sở Thạch Thất
- **Trưởng nhóm:** Hoàng Chiều Nguyễn Tuấn (MSV: 2300536)
- **Thành viên:** Phạm Thị Thu Thuỷ (MSV: 2300960)
- **Giáo viên hướng dẫn:** Cô Ngô Thị Lan
- **Tên đề tài:** Xây dựng Website thông tin giải trí Kenh14.vn

## Giới Thiệu

Đồ án học phần 1 "Xây dựng Website thông tin giải trí Kenh14.vn" tập trung vào việc phát triển một website tin tức giải trí dựa trên mô hình của trang web Kenh14.vn. Kenh14.vn là một trong những trang tin tức giải trí phổ biến tại Việt Nam, cung cấp thông tin về nhiều lĩnh vực như giải trí, đời sống, thời trang, âm nhạc, điện ảnh và xã hội.

## Mục Tiêu Của Đồ Án

- Xây dựng website tin tức giải trí với giao diện tương tự Kenh14.vn
- Phát triển các trang chính: trang chủ, trang chi tiết bài viết, trang tìm kiếm, trang thẻ, trang chủ đề
- Sử dụng HTML, CSS/StyleSheet và JavaScript (Vanilla JS) để phát triển website
- Áp dụng kỹ thuật responsive design để website hiển thị tốt trên nhiều thiết bị
- Sử dụng JavaScript để render nội dung động từ dữ liệu JSON

## Công Nghệ Sử Dụng

- **HTML5**: Cấu trúc trang web
- **CSS3**: Tạo giao diện và responsive design
- **JavaScript (Vanilla JS)**: Xử lý logic và render nội dung động
- **JSON**: Lưu trữ dữ liệu bài viết, thẻ, và chủ đề

## Cấu Trúc Dự Án Chi Tiết

```
kenh14-clone/
├── assets/                      # Thư mục chứa tất cả các tài nguyên
│   ├── css/                     # Các file CSS
│   │   ├── style.css            # File CSS chính
│   │   ├── responsive.css       # File CSS riêng cho responsive design
│   │   └── components/          # CSS cho từng component (header, footer, card...)
│   │       ├── header.css
│   │       ├── footer.css
│   │       ├── article-card.css
│   │       └── ...
│   ├── js/                      # Các file JavaScript
│   │   ├── main.js              # File JavaScript chính
│   │   ├── render.js            # Logic render dữ liệu động
│   │   └── modules/             # Các module JavaScript
│   │       ├── slider.js        # Module xử lý slider
│   │       ├── search.js        # Module xử lý tìm kiếm
│   │       ├── ...
│   │       └── ...
│   ├── images/                  # Hình ảnh sử dụng trong dự án
│   │   ├── logo/                # Logo và biểu tượng của Kenh14.vn
│   │   ├── icons/               # Các icon sử dụng trong giao diện
│   │   └── assets/              # Các hình ảnh tĩnh khác (banner, biểu tượng)
│   ├── fonts/                   # Thư mục chứa font, icons
│   └── data/                    # Dữ liệu JSON
│       ├── posts.json           # Dữ liệu bài viết
│       ├── tags.json            # Dữ liệu thẻ
│       └── topics.json          # Dữ liệu chủ đề
├── components/                  # Components có thể tái sử dụng
│   ├── header.html              # Header component
│   └── footer.html              # Footer component
├── docs/                        # Tài liệu dự án
│   ├── analysis/                # Phân tích dự án
│   ├── imgs/                    # Hình ảnh tài liệu
│   │   └── wireframes/          # Wireframe các trang
│   ├── plan/                    # Kế hoạch làm việc
│   ├── reports/                 # Báo cáo
│   └── team-assignments/        # Phân công công việc
├── index.html                   # Trang chủ
├── article.html                 # Trang chi tiết bài viết
├── search.html                  # Trang tìm kiếm
├── tag.html                     # Trang thẻ
├── topic.html                   # Trang chủ đề
└── README.md                    # File này
```

### Giải Thích Chi Tiết Các Thư Mục:

#### 1. assets/
- **css/**: Chứa tất cả các file CSS của dự án
  - **components/**: CSS riêng cho từng thành phần UI để dễ dàng quản lý và bảo trì
- **js/**: Chứa tất cả các file JavaScript
  - **modules/**: Các module JavaScript được chia nhỏ theo chức năng
- **images/**: Chứa tất cả hình ảnh, được phân loại theo mục đích sử dụng
- **data/**: Chứa dữ liệu JSON mô phỏng cơ sở dữ liệu

#### 2. docs/
- **analysis/**: Chứa các file phân tích yêu cầu và thiết kế
- **imgs/wireframes/**: Chứa các wireframe và mockup của trang web
- **plan/**: Chứa kế hoạch làm việc chi tiết
- **reports/**: Chứa các báo cáo tiến độ và báo cáo cuối kỳ
- **team-assignments/**: Chứa thông tin phân công công việc trong nhóm

#### 3. HTML Pages
- **index.html**: Trang chủ hiển thị danh sách bài viết mới nhất và phổ biến
- **article.html**: Trang chi tiết hiển thị nội dung đầy đủ của bài viết
- **search.html**: Trang kết quả tìm kiếm
- **tag.html**: Trang hiển thị bài viết theo thẻ
- **topic.html**: Trang hiển thị bài viết theo chủ đề

## Các Tính Năng Chính

### 1. Hiển thị danh sách bài viết
- Hiển thị danh sách bài viết trên trang chủ
- Phân loại bài viết theo danh mục
- Hiển thị thông tin cơ bản: tiêu đề, hình ảnh, mô tả ngắn, danh mục, thời gian đăng

### 2. Hiển thị chi tiết bài viết
- Hiển thị nội dung đầy đủ của bài viết
- Hiển thị thông tin tác giả, thời gian đăng, danh mục
- Hiển thị các bài viết liên quan

### 3. Tìm kiếm bài viết
- Tìm kiếm bài viết theo từ khóa
- Hiển thị kết quả tìm kiếm với thông tin cơ bản
- Phân trang kết quả tìm kiếm

### 4. Hiển thị bài viết theo thẻ (tag)
- Hiển thị danh sách bài viết liên quan đến một thẻ cụ thể
- Hiển thị thông tin về thẻ
- Phân trang danh sách bài viết

### 5. Hiển thị bài viết theo chủ đề (topic)
- Hiển thị danh sách bài viết thuộc một chủ đề cụ thể
- Hiển thị thông tin về chủ đề
- Phân loại bài viết theo danh mục con trong chủ đề
- Phân trang danh sách bài viết

## Cài Đặt Và Sử Dụng

1. Clone repository:
```bash
git clone https://github.com/hoangtuan2k5/web-thongtin-giaitri-kenh14.git
```

2. Mở file `index.html` trong trình duyệt web để xem trang chủ

3. Hoặc sử dụng Live Server để khởi chạy dự án:
```bash
# Sử dụng VS Code Live Server Extension
# Hoặc cài đặt http-server
npm install -g http-server
http-server .
```

## Kết Quả Đạt Được

- Website tin tức giải trí với giao diện tương tự Kenh14.vn
- Các trang chính: trang chủ, trang chi tiết bài viết, trang tìm kiếm, trang thẻ, trang chủ đề
- Responsive design tương thích với nhiều thiết bị
- Render nội dung động từ dữ liệu JSON

## Tác Giả

- **Hoàng Chiều Nguyễn Tuấn** - *Trưởng nhóm*
  - GitHub: [hoangtuan2k5](https://github.com/hoangtuan2k5)
  - Email: hoangchieunguyentuan@gmail.com
  - LinkedIn: [hoangchieunguyentuan](https://www.linkedin.com/in/hoangchieunguyentuan/)

- **Phạm Thị Thu Thuỷ** - *Thành viên*
  - GitHub: [phamthithuthuy](https://github.com/phamthithuthuy)
  - Email: phamthuthuy071105@gmail.com

## Cảm Ơn

Trong quá trình thực hiện đồ án học phần 1, chúng em đã nhận được sự hướng dẫn tận tình và những ý kiến đóng góp quý báu từ Cô Ngô Thị Lan. Những kiến thức và kinh nghiệm mà Cô đã truyền đạt là nền tảng quan trọng giúp chúng em hoàn thành đồ án này.

Chúng em xin gửi lời cảm ơn chân thành đến Khoa Công nghệ thông tin, Bộ môn Công nghệ thông tin, Trường Đại học Công nghiệp Việt Hung đã tạo điều kiện thuận lợi để chúng em thực hiện đồ án.

## Giấy Phép

Dự án này được phân phối dưới giấy phép MIT. Xem file `LICENSE` để biết thêm chi tiết.