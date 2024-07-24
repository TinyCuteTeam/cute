let mbtn11 = document.querySelector(".mbtn11");
mbtn11.addEventListener("click", function(event) {
    let minfo1 = document.querySelector("#minfo1").value;
    let minfo2 = document.querySelector("#minfo2").value;
    let minfo3 = document.querySelector("#minfo3").value;
    let minfo4 = document.querySelector("#minfo4").value;
    let minfo5 = document.querySelector("#minfo5").value;
    let minfo6 = document.querySelector("#minfo6").value;
    let minfo7 = document.querySelector("#minfo7").value;
    let mcontent = '';

    if (minfo1 == '' || minfo2 == '' || minfo3 == '' || minfo4 == '' || minfo5 == '' || minfo6 == '' || minfo7 == '') {
        alert("빈칸을 채워주세요");
    } else if (isNaN(minfo6)) {
        alert("수량은 숫자만 가능합니다");
    } else if (minfo7.length >= 5) {
        alert("이름을 다시 한번 확인해주세요");
    } else {
        mcontent += '<div class="flex round">';
        mcontent += '<div>';
        mcontent += `    <blue class="mho">${minfo1}</blue>`;
        mcontent += '</div>';
        mcontent += '<div>';
        mcontent += `   <blue>${minfo2}</blue>`;
        mcontent += '</div>';
        mcontent += `<div>${minfo3}</div>`;
        mcontent += `<div>${minfo4}</div>`;
        mcontent += `<div>${minfo5}</div>`;
        mcontent += `<div>${minfo6}BOX</div>`;
        mcontent += `<div>${minfo7}</div>`;
        mcontent += '<div class="mimg-container"><img class="add mimg" src="/image/첨부파일이모티콘.png"><div class="tooltip"><img class="make" src="/image/생산지시서.jpg"></div></div>';
        mcontent += '</div>';
        document.querySelector("#msg").innerHTML += mcontent;
    }
});

// document.body.addEventListener("click", function(event) {
//     if (event.target.classList.contains("mho")) {
//         let imageUrl = "/img/작업지시서.jpg";
//         window.open(imageUrl, '_blank');
//     }
// });

// 마우스를 올렸을 때 툴팁 표시 기능 추가
document.body.addEventListener("mouseenter", function(event) {
    if (event.target.classList.contains("mimg")) {
        let tooltip = event.target.nextElementSibling;
        tooltip.style.display = 'block';
    }
}, true);

document.body.addEventListener("mouseleave", function(event) {
    if (event.target.classList.contains("mimg")) {
        let tooltip = event.target.nextElementSibling;
        tooltip.style.display = 'none';
    }
}, true);
