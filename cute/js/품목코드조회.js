document.addEventListener('DOMContentLoaded', function () {
    function setupInitialEvents() {
        // 기존의 삭제 버튼 이벤트 설정
        document.querySelectorAll(".delButton").forEach(function (button) {
            button.addEventListener('click', function (event) {
                event.currentTarget.parentNode.parentNode.remove();
            });
        });

        // 기존의 수정 버튼 및 저장 버튼 이벤트 설정
        document.querySelectorAll(".editButton, .saveButton").forEach(function (button) {
            button.addEventListener('click', function (event) {
                let tableRow = event.currentTarget.parentNode.parentNode;
                let cells = tableRow.querySelectorAll('td');
                let isEditing = button.classList.contains('editing') || button.classList.contains('saveButton');

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

        // 디버깅: cells 내용을 콘솔에 출력
        console.log(cells);

        // 셀의 개수를 확인하여 에러 예방
        if (!cells || cells.length < 5) {
            console.error('셀의 개수가 부족합니다.');
            return;
        }

        let isSaving = button.src.includes('save.webp');

        if (isSaving) {
            let codeInput = cells[0].querySelector('input');
            let nameInput = cells[1].querySelector('input');
            let imageInput = cells[2].querySelector('.item-image');

            if (codeInput && nameInput) {
                let code = codeInput.value.trim();
                let name = nameInput.value.trim();
                let imageUrl = '';

                // 파일이 선택되었는지 확인
                if (imageInput && imageInput.files && imageInput.files[0]) {
                    const file = imageInput.files[0];
                    if (file) {
                        imageUrl = URL.createObjectURL(file);
                        cells[2].innerHTML = `<img src="${imageUrl}" style="width:50px; height:50px;">`;
                    } else {
                        cells[2].innerHTML = '이미지 없음';
                    }
                } else {
                    // 파일이 선택되지 않았을 때 처리
                    let existingImg = cells[2].querySelector('img');
                    if (existingImg) {
                        imageUrl = existingImg.src;
                    }
                    cells[2].innerHTML = imageUrl ? `<img src="${imageUrl}" style="width:50px; height:50px;">` : '이미지 없음';
                }

                cells[0].textContent = code;
                cells[1].textContent = name;
                button.src = '/image/edit.png';
                button.classList.remove('editing');
                button.classList.add('editButton'); // 버튼 클래스를 수정
            } else {
                console.error('품목코드 또는 품목명 입력 필드가 없습니다.');
            }
        }
    }

    document.querySelector('.addBtn').addEventListener('click', function () {
        let table = document.querySelector('#table');
        if (!table) {
            console.error('테이블이 존재하지 않습니다.');
            return;
        }

        // 새 행을 테이블에 추가
        let newRow = table.insertRow();

        newRow.insertCell(0).innerHTML = `<input type="text" class="item-code" placeholder="품목코드">`;
        newRow.insertCell(1).innerHTML = `<input type="text" class="item-name" placeholder="품목명">`;
        newRow.insertCell(2).innerHTML = `<input type="file" class="item-image" accept="image/*">
                                           <img style="display:block; max-width:100px; max-height:100px;">`;
        newRow.insertCell(3).innerHTML = `<img class="pen saveButton" src="/image/save.webp" title="저장">`;
        newRow.insertCell(4).innerHTML = `<img class="bin delButton" src="/image/delete.png" title="삭제">`;

        // 이벤트 리스너 설정
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
        newRow.querySelector('.saveButton').addEventListener('click', saveRow);
        newRow.querySelector('.delButton').addEventListener('click', function (event) {
            event.currentTarget.parentNode.parentNode.remove();
        });
    });

    // 초기 이벤트 설정
    setupInitialEvents();
});
