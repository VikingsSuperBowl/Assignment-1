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
                backgroundColor: '#004C54', // Eagles color
                borderColor: '#004C54'
            },
            {
                label: 'Chiefs',
                data: [26, 85, 8, 2.1, 55],
                borderWidth: 1,
                backgroundColor: '#E31837', // Chiefs color
                borderColor: '#E31837'
            }]
        },
        options: {
            scales: {
                x: {
                    grid: {
                        color: '#223637' // grid line color
                    },
                    ticks: {
                        color: '#ffffff' // tick color
                    }
                },
                y: {
                    beginAtZero: true,
                    grid: {
                        color: '#223637' // grid line color
                    },
                    ticks: {
                        color: '#ffffff' // label color
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#e2e5e2' // legend label color
                    }
                }
            }
        }
    });

    // Pie Chart
    const pieCtx = document.getElementById('myPieChart');
    new Chart(pieCtx, {
        type: 'pie',
        data: {
            labels: ['Eagles Win', 'Chiefs Win'],
            datasets: [{
                label: '% of fans',
                data: [57, 43],
                borderWidth: 1,
                borderColor: '#223637',
                backgroundColor: ["#004C54", "#CA2430"],
            }]
        },
        options: {
            plugins: {
                legend: {
                    labels: {
                        color: '#e2e5e2' // legend label color
                    }
                }
            }
        }
    });

    // Line Chart
    const lineCtx = document.getElementById('lineChart');
    new Chart(lineCtx, {
        type: 'line',
        data: {
            labels: ['Wild Card', 'Divisional', 'AFC Champ', 'Last SB', 'Playoff Avg', 'SB Proj'],
            datasets: [{
                label: 'Receiving Yards',
                data: [71, 75, 116, 133, 98, 110],
                borderColor: '#E31837',
                backgroundColor: 'rgba(227, 24, 55, 0.2)',
                fill: false
            },
            {
                label: 'Win Impact Probability',
                data: [15, 22, 35, 40, 28, 40],
                borderColor: '#FFB81C',
                backgroundColor: 'rgba(255, 184, 28, 0.2)',
                fill: false
            },
            {
                label: 'Receptions',
                data: [7, 5, 11, 10, 8, 9],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: false
            }]
        },
        options: {
            scales: {
                x: {
                    grid: {
                        color: '#223637' // grid line color
                    },
                    ticks: {
                        color: '#ffffff' // tick color
                    }
                },
                y: {
                    beginAtZero: true,
                    grid: {
                        color: '#223637' // grid line color
                    },
                    ticks: {
                        color: '#ffffff' // label color
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#e2e5e2' // legend label color
                    }
                }
            }
        }
    });
}

// Ensure the start function is called when the window loads
window.onload = start;