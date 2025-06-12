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

const repeatCount = 19;

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