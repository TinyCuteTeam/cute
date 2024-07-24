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
            button.querySelector('img').src = '/image/edit.png';
            button.classList.remove('editing');
        } else {
            // 수정 로직
            for (let i = 0; i < cells.length - 3; i++) {
                let currentCell = cells[i];
                let currentValue = currentCell.textContent;
                let inputField = document.createElement('input');
                inputField.type = 'text';
                inputField.value = currentValue;
                currentCell.textContent = '';
                currentCell.appendChild(inputField);
            }
            button.querySelector('img').src = '/image/save.webp';
            button.classList.add('editing');
        }
    });
});

let imageUrl = document.querySelector('.image').value; // 이미지 URL 입력값 가져오기
//버튼 누르면 추가
document.querySelector('.addBtn').addEventListener('click', function () {
    let code = document.querySelector('.code').value;
    let name = document.querySelector('.name').value;
    // let image = document.querySelector('.image').value;

    let table = document.querySelector('#table');
    let newRow = table.insertRow();

    newRow.insertCell(0).innerHTML = `품목코드`;
    newRow.insertCell(1).innerHTML = `품목명`;
    newRow.insertCell(2).innerHTML = `<img src="${imageUrl}" style="width:50px; height:50px;">`; // 이미지 셀
    // 첨부파일 추가하기 
    // newRow.insertCell(2).innerHTML = `<input type="file" class="real-upload" accept="image/*" required multiple>`;
    // newRow.insertCell(2).innerHTML = `이미지`;
    // newRow.insertCell(2).innerHTML = `<img src=" ' +imageLink.vlaue + '" style="width:50px: height:50px;">`;
    newRow.insertCell(3).innerHTML = `<button class="editButton"><img class="pen" src="/image/edit.png"></button>`;
    newRow.insertCell(4).innerHTML = `<button class="delButton"><img class="bin" src="/image/delete.png"></button>`;

    document.getElementById('srForm').reset();

    // 새로운 버튼에도 이벤트 리스너 추가
    newRow.querySelector('.delButton').addEventListener('click', function (event) {
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
            button.querySelector('img').src = '/image/edit.png';
            button.classList.remove('editing');
        } else {
            // 수정 로직
            // 수정버튼 누르면 이미지 칸에 text 입력창이 뜨는데 
            for (let i = 0; i < cells.length - 2; i++) {
                let currentCell = cells[i];

                // let ingre = tableRow.querySelectorAll('.ingre');
                
                    let currentValue = currentCell.textContent;
                    let inputField = document.createElement('input');
                    inputField.type = 'text';
                    inputField.value = currentValue;
                    currentCell.textContent = '';
                    currentCell.appendChild(inputField);
                
            }

            // let imageLink =inputField 
            cells[2].innerHTML += `<img src=" ' +imageLink.vlaue + '" style="width:50px: height:50px;">`
            // cells[2].innerHTML += `<img src=" " style="width:50px: height:50px;">`
            // newRow.insertCell(2).innerHTML = `<img src=" ' +imageLink.vlaue + '" style="width:50px: height:50px;">`;
            button.querySelector('img').src = '/image/save.webp';
            button.classList.add('editing');
        }
    });

});