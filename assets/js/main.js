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
});
