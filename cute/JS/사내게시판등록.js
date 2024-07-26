﻿document.addEventListener("DOMContentLoaded", () => {
    const boardForm = document.getElementById("board-form");

    boardForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const category = document.getElementById("board-category").value;
        const title = document.getElementById("title").value;
        const content = document.getElementById("content").value.replace(/\n/g, "<br>");
        const date = new Date().toLocaleDateString();
        const author = "익명"; // 글쓴이를 익명으로 설정, 필요시 사용자 입력 받도록 수정

        let posts = JSON.parse(sessionStorage.getItem("posts")) || [];
        let newId = 1;

        if (posts.length > 0) {
            newId = posts[posts.length - 1].id + 1;
        }

        const newPost = {
            id: newId,
            category: category,
            title: title,
            date: date,
            author: author,
            content: content
        };

        posts.push(newPost);
        sessionStorage.setItem("posts", JSON.stringify(posts));

        // 목록 페이지로 이동
        window.location.href = "/HTML/사내게시판.html";
    });
});
