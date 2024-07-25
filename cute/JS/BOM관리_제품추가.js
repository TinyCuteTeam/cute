//삭제 누르면 표 한줄이 삭제되도록 
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

        if (isEditing) {
            // 저장 로직
            for (let i = 0; i < cells.length - 2; i++) {
                let inputField = cells[i].querySelector('input');
                if (inputField) {
                    cells[i].textContent = inputField.value;
                }
            }
            button.querySelector('img').src = 'https://cdn-icons-png.flaticon.com/512/764/764599.png';
            button.classList.remove('editing');
        } else {
            // 수정 로직
            for (let i = 0; i < cells.length - 2; i++) {
                let currentCell = cells[i];
                let currentValue = currentCell.textContent;
                let inputField = document.createElement('input');
                inputField.type = 'text';
                inputField.value = currentValue;
                currentCell.textContent = '';
                currentCell.appendChild(inputField);
            }
            button.querySelector('img').src = 'https://static-00.iconduck.com/assets.00/save-icon-2048x2048-iovw4qr4.png';
            button.classList.add('editing');
        }
    });
});

//버튼 누르면 
document.querySelector('.addBtn').addEventListener('click', function () {
    let code = document.querySelector('.code').value;
    let name = document.querySelector('.name').value;
    let amount = document.querySelector('.amount').value;
    let unit = document.querySelector('.unit').value;
    let etc = document.querySelector('.etc').value;

    let table = document.querySelectorAll('#table');
    let newRow = table[0].insertRow();
    let newRow1 = table[1].insertRow();

    // console.log('클릭')
    // newRow.insertCell(0).textContent = code;
    newRow.insertCell(0).innerHTML = `코드`;
    newRow.insertCell(1).innerHTML = `품목명`;
    newRow.insertCell(2).innerHTML = `수량`;
    newRow.insertCell(3).innerHTML = `단위`;
    newRow.insertCell(4).innerHTML = `비고`;
    newRow.insertCell(5).innerHTML = `<button class="editButton"><img class="pen" src="https://cdn-icons-png.flaticon.com/512/764/764599.png"></button>`;
    newRow.insertCell(6).innerHTML = `<button class="delButton"><img class="bin" src="https://cdn-icons-png.flaticon.com/512/484/484662.png"></button>`;

    newRow1.insertCell(0).innerHTML = `코드`;
    newRow1.insertCell(1).innerHTML = `품목명`;
    newRow1.insertCell(2).innerHTML = `수량`;
    newRow1.insertCell(3).innerHTML = `단위`;
    newRow1.insertCell(4).innerHTML = `비고`;
    newRow1.insertCell(5).innerHTML = `<button class="editButton"><img class="pen" src="https://cdn-icons-png.flaticon.com/512/764/764599.png"></button>`;
    newRow1.insertCell(6).innerHTML = `<button class="delButton"><img class="bin" src="https://cdn-icons-png.flaticon.com/512/484/484662.png"></button>`;

    document.getElementById('srForm').reset();

    // 새로운 버튼에도 이벤트 리스너 추가
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
            for (let i = 0; i < cells.length - 2; i++) {
                let inputField = cells[i].querySelector('input');
                if (inputField) {
                    cells[i].textContent = inputField.value;
                }
            }
            button.querySelector('img').src = 'https://cdn-icons-png.flaticon.com/512/764/764599.png';
            button.classList.remove('editing');
        } else {
            // 수정 로직
            for (let i = 0; i < cells.length - 2; i++) {
                let currentCell = cells[i];
                let currentValue = currentCell.textContent;
                let inputField = document.createElement('input');
                inputField.type = 'text';
                inputField.value = currentValue;
                currentCell.textContent = '';
                currentCell.appendChild(inputField);
            }
            button.querySelector('img').src = 'https://static-00.iconduck.com/assets.00/save-icon-2048x2048-iovw4qr4.png';
            button.classList.add('editing');
        }
    });

    newRow1.querySelector('.editButton').addEventListener('click', function (event) {
        let button = event.currentTarget;
        let tableRow = button.parentNode.parentNode;
        let cells = tableRow.querySelectorAll('td');
        let isEditing = button.classList.contains('editing');

        if (isEditing) {
            // 저장 로직
            for (let i = 0; i < cells.length - 2; i++) {
                let inputField = cells[i].querySelector('input');
                if (inputField) {
                    cells[i].textContent = inputField.value;
                }
            }
            button.querySelector('img').src = 'https://cdn-icons-png.flaticon.com/512/764/764599.png';
            button.classList.remove('editing');
        } else {
            // 수정 로직
            for (let i = 0; i < cells.length - 2; i++) {
                let currentCell = cells[i];
                let currentValue = currentCell.textContent;
                let inputField = document.createElement('input');
                inputField.type = 'text';
                inputField.value = currentValue;
                currentCell.textContent = '';
                currentCell.appendChild(inputField);
            }
            button.querySelector('img').src = 'https://static-00.iconduck.com/assets.00/save-icon-2048x2048-iovw4qr4.png';
            button.classList.add('editing');
        }
    });
});

        function addIngredient() {
            const table = document.querySelector('.ingreInfo');
            const newRow = table.insertRow(-1); // 마지막에 새로운 행 추가
            const cell1 = newRow.insertCell(0);
            const cell2 = newRow.insertCell(1);
            const cell3 = newRow.insertCell(2);
            const cell4 = newRow.insertCell(3);
            const cell5 = newRow.insertCell(4);
            const cell6 = newRow.insertCell(5);

            cell1.innerHTML = '<input type="text">';
            cell2.innerHTML = '<input type="text">';
            cell3.innerHTML = '<input type="text">';
            cell4.innerHTML = '<input type="text">';
            cell5.innerHTML = '<input type="text">';
            cell6.innerHTML = '<button onclick="deleteRow(this)">삭제</button>';
        }

        function deleteRow(button) {
            const row = button.parentNode.parentNode; // 버튼의 부모의 부모 (행)을 찾음
            row.parentNode.removeChild(row); // 행 삭제
        }

        let save= document.querySelector(".save")
        save.addEventListener("click",function(){
            let gogo = confirm("추가하시겠습니까?")
            if(gogo){
                alert("저장되었습니다")
            window.location.href="/HTML/BOM.html"
        }else{

        }
        })