function start() {

    // Bar Chart
    const ctx = document.getElementById('myBarChart');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['QB Pressure Rate', 'Ball Security', 'INT Opportunities', 'Strip Sack Rate', 'Turnover Margin'],
            datasets: [{
                label: 'Eagles',
                data: [35, 92, 12, 3.2, 65],
                borderWidth: 1,
                backgroundColor: 'rgba(0, 76, 84, 0.6)', // Eagles color
                borderColor: 'rgba(0, 76, 84, 1)'
            },
            {
                label: 'Chiefs',
                data: [26, 85, 8, 2.1, 55],
                borderWidth: 1,
                backgroundColor: 'rgba(202, 36, 48, 0.6)', // Chiefs color
                borderColor: 'rgba(202, 36, 48, 1)'
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Pie Chart
    const pieCtx = document.getElementById('myPieChart');
    new Chart(pieCtx, {
        type: 'pie',
        data: {
            labels: ['Eagles Win','Chiefs Win'],
            datasets: [{
                label: '% of fans',
                data: [57,43],
                borderWidth: 1,
                backgroundColor: ["#004C54","#CA2430"],
            }]
        }
    });

    // Line Chart
    const lineCtx = document.getElementById('lineChart');
    new Chart(lineCtx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Eagles',
                data: [65, 59, 80, 81, 56, 55, 40],
                borderColor: 'rgba(0, 76, 84, 1)',
                backgroundColor: 'rgba(0, 76, 84, 0.2)',
                fill: false
            },
            {
                label: 'Chiefs',
                data: [28, 48, 40, 19, 86, 27, 90],
                borderColor: 'rgba(202, 36, 48, 1)',
                backgroundColor: 'rgba(202, 36, 48, 0.2)',
                fill: false
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

}

$(window).on('load', start);