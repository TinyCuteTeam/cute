document.addEventListener('DOMContentLoaded', function () {
    // 모달을 처음에는 보이지 않도록 설정
    const joinModal = document.getElementById('joinModal');
    joinModal.style.display = 'none';

    // 회원가입 버튼 클릭 시 모달 표시
    document.getElementById('showJoin').addEventListener('click', function () {
        joinModal.style.display = 'flex';
    });

    // 모달 닫기 버튼 클릭 시 모달 숨김
    document.querySelector('.modal .close').addEventListener('click', function () {
        joinModal.style.display = 'none';
    });

    // 모달 외부 클릭 시 모달 숨김
    window.onclick = function (event) {
        if (event.target === joinModal) {
            joinModal.style.display = 'none';
        }
    };

    // 회원가입 폼 HTML을 가져와서 모달에 삽입
    fetch('/HTML/회원가입.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('joinFormContainer').innerHTML = data;

            // 동적으로 추가된 스크립트 실행
            let script = document.createElement('script');
            script.textContent = `
                let name = document.querySelector(".name");
                let id = document.querySelector(".id");
                let pwd = document.querySelector(".password");
                let pwdchk = document.querySelector(".password-check");
                let email = document.querySelector(".email");

                let join = document.querySelector(".join");
                let closeModal = document.querySelector(".close");

                join.addEventListener("click", function () {
                    if (name.value === "") {
                        alert("이름을 입력하세요.");
                        name.focus();
                        return;
                    } else if (name.value.length > 5) {
                        alert("이름은 5자리 이하로 입력하세요.");
                        name.focus();
                        return;
                    }

                    if (id.value === "") {
                        alert("사원번호를 입력하세요.");
                        id.focus();
                        return;
                    } else if (!/^\d+$/.test(id.value)) {
                        alert("사원번호는 숫자만 입력 가능합니다.");
                        id.focus();
                        return;
                    }

                    if (pwd.value === "") {
                        alert("비밀번호를 입력하세요.");
                        pwd.focus();
                        return;
                    } else if (!/^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{1,}$/.test(pwd.value)) {
                        alert("비밀번호는 영어와 숫자를 포함해야 합니다.");
                        pwd.focus();
                        return;
                    }

                    if (pwdchk.value === "") {
                        alert("비밀번호 확인을 입력하세요.");
                        pwdchk.focus();
                        return;
                    } else if (pwd.value !== pwdchk.value) {
                        alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
                        pwdchk.focus();
                        return;
                    }

                    if (email.value === "") {
                        alert("이메일을 입력하세요.");
                        email.focus();
                        return;
                    } else if (!/@/.test(email.value)) {
                        alert("유효한 이메일 주소를 입력하세요.");
                        email.focus();
                        return;
                    }

                    alert("회원가입이 완료되었습니다.");
                });

                closeModal.addEventListener("click", function () {
                    document.getElementById('joinModal').style.display = 'none';
                });

                // 로그인 버튼 클릭 시 계정 확인
                let login = document.querySelector(".login");
                login.addEventListener("click", function () {
                    const loginId = document.querySelector(".id").value;
                    const loginPwd = document.querySelector(".password").value;

                    const accounts = [
                        { id: "admin", pwd: "admin", role: "관리자" },
                        { id: "worker", pwd: "worker", role: "작업자" },
                    ];

                    const account = accounts.find(acc => acc.id === loginId && acc.pwd === loginPwd);

                    if (account) {
                        alert(account.role + " 계정으로 로그인 되었습니다");
                        window.location.href = 'index.html';
                    } else {
                        alert("아이디 또는 비밀번호가 잘못되었습니다");
                    }
                });
            `;
            document.body.appendChild(script);
        })
        .catch(error => console.error('회원가입 폼 로드 실패:', error));
});