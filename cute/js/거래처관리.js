  //mbtn11이라는 클래스의 등록버튼을 누르면 작성한 거래처 정보가 추가되도록
  document.querySelector(".mbtn11").addEventListener("click", function (event) {
    let minfo1 = document.querySelector("#minfo1").value;
    let minfo2 = document.querySelector("#minfo2").value;
    let minfo3 = document.querySelector("#minfo3").value;
    let minfo4 = document.querySelector("#minfo4").value;
    let minfo5 = document.querySelector("#minfo5").value;
    let minfo6 = document.querySelector("#minfo6").value;
    let minfo7 = document.querySelector("#minfo7").value;
    let mcontent = '';
    mcontent += '<div class="flex round">'
    mcontent += '<div>'
    mcontent += `    <blue>${minfo1}</blue>`
    mcontent += '</div>'
    mcontent += `<div>${minfo2}</div>`
    mcontent += `<div>${minfo3}</div>`
    mcontent += `<div>${minfo4}</div>`
    mcontent += `<div>${minfo5}</div>`
    mcontent += `<div>${minfo6}</div>`
    mcontent += `<div>${minfo7}</div>`
    mcontent += '</div>'
    document.querySelector("#msg").innerHTML += mcontent;

    // 빈내용 추가 안되도록
    if (minfo1 == '' || minfo2 == '' || minfo3 == '' || minfo4 == '' || minfo5 == '' || minfo6 == '' || minfo7 == '') {
        alert("빈칸을 채워주세요")
    }
    // @ 이메일에
    //대표명은 5글자까지
    //사업자 등록증은 숫자랑 -만 입력가능 
});
