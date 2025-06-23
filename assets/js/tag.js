/* Helper functions cho tag page */
function findTagById(tags, tagId) {
    let left = 0;
    let right = tags.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (tags[mid].id === tagId) {
            return tags[mid];
        } else if (tags[mid].id < tagId) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return tags[0]; // Trả về tag đầu tiên nếu không tìm thấy
}

function renderTagInfo(tag) {
    // Lấy các elements để render
    const tagLabel = document.querySelector('.tag__label');
    const tagTitle = document.querySelector('.tag__title');
    const tagDescription = document.querySelector('.tag__description');

    // Render tag__label: TIN TỨC VỀ <tag.name> - <tag.name>
    if (tagLabel) {
        tagLabel.textContent = 'TIN TỨC VỀ ' + tag.name + ' - ' + tag.name;
    }

    // Render tag__title: <tag.name>
    if (tagTitle) {
        tagTitle.textContent = tag.name;
    }

    // Render tag__description: <tag.name>
    if (tagDescription) {
        tagDescription.textContent = tag.name;
    }

    // Cập nhật title trang
    document.title = tag.name.toUpperCase();
}

function handleTagError(error) {
    console.error('Lỗi khi loading tag:', error);
}

async function initTag() {
    /* 1. Lấy id tag hiện tại từ URL */
    const tagId = Number(location.search.split('=')[1]);

    try {
        /* 2. Đọc dữ liệu từ tags.json */
        const response = await fetch('assets/data/tags.json');
        const tags = await response.json();

        /* 3. Tìm tag theo id */
        const currentTag = findTagById(tags, tagId);

        /* 4. Render thông tin tag */
        renderTagInfo(currentTag);

        /* 5. Đọc dữ liệu từ topics.json để lấy tên topic */
        const topicsResponse = await fetch('assets/data/topics.json');
        const topics = await topicsResponse.json();

        /* 6. Đọc dữ liệu từ articles.json */
        const articlesResponse = await fetch('assets/data/articles.json');
        const articles = await articlesResponse.json();

        /* 7. Render các bài viết dựa trên tag hiện tại */
        processArticlesData(articles, topics, currentTag);
    } catch (error) {
        handleTagError(error);
    }
}

/* Helper functions cho articles rendering */
function filterArticlesByTag(articles, currentTag) {
    const filteredArticles = [];
    for (let i = 0; i < articles.length; i++) {
        const article = articles[i];
        // Kiểm tra xem article.id có trong currentTag.article_ids không
        let isFound = false;
        for (let j = 0; j < currentTag.article_ids.length; j++) {
            if (currentTag.article_ids[j] === article.id) {
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

function renderFeaturedNews(article, topicName, topicId) {
    const featuredNewsContainer = document.querySelector('.featured-news');
    if (!featuredNewsContainer || !article) {
        return;
    }

    featuredNewsContainer.innerHTML = `
        <article class="featured-news__column featured-news__column--left">
            <a href="article.html?id=${article.id}">
                <div class="featured-news__image">
                    <img src="assets/images/articles/${Math.floor(article.id)}_1.png" alt="${article.title}" loading="lazy">
                </div>
                <div class="featured-news__title">
                    ${article.title}
                </div>
            </a>
            <div class="featured-news__description">
                <a href="topic.html?id=${topicId}" class="featured-news__category">${topicName} - <span>10 giờ trước</span></a>
                ${article.content.substring(0, 200)}...
            </div>
        </article>
        <div class="clearfix"></div>
    `;
}

function renderVerticalNewsArticle(article, topicName, topicId) {
    return `
        <article class="vertical-news-container clearfix">
            <a href="article.html?id=${article.id}">
                <img src="assets/images/articles/${Math.floor(article.id)}_1.png" alt="${article.title}" loading="lazy">
            </a>
            <div class="vertical-news-content">
                <a href="article.html?id=${article.id}" class="news-title">${article.title}</a>
                <a href="topic.html?id=${topicId}" class="category">${topicName} - <span>2 giờ trước</span></a>
                <p>${article.content.substring(0, 150)}...</p>
            </div>
        </article>
    `;
}

function renderVerticalNews(articles, topics) {
    const verticalNewsSection = document.querySelector('.vertical-news-section');
    if (!verticalNewsSection || articles.length === 0) {
        return;
    }

    let html = '';
    // Lấy tối đa 10 bài viết (bỏ bài đầu tiên vì đã dùng cho featured news)
    const startIndex = articles.length > 1 ? 1 : 0;
    const endIndex = Math.min(startIndex + 10, articles.length);
    
    for (let i = startIndex; i < endIndex; i++) {
        const article = articles[i];
        const topicName = getTopicNameById(topics, article.topics[0]);
        html += renderVerticalNewsArticle(article, topicName, article.topics[0]);
    }

    verticalNewsSection.innerHTML = html;
}

function processArticlesData(articles, topics, currentTag) {
    // Lọc các bài viết theo article_ids của tag hiện tại
    const filteredArticles = filterArticlesByTag(articles, currentTag);
    
    if (filteredArticles.length > 0) {
        // Render featured news với bài viết đầu tiên
        const featuredArticle = filteredArticles[0];
        const featuredTopicName = getTopicNameById(topics, featuredArticle.topics[0]);
        renderFeaturedNews(featuredArticle, featuredTopicName, featuredArticle.topics[0]);
        
        // Render vertical news với các bài viết còn lại
        renderVerticalNews(filteredArticles, topics);
    }
}

/* Khởi chạy khi DOM đã sẵn sàng */
document.addEventListener('DOMContentLoaded', initTag);