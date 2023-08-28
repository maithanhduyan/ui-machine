// Điều khiển việc thêm bài viết mới vào danh sách bài viết
const articlesList = document.querySelector('.articles-list');

// Mảng các bài viết mới nhất (có thể lấy từ API)
const latestArticles = [
    {
        title: 'Tiêu đề bài viết 1',
        image: 'article1.jpg',
        description: 'Mô tả ngắn về bài viết 1',
        link: '#'
    },
    // Thêm các bài viết khác vào đây
];

// Hiển thị bài viết mới nhất trên trang web
latestArticles.forEach(article => {
    const articleElement = document.createElement('div');
    articleElement.className = 'article';
    articleElement.innerHTML = `
        <img src="${article.image}" alt="${article.title}">
        <h3>${article.title}</h3>
        <p>${article.description}</p>
        <a href="${article.link}">Đọc thêm</a>
    `;
    articlesList.appendChild(articleElement);
});
