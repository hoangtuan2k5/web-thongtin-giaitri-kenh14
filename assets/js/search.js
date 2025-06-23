/* Helper functions cho search page */
function getTopicNameById(topics, topicId) {
    let left = 0;
    let right = topics.length - 1;
    
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (topics[mid].id === topicId) {
            return topics[mid].title;
        } else if (topics[mid].id < topicId) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return 'Tin tức';
}

function filterArticlesByQuery(articles, query) {
    if (!query || query.trim() === '') {
        return [];
    }
    
    const filteredArticles = [];
    const lowerCaseQuery = query.toLowerCase();
    
    for (let i = 0; i < articles.length; i++) {
        const article = articles[i];
        const titleMatch = article.title.toLowerCase().includes(lowerCaseQuery);
        const contentMatch = article.content.toLowerCase().includes(lowerCaseQuery);
          if (titleMatch || contentMatch) {
            // Tạo bản copy của article object
            const articleCopy = {};
            for (const key in article) {
                if (article.hasOwnProperty(key)) {
                    articleCopy[key] = article[key];
                }
            }
            articleCopy.relevance = titleMatch ? 2 : 1; // Ưu tiên kết quả có query trong title
            filteredArticles.push(articleCopy);
        }
    }    
    // Sắp xếp theo mức độ liên quan (title match > content match) bằng vòng lặp
    for (let i = 0; i < filteredArticles.length - 1; i++) {
        for (let j = 0; j < filteredArticles.length - 1 - i; j++) {
            if (filteredArticles[j].relevance < filteredArticles[j + 1].relevance) {
                // Hoán đổi vị trí
                const temp = filteredArticles[j];
                filteredArticles[j] = filteredArticles[j + 1];
                filteredArticles[j + 1] = temp;
            }
        }
    }
    
    return filteredArticles;
}

function handleSearchError(error) {
    console.error('Lỗi khi thực hiện tìm kiếm:', error);
}

function updateQueryInputValue(query) {
    const searchInput = document.getElementById('search-box__input');
    if (searchInput) {
        searchInput.value = query;
    }
}

function updateResultCount(count) {
    const resultLabel = document.querySelector('.search-box__result-label');
    if (resultLabel) {
        resultLabel.textContent = 'Tìm thấy ' + count + ' kết quả';
    }
}

async function initSearch() {
    /* 1. Lấy query từ URL */
    const params = new URLSearchParams(location.search);
    const query = params.get('query') || '';
    
    /* 2. Cập nhật giá trị trong input */
    updateQueryInputValue(query);
      /* 3. Cập nhật title trang */
    if (query) {
        document.title = 'Tìm kiếm: ' + query + ' - Kenh14';
    }
    
    /* 4. Nếu không có query, hiển thị trang tìm kiếm trống */
    if (!query || query.trim() === '') {
        updateResultCount(0);
        clearSearchResults();
        return;
    }    
    try {
        /* 4. Đọc dữ liệu từ articles.json */
        const articlesResponse = await fetch('assets/data/articles.json');
        const articles = await articlesResponse.json();
        
        /* 5. Đọc dữ liệu từ topics.json để lấy tên topic */
        const topicsResponse = await fetch('assets/data/topics.json');
        const topics = await topicsResponse.json();
        
        /* 6. Lọc bài viết theo query */
        const filteredArticles = filterArticlesByQuery(articles, query);
        
        /* 7. Cập nhật số lượng kết quả */
        updateResultCount(filteredArticles.length);
        
        /* 8. Render kết quả tìm kiếm */
        renderSearchResults(filteredArticles, topics, query);
    } catch (error) {
        handleSearchError(error);
    }
}

function clearSearchResults() {
    const featuredNewsContainer = document.querySelector('.featured-news');
    const verticalNewsSection = document.querySelector('.vertical-news-section');
    
    if (featuredNewsContainer) {
        featuredNewsContainer.innerHTML = '';
    }
    
    if (verticalNewsSection) {
        verticalNewsSection.innerHTML = '<p class="no-results">Nhập từ khóa để tìm kiếm bài viết.</p>';
    }
}

function highlightQueryInText(text, query) {
    if (!query || query.trim() === '') {
        return text;
    }
    
    const regex = new RegExp('(' + query + ')', 'gi');
    return text.replace(regex, '<span class="search-highlight">$1</span>');
}

function renderFeaturedNews(article, topicName, topicId, query) {
    const featuredNewsContainer = document.querySelector('.featured-news');
    if (!featuredNewsContainer || !article) {
        return;
    }

    const highlightedTitle = highlightQueryInText(article.title, query);
    const highlightedContent = highlightQueryInText(article.content.substring(0, 200) + '...', query);

    featuredNewsContainer.innerHTML = `
    <article class="featured-news__column featured-news__column--left">
        <a href="article.html?id=${article.id}">
            <div class="featured-news__image">
                <img src="assets/images/articles/${Math.floor(article.id)}_1.png" alt="${article.title}" loading="lazy">
            </div>
            <div class="featured-news__title">
                ${highlightedTitle}
            </div>
        </a>
        <div class="featured-news__description">
            <a href="topic.html?id=${topicId}" class="featured-news__category">${topicName} - <span>10 giờ trước</span></a>
            ${highlightedContent}
        </div>
    </article>
    <div class="clearfix"></div>
    `;
}

function renderVerticalNewsArticle(article, topicName, topicId, query) {
    const highlightedTitle = highlightQueryInText(article.title, query);
    const highlightedContent = highlightQueryInText(article.content.substring(0, 150) + '...', query);

    return `
    <article class="vertical-news-container clearfix">
        <a href="article.html?id=${article.id}">
            <img src="assets/images/articles/${Math.floor(article.id)}_1.png" alt="${article.title}" loading="lazy">
        </a>
        <div class="vertical-news-content">
            <a href="article.html?id=${article.id}" class="news-title">${highlightedTitle}</a>
            <a href="topic.html?id=${topicId}" class="category">${topicName} - <span>2 giờ trước</span></a>
            <p>${highlightedContent}</p>
        </div>
    </article>
    `;
}

function renderSearchResults(articles, topics, query) {
    // Nếu không có kết quả
    if (articles.length === 0) {
        const featuredNewsContainer = document.querySelector('.featured-news');
        const verticalNewsSection = document.querySelector('.vertical-news-section');
        
        if (featuredNewsContainer) {
            featuredNewsContainer.innerHTML = '';
        }
        
        if (verticalNewsSection) {
            verticalNewsSection.innerHTML = `
            <div class="no-results">
                <p>Không tìm thấy kết quả nào cho "${query}"</p>
                <p>Vui lòng thử lại với từ khóa khác hoặc xem các bài viết mới nhất của chúng tôi.</p>
            </div>
            `;
        }
        return;
    }    
    // Render bài viết đầu tiên vào featured news
    const featuredArticle = articles[0];
    const featuredTopicId = featuredArticle.topics[0];
    const featuredTopicName = getTopicNameById(topics, featuredTopicId);
    renderFeaturedNews(featuredArticle, featuredTopicName, featuredTopicId, query);
    
    // Render các bài viết còn lại vào vertical news
    const verticalNewsSection = document.querySelector('.vertical-news-section');
    if (!verticalNewsSection) {
        return;
    }
    
    let html = '';
    // Lấy tối đa 20 bài viết (bỏ bài đầu tiên vì đã dùng cho featured news)
    const startIndex = articles.length > 1 ? 1 : 0;
    const endIndex = Math.min(startIndex + 20, articles.length);
    
    for (let i = startIndex; i < endIndex; i++) {
        const article = articles[i];
        const topicId = article.topics[0];
        const topicName = getTopicNameById(topics, topicId);
        html += renderVerticalNewsArticle(article, topicName, topicId, query);
    }
    
    verticalNewsSection.innerHTML = html;
}

/* Xử lý sự kiện tìm kiếm */
function setupSearchEvent() {
    // Search box trong trang tìm kiếm
    const searchInput = document.getElementById('search-box__input');
    const searchButton = document.querySelector('.search-box__submit');
    
    if (searchInput && searchButton) {
        // Xử lý khi click vào nút tìm kiếm
        searchButton.addEventListener('click', function(event) {
            event.preventDefault();
            const query = searchInput.value.trim();
            if (query) {
                window.location.href = `search.html?query=${encodeURIComponent(query)}`;
            }
        });        
        // Xử lý khi nhấn Enter trong input
        searchInput.addEventListener('keyup', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                const query = searchInput.value.trim();
                if (query) {
                    window.location.href = `search.html?query=${encodeURIComponent(query)}`;
                }
            }        
        });
    }
}

/* Khởi chạy khi DOM đã sẵn sàng */
document.addEventListener('DOMContentLoaded', function() {
    initSearch();
    setupSearchEvent();
});