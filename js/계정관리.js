let approval = document.querySelector(".btn");
let refuse = document.querySelector(".btn1");

approval.addEventListener('click', function() {
    let checkboxes = document.querySelectorAll('.chk:checked');
    checkboxes.forEach(function(checkbox) {
        let parentDiv = checkbox.closest('.round');
        alert("승인되었습니다")
        if (parentDiv) {
            parentDiv.remove();
        }
    });
});

refuse.addEventListener('click', function() {
    let checkboxes = document.querySelectorAll('.chk:checked');
    checkboxes.forEach(function(checkbox) {
        let parentDiv = checkbox.closest('.round');
        alert("거절되었습니다")
        if (parentDiv) {
            parentDiv.remove();
        }
    });
});
