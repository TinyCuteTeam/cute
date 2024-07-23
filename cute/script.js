document.addEventListener("DOMContentLoaded", () => {
    const posts = JSON.parse(sessionStorage.getItem("posts")) || [];
    const postsTableBody = document.querySelector("#posts-table tbody");

    // 최대 3개의 게시글만 표시
    const limitedPosts = posts.slice(-3);

    limitedPosts.forEach(post => {
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
});
