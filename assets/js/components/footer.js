class Kenh14Footer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }    connectedCallback() {
        this.render();
    }

    render() {        
        this.shadowRoot.innerHTML = `            
            <style>
                /* Base CSS */
                * {
                   margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                body, h1, h2, h3, h4, h5, h6, p, ul, li, a {
                    font-family: Arial, Helvetica, sans-serif; 
                }

                ul {
                    list-style: none;
                }

                a {
                    text-decoration: none;
                    color: inherit;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                
                a:hover {
                    text-decoration: underline;
                }

                .clearfix:after {
                    visibility: hidden;
                    display: block;
                    font-size: 0;
                    content: " ";
                    clear: both;
                    height: 0;
                }

                .w1040 {
                    width: 1040px;
                }

                /* Margin utilities */
                .mt-30 { margin-top: 30px; }
                .mr-30 { margin-right: 30px; }
                .mb-30 { margin-bottom: 30px; }
                .ml-30 { margin-left: 30px; }
                .mx-30 {
                    margin-left: 30px;
                    margin-right: 30px;
                }
                .my-30 {
                    margin-top: 30px;
                    margin-bottom: 30px;
                }

                /* Padding utilities */
                .pl0 {
                    padding-left: 0 !important;
                }

                /* Menu footer */
                .footer__menu {
                    margin-bottom: 30px;
                    padding: 9px 0;
                    background: #e9e9e9;
                }

                .footer__container {
                    display: block;
                    width: fit-content;
                    margin: 0 auto;
                }

                .footer__menu-item {
                    display: inline;
                }

                .footer__menu-item:not(:first-child)::before {
                    content: '|';
                    margin: 0 2px;
                    color: #a1a1a1;
                    font-size: 12px;
                }

                .footer__menu-item a {
                    color: #a1a1a1;
                    font-size: 12px;
                    font-weight: 700;
                }

                /* Footer Top */
                .footer__top-left {
                    display: inline-block;
                    width: 520px;
                    height: 128px;
                    border: 1px solid #595959;
                }

                .footer__logo {
                    display: block;
                    float: left;
                    width: 60px;
                    height: 90px;
                    margin: 15px 20px;
                    background: url('assets/images/sprites/k14h-sprite_v1.png') -187px -90px;
                    background-repeat: no-repeat;
                }

                .footer__user-response {
                    margin: 15px 20px;
                }

                .footer__section-title {
                    font-size: 16px;
                    font-weight: bold;
                    line-height: 20px;
                    color: #555;
                    text-transform: uppercase;
                }

                .footer__faq-btn {
                    position: relative;
                    display: inline-block;
                    height: 24px;
                    margin-top: 3px;
                    margin-right: 12px;
                    margin-bottom: 5px;
                    padding: 0 6px 0 28px;
                    border: 1px solid #e7e7e7;
                    border-radius: 2px;
                    color: #333;
                    font-size: 11px;
                    font-weight: bold;
                    line-height: 24px;
                    text-decoration: none;
                    text-transform: uppercase;
                }

                .footer__faq-btn::before {
                    position: absolute;
                    top: 5px;
                    left: 6px;
                    display: block;
                    width: 15px;
                    height: 15px;
                    content: '';
                    background-image: url('assets/images/sprites/k14h-sprite_v1.png');
                    background-position: -257px -119px;
                    background-repeat: no-repeat;
                }

                .footer__mail {
                    position: relative;
                    display: inline-block;
                    padding-left: 20px;
                    color: #333;
                    font-size: 13px;
                    text-decoration: none;
                }

                .footer__mail::before {
                    position: absolute;
                    top: 2px;
                    left: 0;
                    display: block;
                    width: 13px;
                    height: 9px;
                    content: '';
                    background-image: url('assets/images/sprites/k14h-sprite_v1.png');
                    background-position: -282px -119px;
                    background-repeat: no-repeat;
                }

                .footer__mail--medium-gray::before {
                    position: absolute;
                    top: 2px;
                    left: 0;
                    display: block;
                    width: 13px;
                    height: 9px;
                    content: '';
                    background-image: url('assets/images/sprites/k14h-sprite_v1.png');
                    background-position: -282px -119px;
                    background-repeat: no-repeat;
                }

                .footer__user-response p {
                    color: #595959;
                    font-size: 12px;
                    line-height: 18px;
                }

                .footer__top-right {
                    display: inline-block;
                }

                .footer__top-left, 
                .footer__top-right {
                    vertical-align: top;
                }

                /* Footer Bottom */
                .footer__bottom {
                    width: 1040px;
                    margin-right: auto;
                    margin-left: auto;
                }

                .footer__bottom .footer__column-title,
                .footer__bottom .footer__column-title a {
                    margin-bottom: 8px;
                    padding-left: 0 !important;
                    color: #555;
                    font-size: 14px;
                    font-weight: bold;
                    text-decoration: none;
                    text-transform: uppercase;
                }

                .footer__bottom .footer__column-title a:hover {
                    text-decoration: underline;
                }

                .footer__column {
                    float: left;
                    width: 280px;
                    padding: 0 25px;
                    border-left: 1px solid #e7e7e7;
                }

                .footer__bottom .footer__column:first-of-type {
                    padding-left: 0;
                    border-left: none;
                }

                .footer__bottom .footer__column:last-of-type {
                    padding-right: 0;
                }

                .footer__bottom .footer__column:first-of-type,
                .footer__bottom .footer__column:last-of-type {
                    width: 335px;
                }

                .footer__bottom .footer__column-title {
                    margin-bottom: 8px;
                    color: #555;
                    font-size: 14px;
                    font-weight: bold;
                    text-transform: uppercase;
                }

                .footer__address {
                    margin-bottom: 35px;
                }

                .footer__bottom p {
                    color: #595959;
                    font-size: 13px;
                    line-height: 18px;
                }

                .footer__map-btn {
                    position: relative;
                    display: block;
                    height: 15px;
                    margin-top: 8px;
                    padding-left: 15px;
                    color: #595959;
                    font-size: 10px;
                    font-weight: bold;
                    line-height: 14px;
                    text-decoration: none;
                    text-transform: uppercase;
                }

                .footer__map-btn:before {
                    position: absolute;
                    top: 0;
                    left: 0;
                    display: block;
                    width: 9px;
                    height: 13px;
                    content: '';
                    background-image: url('assets/images/sprites/k14h-sprite_v1.png');
                    background-position: -257px -167px;
                    background-repeat: no-repeat;
                }

                .footer__map-btn:hover {
                    text-decoration: underline;
                }

                .footer__info-block {
                    margin-bottom: 18px;
                }

                .footer__info-block p {
                    padding-left: 20px;
                }

                .footer__info-block .footer__phone {
                    position: relative;
                }

                .footer__info-block .footer__phone:before {
                    position: absolute;
                    top: 0;
                    left: 0;
                    display: block;
                    width: 8px;
                    height: 15px;
                    content: '';
                    background-image: url('assets/images/sprites/k14h-sprite_v1.png');
                    background-position: -366px -90px;
                    background-repeat: no-repeat;
                }

                .footer__info-block .footer__mail--medium-gray {
                    position: relative;
                    display: block;
                    height: 15px;
                    margin-top: 5px;
                    padding-left: 20px;
                    color: #595959;
                    font-size: 13px;
                    line-height: 15px;
                    text-decoration: none;
                }

                .footer__info-block .footer__mail--medium-gray:before {
                    position: absolute;
                    top: 4px;
                    left: 0;
                    width: 13px;
                    height: 9px;
                    content: '';
                    background-image: url('assets/images/sprites/k14h-sprite_v1.png');
                    background-position: -305px -119px;
                    background-repeat: no-repeat;
                }

                .footer__info-block .footer__mail--medium-gray:hover {
                    text-decoration: underline;
                }

                .footer__details-btn {
                    display: inline-block;
                    height: 24px;
                    margin-top: 15px;
                    padding: 0 15px;
                    border-radius: 2px;
                    background: #fa5d37;
                    color: #fff;
                    font-size: 12px;
                    font-weight: bold;
                    line-height: 24px;
                    text-decoration: none;
                    text-transform: uppercase;
                }

                .footer__details-btn:hover {
                    background: #333;
                }

                .footer__vccorp-logo {
                    display: block;
                    width: 100px;
                    height: 49px;
                    margin-bottom: 15px;
                }

                .footer__bottom .footer__column:last-of-type .footer__column-title {
                    margin-bottom: 15px;
                }

                .footer__bottom .footer__column:last-of-type p {
                    margin-bottom: 15px;
                }

                .footer__bottom .footer__column:last-of-type .footer__column-title span {
                    font-weight: normal;
                    text-transform: none;
                }

                .footer__messenger-btn {
                    display: inline-flex;
                    height: 24px;
                    margin-top: 15px;
                    margin-right: 10px;
                    padding: 0 15px;
                    border-radius: 2px;
                    background: #0084ff;
                    color: #fff;
                    font-size: 12px;
                    font-weight: bold;
                    line-height: 24px;
                    text-decoration: none;
                    text-transform: uppercase;
                }

                .footer__messenger-btn .footer__messenger-icon {
                    position: relative;
                    display: block;
                    width: 12px;
                    margin-top: 2px;
                    margin-right: 5px;
                    flex-shrink: 0;
                }
                .footer__messenger-btn .footer__messenger-icon::before {
                    position: absolute;
                    top: 4px;
                    left: 0;
                    display: block;
                    width: 10px;
                    height: 10px;
                    content: '';
                    background-image: url('assets/images/sprites/k14h-sprite_v1.png');
                    background-position: -166px 0px;
                    background-size: 418px 146px;
                    background-repeat: no-repeat;
                }

                .footer__messenger-btn:hover {
                    background-color: #047bea;
                }
            </style>

            <footer id="footer">
                <!-- Footer Menu -->
                <div class="footer__menu">
                    <div class="footer__container">
                        <ul class="footer__menu-list">
                            <li class="footer__menu-item">
                                <a href="#" title="Star">Star</a>
                            </li>
                            <li class="footer__menu-item">
                                <a href="#" title="Ciné">Ciné</a>
                            </li>
                            <li class="footer__menu-item">
                                <a href="#" title="Musik">Musik</a>
                            </li>
                            <li class="footer__menu-item">
                                <a href="#" title="Beauty &amp; Fashion">Beauty &amp; Fashion</a>
                            </li>
                            <li class="footer__menu-item">
                                <a href="#" title="Sport">Sport</a>
                            </li>
                            <li class="footer__menu-item">
                                <a href="#" title="Đời sống">Đời sống</a>
                            </li>
                            <li class="footer__menu-item">
                                <a href="#" title="Xã hội">Xã hội</a>
                            </li>
                            <li class="footer__menu-item">
                                <a href="#" title="Ăn - Quẩy - Đi">Ăn - Quẩy - Đi</a>
                            </li>
                            <li class="footer__menu-item">
                                <a href="#" title="Xem Mua Luôn">Xem Mua Luôn</a>
                            </li>
                            <li class="footer__menu-item">
                                <a href="#" title="Thế giới đó đây">Thế giới đó đây</a>
                            </li>
                            <li class="footer__menu-item">
                                <a href="#" title="Sức khỏe">Sức khỏe</a>
                            </li>
                            <li class="footer__menu-item">
                                <a href="#" title="Tek-Life">Tek-Life</a>
                            </li>
                            <li class="footer__menu-item">
                                <a href="#" title="Học đường">Học đường</a>
                            </li>
                            <li class="footer__menu-item">
                                <a href="#" title="Money-Z">Money-Z</a>
                            </li>
                            <li class="footer__menu-item">
                                <a href="#" title="Video">Video</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Footer Top -->
                <div class="footer__top">
                    <div class="footer__container w1040">
                        <div class="footer__top-left mb-30">
                            <a href="#" title="Kênh 14" class="footer__logo"></a>
                            <div class="footer__user-response">
                                <span class="footer__section-title">ĐÓNG GÓP NỘI DUNG</span>
                                <div class="footer__contact-links"></div>
                                <a href="#" title="Câu hỏi thường gặp" class="footer__faq-btn">
                                    câu hỏi thường gặp
                                </a>
                                <a href="#" target="_blank" class="footer__mail">
                                    bandoc@kenh14.vn
                                </a>
                                <p>
                                    Kenh14.vn rất hoan nghênh độc giả gửi thông tin và góp ý cho chúng tôi.
                                </p>
                            </div>
                        </div>
                        <div class="footer__top-right">
                            <div class="footer__social-plugin" data-href="https://www.facebook.com/K14vn">
                                <iframe
                                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FK14vn&width=500&height=130"
                                    width="500" height="130" style="border:none;overflow:hidden" scrolling="no" frameborder="0"
                                    allowfullscreen="true">
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>        
       
                <!-- Footer Bottom -->
                <div class="footer__bottom clearfix">
                    <div class="footer__column">
                        <div class="footer__address">
                            <p class="footer__column-title">trụ sở hà nội</p>
                            <p>
                                Tầng 21, Tòa nhà Center Building, Hapulico Complex, số 1 Nguyễn Huy Tưởng, phường Thanh
                                Xuân Trung, quận Thanh Xuân, Hà Nội.
                                <br>Điện thoại: 024 7309 5555, máy lẻ 62.370
                            </p>
                            <a href="#" class="footer__map-btn" title="Xem bản đồ">xem bản đồ</a>
                        </div>
                        <div class="footer__address">
                            <p class="footer__column-title">trụ sở tp.hồ chí minh</p>
                            <p>
                                Tầng 4, Tòa nhà 123, số 127 Võ Văn Tần, phường 6, quận 3, TP. Hồ Chí Minh.
                                <br>Điện thoại: 028 7307 7979
                            </p>
                            <a href="#" class="footer__map-btn" title="Xem bản đồ">xem bản đồ</a>
                        </div>
                    </div>
                    <!-- End .footer__column -->

                    <div class="footer__column">
                        <div class="footer__info-block">
                            <p class="footer__column-title">chịu trách nhiệm quản lý nội dung</p>
                            <p class="pl0">Bà Nguyễn Bích Minh</p>
                        </div>
                        <div class="footer__info-block">
                            <p class="footer__column-title">hợp tác truyền thông</p>
                            <p class="footer__phone">024.73095555 (máy lẻ 62.370)</p>
                            <a href="mailto:marketing@kenh14.vn" class="footer__mail--medium-gray">marketing@kenh14.vn</a>
                        </div>
                        <div class="footer__info-block">
                            <p class="footer__column-title">liên hệ quảng cáo</p>
                            <p class="footer__phone" id="phonenumber_footer">02473007108</p>
                            <a href="mailto:giaitrixahoi@admicro.vn" class="footer__mail--medium-gray">giaitrixahoi@admicro.vn</a>
                            <div class="clearfix">
                                <a href="#" title="Xem chi tiết" target="_blank" class="footer__messenger-btn">
                                    <span class="footer__messenger-icon">
                                            <i class="fa-brands fa-facebook-messenger" style="color: #ffffff;"></i>
                                    </span>Chat với tư vấn viên
                                </a>
                                <a href="#" title="Xem chi tiết" target="_blank" class="footer__details-btn">xem chi tiết</a>
                            </div>
                        </div>
                        <div class="footer__info-block">
                            <p class="footer__column-title">
                                <a target="_blank" href="#">Chính sách bảo mật</a>
                            </p>
                        </div>
                    </div>
                    <!-- End .footer__column -->

                    <div class="footer__column">
                        <a href="#" title="Công ty Cổ phần VCCorp" target="_blank" class="footer__vccorp-logo">
                            <img src="../assets/images/logo/vccorp-s.png" width="100" height="49" loading="lazy"
                                alt="Vccorp">
                        </a>
                        <p class="footer__column-title"><span>© Copyright 2007 - 2025 – </span>Công ty Cổ phần VCCorp</p>
                        <p>Tầng 17, 19, 20, 21 Tòa nhà Center Building - Hapulico Complex, Số 1 Nguyễn Huy Tưởng, Thanh
                            Xuân, Hà Nội.</p>
                        <p>Giấy phép thiết lập trang thông tin điện tử tổng hợp trên mạng số 2215/GP-TTĐT do Sở Thông
                            tin và Truyền thông Hà Nội cấp ngày 10 tháng 4 năm 2019</p>
                    </div>
                    <!-- End .footer__column -->
                </div>
            </footer>
        `
    }

}
customElements.define('kenh14-footer', Kenh14Footer);