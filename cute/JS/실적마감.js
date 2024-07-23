






// 직선차트

new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
        labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
        datasets: [{
            data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
            label: "월요일",
            borderColor: "#3e95cd",
            fill: false
        }, {
            data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
            label: "화요일",
            borderColor: "#8e5ea2",
            fill: false
        }, {
            data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
            label: "수요일",
            borderColor: "#3cba9f",
            fill: false
        }, {
            data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
            label: "목요일",
            borderColor: "#e8c3b9",
            fill: false
        }, {
            data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
            label: "금요일",
            borderColor: "#c45850",
            fill: false
        }
        ]
    },
    options: {
        title: {
            display: true,
            text: '주간 생산량'
        }
    }
});

// 도넛 차트
new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
        labels: ["월요일", "화요일", "수요일", "목요일", "금요일"],
        datasets: [
            {
                label: "Population (millions)",
                backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
                data: [500, 600, 700, 600, 300]
            }
        ]
    },
    options: {
        title: {
            display: true,
            text: '주간 생산량'
        }
    }
});