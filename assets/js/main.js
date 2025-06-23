// Đợi trang và DOM load xong
document.addEventListener('DOMContentLoaded', function() {
    // Lấy phần tử nút hamburger
    var btn = document.querySelector('.header__hamburger');
    // Lấy phần tử menu chính
    var menu = document.querySelector('.header__main-menu-bar');

    // Khi user click vào nút
    btn.onclick = function() {
        // Nếu đã có class 'open', thì bỏ đi (đóng menu)
        if (menu.classList.contains('open')) {
            menu.classList.remove('open');
        } 
        // Ngược lại chưa có, thì thêm vào (mở menu)
        else {
            menu.classList.add('open');
        }
    };
    
    // Xử lý chức năng tìm kiếm ở header (hiển thị trên tất cả các trang)
    setupHeaderSearch();
});

// Hàm xử lý tìm kiếm ở header
function setupHeaderSearch() {
    const headerSearchInput = document.querySelector('.header__top-navigation__search input');
    const headerSearchButton = document.querySelector('.header__top-navigation__search button');
    
    if (headerSearchInput && headerSearchButton) {
        // Xử lý khi click vào nút tìm kiếm
        headerSearchButton.addEventListener('click', function(event) {
            event.preventDefault();
            const query = headerSearchInput.value.trim();
            if (query) {
                window.location.href = `search.html?query=${encodeURIComponent(query)}`;
            }
        });
        
        // Xử lý khi nhấn Enter trong input
        headerSearchInput.addEventListener('keyup', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                const query = headerSearchInput.value.trim();
                if (query) {
                    window.location.href = `search.html?query=${encodeURIComponent(query)}`;
                }
            }
        });
    }
}
