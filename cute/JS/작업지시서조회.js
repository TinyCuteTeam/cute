// 작업지시서 새창띄우기 
// 부모에 이벤트 위임
document.body.addEventListener("click", function(event) {
    // ming이라는 클래스를 가졌을때
    if (event.target.classList.contains("mimg")) {
        // 새 창에 이미지 띄우기
        let imageUrl = "/img/작업지시서.jpg";
        window.open(imageUrl, '_blank'); // 창띄우기
    }
});