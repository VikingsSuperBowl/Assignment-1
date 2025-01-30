function start() {

    // Bar Chart

    const ctx = document.getElementById('myBarChart');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Revenues', 'Expenses'],
            datasets: [{
                label: 'In millions',
                data: [444, 421],
                borderWidth: 1
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
                label: '# of responses',
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
            labels: ['2008', '2009', '2010', '2011'],
            datasets: [{
                label: 'George Brown College',
                data: [12748, 13866, 13914, 14068],
                borderWidth: 1
            }]
        }
    });

}

$(window).on('load', start);