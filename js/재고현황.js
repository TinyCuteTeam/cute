const products = [
    {
        "품목코드": "000001",
        "품목명": "비비고 왕교자",
        "이미지코드": "img/kingdumpling.jpg",
        "재고수량": 150,
        "가용수량": 120
    },
    {
        "품목코드": "000002",
        "품목명": "비비고 새우만두",
        "이미지코드": "img/shrimpdumpling.jpg",
        "재고수량": 200,
        "가용수량": 180
    },
    {
        "품목코드": "000003",
        "품목명": "비비고 군만두",
        "이미지코드": "img/frieddumpling.jpg",
        "재고수량": 100,
        "가용수량": 75
    },
    {
        "품목코드": "000004",
        "품목명": "비비고 김치만두",
        "이미지코드": "img/kimpdumpling.jpg",
        "재고수량": 120,
        "가용수량": 100
    },
    {
        "품목코드": "000005",
        "품목명": "비비고 고기만두",
        "이미지코드": "img/meatdumpling.jpg",
        "재고수량": 130,
        "가용수량": 110
    },
    {
        "품목코드": "000006",
        "품목명": "비비고 찐만두",
        "이미지코드": "img/steameddumpling.jpg",
        "재고수량": 90,
        "가용수량": 70
    },
    {
        "품목코드": "000007",
        "품목명": "비비고 야채만두",
        "이미지코드": "img/vegetabledumpling.jpg",
        "재고수량": 160,
        "가용수량": 140
    },
    {
        "품목코드": "000008",
        "품목명": "비비고 매운 만두",
        "이미지코드": "img/spicydumpling.jpg",
        "재고수량": 80,
        "가용수량": 60
    },
    {
        "품목코드": "000009",
        "품목명": "비비고 해물만두",
        "이미지코드": "img/seafooddumpling.jpg",
        "재고수량": 110,
        "가용수량": 90
    },
    {
        "품목코드": "000010",
        "품목명": "비비고 고추만두",
        "이미지코드": "img/chilidumpling.jpg",
        "재고수량": 70,
        "가용수량": 50
    },
    {
        "품목코드": "000011",
        "품목명": "비비고 스프링롤",
        "이미지코드": "img/springroll.jpg",
        "재고수량": 140,
        "가용수량": 120
    },
    {
        "품목코드": "000012",
        "품목명": "비비고 두부만두",
        "이미지코드": "img/tofudumpling.jpg",
        "재고수량": 75,
        "가용수량": 50
    },
    {
        "품목코드": "000013",
        "품목명": "비비고 고르곤졸라 만두",
        "이미지코드": "img/gorgonzoladumpling.jpg",
        "재고수량": 65,
        "가용수량": 45
    },
    {
        "품목코드": "000014",
        "품목명": "비비고 불고기 만두",
        "이미지코드": "img/bulgogidumpling.jpg",
        "재고수량": 85,
        "가용수량": 70
    },
    {
        "품목코드": "000015",
        "품목명": "비비고 훈제 연어 만두",
        "이미지코드": "img/smokedsalmon.jpg",
        "재고수량": 50,
        "가용수량": 30
    }
];

const tableBody = document.getElementById("product-table-body");

products.forEach(product => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${product.품목코드}</td>
        <td>${product.품목명}</td>
        <td>
            ${product.이미지코드 ? `<img src="${product.이미지코드}" alt="${product.품목명}" style="width:50px;">` : '이미지가 없습니다'}
        </td>
        <td>${product.재고수량}</td>
        <td>${product.가용수량}</td>`;
    tableBody.appendChild(row); // 행을 테이블에 추가
});