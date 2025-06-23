# Changelog

Mọi thay đổi đáng chú ý của dự án sẽ được ghi lại trong tệp này.

Định dạng này dựa trên [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
và dự án này tuân theo [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.5.0] - 2025-06-16

### Added
- 🚀 **Hệ thống render nội dung động hoàn chỉnh**:
  - `main.js` (51 lines) - Toggle hamburger menu với class 'open', header search với Enter/Click events, redirect đến search.html
  - `article.js` (294 lines) - Binary search tìm bài viết, format date "HH:mm DD/MM/YYYY", auto-insert images sau mỗi đoạn văn, tìm related articles theo topic chung, render breadcrumb với topic/tag names
  - `search.js` (263 lines) - Filter articles theo query (title/content), highlight search terms, bubble sort theo relevance, render featured + vertical news layout, xử lý empty states
  - `tag.js` (191 lines) - Binary search tag, filter articles theo tag.article_ids, render tag info + statistics, featured news + vertical news layout
  - `topic.js` (344 lines) - Fisher-Yates shuffle cho random topics, binary search topic, filter articles theo topic.article_ids, dynamic navigation (4 left + 1 featured right), news slider với pagination

- 📂 **Hệ thống dữ liệu JSON chuẩn hóa**:
  - `articles.json` (220 bài viết) - Schema: id, url, title, content, images[], tags[], topics[], date_published, author, source, audio_link, crawled_at
  - `tags.json` (494 thẻ) - Schema: id, name, article_count, article_ids[], first_crawled_at, last_updated_at
  - `topics.json` - 61 chủ đề với phân loại: id, title, url, article_count, is_featured, last_updated_at, article_ids[], first_crawled_at
  
- 📊 **Tài liệu thuật toán**:
  - Tạo sơ đồ luồng (flowchart) cho 5 file JavaScript chính: `main.js`, `article.js`, `search.js`, `tag.js`, `topic.js`
  - Sơ đồ thuật toán trong `diagram.drawio`
  - Các file SVG giải thích logic JavaScript cho từng thành phần: `article.svg`, `main.svg`, `search.svg`, `tag.svg`, `topic.svg`

- 🎯 **Thuật toán tối ưu**:
  - **Binary Search O(log n)**: Tìm kiếm trong sorted arrays cho articles/tags/topics thay vì linear O(n)
  - **Bubble Sort O(n²)**: Sắp xếp search results theo relevance score (title match = 2, content match = 1)  
  - **Fisher-Yates Shuffle O(n)**: Random hóa topics cho left navigation (4 items từ id 1-61)

- 🔍 **Tính năng tìm kiếm nâng cao**:
  - Chuyển chức năng tìm kiếm header từ `search.js` sang `main.js`
  - Tính năng tìm kiếm hoạt động trên tất cả các trang

- 📄 **Stylesheet mới**:
  - `article.css` - Định dạng cho trang chi tiết bài viết
  - `search.css` - Định dạng cho trang tìm kiếm
  - `tag.css` - Định dạng cho trang thẻ

- 📋 **Tài liệu**:
  - Cập nhật `README.md` với thông tin mới

### Changed
- 🔄 **Hiện đại hóa và tương thích mã nguồn**:
  - Loại bỏ tất cả hàm callback modern (filter, map, forEach, find) thay bằng vòng lặp `for` cổ điển
  - Chuyển từ template literals (backticks) sang nối chuỗi thông thường (+)
  - Thay arrow functions bằng function declarations để tương thích IE
  - Sử dụng `var` thay `const/let` cho compatibility
  - Áp dụng Binary Search thay linear search để tối ưu hiệu suất

- 🎨 **Cập nhật template**:
  - Cập nhật `article.html`, `search.html`, `tag.html`, `topic.html`
  - Tích hợp render động vào tất cả template
  - Cải thiện responsive cho mobile và tablet

- ⚡ **Tối ưu hiệu suất**:
  - Tối ưu hóa việc render nội dung động
  - Giảm thiểu thao tác DOM không cần thiết
  - Lazy loading cho hình ảnh

### Removed
- 🗑️ **Tính năng cũ**:
  - Xóa `javascript-diagram.html` (không còn sử dụng)
  - Loại bỏ logic phân trang từ tìm kiếm (đơn giản hóa trải nghiệm người dùng)
  - Xóa file `CHƯƠNG II_ XÂY DỰNG WEBSITE.md` (không cần thiết)

### BREAKING CHANGES
- ⚠️ **Hệ thống nội dung động**: 
  - Website chuyển từ tĩnh sang hoàn toàn động
  - Tất cả nội dung được render từ dữ liệu JSON
  - JavaScript được yêu cầu để website hoạt động bình thường
- ⚠️ **Thay đổi phong cách code**:
  - Cách gọi API và xử lý dữ liệu đã thay đổi hoàn toàn
  - Hỗ trợ các môi trường JavaScript cũ

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