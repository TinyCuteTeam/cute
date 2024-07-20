document.addEventListener('DOMContentLoaded', function () {
    const categoryLinks = document.querySelectorAll('.category-item a');

    categoryLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // 기본 링크 동작 방지

            const contentId = this.getAttribute('data-content');
            updateContent(contentId);
        });
    });

    function updateContent(contentId) {
        const pageTitle = document.getElementById('page-title');
        const pageContent = document.getElementById('page-content');

        switch (contentId) {
            case '기준관리':
                pageTitle.textContent = '기준관리';
                pageContent.innerHTML = `
                    <h2>기준 관리 내용</h2>
                    <p>여기에서는 기준 관리에 대한 설명과 관련된 기능을 제공합니다.</p>
                    <h3>기능 목록</h3>
                    <ul>
                        <li>기준 추가</li>
                        <li>기준 수정</li>
                        <li>기준 삭제</li>
                        <li>기준 조회</li>
                    </ul>
                `;
                break;
            case '품목코드조회':
                pageTitle.textContent = '품목 코드 조회';
                pageContent.innerHTML = `<p>품목 코드 조회에 대한 내용입니다.</p>`;
                break;
            case 'BOM':
                pageTitle.textContent = 'BOM(레시피관리)';
                pageContent.innerHTML = `<p>BOM(레시피관리)에 대한 내용입니다.</p>`;
                break;
            case '거래처관리':
                pageTitle.textContent = '거래처 관리';
                pageContent.innerHTML = `<p>거래처 관리에 대한 내용입니다.</p>`;
                break;
            case '생산계획':
                pageTitle.textContent = '생산계획';
                pageContent.innerHTML = `<p>생산계획에 대한 내용입니다.</p>`;
                break;
            // 추가적인 케이스를 필요에 따라 작성
            default:
                pageTitle.textContent = '환영합니다!';
                pageContent.innerHTML = `<p>여기에 기본 콘텐츠가 표시됩니다.</p>`;
                break;
        }
    }
});
