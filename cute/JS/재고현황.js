﻿const products = [
    {
        "품목코드": "000001", 
        "품목명": "비비고 왕교자", 
        "이미지코드": "/image/비비고왕교자.jpg", 
        "재고수량": 150, "가용수량": 120
    },
    {
        "품목코드": "000002", 
        "품목명": "비비고 새우만두", 
        "이미지코드": "/image/비비고새우만두.jpg", 
        "재고수량": 200, "가용수량": 180
    },
    {
        "품목코드": "000003", 
        "품목명": "비비고 군만두", 
        "이미지코드": "/image/비비고군만두.webp", 
        "재고수량": 100, "가용수량": 75
    },
    {
        "품목코드": "000004", 
        "품목명": "비비고 김치만두", 
        "이미지코드": "/image/비비고김치만두.webp", 
        "재고수량": 120, "가용수량": 100
    },
    {
        "품목코드": "000005", 
        "품목명": "비비고 고기만두", 
        "이미지코드": "/image/비비고고기만두.jpg", 
        "재고수량": 130, "가용수량": 110
    },
    {
        "품목코드": "000006", 
        "품목명": "비비고 찐만두", 
        "이미지코드": "/image/비비고찐만두.jpg", 
        "재고수량": 90, 
        "가용수량": 70
    },
    {
        "품목코드": "000007", 
        "품목명": "비비고 야채만두", 
        "이미지코드": "/image/비비고야채만두.webp", 
        "재고수량": 160, "가용수량": 140
    },
    {
        "품목코드": "000008", 
        "품목명": "비비고 매운만두", 
        "이미지코드": "/image/비비고매운만두.webp", 
        "재고수량": 80, "가용수량": 60
    },
    {
        "품목코드": "000009", 
        "품목명": "비비고 해물만두", 
        "이미지코드": "/image/비비고해물만두.png", 
        "재고수량": 110, "가용수량": 90
    },
    {
        "품목코드": "000010", 
        "품목명": "비비고 고추만두", 
        "이미지코드": "/image/비비고고추만두.webp", 
        "재고수량": 70, 
        "가용수량": 50},
    {
        "품목코드": "000011", 
        "품목명": "비비고 스프링롤", 
        "이미지코드": "/image/비비고스프링롤.png", 
        "재고수량": 140, 
        "가용수량": 120
    },
    {
        "품목코드": "000012", 
        "품목명": "비비고 두부만두", 
        "이미지코드": "/image/비비고두부만두.webp", 
        "재고수량": 75, "가용수량": 50
    },
    {
        "품목코드": "000014", 
        "품목명": "비비고 불고기만두", 
        "이미지코드": "/image/비비고불고기만두.webp", 
        "재고수량": 85, 
        "가용수량": 70
    }
];

const itemsPerPage = 5;
let currentPage = 1;

function displayTablePage(page) {
    const tableBody = document.getElementById("product-table-body");
    tableBody.innerHTML = "";

    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedItems = products.slice(start, end);

    // 자바스크립트로 품목별 내용 표로 가져오기
    paginatedItems.forEach(product => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td style="width:100px">${product.품목코드}</td>
            <td style="width:150px;">${product.품목명}</td>
            <td style="width:100px; height:80px">
                ${product.이미지코드 ? `<img class="imgg" src="${product.이미지코드}" alt="${product.품목명}" style="width: 90px; height: 80px;">` : '이미지가 없습니다'}
            </td>
            <td style="width:100px">${product.재고수량}</td>
            <td style="width:100px">${product.가용수량}</td>
            <td style="width:100px"><img class="ad1 edit" src="/image/수정.png"></td>
            <td style="width:100px"><img class="ad2 del" src="/image/삭제.png"></td>`;
        tableBody.appendChild(row);
    });
}

// 페이지 버튼을 눌렀을때 페이지가 넘어가고 내용별로(배열)로 끊어서
// 페이지에 들어갈 내용을 알아서 맞춰서 넘어가도록
// 자바스크립트 구성
function setupPagination() {
    const pagination = document.querySelector(".pagination");
    const pageCount = Math.ceil(products.length / itemsPerPage);

    pagination.innerHTML = ""; // 기존 페이지 번호 초기화

    for (let i = 1; i <= pageCount; i++) {
        const span = document.createElement("span");
        span.innerText = i;
        span.addEventListener("click", function () {
            currentPage = i;
            displayTablePage(currentPage);

            const allButtons = pagination.querySelectorAll("span");
            allButtons.forEach(button => {
                button.classList.remove("active");
            });

            span.classList.add("active");
        });
        pagination.appendChild(span);
    }
}

// 상품 추가 함수
document.getElementById("add-item").addEventListener("click", function () {
    const code = document.getElementById("item-code").value;
    const name = document.getElementById("item-name").value;
    const image = document.getElementById("item-image").value;
    const stock = parseInt(document.getElementById("item-stock").value);
    const available = parseInt(document.getElementById("item-available").value);

    // 입력값 검증
    if (!code || !name || !image || isNaN(stock) || isNaN(available)) {
        alert("모든 필드를 올바르게 입력해주세요.");
        return;
    }

    // 새로운 품목 객체 생성
    const newProduct = {
        "품목코드": code,
        "품목명": name,
        "이미지코드": image,
        "재고수량": stock,
        "가용수량": available
    };

    // 제품 배열에 추가
    products.push(newProduct);

    // 테이블과 페이지네이션 업데이트
    setupPagination();
    displayTablePage(currentPage);

    // 입력 필드 초기화
    document.getElementById("item-code").value = "";
    document.getElementById("item-name").value = "";
    document.getElementById("item-image").value = "";
    document.getElementById("item-stock").value = "";
    document.getElementById("item-available").value = "";
});

// 삭제 버튼 클릭 이벤트 처리
document.body.addEventListener("click", function (event) {
    if (event.target.classList.contains("del")) {
        const row = event.target.closest("tr");
        if (row) {
            // 사용자에게 삭제 확인 메시지 표시
            const confirmDelete = confirm("정말 삭제하시겠습니까?");
            if (confirmDelete) {
                row.remove(); // 확인 시 행 삭제
            }
        }
    }
});

// 수정 버튼 클릭 이벤트 처리
document.body.addEventListener("click", function (event) {
    if (event.target.classList.contains("edit")) {
        const row = event.target.closest("tr");
        if (row) {
            const cells = row.querySelectorAll("td");
            cells.forEach((cell, index) => {
                // 이미지 셀(세 번째 셀)과 버튼 셀들은 수정 대상에서 제외
                if (index !== 2 && index < 5) {
                    const currentValue = cell.innerText;
                    const input = document.createElement("input");
                    input.type = "text";
                    input.value = currentValue;
                    input.style.width = "90%"; // 입력 필드의 폭을 셀 폭의 90%로 설정
                    cell.innerHTML = "";
                    cell.appendChild(input);
                }
            });
            event.target.innerHTML = `<img class="ad1 edit" src="/image/수정.png">`;
            event.target.classList.remove("edit");
            event.target.classList.add("save");
        }
    } else if (event.target.classList.contains("save")) {
        const row = event.target.closest("tr");
        if (row) {
            const inputs = row.querySelectorAll("td input");
            inputs.forEach(input => {
                const cell = input.parentElement;
                cell.innerText = input.value;
            });
            event.target.innerHTML = `<img class="ad1 edit" src="/image/수정.png">`;
            event.target.classList.remove("save");
            event.target.classList.add("edit");
        }
    }
});

setupPagination();
displayTablePage(currentPage);