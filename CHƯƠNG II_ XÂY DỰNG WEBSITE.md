# CHƯƠNG II: XÂY DỰNG WEBSITE

Chương này trình bày chi tiết quá trình nhóm thực hiện việc xây dựng website tin tức giải trí mô phỏng Kenh14.vn, từ việc chuyển hóa các ý tưởng thiết kế ban đầu thành mã nguồn hoạt động đến việc tích hợp dữ liệu và hoàn thiện các chức năng cốt lõi. Chúng em sẽ mô tả các bước triển khai cụ thể, bao gồm việc lựa chọn cấu trúc thư mục, viết mã HTML để định hình cấu trúc nội dung, áp dụng CSS để tạo kiểu giao diện theo đúng wireframe và phong cách Kenh14, và sử dụng JavaScript để xử lý các tương tác người dùng và tải dữ liệu động từ các tệp JSON. Chương cũng đi sâu vào việc xây dựng các trang riêng biệt cho từng loại trang chức năng (trang chủ, trang thẻ, trang chủ đề, trang chi tiết, trang tìm kiếm), đảm bảo tính nhất quán trong bố cục và trải nghiệm người dùng trên toàn bộ website.

## 2.1. Bố cục Website

Quá trình xây dựng bố cục (layout) là bước nền tảng, định hình khung sườn cho toàn bộ website. Dựa trên phân tích giao diện Kenh14.vn và các wireframe đã thống nhất, chúng em đã tiến hành triển khai cấu trúc HTML và CSS để hiện thực hóa bố cục này. Quyết định cốt lõi là áp dụng cấu trúc hai cột cho hầu hết các trang, bao gồm khu vực nội dung chính (main content area) và khu vực phụ (sidebar).

Việc triển khai bắt đầu bằng việc cấu trúc tệp HTML cơ bản, định nghĩa các vùng chính như `<header>`, `<nav>`, `<main>`, `<aside>` (cho sidebar), và `<footer>`. Chúng em sử dụng các thẻ HTML ngữ nghĩa để đảm bảo tính rõ ràng và hỗ trợ tốt cho SEO cũng như khả năng truy cập. Với CSS, chúng em đã sử dụng các kỹ thuật layout hiện đại như Flexbox hoặc Grid để phân chia không gian giữa khu vực nội dung chính (chiếm khoảng 70-75% chiều rộng) và sidebar (chiếm phần còn lại). Các class CSS được đặt tên một cách có hệ thống (ví dụ: `.container`, `.main-content`, `.sidebar`) để dễ dàng quản lý và tái sử dụng.

Các thành phần chung được xây dựng thành các module riêng biệt và nhúng vào các trang cần thiết:

*   **Header:** Mã HTML cho header bao gồm logo, thanh điều hướng trên cùng, khu vực trending tags (dữ liệu có thể được lấy động bằng JavaScript sau này) và ô tìm kiếm. CSS được áp dụng để định dạng vị trí, kích thước, màu sắc và font chữ theo đúng thiết kế.
*   **Navigation (Menu chính):** Chúng em xây dựng menu chính dưới dạng danh sách `<ul><li>` với các liên kết `<a>` đến các trang danh mục. CSS được sử dụng để tạo kiểu thanh menu ngang, hiệu ứng hover và đặc biệt là triển khai menu ẩn (hamburger menu) cho giao diện mobile bằng cách sử dụng media queries và JavaScript để xử lý sự kiện click.
*   **Sidebar:** Khu vực `<aside>` được tạo kiểu với CSS. Một quyết định thiết kế quan trọng và có chủ đích của nhóm trong quá trình xây dựng bố cục là **không sử dụng không gian sidebar này cho mục đích quảng cáo** như thường thấy trên trang Kenh14.vn gốc. Thay vào đó, để phù hợp với tính chất của một đồ án học tập và nhằm mục đích xây dựng nhận diện riêng cho sản phẩm, chúng em đã **quyết định dành riêng khu vực này để hiển thị các yếu tố thương hiệu và thông tin của dự án**. Cụ thể, chúng em đã triển khai việc đưa logo của trường, logo hoặc hình ảnh đại diện của nhóm thực hiện, cùng các thông tin liên quan khác vào sidebar. Việc này được thực hiện bằng cách nhúng trực tiếp mã HTML tĩnh vào cấu trúc của thẻ `<aside>`, đảm bảo nội dung này luôn cố định và nhất quán trên các trang, góp phần tạo dấu ấn riêng cho website mô phỏng này.
*   **Footer:** Phần footer được cấu trúc bằng HTML với các thông tin liên hệ, bản quyền, liên kết hữu ích và được định dạng bằng CSS.

Quá trình này đòi hỏi sự phối hợp giữa việc viết mã HTML chuẩn xác và áp dụng CSS linh hoạt để đảm bảo bố cục hiển thị đúng trên các kích thước màn hình khác nhau (responsive design), một yếu tố quan trọng được chúng em chú trọng ngay từ đầu.

## 2.2. Một số giao diện của Website thông tin giải trí Kenh14.vn

Sau khi hoàn thiện khung bố cục chung và các thành phần tái sử dụng (Header, Footer, Sidebar cơ bản), chúng em tiến hành xây dựng mã nguồn HTML, CSS và JavaScript riêng biệt cho từng loại trang chức năng chính. Quá trình này tập trung vào việc áp dụng cấu trúc HTML phù hợp, định dạng CSS theo đúng wireframe và phong cách Kenh14, đồng thời triển khai logic JavaScript để xử lý dữ liệu từ các tệp JSON và tạo ra các tương tác người dùng cần thiết.

### 2.2.1. Xây dựng Trang chủ (index.html)

Trang chủ là trang phức tạp nhất trong hệ thống, bao gồm header đa tầng, khu vực nội dung chính và sidebar. Chúng em đã triển khai một cấu trúc trang chủ hoàn chỉnh với các thành phần chính sau:

#### **Cấu trúc Header:**
Header được chia thành 3 phần chính:
*   **Header Top Navigation:** Chứa menu điều hướng phụ (eMagazine, Genz Area, XANH chưa - check!!!, ShowLive) và ô tìm kiếm với icon kính lúp.
*   **Header Section:** Khu vực chính với logo Kênh14, trending tags hiển thị các hashtag nổi bật (#G-Dragon biểu diễn tại SVĐ Mỹ Đình, #Wren Evans dính drama ngoại tình), menu "Mới nhất" và nút hamburger menu.
*   **Header Main Menu Bar:** Thanh menu chính với các danh mục như Star, Ciné, Musik, Beauty & Fashion, Đời sống, Money-Z, Ăn - Quẩy - Đi, Xã hội, Sức khỏe, Tek-life, Học đường, Xem Mua Luôn, Video.

#### **Khu vực nội dung chính (Body-Left):**

**Featured News Section:**
*   **Cột trái:** Hiển thị bài viết nổi bật chính với ảnh lớn, tiêu đề và mô tả đầy đủ.
*   **Cột phải:** Hiển thị bài viết phụ với ảnh nhỏ và tiêu đề.

**News Slider với Swiper Pagination:**
Đây là một trong những tính năng nổi bật được triển khai với công nghệ Swiper.js:
*   **Cấu trúc HTML:** Sử dụng cấu trúc `<div class="news-slider">` chứa danh sách các tin tức với class BEM chuẩn: `news-slider__list`, `news-slider__item`, `news-slider__thumbnail`, `news-slider__title`.
*   **Pagination Component:** Triển khai hệ thống pagination với class BEM: `news-slider__pagination`, `news-slider__pagination-bullet`, `news-slider__pagination-bullet--active` để cho phép người dùng điều hướng giữa các trang tin tức.
*   **Navigation Controls:** Bao gồm các nút Previous/Next với class `news-slider__button--prev` và `news-slider__button--next`.

**Vertical News Section:**
*   **Tin nổi bật với Control Box:** Tin đầu tiên có badge "[ Tin vừa lên ]" và được tích hợp với một control box điều hướng sử dụng BEM naming convention:
    - `.control-box`: Container chính
    - `.control-box__button--left/right`: Các nút điều hướng
    - `.control-box__icon--up/down`: Icon mũi tên điều hướng
    - `.control-box__page`: Hiển thị trang hiện tại (1/2)
*   **Danh sách tin dọc:** Hiển thị các bài viết với ảnh thumbnail, tiêu đề, danh mục và thời gian đăng.

#### **CSS Implementation với BEM Methodology:**
Toàn bộ trang chủ được triển khai theo chuẩn BEM (Block Element Modifier):
*   **Header Components:** `.header__top-navigation`, `.header__section`, `.header__main-menu-bar`, `.header__logo`, `.header__trending-tags`, `.header__main-menu-item`
*   **Featured News:** `.featured-news__column`, `.featured-news__image`, `.featured-news__title`, `.featured-news__description`
*   **News Slider:** Pagination styles với color scheme matching Kênh14 (#fb512a), hover effects, và responsive design
*   **Control Box:** Styling hoàn chỉnh với hover effects, icon positioning, và page indicator styling

#### **Responsive Design:**
Trang chủ được thiết kế responsive với:
*   Wrapper class `.w1040` để căn giữa nội dung
*   Media queries để tối ưu hiển thị trên mobile và tablet
*   Flexbox layout cho các components
*   Optimized image loading với lazy loading

#### **JavaScript sử dụng trong trang:**
Phần JavaScript được triển khai tập trung vào việc xử lý tương tác cơ bản và responsive design:

*   **Mobile Navigation Toggle:** Xử lý sự kiện click cho nút hamburger menu để bật/tắt menu điều hướng trên giao diện mobile, sử dụng event listeners và DOM manipulation để thêm/xóa class CSS tương ứng.

Cấu trúc này đảm bảo trang chủ không chỉ trung thực với thiết kế gốc của Kênh14.vn mà còn áp dụng các best practices hiện đại trong phát triển web, đặc biệt là BEM methodology và responsive design.

### 2.2.2. Xây dựng Trang thẻ (tag.html)

Trang thẻ yêu cầu hiển thị danh sách bài viết dựa trên một `tag_id` cụ thể được truyền qua URL (ví dụ: `tag.html?id=abc`).

*   **HTML Structure:** Chúng em tạo tệp `tag.html` với cấu trúc cơ bản bao gồm khu vực hiển thị tên thẻ, mô tả thẻ (nếu có) và khu vực danh sách bài viết.
*   **JavaScript Logic:** Đoạn mã JavaScript trên trang này thực hiện các nhiệm vụ:
    1.  Lấy `tag_id` từ tham số URL.
    2.  Fetch dữ liệu từ `tags.json` để tìm tên và mô tả của thẻ tương ứng, sau đó hiển thị lên đầu trang.
    3.  Fetch dữ liệu từ `posts.json` và lọc ra tất cả các bài viết có chứa `tag_id` này trong mảng `tags` của bài viết.
    4.  Tạo HTML cho từng bài viết tìm được (dạng card gồm ảnh, tiêu đề, tóm tắt) và chèn vào khu vực danh sách.
    5.  Triển khai logic phân trang: Tính toán tổng số trang, hiển thị các nút phân trang, và xử lý sự kiện khi người dùng nhấp vào nút phân trang để chỉ hiển thị các bài viết thuộc trang đó.
*   **CSS Styling:** Tập trung vào việc định dạng danh sách bài viết dạng card, đảm bảo khoảng cách đều, hình ảnh và văn bản hiển thị rõ ràng. Phần phân trang cũng được tạo kiểu để dễ nhận biết và sử dụng.

### 2.2.3. Xây dựng Trang chủ đề (topic.html)

Trang chủ đề (`topic.html`) tương tự trang thẻ nhưng xử lý `topic_id` từ URL và có thể có cấu trúc phức tạp hơn.

*   **HTML & CSS:** Cấu trúc HTML bao gồm khu vực hiển thị tên chủ đề, banner, mô tả, và các khu vực con như danh mục con, bài viết nổi bật, danh sách bài viết đầy đủ. CSS được sử dụng để tạo sự phân cấp trực quan giữa các khu vực này.
*   **JavaScript Logic:**
    1.  Lấy `topic_id` từ URL.
    2.  Fetch dữ liệu từ `topics.json` để lấy thông tin chủ đề (tên, mô tả, banner).
    3.  Fetch dữ liệu từ `posts.json`, lọc bài viết theo `topic_id`.
    4.  (Tùy chọn nâng cao) Có thể lọc thêm để hiển thị các bài viết nổi bật hoặc phân nhóm theo danh mục con (nếu dữ liệu hỗ trợ).
    5.  Tạo HTML động cho các khu vực và danh sách bài viết.
    6.  Triển khai phân trang cho danh sách bài viết đầy đủ.

### 2.2.4. Xây dựng Trang bài báo chi tiết (detail.html)

Trang chi tiết (`detail.html`) hiển thị nội dung đầy đủ của một bài viết dựa trên `post_id` từ URL.

*   **HTML Structure:** Tập trung vào khu vực nội dung chính (`<article>`), bao gồm tiêu đề (`<h1>`), thông tin meta, nội dung bài viết (`<div class="post-content">`), khu vực thẻ liên quan, nút chia sẻ, và bài viết liên quan.
*   **JavaScript Logic:**
    1.  Lấy `post_id` từ URL.
    2.  Fetch dữ liệu từ `posts.json` để tìm đúng bài viết.
    3.  Hiển thị tiêu đề, thông tin meta.
    4.  **Quan trọng:** Chèn nội dung HTML của bài viết (trường `content` trong JSON) vào `<div class="post-content">`. Chúng em đảm bảo rằng nội dung HTML này được xử lý an toàn để tránh các lỗ hổng XSS.
    5.  Fetch dữ liệu từ `tags.json` để hiển thị tên các thẻ liên quan dựa trên mảng `tags` của bài viết.
    6.  Triển khai logic hiển thị các bài viết liên quan (ví dụ: lọc các bài viết khác cùng danh mục hoặc cùng thẻ).
*   **CSS Styling:** Ưu tiên hàng đầu là tính dễ đọc. Chúng em định dạng kỹ lưỡng font chữ, kích thước, khoảng cách dòng, chiều rộng cột nội dung, kiểu hiển thị cho hình ảnh và trích dẫn trong bài viết.

### 2.2.5. Xây dựng Trang tìm kiếm (search.html)

Trang tìm kiếm (`search.html`) xử lý từ khóa tìm kiếm (`query`) từ URL.

*   **HTML Structure:** Bao gồm ô tìm kiếm (điền sẵn từ khóa), thông báo số lượng kết quả, và khu vực danh sách kết quả.
*   **JavaScript Logic:**
    1.  Lấy `query` từ URL.
    2.  Hiển thị lại `query` trong ô tìm kiếm.
    3.  Fetch dữ liệu từ `posts.json`.
    4.  Thực hiện logic tìm kiếm: Lặp qua các bài viết, kiểm tra xem `query` (chuyển về chữ thường) có xuất hiện trong tiêu đề (`title`) hoặc nội dung (`content` - cũng chuyển về chữ thường) hay không. Đây là một bước xử lý tốn tài nguyên, cần tối ưu nếu có thể.
    5.  Tạo HTML cho danh sách kết quả, bao gồm tiêu đề, ảnh thumbnail, và đoạn trích (snippet) chứa từ khóa được làm nổi bật (highlight). Việc tạo snippet và highlight đòi hỏi xử lý chuỗi phức tạp hơn.
    6.  Hiển thị thông báo số lượng kết quả hoặc thông báo "không tìm thấy kết quả".
    7.  Triển khai phân trang cho danh sách kết quả.
*   **CSS Styling:** Định dạng danh sách kết quả tương tự trang thẻ, nhưng đặc biệt chú trọng vào việc làm nổi bật từ khóa trong kết quả tìm kiếm.



# KẾT LUẬN

Quá trình thực hiện đồ án xây dựng website tin tức giải trí mô phỏng Kenh14.vn, sử dụng bộ ba công nghệ nền tảng của front-end là HTML, CSS và JavaScript thuần (Vanilla JS), đã mang lại những kết quả đáng khích lệ, đồng thời cung cấp những bài học kinh nghiệm thực tiễn và làm nổi bật những thách thức vốn có trong việc phát triển ứng dụng web chỉ dựa vào phía client. Phần này nhằm mục đích tổng kết lại những thành tựu chính đã đạt được, thẳng thắn nhìn nhận những hạn chế còn tồn tại và đúc kết những kinh nghiệm quý báu thu nhận được trong suốt quá trình thực hiện.

Xét về tổng thể, đồ án đã **hoàn thành xuất sắc các mục tiêu cốt lõi** đã được xác định trong giai đoạn phân tích yêu cầu ban đầu. Một sản phẩm website với giao diện người dùng được lấy cảm hứng mạnh mẽ từ trang Kenh14.vn đã được xây dựng thành công. Điều này được minh chứng rõ ràng qua việc triển khai đầy đủ và hoạt động ổn định của các trang chức năng chính yếu, tạo nên một luồng trải nghiệm người dùng tương đối hoàn chỉnh. Trang chủ, với vai trò là cửa ngõ chính, đã được thiết kế để trình bày một cách trực quan các tin tức nổi bật và một danh sách đa dạng các bài viết thuộc nhiều chuyên mục khác nhau. Trang chi tiết bài viết đảm bảo cung cấp nội dung đầy đủ, rõ ràng, kèm theo các thông tin bổ trợ cần thiết như tác giả, ngày đăng, và các bài viết liên quan. Các trang phục vụ nhu cầu khám phá và tìm kiếm nội dung, bao gồm trang tìm kiếm theo từ khóa, trang liệt kê bài viết theo thẻ (tag), và trang hiển thị nội dung theo chủ đề (topic), cũng đã được phát triển thành công, mang đến cho người dùng nhiều phương thức linh hoạt để tiếp cận nguồn thông tin phong phú của website. Một điểm đáng chú ý là toàn bộ quá trình phát triển chỉ dựa trên các công nghệ front-end cơ bản: HTML chịu trách nhiệm cấu trúc ngữ nghĩa của nội dung, CSS (bao gồm cả việc áp dụng các kỹ thuật StyleSheet tiên tiến như Flexbox, Grid, và các hiệu ứng chuyển động) đảm nhiệm việc định dạng, tạo kiểu và mang lại sức sống cho giao diện, và cuối cùng là JavaScript thuần túy (Vanilla JS) đóng vai trò xử lý toàn bộ logic nghiệp vụ phía client và tạo ra các tương tác động. Việc áp dụng thành công kỹ thuật **Responsive Web Design** là một thành tựu quan trọng khác, đảm bảo website có khả năng tự động thích ứng và hiển thị một cách tối ưu trên một phổ rộng các loại thiết bị, từ màn hình lớn của máy tính để bàn đến màn hình nhỏ gọn của điện thoại di động và máy tính bảng. Đặc biệt, việc sử dụng JavaScript để **render (dựng) nội dung động trực tiếp từ các tệp dữ liệu JSON tĩnh** là một minh chứng thuyết phục cho khả năng xây dựng các ứng dụng web tương tác, giàu tính năng mà không nhất thiết phải phụ thuộc vào một hệ thống backend phức tạp, ít nhất là trong phạm vi và quy mô của đồ án này.

Tuy nhiên, bên cạnh những thành tựu đáng ghi nhận, việc nhìn nhận một cách khách quan các **hạn chế và khó khăn** còn tồn tại là điều cần thiết để có cái nhìn toàn diện về sản phẩm. Hạn chế cơ bản và lớn nhất của đồ án chính là sự **thiếu vắng hoàn toàn của một hệ thống backend và cơ sở dữ liệu động thực sự**. Quyết định sử dụng dữ liệu JSON tĩnh, mặc dù giúp đơn giản hóa quá trình phát triển front-end, lại tạo ra những giới hạn đáng kể. Nó làm hạn chế nghiêm trọng khả năng cập nhật nội dung mới một cách linh hoạt và tự động; mọi thay đổi về nội dung đều đòi hỏi phải can thiệp trực tiếp vào các tệp JSON. Quan trọng hơn, kiến trúc này không thể hỗ trợ các tính năng yêu cầu lưu trữ và xử lý dữ liệu phía máy chủ, đặc biệt là dữ liệu liên quan đến người dùng. Do đó, các chức năng quan trọng và phổ biến trên các website tin tức hiện đại như **hệ thống đăng nhập/đăng ký tài khoản người dùng, quản lý hồ sơ cá nhân, và một hệ thống quản trị nội dung (Content Management System - CMS)** thân thiện để đội ngũ biên tập viên có thể dễ dàng thêm, sửa, xóa bài viết, quản lý danh mục, thẻ, chủ đề... đã không thể được triển khai. Tương tự, các tính năng tương tác người dùng phức tạp hơn, ví dụ như **hệ thống bình luận dưới mỗi bài viết** hay **tính năng lưu bài viết yêu thích**, cũng nằm ngoài khả năng của kiến trúc hiện tại. Một khó khăn tiềm ẩn khác liên quan đến **hiệu suất hoạt động**. Mặc dù các kỹ thuật tối ưu hóa cơ bản phía front-end (như tối ưu ảnh, gộp file CSS/JS, lazy loading) đã được cố gắng áp dụng, việc xử lý toàn bộ logic và render giao diện hoàn toàn ở phía client, đặc biệt khi phải làm việc với một khối lượng lớn dữ liệu JSON (trong trường hợp website phát triển với quy mô lớn hơn nhiều so với mô phỏng), có nguy cơ dẫn đến thời gian tải trang ban đầu lâu hơn và tiêu tốn nhiều tài nguyên (CPU, bộ nhớ) của trình duyệt người dùng, ảnh hưởng tiêu cực đến trải nghiệm, nhất là trên các thiết bị có cấu hình phần cứng hạn chế.

Song song với việc hoàn thành sản phẩm, quá trình thực hiện đồ án cũng là một hành trình học hỏi và tích lũy nhiều **bài học kinh nghiệm** thực tiễn quý báu cho đội ngũ phát triển. Trước hết, đồ án một lần nữa khẳng định **tầm quan trọng không thể phủ nhận của giai đoạn phân tích yêu cầu và thiết kế hệ thống** một cách kỹ lưỡng, chi tiết trước khi bắt tay vào viết những dòng mã đầu tiên. Một bản phân tích yêu cầu đầy đủ và một bản thiết kế kiến trúc, giao diện tốt sẽ đóng vai trò như kim chỉ nam, giúp định hướng rõ ràng cho toàn bộ quá trình phát triển, giảm thiểu rủi ro phải thay đổi lớn hoặc làm lại về sau, tiết kiệm thời gian và công sức. Thứ hai, **giá trị của việc tổ chức mã nguồn một cách khoa học, rõ ràng, có cấu trúc mạch lạc và tuân thủ nghiêm ngặt các quy ước lập trình (coding conventions)** đã được minh chứng rõ nét. Việc chia nhỏ mã nguồn thành các module, đặt tên biến/hàm có ý nghĩa, viết chú thích (comment) giải thích các đoạn mã phức tạp... không chỉ giúp bản thân nhà phát triển dễ dàng quản lý, gỡ lỗi mà còn tạo điều kiện thuận lợi tối đa cho việc bảo trì, sửa lỗi và phát triển các tính năng mới trong tương lai, đặc biệt là trong môi trường làm việc nhóm. Thứ ba, đồ án là một cơ hội thực hành tuyệt vời để nhận thức sâu sắc hơn về **tầm quan trọng và sự cần thiết của Responsive Web Design** trong bối cảnh phát triển web hiện đại, nơi mà người dùng có thể truy cập từ vô số loại thiết bị với kích thước và độ phân giải màn hình khác nhau. Việc đảm bảo trải nghiệm nhất quán và tối ưu trên mọi thiết bị là một yêu cầu gần như bắt buộc. Thứ tư, việc trực tiếp làm việc với **JavaScript thuần (Vanilla JS) để thao tác với DOM, xử lý sự kiện, và quản lý dữ liệu động** đã giúp củng cố một cách vững chắc các kiến thức và kỹ năng lập trình front-end cốt lõi, tạo nền tảng vững vàng cho việc học và sử dụng các framework/thư viện JavaScript phức tạp hơn sau này. Cuối cùng, đối với các dự án được thực hiện theo mô hình nhóm, đây còn là một cơ hội quý giá để các thành viên rèn luyện và nâng cao các **kỹ năng mềm thiết yếu như kỹ năng làm việc nhóm, kỹ năng giao tiếp hiệu quả, phân công công việc và quản lý tiến độ dự án** cơ bản, những yếu tố quan trọng góp phần vào sự thành công của bất kỳ dự án nào.

# TÀI LIỆU THAM KHẢO

Quá trình nghiên cứu, thiết kế và triển khai website trong khuôn khổ đồ án này đã tham khảo, học hỏi và dựa trên nền tảng kiến thức từ nhiều nguồn tài liệu học thuật và kỹ thuật uy tín. Các nguồn này bao gồm sách chuyên khảo về thiết kế và phát triển web, cùng với các tài nguyên trực tuyến phong phú và cập nhật liên tục từ cộng đồng phát triển web toàn cầu. Dưới đây là danh sách chi tiết các tài liệu tham khảo chính đã đóng góp vào sự thành công của dự án:

**Sách và Tài liệu In ấn:**

Nền tảng vững chắc về cấu trúc ngữ nghĩa của trang web (HTML) và các kỹ thuật tạo kiểu, định dạng giao diện (CSS) được xây dựng chủ yếu thông qua việc nghiên cứu cuốn sách kinh điển **"HTML and CSS: Design and Build Websites"** của tác giả Jon Duckett (Nhà xuất bản Wiley, 2014). Cuốn sách này nổi bật với cách trình bày trực quan, sử dụng nhiều hình ảnh minh họa và ví dụ thực tế, giúp người đọc dễ dàng tiếp cận các khái niệm từ cơ bản đến nâng cao của HTML5 và CSS3. Để nắm vững các kỹ thuật lập trình phía client nhằm tạo ra các trang web tương tác và động, cuốn sách **"JavaScript and JQuery: Interactive Front-End Web Development"**, cũng của Jon Duckett (Nhà xuất bản Wiley, 2014), đã cung cấp những kiến thức nền tảng quan trọng về JavaScript và các nguyên tắc tương tác người dùng, mặc dù đồ án này đã lựa chọn tập trung vào việc sử dụng JavaScript thuần (Vanilla JS) thay vì thư viện JQuery để củng cố kỹ năng cốt lõi. Các khái niệm và kỹ thuật cốt lõi của thiết kế web đáp ứng (Responsive Web Design) – một yêu cầu phi chức năng quan trọng của dự án – đã được tham khảo chủ yếu từ cuốn sách tiên phong **"Responsive Web Design"** của Ethan Marcotte (Nhà xuất bản A Book Apart, 2011). Ethan Marcotte chính là người đã định nghĩa và phổ biến thuật ngữ này, và cuốn sách của ông đặt nền móng lý thuyết vững chắc cho phương pháp thiết kế này. Đối với việc tìm hiểu sâu rộng và chi tiết về ngôn ngữ lập trình JavaScript, từ các khái niệm cơ bản đến các tính năng nâng cao và các API phức tạp, cuốn **"JavaScript: The Definitive Guide, 7th Edition"** của David Flanagan (Nhà xuất bản O'Reilly Media, ấn bản cập nhật năm 2020) được xem là một tài liệu tham khảo toàn diện, có độ tin cậy cao và bao quát các chuẩn ECMAScript mới nhất.

**Website và Nguồn Trực tuyến:**

Trong suốt quá trình phát triển và giải quyết các vấn đề kỹ thuật phát sinh, các nguồn tài liệu trực tuyến đã đóng một vai trò không thể thiếu. **MDN Web Docs (Mozilla Developer Network)**, có thể truy cập tại địa chỉ https://developer.mozilla.org/, là nguồn tài nguyên tham khảo hàng đầu và được tin cậy nhất đối với các nhà phát triển web. MDN cung cấp tài liệu cực kỳ chi tiết, chính xác, luôn được cập nhật về mọi khía cạnh của các công nghệ web cốt lõi như HTML, CSS, JavaScript, các API trình duyệt (Web APIs), cùng vô số chủ đề liên quan khác. Các tài liệu trên MDN thường đi kèm với các ví dụ mã nguồn rõ ràng, dễ hiểu và các giải thích sâu sắc về cách thức hoạt động của từng tính năng. Bên cạnh MDN, các diễn đàn cộng đồng lớn mạnh như **Stack Overflow** (stackoverflow.com) là nơi vô giá để tìm kiếm giải pháp cho các vấn đề kỹ thuật cụ thể, các lỗi lập trình gặp phải trong quá trình thực thi dự án. Khả năng tìm kiếm các câu hỏi đã được trả lời hoặc đặt câu hỏi mới và nhận được sự trợ giúp từ cộng đồng lập trình viên toàn cầu là một lợi thế lớn. Ngoài ra, các trang web chuyên về chia sẻ kiến thức, hướng dẫn lập trình và các bài viết chuyên sâu về kỹ thuật front-end như **W3Schools** (w3schools.com) – cung cấp các hướng dẫn và ví dụ cơ bản, **CSS-Tricks** (css-tricks.com) – tập trung vào các kỹ thuật CSS hiện đại và sáng tạo, **Smashing Magazine** (smashingmagazine.com) – cung cấp các bài viết chất lượng cao về thiết kế và phát triển web, cùng nhiều blog công nghệ uy tín khác cũng đã đóng góp không nhỏ vào việc giải quyết các thách thức kỹ thuật, học hỏi các phương pháp hay nhất (best practices) và cập nhật các xu hướng công nghệ mới.

Việc kết hợp và tham khảo chéo thông tin từ đa dạng các nguồn tài liệu uy tín này đã góp phần quan trọng vào việc xây dựng một nền tảng kiến thức vững chắc, đảm bảo chất lượng kỹ thuật và học thuật cho đồ án, từ đó giúp hoàn thành thành công các mục tiêu đã đề ra.

