document.addEventListener("DOMContentLoaded", function () {
  const categoryItems = document.querySelectorAll(".category-item > a"); // 모든 큰 카테고리 항목
  const sidebarTitle = document.querySelector("#sidebar h2"); // 사이드바 제목
  const sidebarList = document.querySelector(".sidebar ul"); // 사이드바의 세부 카테고리 목록

  // 초기 사이드바 세부 카테고리 설정
  sidebarList.innerHTML = ""; // 초기화

  categoryItems.forEach((item) => {
    item.addEventListener("click", function (event) {
      event.preventDefault(); // 기본 링크 동작 방지
      const categoryName = this.getAttribute("data-content");
      updateSidebar(categoryName);
    });
  });

  // 세부 카테고리 항목에 대한 클릭 이벤트 추가
  const subCategoryItems = document.querySelectorAll(
    ".category-item ._category a"
  );
  subCategoryItems.forEach((item) => {
    item.addEventListener("click", function (event) {
      event.preventDefault(); // 기본 링크 동작 방지
      const subCategoryName = this.getAttribute("data-content");
      updateContent(subCategoryName); // 콘텐츠 업데이트
    });
  });

  // 사이드바 업데이트 함수
  function updateSidebar(categoryName) {
    sidebarTitle.textContent = categoryName; // 사이드바 제목 업데이트
    switch (contentId) {
      case "기준관리":
        pageTitle.textContent = "기준관리";
        pageContent.innerHTML = `<div>기준관리</div>`;
        // loadScript("path/to/기준관리.js"); // 기준관리 JS 파일 로드
        break;
      case "품목코드조회":
        pageTitle.textContent = "품목 코드 조회";
        pageContent.innerHTML = `품목 코드 조회`;
        loadScript("path/to/품목코드조회.js"); // 품목코드조회 JS 파일 로드
        break;
      case "BOM":
        pageTitle.textContent = "BOM(레시피관리)";
        pageContent.innerHTML = `BOM(레시피관리)`;
        loadScript("path/to/BOM.js"); // BOM JS 파일 로드
        break;
      case "거래처관리":
        pageTitle.textContent = "거래처 관리";
        pageContent.innerHTML = `거래처 관리`;
        loadScript("path/to/거래처관리.js"); // 거래처관리 JS 파일 로드
        break;
      case "생산계획":
        pageTitle.textContent = "생산계획";
        pageContent.innerHTML = `생산계획`;
        loadScript("path/to/생산계획.js"); // 생산계획 JS 파일 로드
        break;
      case "실적마감":
        pageTitle.textContent = "실적마감";

        // HTML 구조를 먼저 설정
        pageContent.innerHTML = `
              <div class="select">
                  <select class="_select">
                      <option>주간</option>
                      <option>월간</option>
                      <option>분기별</option>
                  </select>
              </div>
              <div class="linec">
                  <canvas id="line-chart" width="500" height="400"></canvas>
              </div>
              <div class="doughnut">
                  <canvas id="doughnut-chart" width="500" height="400"></canvas>
              </div>
          `;

        // Chart.js를 로드하고, 이후 실적마감.js를 로드
        loadScript(
          "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js",
          () => {
            loadScript("/JS/실적마감.js"); // 실적마감 JS 파일 로드
          }
        );
        break;

      default:
        pageTitle.textContent = "환영합니다!";
        pageContent.innerHTML = `<p>여기에 기본 콘텐츠가 표시됩니다.</p>`;
        break;
    }
  }

  // 외부 JavaScript 파일을 동적으로 로드하는 함수
  function loadScript(url) {
    const script = document.createElement("script");
    script.src = url;
    script.onload = () => {
      console.log(`${url}가 성공적으로 로드되었습니다.`);
    };
    script.onerror = () => {
      console.error(`${url}를 로드하는 데 실패했습니다.`);
    };
    document.head.appendChild(script);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const categoryItems = document.querySelectorAll(".category-item"); // 모든 카테고리 항목
  const sidebar = document.getElementById("sidebar");

  // 사이드바 항상 보이도록 설정
  sidebar.style.display = "block";

  categoryItems.forEach((item) => {
    item.addEventListener("click", function () {
      // 모든 카테고리 항목의 색상 초기화
      categoryItems.forEach((i) => i.classList.remove("active"));
      // 클릭한 카테고리만 색상 변경
      item.classList.add("active");
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const categoryItems = document.querySelectorAll(".category-item"); // 모든 카테고리 항목
  const sidebar = document.getElementById("sidebar");
  const sidebarTitle = document.querySelector("#sidebar h2"); // 사이드바 제목
  const sidebarList = document.querySelector(".sidebar ul"); // 사이드바의 세부 카테고리 목록

  // 사이드바 항상 보이도록 설정
  sidebar.style.display = "block";

  // 초기 사이드바 세부 카테고리 설정
  sidebarList.innerHTML = ""; // 초기화

  categoryItems.forEach((item) => {
    item.addEventListener("click", function () {
      // 모든 카테고리 항목의 색상 초기화
      categoryItems.forEach((i) => i.classList.remove("active"));
      // 클릭한 카테고리만 색상 변경
      item.classList.add("active");

      const categoryName = this.querySelector("a").getAttribute("data-content");
      updateSidebar(categoryName);
    });
  });

  function updateSidebar(categoryName) {
    // 기존 세부 카테고리 초기화
    sidebarList.innerHTML = ""; // 기존 항목 삭제

    // 새로운 세부 카테고리 추가
    let items = [];
    if (["기준관리", "품목코드조회", "거래처관리", "BOM"].includes(categoryName)) {
      items = ["품목 코드 조회", "BOM(레시피관리)", "거래처 관리"];
    } else if (["생산계획", "발주확인", "작업지시서(관리자용)", "작업지시서(작업자용)", "작업지시서조회"].includes(categoryName)) {
      items = ["발주확인", "작업지시서(관리자용)", "작업지시서(작업자용)", "작업 지시서 조회"];
    } else if (["재고관리", "재고현황"].includes(categoryName)) {
      items = ["재고현황"];
    } else if (["공정관리", "생산현황"].includes(categoryName)) {
      items = ["생산현황"];
    } else if (["품질관리", "에러코드"].includes(categoryName)) {
      items = ["품질관리", "에러코드"];
    } else if (["실적및출하", "실적마감", "출하확인"].includes(categoryName)) {
      items = ["실적마감", "출하확인"];
    } else if (categoryName === "마이페이지") {
      items = ["마이페이지", "계정관리"];
    }

    addSidebarItems(items);
    
    // 첫 번째 항목 자동 클릭
    if (items.length > 0) {
      const firstItem = sidebarList.querySelector("li a");
      firstItem.click(); // 첫 번째 항목 클릭
    }
  }

  function addSidebarItems(items) {
    items.forEach((item) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = "#"; // 링크 주소 설정
      a.textContent = item; // 항목 텍스트 설정
      a.setAttribute("data-content", item); // data-content 속성 설정
      a.addEventListener("click", function (event) {
        event.preventDefault(); // 기본 링크 동작 방지
        highlightActiveItem(a); // 선택된 항목 강조
        sidebarTitle.textContent = item; // 사이드바 제목 변경

        // 왼쪽 사이드바 항목도 활성화
        activateSidebarItem(item);
      });
      li.appendChild(a);
      sidebarList.appendChild(li);
    });
  }

  function highlightActiveItem(selectedItem) {
    // 모든 항목에서 active 클래스 제거
    const allSubCategoryItems = document.querySelectorAll(".sidebar ul li a");
    allSubCategoryItems.forEach((item) => {
      item.style.color = ""; // 기본 색상으로 되돌리기
    });

    // 선택된 항목에 파란색으로 변경
    selectedItem.style.color = "#0085FF";
  }

  function activateSidebarItem(itemName) {
    // 모든 카테고리 항목의 색상 초기화
    const allCategoryItems = document.querySelectorAll(".category-item a");
    allCategoryItems.forEach((i) => i.parentElement.classList.remove("active"));

    // 클릭된 항목에 active 클래스 추가
    const activeItem = Array.from(allCategoryItems).find(i => i.textContent === itemName);
    if (activeItem) {
      activeItem.parentElement.classList.add("active");
    }
  }
});
