/* Helper functions cho navigation */
function getRandomTopicsForLeft(topics, currentId, count) {
    // Lọc ra các topic khác với currentId bằng vòng lặp
    const availableTopics = [];
    for (let i = 0; i < topics.length; i++) {
        const topic = topics[i];
        if (topic.id !== currentId && topic.id >= 1 && topic.id <= 61) {
            availableTopics.push(topic);
        }
    }
    
    // Xáo trộn mảng bằng Fisher-Yates shuffle
    for (let i = availableTopics.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = availableTopics[i];
        availableTopics[i] = availableTopics[j];
        availableTopics[j] = temp;
    }
    
    // Lấy số lượng cần thiết
    const result = [];
    for (let i = 0; i < count && i < availableTopics.length; i++) {
        result.push(availableTopics[i]);
    }
    
    return result;
}

function handleNavigationError(error) {
    console.error('Lỗi khi loading topics:', error);
}

function findTopicIndexById(topics, currentId) {
    let left = 0;
    let right = topics.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (topics[mid].id === currentId) {
            return mid;
        } else if (topics[mid].id < currentId) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

function getFeaturedTopics(topics) {
    const featuredTopics = [];
    for (let i = 0; i < topics.length; i++) {
        if (topics[i].is_featured) {
            featuredTopics.push(topics[i]);
        }
    }
    return featuredTopics;
}

async function initNavigation() {
    /* DOM đã sẵn có từ markup HTML */
    const leftBox = document.querySelector('.topic-nav__group--left');
    const rightBox = document.querySelector('.topic-nav__group--right');

    /* 1. Lấy id topic hiện tại trên URL */
    const params = new URLSearchParams(location.search);
    const currentId = Number(params.get('id'));

    try {
        /* 2. Đọc dữ liệu từ topic.json */
        const response = await fetch('assets/data/topics.json');
        const topics = await response.json();
        /* 3. JSON file đã được sắp xếp sẵn theo id, không cần sắp xếp lại */

        /* 4. Xác định vị trí của topic hiện tại; nếu không có, lấy 0 */
        let startIndex = findTopicIndexById(topics, currentId);
        if (startIndex === -1) startIndex = 0;

        /* 4.1. Cập nhật title trang dựa trên chủ đề hiện tại */
        const currentTopic = topics[startIndex];
        if (currentTopic) {
            document.title = 'Chủ đề ' + currentTopic.title + ' - Kenh14';
        }
        
        /* 5. Dọn rỗng hai nhóm để cắm dữ liệu mới */
        leftBox.innerHTML = '';
        rightBox.innerHTML = '';

        /* ---- NHÓM TRÁI: lấy ngẫu nhiên 4 topic từ id 1-61 trừ topic hiện tại ---- */
        const randomTopicsForLeft = getRandomTopicsForLeft(topics, currentId, 4);
        // Tạo danh sách topics cho nhóm trái: currentTopic + 3 random topics
        const leftTopics = [currentTopic];
        for (let i = 0; i < 3 && i < randomTopicsForLeft.length; i++) {
            leftTopics.push(randomTopicsForLeft[i]);
        }
        
        for (let i = 0; i < leftTopics.length; i++) {
            const topic = leftTopics[i];
            const li = document.createElement('li');
            li.className = 'topic-nav__item mobile-hidden';
            if( i === 0 || i === 1) {
                li.classList.remove('mobile-hidden'); // Hiển thị 3 topic đầu tiên trên mobile
            }

            const a = document.createElement('a');
            a.className = 'topic-nav__link';
            if (i === 0) a.classList.add('topic-nav__link--active'); // gạch dưới cho topic hiện tại
            a.href = 'topic.html?id=' + topic.id;
            a.textContent = topic.title;

            li.appendChild(a);
            leftBox.appendChild(li);
        }
        
        /* ---- NHÓM PHẢI: lấy ngẫu nhiên 1 topic có is_featured = true ---- */
        const featuredList = getFeaturedTopics(topics);
        if (featuredList.length > 0) {
            const randomIndex = Math.floor(Math.random() * featuredList.length);
            const randomTopic = featuredList[randomIndex];
            const li = document.createElement('li');
            li.className = 'topic-nav__item';

            const a = document.createElement('a');
            a.className = 'topic-nav__link';
            a.href = 'topic.html?id=' + randomTopic.id;
            a.textContent = randomTopic.title;

            li.appendChild(a);
            rightBox.appendChild(li);
        }
    } catch (error) {
        handleNavigationError(error);
    }
}

/* Main initialization function */
function initializeTopicPage() {
    initNavigation();
    initFeaturedNews();
}

/* Khởi chạy khi DOM đã sẵn sàng */
document.addEventListener('DOMContentLoaded', initializeTopicPage);

/* Helper functions cho featured news */
function findTopicByIdForNews(topics, currentId) {
    let left = 0;
    let right = topics.length - 1;
    
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (topics[mid].id === currentId) {
            return topics[mid];
        } else if (topics[mid].id < currentId) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return null;
}

function filterArticlesByTopic(articles, currentTopic) {
    const filteredArticles = [];
    for (let i = 0; i < articles.length; i++) {
        const article = articles[i];
        // Kiểm tra xem article.id có trong currentTopic.article_ids không
        let isFound = false;
        for (let j = 0; j < currentTopic.article_ids.length; j++) {
            if (currentTopic.article_ids[j] === article.id) {
                isFound = true;
                break;
            }
        }
        if (isFound) {
            filteredArticles.push(article);
        }
    }
    return filteredArticles;
}

function handleFeaturedNewsError(error) {
    console.error('Lỗi khi loading featured news:', error);
}

function processArticlesData(articles, currentTopic) {
    /* 5. Lọc các bài viết theo article_ids của topic hiện tại và chỉ lấy 5 bài */
    const allFilteredArticles = filterArticlesByTopic(articles, currentTopic);
    
    // Lấy tối đa 5 bài viết đầu tiên
    const featuredArticles = [];
    for (let i = 0; i < 5 && i < allFilteredArticles.length; i++) {
        featuredArticles.push(allFilteredArticles[i]);
    }
    
    /* 6. Render giao diện featured news */
    renderFeaturedNews(featuredArticles);
}

function processTopicsData(topics, currentId) {
    /* 3. Tìm topic hiện tại để lấy danh sách article_ids */
    let currentTopic = findTopicByIdForNews(topics, currentId);
    
    // Nếu không tìm thấy topic, lấy topic đầu tiên
    if (!currentTopic) {
        currentTopic = topics[0];
    }

    return currentTopic;
}

async function initFeaturedNews() {
    /* 1. Lấy id topic hiện tại trên URL */
    const params = new URLSearchParams(location.search);
    const currentId = Number(params.get('id'));

    try {
        /* 2. Đọc dữ liệu từ topics.json để lấy article_ids */
        const topicsResponse = await fetch('assets/data/topics.json');
        const topics = await topicsResponse.json();
        
        /* 3. Xử lý topics data để tìm currentTopic */
        const currentTopic = processTopicsData(topics, currentId);
        
        /* 4. Lấy dữ liệu từ articles.json */
        const articlesResponse = await fetch('assets/data/articles.json');
        const articles = await articlesResponse.json();
        
        /* 5. Xử lý articles data */
        processArticlesData(articles, currentTopic);
    } catch (error) {
        handleFeaturedNewsError(error);
    }
}

/* Helper functions cho render */
function truncateTitle(title, maxLength) {
    return title.length > maxLength ? title.substring(0, maxLength) + '...' : title;
}

function truncateContent(content, maxLength) {
    return content.substring(0, maxLength) + '...';
}

function createSliderItem(article) {
    return `
        <li class="news-slider__item">
            <a href="article.html?id=${article.id}" title="${article.title}" class="news-slider__thumbnail">
                <img src="assets/images/articles/${Math.floor(article.id)}_1.png" alt="${article.title}" class="w-100" height="143" loading="lazy">
            </a>
            <h3 class="news-slider__title">
                <a href="article.html?id=${article.id}" title="${article.title}">
                    ${truncateTitle(article.title, 60)}
                </a>
            </h3>
        </li>
    `;
}

function renderSliderArticles(sliderArticles) {
    let html = '';
    for (let i = 0; i < sliderArticles.length; i++) {
        html += createSliderItem(sliderArticles[i]);
    }
    return html;
}

function renderSideArticle(sideArticle) {
    if (!sideArticle) return '';
    
    return `
        <article class="featured-news__column featured-news__column--right fr">
            <a href="article.html?id=${sideArticle.id}" title="${sideArticle.title}" class="featured-news__right-thumb">
                <img src="assets/images/articles/${Math.floor(sideArticle.id)}_1.png" alt="${sideArticle.title}" width="220" height="289" loading="lazy">
            </a>
            <h2 class="featured-news__right-title">
                <a href="article.html?id=${sideArticle.id}" title="${sideArticle.title}">
                    ${truncateTitle(sideArticle.title, 80)}
                </a>
            </h2>
        </article>
    `;
}

function renderMainArticle(mainArticle) {
    return `
        <article class="featured-news__column featured-news__column--left">
            <a href="article.html?id=${mainArticle.id}">
                <div class="featured-news__image">
                    <img src="assets/images/articles/${Math.floor(mainArticle.id)}_1.png" alt="${mainArticle.title}" loading="lazy">
                </div>
                <div class="featured-news__title">
                    ${mainArticle.title}
                </div>
            </a>
            <div class="featured-news__description">
                ${truncateContent(mainArticle.content, 200)}
            </div>
        </article>
    `;
}

function renderFeaturedNews(articles) {
    /* Tìm container để render */
    const featuredNewsContainer = document.querySelector('.featured-news');
    if (!featuredNewsContainer || articles.length === 0) {
        return;
    }

    /* Bài viết chính (bài đầu tiên) */
    const mainArticle = articles[0];
    
    /* Bài viết phụ (bài thứ 2) */
    const sideArticle = articles.length > 1 ? articles[1] : null;
    
    /* 3 bài viết cho slider (bài 3, 4, 5) */
    const sliderArticles = [];
    for (let i = 2; i < 5 && i < articles.length; i++) {
        sliderArticles.push(articles[i]);
    }

    /* Tạo HTML cho featured news */
    featuredNewsContainer.innerHTML = `
        ${renderMainArticle(mainArticle)}
        ${renderSideArticle(sideArticle)}
        <div class="clearfix"></div>

        <!--  Phần danh sách tin tức bên trong mục tin nổi bật (featured-news) -->
        <div class="news-slider">
            <ul class="news-slider__list">
                ${renderSliderArticles(sliderArticles)}
                <div class="news-slider__button news-slider__button--prev"></div>
                <div class="news-slider__button news-slider__button--next"></div>
            </ul>
            <div class="news-slider__pagination news-slider__pagination--clickable news-slider__pagination--bullets">
                <span class="news-slider__pagination-bullet news-slider__pagination-bullet--active"></span>
                <span class="news-slider__pagination-bullet"></span>
                <span class="news-slider__pagination-bullet"></span>
                <span class="news-slider__pagination-bullet"></span>
            </div>
        </div>
    `;
}
