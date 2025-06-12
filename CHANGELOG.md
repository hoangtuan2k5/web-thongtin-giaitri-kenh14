# Changelog

Mọi thay đổi đáng chú ý của dự án sẽ được ghi lại trong tệp này.

Định dạng này dựa trên [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
và dự án này tuân theo [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.4.0] - 2025-06-13

### Added
- ✨ **Header mới**: 
  - Hamburger menu với hover effects mượt mà
  - Sử dụng sprite icons để tối ưu hiệu suất
  - Responsive navigation cho tất cả thiết bị

- 🎨 **Footer-medium component**: 
  - Layout responsive cho tablet & mobile
  - Căn cột linh hoạt với CSS Grid và Flexbox
  - Contact information với icons đồng nhất

- 📱 **Responsive system**:
  - Mobile-first approach với breakpoints: <576px, 576-992px, >992px
  - Áp dụng đơn vị `rem` thay thế `px`
  - File `responsive.css` riêng biệt để quản lý media queries

- 🖼️ **Tối ưu sprite và icons**:
  - Sprite sheets để giảm HTTP requests
  - Icons được tối ưu hóa cho hiệu suất

### Changed
- 🔄 **Hoàn thiện layout index.html**:
  - Responsive layout từ desktop ↔ mobile
  - Cấu trúc HTML được tối ưu hóa
  - Layout grid system mới cho tất cả breakpoints

### BREAKING CHANGES
- ⚠️ **Tái cấu trúc CSS và responsive**: 
  - Layout cũ có thể bị vỡ do thay đổi cấu trúc và breakpoints
  - CSS selectors và responsive behavior đã được cập nhật

## [0.3.0] - 2025-06-01

### Added
- Thêm `header.js` và `footer.js` - JavaScript component cho header và footer sử dụng Web Components API
- Bổ sung dữ liệu mẫu phong phú cho articles, tags và topics
- Thêm logo VCCorp cho branding

### Changed
- Cải thiện cấu trúc CSS với base styles tốt hơn
- Cập nhật tất cả các trang HTML để tích hợp với JavaScript components mới
- Sử dụng sprite image để tối ưu hiệu suất trang web

## [0.2.0] - 2025-05-20

### Changed
- Hoàn thành thiết kế và chức năng của header component
- Chuyển từ Themify Icons sang Font Awesome để tăng tính nhất quán và phong phú của giao diện

## [0.1.0] - 2025-05-07

### Added
- Thiết lập cấu trúc dự án ban đầu
- Mẫu HTML cơ bản cho 5 trang chính:
  - Trang chủ (`index.html`)
  - Trang chi tiết bài viết (`article.html`)
  - Trang tìm kiếm (`search.html`)
  - Trang thẻ (`tag.html`)
  - Trang chủ đề (`topic.html`)
- Tài liệu dự án:
  - Tài liệu phân tích dự án
  - Kế hoạch làm việc chi tiết và tóm tắt
  - Phân công nhiệm vụ nhóm
  - Sơ đồ và wireframe cho tất cả các trang
- Thành phần cơ bản:
  - Header và footer components
- Tổ chức thư mục tài nguyên:
  ```
  ├── css/
  ├── js/
  ├── images/
  └── fonts/
      └── themify/
  ```
- README dự án với:
  - Mô tả dự án
  - Mục tiêu và yêu cầu
  - Danh sách tính năng
  - Công nghệ sử dụng
  - Cấu trúc thư mục
  - Hướng dẫn cài đặt
  - Thông tin nhóm
- Giấy phép MIT