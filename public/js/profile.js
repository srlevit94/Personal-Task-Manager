


window.onload = function () {
    var canvas = document.getElementById('chart');
    var chart = new Chart(canvas, {
        type: 'bar', data: {
            labels: ['Project 1', 'Project 2',
                'Project 3', 'Project 4', 'Project 5'], datasets: [{
                    label: 'Time Spent',
                    yAxisID: 'A', data: [32, 22, 18, 28, 12], backgroundColor: 'rgba(113, 70, 242,0.9)',
                },
                {
                    label: 'Wages Earned', yAxisID: 'B', data: [1280, 880, 720, 1120, 480], backgroundColor: 'rgba(31, 255, 90, 0.8)', hoverBackgroundColor:
                        'rgba(26, 199, 72, 0.8)'
                }]
        }, options: {
            title: {
                display: false, text:
                    'Project Summary', fontSize: 24,
            }, scales: {
                yAxes: [{
                    id: 'A', type:
                        'linear', position: 'left', gridLines: { display: false, }, ticks: { min: 0 },
                    scaleLabel: { display: true, labelString: 'Hours Spent on Project (Hours)', },
                }, {
                    id: 'B', type: 'linear', position: 'right', gridLines: {
                        display:
                            false,
                    }, scaleLabel: {
                        display: true, labelString: 'Wages Earned from Project($)',
                    }, ticks: {
                        min: 0, callback: function (value, index, ticks) {
                            return '$'
                                + value;
                        }
                    }
                }]
            }
        }
    });
}
Chart.Legend.prototype.afterFit = function () {
    this.height = this.height + 50;
};