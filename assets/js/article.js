/* Helper functions cho article page */
function findArticleById(articles, articleId) {
    let left = 0;
    let right = articles.length - 1;
    const targetId = Math.floor(articleId);
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (Math.floor(articles[mid].id) === targetId) {
            return articles[mid];
        } else if (Math.floor(articles[mid].id) < targetId) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return articles[0]; // Trả về bài viết đầu tiên nếu không tìm thấy
}

function findTopicNameById(topics, topicId) {
    let left = 0;
    let right = topics.length - 1;
    const targetId = Math.floor(topicId);
    
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (topics[mid].id === targetId) {
            return topics[mid].title;
        } else if (topics[mid].id < targetId) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return 'Tin tức';
}

function findTagNameById(tags, tagId) {
    for (let i = 0; i < tags.length; i++) {
        if (tags[i].id === Math.floor(tagId)) {
            return tags[i].name;
        }
    }
    return '';
}

function formatDate(dateString) {
    // Chuyển đổi định dạng từ "23:39 05/05/2025" thành "2025-05-05T23:39:00"
    const parts = dateString.split(' ');
    if (parts.length !== 2) return dateString;
    
    const time = parts[0];
    const dateParts = parts[1].split('/');
    if (dateParts.length !== 3) return dateString;
    
    const day = dateParts[0].padStart(2, '0');
    const month = dateParts[1].padStart(2, '0');
    const year = dateParts[2];
   
    console.log(`Định dạng thời gian: ${year}-${month}-${day}T${time}:00`);
    return `${year}-${month}-${day}T${time}:00`;
}

function handleArticleError(error) {
    console.error('Lỗi khi loading article:', error);
}

function getRelatedArticles(articles, currentArticle, count = 3) {
    const relatedArticles = [];
    
    // Lọc các bài viết có chung topic với bài viết hiện tại
    for (let i = 0; i < articles.length && relatedArticles.length < count; i++) {
        const article = articles[i];
        if (article.id !== currentArticle.id) {
            // Kiểm tra xem có topic chung không
            let hasCommonTopic = false;
            for (let j = 0; j < currentArticle.topics.length; j++) {
                for (let k = 0; k < article.topics.length; k++) {
                    if (currentArticle.topics[j] === article.topics[k]) {
                        hasCommonTopic = true;
                        break;
                    }
                }
                if (hasCommonTopic) break;
            }
            
            if (hasCommonTopic) {
                relatedArticles.push(article);
            }
        }
    }
    
    return relatedArticles;
}

function renderArticleContent(article, topics, tags) {
    const articleContainer = document.querySelector('.article');
    if (!articleContainer || !article) {
        return;
    }
    
    // Lấy topic chính (topic đầu tiên)
    const primaryTopicId = article.topics[0];
    const primaryTopicName = findTopicNameById(topics, primaryTopicId);
    
    // Tạo danh sách tags
    let tagLinks = '';
    for (let i = 0; i < article.tags.length; i++) {
        const tagName = findTagNameById(tags, article.tags[i]);
        if (tagName) {
            tagLinks += `<li class="tags__item"><a href="tag.html?id=${article.tags[i]}" class="tags__link">${tagName}</a></li>`;
        }
    }
      // Format thời gian
    const formattedDateTime = formatDate(article.date_published);
      // Tách content thành đoạn văn
    const allParagraphs = article.content.split('\n');
    const paragraphs = [];
    for (let i = 0; i < allParagraphs.length; i++) {
        if (allParagraphs[i].trim() !== '') {
            paragraphs.push(allParagraphs[i]);
        }
    }
    let contentHTML = '';
    
    // Xây dựng danh sách ảnh từ thư mục assets/images/articles
    const articleImages = [];
    if (article.images && article.images.length > 0) {
        for (let i = 0; i < article.images.length; i++) {
            const imageIndex = i + 1;
            const imagePath = `assets/images/articles/${Math.floor(article.id)}_${imageIndex}.png`;
            articleImages.push(imagePath);
        }
    }
    
    let imageIndex = 0;
    
    // Chèn đoạn văn và ảnh xen kẽ
    for (let i = 0; i < paragraphs.length; i++) {
        const paragraph = paragraphs[i].trim();
        if (paragraph) {
            contentHTML += `<p>${paragraph}</p>`;
            
            // Chèn ảnh sau mỗi đoạn văn (nếu còn ảnh)
            if (imageIndex < articleImages.length) {
                contentHTML += `
                    <figure class="article__figure">
                        <a href="#"><img src="${articleImages[imageIndex]}" alt="${article.title}" class="article__image"></a>
                    </figure>
                `;
                imageIndex++;
            }
        }
    }
    
    // Nếu còn ảnh sau khi hết đoạn văn, chèn hết vào cuối bài
    while (imageIndex < articleImages.length) {
        contentHTML += `
            <figure class="article__figure">
                <a href="#"><img src="${articleImages[imageIndex]}" alt="${article.title}" class="article__image"></a>
            </figure>
        `;
        imageIndex++;
    }
    
    articleContainer.innerHTML = `
        <div class="article__header">
            <h1 class="article__title">
                ${article.title}
            </h1>

            <div class="article__meta">
                <span class="article__author">${article.author}</span>
                <span class="article__source-name">${article.source}</span>
                <span class="article__time" title="${formattedDateTime}">${article.date_published}</span>
    
                <div class="audio-player">
                    ${article.audio_link ? `<audio controls><source src="${article.audio_link}" type="audio/mpeg"></audio>` : ''}
                </div>
            </div>

            <div class="social-share social-share--header">
                <div class="social-share__item social-share__item--like">
                </div>
                <a href="#" class="social-share__button social-share__button--facebook">
                    Chia sẻ
                    <span class="social-share__count"></span>
                </a>
                <div class="social-share__item social-share__item--save">
                </div>
                <a href="#" class="social-share__button social-share__button--mail">
                </a>
                <div class="social-share__item social-share__item--google-news">
                    <a href="#" class="social-share__google-news-link">
                        <span>Theo dõi Kenh14.vn trên</span>
                        <img src="https://static.mediacdn.vn/thumb_w/80/nld/Images/ggnewslogo.png" alt="Google News Logo">
                    </a>
                </div>
            </div>
        </div>

        <div class="article__content">
            <h2 class="article__sapo">
                ${paragraphs[0] || article.title}
            </h2>

            <div class="related-news">
                <ul class="related-news__list">
                    <!-- Sẽ được render bởi renderRelatedNews -->
                </ul>
            </div>

            <div class="article__body">
                ${contentHTML}
            </div>

            <div class="article__footer">
                <div class="article__author-credit" style="text-align: right;">
                    <strong>${article.author.replace(',', '')}</strong>
                </div>

                <div class="tags">
                    <ul class="tags__list">
                        ${tagLinks}
                    </ul>
                </div>
            </div>
        </div>
    `;
}

function renderRelatedNews(relatedArticles) {
    const relatedNewsContainer = document.querySelector('.related-news__list');
    if (!relatedNewsContainer || relatedArticles.length === 0) {
        return;
    }
    
    let relatedHTML = '';
    for (let i = 0; i < Math.min(3, relatedArticles.length); i++) {
        const article = relatedArticles[i];
        relatedHTML += `
            <li class="related-news__item">
                <a href="article.html?id=${article.id}" class="related-news__link">${article.title}</a>
            </li>
        `;
    }
    
    relatedNewsContainer.innerHTML = relatedHTML;
}

async function initArticle() {
    /* 1. Lấy id article từ URL */
    const params = new URLSearchParams(location.search);
    const articleId = Number(params.get('id'));
    
    if (!articleId) {
        console.error('Không tìm thấy ID bài viết trong URL');
        return;
    }
    
    try {
        /* 2. Đọc dữ liệu từ articles.json */
        const articlesResponse = await fetch('assets/data/articles.json');
        const articles = await articlesResponse.json();
        
        /* 3. Đọc dữ liệu từ topics.json */
        const topicsResponse = await fetch('assets/data/topics.json');
        const topics = await topicsResponse.json();
        
        /* 4. Đọc dữ liệu từ tags.json */
        const tagsResponse = await fetch('assets/data/tags.json');
        const tags = await tagsResponse.json();
          /* 5. Tìm bài viết theo ID */
        const article = findArticleById(articles, articleId);
        
        /* 6. Cập nhật title trang */
        document.title = article.title + ' - Kenh14';
        
        /* 7. Render nội dung bài viết */
        renderArticleContent(article, topics, tags);
        
        /* 8. Lấy và render các bài viết liên quan */
        const relatedArticles = getRelatedArticles(articles, article, 3);
        renderRelatedNews(relatedArticles);
        
    } catch (error) {
        handleArticleError(error);
    }
}

/* Khởi chạy khi DOM đã sẵn sàng */
document.addEventListener('DOMContentLoaded', function() {
    initArticle();
});