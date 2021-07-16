
    var ctx = document.getElementById('myChart');
    var ctx2 = document.getElementById('coronaChart');
    let day = [[${day}]];

    let timeArr = [[${timeArr}]];
    let contentArr = [[${contentArr}]];

    let division = [[${division}]];
    division=division.slice(0,division.length-1);
    let cnt = [[${cnt}]].slice(0,[[${cnt}]].length-1);


    var myChart = new Chart(ctx, {
    type: 'line',
    data: {
    labels: timeArr,
    datasets: [{
    label: day + ' 미세먼지',
    data: contentArr,
    backgroundColor:
    'rgba(255, 206, 86, 0.5)'
    ,
    borderColor:
    'rgba(255, 206, 86, 1.5)'
    ,
    borderWidth: 2
    ,
    lineTension : 0.2,  // 0이면 꺾은선 그래프, 숫자가 높을수록 둥글해짐

    fill : false
}]
},
    options: {
    responsive: false,
    scales: {
    yAxes: [{
    ticks: {
    beginAtZero: true
}
}]
},
}
});
    var coronaChart = new Chart(ctx2, {
    type: 'doughnut',
    data: {
    labels: division,
    datasets: [{
    label: '시.도별 코로나 확진자수',
    data: cnt,
    backgroundColor: [
    'rgba(255, 99, 132, 0.5)',
    'rgba(54, 162, 235, 0.5)',
    'rgba(255, 206, 86, 0.5)',
    'rgba(75, 192, 192, 0.5)',
    'rgba(153, 102, 255, 0.5)',
    'rgba(255, 159, 64, 0.5)',
    'rgb(255, 99, 132,1.5)',
    'rgba(54, 162, 235, 1.5)',
    'rgba(255, 206, 86, 1.5)',
    'rgba(75, 192, 192, 1.5)',
    'rgba(153, 102, 255, 1.5)',
    'rgba(255, 159, 64, 1.5)',
    'rgb(204, 79, 105)',
    'rgb(42, 126, 183)',
    'rgb(204, 164, 68)',
    'rgb(55, 141, 141)',
    'rgb(122, 81, 204)',
    'rgb(204, 127, 51)'
    ],

    borderWidth: 1
}]
},
    options: {
    responsive: false,
    scales: {

},
}
});





