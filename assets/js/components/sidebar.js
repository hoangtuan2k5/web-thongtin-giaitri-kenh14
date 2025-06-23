const sidebar = document.getElementById("sidebar");

const banners = [
    {
        link: "https://tuyensinh.viu.edu.vn",
        title: "Đại học Công nghiệp Việt Hưng",
        img: "../assets/images/banner/Logo_DH_Cong_Nghiep_Viet_Hung.png"
    },
    {
        link: "#",
        title: "Nhóm 3 - K4728CNTT1",
        img: "../assets/images/banner/nhom3.png"
    }
];

// Thêm config cho từng trang (tùy chọn)
const pageConfig = {
    'index.html': { bannerPairs: 19 },
    'topic.html': { bannerPairs: 19 },
    'article.html': { bannerPairs: 4 },
    'search.html': { bannerPairs: 5 },
    'tag.html': { bannerPairs: 1 }
};

// Hàm lấy config dựa trên trang hiện tại
function getPageConfig() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    return pageConfig[currentPage] || { bannerPairs: 6 }; 
}

const config = getPageConfig();
const repeatCount = config.bannerPairs;

for (let i = 0; i < repeatCount; i++) {
    for (let banner of banners) {
        const div = document.createElement("div");
        div.className = "sidebar-banner";

        div.innerHTML = `
            <a href="${banner.link}" title="${banner.title}" target="_blank">
                <img src="${banner.img}" alt="${banner.title}" class="sidebar-banner-img">
            </a>
        `;
        sidebar.appendChild(div);
    }
}