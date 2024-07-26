// 고기만두가 선택되었을 때 고기만두 테이블이 나오도록 
// 김치테이블을 display none 해두기 
document.getElementById('recipeSelect').addEventListener('change', function () {
    let kimchidiv = document.querySelector('.kimchi');
    let meatdiv = document.querySelector('.meat');

    // 선택된 값에 따라 해당 div 보이기
    if (this.value === 'kimchi') {
        meatdiv.style.display = 'none';
        kimchidiv.style.display = 'table';
    } else if (this.value === 'meat') {
        kimchidiv.style.display = 'none';
        meatdiv.style.display = 'table';
    }
});

// 기존에 있던 테이블
// 삭제 누르면 표 한줄이 삭제되도록 
document.querySelectorAll(".delButton").forEach(function (button) {
    button.addEventListener('click', function (event) {
        event.currentTarget.parentNode.parentNode.remove();
    });
});
// 수정 버튼 클릭 시 수정할 수 있는 입력 필드 생성
let editButtons = document.querySelectorAll(".editButton");
editButtons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        let tableRow = event.currentTarget.parentNode.parentNode;
        let cells = tableRow.querySelectorAll('td');
        let isEditing = button.classList.contains('editing');

        // 수정, 저장 이미지 토글
        if (isEditing) {
            // 저장 로직
            for (let i = 1; i < cells.length - 2; i++) {
                let inputField = cells[i].querySelector('input');
                if (inputField) {
                    cells[i].textContent = inputField.value;
                }
            }
            button.src = '/image/edit.png';
            button.classList.remove('editing');
        } else {
            // 수정 로직
            for (let i = 1; i < cells.length - 2; i++) {
                let currentCell = cells[i];
                cells[0]=`<input type="checkbox" class="chk">`
                let currentValue = currentCell.textContent;
                let inputField = document.createElement('input');
                inputField.type = 'text';
                inputField.value = currentValue;
                currentCell.textContent = '';
                currentCell.appendChild(inputField);
            }
            button.src = '/image/save.webp';
            button.classList.add('editing');
        }
    });
});

//추가이미지 addBtn 버튼 누르면 한 줄씩 추가됨
document.querySelector('.addBtn').addEventListener('click', function () {
    let code = document.querySelector('.code').value;
    let name = document.querySelector('.name').value;
    let amount = document.querySelector('.amount').value;
    let unit = document.querySelector('.unit').value;
    let etc = document.querySelector('.etc').value;

    let table = document.querySelectorAll('#table');
    let newRow = table[0].insertRow();
    let newRow1 = table[1].insertRow();

    //플러스 이미지버튼 눌렀을 때 김치만두 테이블 맨 아래쪽에 추가되는 한 줄 
    newRow.insertCell(0).innerHTML = `<input type="checkbox" class="chk">`;
    newRow.insertCell(1).innerHTML = `코드`;
    newRow.insertCell(2).innerHTML = `품목명`;
    newRow.insertCell(3).innerHTML = `수량`;
    newRow.insertCell(4).innerHTML = `단위`;
    newRow.insertCell(5).innerHTML = `비고`;
    newRow.insertCell(6).innerHTML = `<img class="pen editButton" src="/image/edit.png" title="수정">`;
    newRow.insertCell(7).innerHTML = `<img class="bin delButton" src="/image/delete.png" title="삭제">`;
    
    //플러스 이미지버튼 눌렀을 때 고기만두 테이블 맨 아래쪽에 추가되는 한 줄 
    newRow1.insertCell(0).innerHTML = `<input type="checkbox" class="chk">`;
    newRow1.insertCell(1).innerHTML = `코드`;
    newRow1.insertCell(2).innerHTML = `품목명`;
    newRow1.insertCell(3).innerHTML = `수량`;
    newRow1.insertCell(4).innerHTML = `단위`;
    newRow1.insertCell(5).innerHTML = `비고`;
    newRow1.insertCell(6).innerHTML = `<img class="pen editButton" src="/image/edit.png" title="수정">`;
    newRow1.insertCell(7).innerHTML = `<img class="bin delButton" src="/image/delete.png" title="삭제">`;

    document.getElementById('srForm').reset();

    // 추가된 라인 새로운 버튼에도 이벤트 리스너 추가
    newRow.querySelector('.delButton').addEventListener('click', function (event) {
        event.currentTarget.parentNode.parentNode.remove();
    });

    //고기만두 삭제
    newRow1.querySelector('.delButton').addEventListener('click', function (event) {
        event.currentTarget.parentNode.parentNode.remove();
    });

    newRow.querySelector('.editButton').addEventListener('click', function (event) {
        let button = event.currentTarget;
        let tableRow = button.parentNode.parentNode;
        let cells = tableRow.querySelectorAll('td');
        let isEditing = button.classList.contains('editing');

        if (isEditing) {
            // 저장 로직
            for (let i = 1; i < cells.length - 2; i++) {
                let inputField = cells[i].querySelector('input');
                if (inputField) {
                    cells[i].textContent = inputField.value;
                }
            }
            button.src = "/image/edit.png";
            button.classList.remove('editing');
        } else {
            // 수정 로직
            for (let i = 1; i < cells.length - 2; i++) {
                let currentCell = cells[i];
                cells[0]=`<input type="checkbox" class="chk">`
                let currentValue = currentCell.textContent;
                let inputField = document.createElement('input');
                inputField.type = 'text';
                inputField.value = currentValue;
                currentCell.textContent = '';
                currentCell.appendChild(inputField);
            }
            button.src = "/image/save.webp";
            button.classList.add('editing');
        }
    });

    //고기만두에 추가된 한줄에 적용될 이벤트
    newRow1.querySelector('.editButton').addEventListener('click', function (event) {
        let button = event.currentTarget;
        let tableRow = button.parentNode.parentNode;
        let cells = tableRow.querySelectorAll('td');
        let isEditing = button.classList.contains('editing');

        if (isEditing) {
            // 저장 로직
            for (let i = 1; i < cells.length - 2; i++) {
                let inputField = cells[i].querySelector('input');
                if (inputField) {
                    cells[i].textContent = inputField.value;
                }
            }
            button.src = "/image/edit.png";
            button.classList.remove('editing');
        } else {
            // 수정 로직
            for (let i = 1; i < cells.length - 2; i++) {
                let currentCell = cells[i];
                cells[0]=`<input type="checkbox" class="chk">`
                let currentValue = currentCell.textContent;
                let inputField = document.createElement('input');
                inputField.type = 'text';
                inputField.value = currentValue;
                currentCell.textContent = '';
                currentCell.appendChild(inputField);
            }
            button.src = '/image/save.webp';
            button.classList.add('editing');
        }
    });
});

// 체크박스가 선택된 라인만 지우는 이벤트
let approval = document.querySelector(".delete-btn");

approval.addEventListener('click', function() {
    let checkboxes = document.querySelectorAll('.chk:checked');
    checkboxes.forEach(function(checkbox) {
        let parentDiv = checkbox.closest('.chk');
        alert("삭제되었습니다")
        if (parentDiv) {
            parentDiv.parentNode.parentNode.remove();
        }
    });
});