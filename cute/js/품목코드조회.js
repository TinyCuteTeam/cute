document.addEventListener('DOMContentLoaded', function () {
    function setupInitialEvents() {
        // 기존의 삭제 버튼 이벤트 설정
        document.querySelectorAll(".delButton").forEach(function (button) {
            button.addEventListener('click', function (event) {
                event.currentTarget.parentNode.parentNode.remove();
            });
        });

        // 기존의 수정 버튼 이벤트 설정
        document.querySelectorAll(".editButton").forEach(function (button) {
            button.addEventListener('click', function (event) {
                let tableRow = event.currentTarget.parentNode.parentNode;
                let cells = tableRow.querySelectorAll('td');
                let isEditing = button.classList.contains('editing');

                if (isEditing) {
                    saveRow(event);
                } else {
                    for (let i = 0; i < cells.length - 2; i++) {
                        let currentCell = cells[i];
                        let currentValue = currentCell.textContent.trim();
                        let inputField = document.createElement('input');
                        inputField.type = 'text';
                        inputField.value = currentValue;
                        currentCell.textContent = '';
                        currentCell.appendChild(inputField);
                    }

                    let image = cells[2].querySelector('img');
                    let currentImgSrc = image ? image.src : '';
                    cells[2].innerHTML = `<input type="file" class="item-image" accept="image/*">
                                          <img src="${currentImgSrc}" style="display:block; max-width:100px; max-height:100px;">`;

                    button.src = '/image/save.webp';
                    button.classList.add('editing');
                }
            });
        });
    }

    function saveRow(event) {
        let button = event.currentTarget;
        let tableRow = button.parentNode.parentNode;
        let cells = tableRow.querySelectorAll('td');

        let isEditing = button.src.includes('save.webp');

        if (isEditing) {
            let codeInput = cells[0].querySelector('input');
            let nameInput = cells[1].querySelector('input');
            let imageInput = cells[2].querySelector('.item-image');

            if (codeInput && nameInput) {
                let code = codeInput.value.trim();
                let name = nameInput.value.trim();
                let imageUrl = '';

                if (imageInput && imageInput.files && imageInput.files[0]) {
                    const file = imageInput.files[0];
                    if (file) {
                        imageUrl = URL.createObjectURL(file);
                        cells[2].innerHTML = `<img src="${imageUrl}" style="width:50px; height:50px;">`;
                    } else {
                        cells[2].innerHTML = '이미지 없음';
                    }
                } else {
                    let existingImg = cells[2].querySelector('img');
                    if (existingImg) {
                        imageUrl = existingImg.src;
                    }
                    cells[2].innerHTML = imageUrl ? `<img src="${imageUrl}" style="width:50px; height:50px;">` : '이미지 없음';
                }

                cells[0].textContent = code;
                cells[1].textContent = name;
                button.src = '/image/edit.png';
            }
            button.classList.remove('editing');
        }
    }

    document.querySelector('.addBtn').addEventListener('click', function () {
        let codeInput = document.querySelector('.code');
        let nameInput = document.querySelector('.name');
        let imageInput = document.querySelector('.image');

        if (!codeInput || !nameInput) {
            console.error('품목코드와 품목명 입력 필드가 없습니다.');
            return;
        }

        let code = codeInput.value.trim();
        let name = nameInput.value.trim();
        let imageUrl = '';

        if (imageInput && imageInput.files && imageInput.files[0]) {
            const file = imageInput.files[0];
            imageUrl = URL.createObjectURL(file);
        }

        let table = document.querySelector('#table');
        if (!table) {
            console.error('테이블이 존재하지 않습니다.');
            return;
        }

        let newRow = table.insertRow();

        newRow.insertCell(0).innerHTML = `<input type="text" class="item-code" placeholder="품목코드" value="${code}">`;
        newRow.insertCell(1).innerHTML = `<input type="text" class="item-name" placeholder="품목명" value="${name}">`;
        newRow.insertCell(2).innerHTML = `<input type="file" class="item-image" accept="image/*">
                                           <img src="${imageUrl}" style="display:block; max-width:100px; max-height:100px;">`;
        newRow.insertCell(3).innerHTML = `<img class="pen editButton" src="/image/edit.png" title="수정/저장">`;
        newRow.insertCell(4).innerHTML = `<img class="bin delButton" src="/image/delete.png" title="삭제">`;

        setupInitialEvents();

        function previewImage(event) {
            const file = event.target.files[0];
            const previewImg = event.target.parentNode.querySelector('img');

            if (file && previewImg) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    previewImg.src = e.target.result;
                    previewImg.style.display = 'block';
                }
                reader.readAsDataURL(file);
            }
        }

        newRow.querySelector('.item-image').addEventListener('change', previewImage);
        newRow.querySelector('.editButton').addEventListener('click', saveRow);
        newRow.querySelector('.delButton').addEventListener('click', function (event) {
            event.currentTarget.parentNode.parentNode.remove();
        });
    });

    function searchTable() {
        let input = document.getElementById('search-input').value.toLowerCase();
        let table = document.getElementById('table');
        let rows = table.getElementsByTagName('tr');
        
        for (let i = 1; i < rows.length; i++) {
            let cells = rows[i].getElementsByTagName('td');
            let showRow = false;
            for (let j = 0; j < cells.length - 2; j++) {
                let cellText = cells[j].textContent.toLowerCase();
                if (cellText.includes(input)) {
                    showRow = true;
                    break;
                }
            }
            rows[i].style.display = showRow ? '' : 'none';
        }
    }

    function clearSearch() {
        document.getElementById('search-input').value = '';
        searchTable(); // Reset table display
    }

    document.getElementById('search-button').addEventListener('click', searchTable);
    document.getElementById('reset-button').addEventListener('click', clearSearch);

    setupInitialEvents();
});
