document.getElementById('write-button').addEventListener('click', function() {
    window.location.href = '사내게시판등록.html';
});


// 게시판목록
document.addEventListener("DOMContentLoaded", () => {
    const postsTableBody = document.querySelector("#posts-table tbody");

    function loadPosts() {
        const posts = JSON.parse(sessionStorage.getItem("posts")) || [];
        posts.forEach(post => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${post.id}</td>
            <td>${post.category}</td>
            <td><a href="/HTML/사내게시판상세페이지.html?postId=${post.id}">${post.title}</a></td>
            <td>${post.date}</td>
            <td>${post.author}</td>
        `;
        postsTableBody.appendChild(row);
        });
    }

    loadPosts();
});
