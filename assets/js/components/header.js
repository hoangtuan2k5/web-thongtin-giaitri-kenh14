class Kenh14Header extends HTMLElement {
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

                :host {
                    display: block;
                    width: 100%;
                }

                body, h1, h2, h3, h4, h5, h6, p, ul, li, a {
                    font-family: Arial, Helvetica, sans-serif; 
                    box-sizing: border-box;
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
                    max-width: 100%;
                }

                .mt-30 {
                    margin-top: 30px;
                }

                .mr-30 {
                    margin-right: 30px;
                }

                .mb-30 {
                    margin-bottom: 30px;
                }

                .ml-30 {
                    margin-left: 30px;
                }

                .mx-30 {
                    margin-left: 30px;
                    margin-right: 30px;
                }

                .my-30 {
                    margin-top: 30px;
                    margin-bottom: 30px;
                }                
                
                /* Header CSS */
                #header {
                    width: 100%;
                }

                .header-content-wrapper {
                    margin: 0 auto;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0 10px;
                }

                .header__top-navigation {
                    background-color: #000000; 
                    padding: 8px 0;
                    font-size: 12px;
                    font-weight: 400;
                    height: 25px;
                    display: flex;
                    align-items: center;
                }

                .header__top-navigation ul {
                    display: flex;
                    align-items: center;
                    margin-left: -16px;
                }

                .header__top-navigation li {
                    padding: 0px 8px 0px 20px;
                }

                .header__top-navigation li a {
                    color: #ffffff;
                    text-transform: uppercase;
                }                .header__top-navigation li a:hover {
                    opacity: 0.85;
                }

                .star-icon {
                    color: #ff6d15;
                    font-size: 10px;
                    margin-right: 5px;
                    vertical-align: -1px;
                }

                .search-icon {
                    color: #ffffff;
                    font-size: 12px;
                }

                .header__top-navigation__search {
                    margin: 0;
                    padding: 0;
                    border: 0;
                    font: inherit;
                    vertical-align: baseline;
                    outline: 0;
                    float: right;
                    height: 25px;
                    border-left: 1px solid rgba(255,255,255,0.1);
                    border-right: 1px solid rgba(255,255,255,0.1);
                    color: #FFFFFF;
                    display: flex; 
                    align-items: center; 
                }

                .header__top-navigation__search input[type="text"] {
                    background-color: transparent;
                    border: none;
                    padding: 6px 10px;
                    color: #ffffff;
                    font-size: 10px;
                    outline: none;
                    width: 150px;
                    height: 25px;
                    box-sizing: border-box;
                }

                .header__top-navigation__search input[type="text"]::placeholder {
                    color: #aaaaaa;
                }

                .header__top-navigation__search button {
                    border: none;
                    padding: 6px 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 12px;
                    height: 12px;
                    background: url('assets/images/sprites/k14h-sprite_v1.png') no-repeat -211px 0;
                    cursor: pointer;
                }

                .header__section {
                    background-color: #f0a52b; 
                    padding: 5px 0;
                }

                .header__logo {
                    margin-right: 30px;
                }

                .header__logo span {
                    display: block;
                    height: 60px;
                    width: 166px;
                    background: url('assets/images/logo/k14_logo2022.svg') no-repeat center center;
                    background-size: contain;
                }

                .header__trending-tags {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    margin-left: -4px;
                    flex-wrap: wrap;
                }

                .header__trending-icon {
                    display: block;
                    width: 19px;
                    height: 12px;
                    background: url('assets/images/sprites/sprite-k14.20.png') -388px -55px no-repeat;
                    flex-shrink: 0;
                }

                .header__trending-item {
                    font-size: 14px;
                    font-weight: 500;
                    color: #ffffff;
                    padding: 6px 12px;
                    border: 1px solid rgba(255, 255, 255, 0.5);
                    border-radius: 15px;
                    white-space: nowrap;
                    cursor: pointer;
                }

                .header__trending-item:hover {
                    background-color: rgba(255, 255, 255, 0.15); 
                }

                .header__main-menu-bar {
                    background-color: #a70e1a; 
                }

                .header__main-menu-list {
                    display: flex;
                    align-items: center;
                    width: 100%; 
                    margin-left: 3px;
                    flex-wrap: wrap;
                }

                .header__main-menu-item {
                    position: relative;
                }

                .header__main-menu-link {
                    display: block;
                    padding: 10px 6px;
                    font-size: 14px;
                    font-weight: 500;
                    color: #ffffff;
                    white-space: nowrap;
                }

                .header__main-menu-link--home {
                    background: url('assets/images/sprites/k14h-sprite_v1.png') no-repeat 0 -120px;
                    height: 12px;
                    margin-top: 4px;
                    margin-left: 16px;
                }

                .header__main-menu-link:hover {
                    background-color: rgba(0, 0, 0, 0.1); 
                    text-decoration: none;
                }

                .header__main-menu-item:first-child .header__main-menu-link {
                    padding-left: 15px; 
                    padding-right: 15px;
                }                
                    
                .header__main-menu-item--more {
                    font-weight: 700;
                }

                .header__main-menu-item--more .header__main-menu-link {
                    padding: 10px 15px;
                }                
                    
                .header__main-menu-item--more .header__main-menu-link {
                    padding: 10px 15px;
                    font-size: 18px;
                    color: #ffffff;
                    text-align: center;
                }
            </style>

            <header id="header">
                <!-- Header top navigation -->
                <nav class="header__top-navigation">
                    <div class="header-content-wrapper w1040">                          
                        <ul>
                            <li>
                                <span class="star-icon">★</span>
                                <a href="">eMagazine</a>
                            </li>
                            <li>
                                <span class="star-icon">★</span>
                                <a href="">Genz Area</a>
                            </li>
                            <li>
                                <span class="star-icon">★</span>
                                <a href="">XANH chưa - check!!!</a>
                            </li>
                            <li>
                                <span class="star-icon">★</span>
                                <a href="">ShowLive</a>
                            </li>
                        </ul>                        
                        
                        <div class="header__top-navigation__search">
                            <input type="text" placeholder="Tìm kiếm..." />
                            <button type="submit">
                            </button>
                        </div>
                    </div>
                </nav>

                <!-- Header section -->
                <div class="header__section">
                    <div class="header-content-wrapper w1040">
                        <a href="#" class="header__logo">
                            <span aria-label="Logo Kenh14" role="img"></span>
                        </a>
                        <div class="header__trending-tags">
                            <span class="header__trending-icon" aria-label="Trending Icon" role="img"></span>
                            <div class="header__trending-item">#G-Dragon biểu diễn tại SVĐ Mỹ Đình</div>
                            <div class="header__trending-item">#Wren Evans dính drama ngoại tình</div>
                        </div>
                    </div>
                </div>

                <!-- Header main menu bar -->
                <nav class="header__main-menu-bar">
                    <div class="header-content-wrapper w1040">                        
                        <ul class="header__main-menu-list">
                            <li class="header__main-menu-item">
                                <a href="/" class="header__main-menu-link header__main-menu-link--home">
                                </a>
                            </li>
                            <li class="header__main-menu-item">
                                <a href="#" class="header__main-menu-link">Star</a>
                            </li>
                            <li class="header__main-menu-item">
                                <a href="#" class="header__main-menu-link">Ciné</a>
                            </li>
                            <li class="header__main-menu-item">
                                <a href="#" class="header__main-menu-link">Musik</a>
                            </li>
                            <li class="header__main-menu-item">
                                <a href="#" class="header__main-menu-link">Beauty & Fashion</a>
                            </li>
                            <li class="header__main-menu-item">
                                <a href="#" class="header__main-menu-link">Đời sống</a>
                            </li>
                            <li class="header__main-menu-item">
                                <a href="#" class="header__main-menu-link">Money-Z</a>
                            </li>
                            <li class="header__main-menu-item">
                                <a href="#" class="header__main-menu-link">Ăn - Quẩy - Đi</a>
                            </li>
                            <li class="header__main-menu-item">
                                <a href="#" class="header__main-menu-link">Xã hội</a>
                            </li>
                            <li class="header__main-menu-item">
                                <a href="#" class="header__main-menu-link">Sức khỏe</a>
                            </li>
                            <li class="header__main-menu-item">
                                <a href="#" class="header__main-menu-link">Tek-life</a>
                            </li>
                            <li class="header__main-menu-item">
                                <a href="#" class="header__main-menu-link">Học đường</a>
                            </li>
                            <li class="header__main-menu-item">
                                <a href="#" class="header__main-menu-link">Xem Mua Luôn</a>
                            </li>
                            <li class="header__main-menu-item">
                                <a href="#" class="header__main-menu-link">Video</a>
                            </li>                              
                            <li class="header__main-menu-item header__main-menu-item--more">
                                <a href="#" class="header__main-menu-link">
                                    ⋯
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        `;
    }
}

// Đăng ký custom element
customElements.define('kenh14-header', Kenh14Header);