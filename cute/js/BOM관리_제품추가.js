// 여긴 스크립트 작성필요

// //삭제 누르면 표 한줄이 삭제되도록 
// document.querySelectorAll(".delButton").forEach(function (button) {
//     button.addEventListener('click', function (event) {
//         event.currentTarget.parentNode.parentNode.remove();
//     });
// });
// // 수정 버튼 클릭 시 수정할 수 있는 입력 필드 생성
// let editButtons = document.querySelectorAll(".editButton");
// editButtons.forEach(function (button) {
//     button.addEventListener('click', function (event) {
//         let tableRow = event.currentTarget.parentNode.parentNode;
//         let cells = tableRow.querySelectorAll('td');
//         let isEditing = button.classList.contains('editing');

//         if (isEditing) {
//             // 저장 로직
//             for (let i = 0; i < cells.length - 2; i++) {
//                 let inputField = cells[i].querySelector('input');
//                 if (inputField) {
//                     cells[i].textContent = inputField.value;
//                 }
//             }
//             button.querySelector('img').src = '/image/edit.png';
//             button.classList.remove('editing');
//         } else {
//             // 수정 로직
//             for (let i = 0; i < cells.length - 2; i++) {
//                 let currentCell = cells[i];
//                 let currentValue = currentCell.textContent;
//                 let inputField = document.createElement('input');
//                 inputField.type = 'text';
//                 inputField.value = currentValue;
//                 currentCell.textContent = '';
//                 currentCell.appendChild(inputField);
//             }
//             button.querySelector('img').src = '/image/save.webp';
//             button.classList.add('editing');
//         }
//     });
// });

// //버튼 누르면 
// document.querySelector('.addBtn').addEventListener('click', function () {
//     let code = document.querySelector('.code').value;
//     let name = document.querySelector('.name').value;
//     let amount = document.querySelector('.amount').value;
//     let unit = document.querySelector('.unit').value;
//     let etc = document.querySelector('.etc').value;

//     let table = document.querySelectorAll('#table');
//     let newRow = table[0].insertRow();
//     let newRow1 = table[1].insertRow();

//     // console.log('클릭')
//     // newRow.insertCell(0).textContent = code;
//     newRow.insertCell(0).innerHTML = `코드`;
//     newRow.insertCell(1).innerHTML = `품목명`;
//     newRow.insertCell(2).innerHTML = `수량`;
//     newRow.insertCell(3).innerHTML = `단위`;
//     newRow.insertCell(4).innerHTML = `비고`;
//     newRow.insertCell(5).innerHTML = `<button class="editButton"><img class="pen" src="/image/edit.png"></button>`;
//     newRow.insertCell(6).innerHTML = `<button class="delButton"><img class="bin" src="/image/delete.png"></button>`;

//     newRow1.insertCell(0).innerHTML = `코드`;
//     newRow1.insertCell(1).innerHTML = `품목명`;
//     newRow1.insertCell(2).innerHTML = `수량`;
//     newRow1.insertCell(3).innerHTML = `단위`;
//     newRow1.insertCell(4).innerHTML = `비고`;
//     newRow1.insertCell(5).innerHTML = `<button class="editButton"><img class="pen" src="/image/edit.png"></button>`;
//     newRow1.insertCell(6).innerHTML = `<button class="delButton"><img class="bin" src="/image/delete.png"></button>`;

//     document.getElementById('srForm').reset();

//     // 새로운 버튼에도 이벤트 리스너 추가
//     newRow.querySelector('.delButton').addEventListener('click', function (event) {
//         event.currentTarget.parentNode.parentNode.remove();
//     });

//     //고기만두 삭제
//     newRow1.querySelector('.delButton').addEventListener('click', function (event) {
//         event.currentTarget.parentNode.parentNode.remove();
//     });

//     newRow.querySelector('.editButton').addEventListener('click', function (event) {
//         let button = event.currentTarget;
//         let tableRow = button.parentNode.parentNode;
//         let cells = tableRow.querySelectorAll('td');
//         let isEditing = button.classList.contains('editing');

//         if (isEditing) {
//             // 저장 로직
//             for (let i = 0; i < cells.length - 2; i++) {
//                 let inputField = cells[i].querySelector('input');
//                 if (inputField) {
//                     cells[i].textContent = inputField.value;
//                 }
//             }
//             button.querySelector('img').src = '/image/edit.png';
//             button.classList.remove('editing');
//         } else {
//             // 수정 로직
//             for (let i = 0; i < cells.length - 2; i++) {
//                 let currentCell = cells[i];
//                 let currentValue = currentCell.textContent;
//                 let inputField = document.createElement('input');
//                 inputField.type = 'text';
//                 inputField.value = currentValue;
//                 currentCell.textContent = '';
//                 currentCell.appendChild(inputField);
//             }
//             button.querySelector('img').src = '/image/save.webp';
//             button.classList.add('editing');
//         }
//     });

//     newRow1.querySelector('.editButton').addEventListener('click', function (event) {
//         let button = event.currentTarget;
//         let tableRow = button.parentNode.parentNode;
//         let cells = tableRow.querySelectorAll('td');
//         let isEditing = button.classList.contains('editing');

//         if (isEditing) {
//             // 저장 로직
//             for (let i = 0; i < cells.length - 2; i++) {
//                 let inputField = cells[i].querySelector('input');
//                 if (inputField) {
//                     cells[i].textContent = inputField.value;
//                 }
//             }
//             button.querySelector('img').src = '/image/edit.png';
//             button.classList.remove('editing');
//         } else {
//             // 수정 로직
//             for (let i = 0; i < cells.length - 2; i++) {
//                 let currentCell = cells[i];
//                 let currentValue = currentCell.textContent;
//                 let inputField = document.createElement('input');
//                 inputField.type = 'text';
//                 inputField.value = currentValue;
//                 currentCell.textContent = '';
//                 currentCell.appendChild(inputField);
//             }
//             button.querySelector('img').src = '/image/save.webp';
//             button.classList.add('editing');
//         }
//     });
// });