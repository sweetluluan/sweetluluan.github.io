var ctx1 = document.getElementById('myChart1').getContext('2d');
ctx1.canvas.height = 225;
var chart1 = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
        datasets: [{
            label: '平均指数',
            data: [
                126.1,
                116.4,
                122.9,
                108.0,
                113.5,
                110.9,
                105.6,
                101.6,
                98.6
            ],
            backgroundColor: 'white',
            borderColor: '#EDAE2A',
            fill: false
        }]
    },
    options: {
        legend: {
            position: 'left',
            labels: {
                boxWidth: 0, //关闭图例的方块
            }
        },
        title: {
            display: true,
            position: 'bottom',
            fontSize: 12,
            fontColor: 'rgb(0,0,0)',
            text: '图7  2019年香港食肆收益价值总数',
        },
        scales: {
            xAxes: [{
                gridLines: {
                    drawBorder: true,
                    display: false
                },
                ticks: {
                    display: true, // hide main x-axis line
                    beginAtZero: true
                },
                barPercentage: 1.8,
                categoryPercentage: 0.2
            }],
            yAxes: [{
                gridLines: {
                    drawBorder: false,
                    display: false
                },
                ticks: {
                    display: false,
                    beginAtZero: false,
                },
                barPercentage: 1.8,
                categoryPercentage: 0.2
            }]
        },
        tooltips: {
            mode: 'point',
            intersect: false,
            titleFontSize: 0,
            bodyFontColor: "#EDAE2A",
            bodyFontSize: 12,
            backgroundColor: "rgba(255,255,255,0.9)",
            displayColors: false,
            borderColor: "rgba(220, 220, 220, 0.9)",
            borderWidth: 2,
        }
    }
});
var ctx2 = document.getElementById('myChart2').getContext('2d');
ctx2.canvas.height = 200;
var month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var chart2 = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: month,
        datasets: [{
            label: '2018',
            backgroundColor: 'white',
            borderColor: '#0C6AB0',
            pointRadius: 3,
            borderSize: 3,
            data: [
                4113241,
                4399696,
                3668375,
                4056097,
                3817370,
                4000994,
                4402955,
                4825547,
                3713464,
                4654391,
            ],
            fill: false
        }, {
            label: '2019',
            backgroundColor: 'white',
            borderColor: '#EDAE2A',
            borderSize: 3,
            pointRadius: 3,
            data: [
                5542896,
                4560963,
                4478389,
                4272755,
                4717520,
                3634089,
                4160688,
                2782897,
                2412459,
                2519243
            ],
            fill: false
        }]
    },
    options: {
        legend: {
            position: 'right',
            labels: {
                boxWidth: 13,
            }
        },
        title: {
            display: true,
            position: 'bottom',
            fontSize: 12,
            fontColor: 'rgb(0,0,0)',
            text: '图3  2018、2019年1-10月内地访港人数同比与动态变化'
        },
        elements: {
            line: {
                tension: 0
            }
        },
        scales: {
            xAxes: [{
                gridLines: {
                    drawBorder: true,
                    display: false
                },
                ticks: {
                    display: true, // hide main x-axis line
                    beginAtZero: true
                },
                scaleLabel: {
                    display: true,
                    labelString: "月"
                },
                barPercentage: 1.8,
                categoryPercentage: 0.2
            }],
            yAxes: [{
                gridLines: {
                    drawBorder: false,
                    display: false
                },
                ticks: {
                    display: false,
                    beginAtZero: false,
                },
                scaleLabel: {
                    display: true,
                    labelString: "人数/百万"
                },
                barPercentage: 1.8,
                categoryPercentage: 0.2
            }]
        },
        tooltips: {
            mode: 'point',
            intersect: false,
            titleFontSize: 0,
            bodyFontColor: "#EDAE2A",
            bodyFontSize: 12,
            backgroundColor: "rgba(255,255,255,0.9)",
            displayColors: false,
            borderColor: "rgba(220, 220, 220, 0.9)",
            borderWidth: 2,
        }
    }
});