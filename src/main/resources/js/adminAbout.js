
    let adminAll = [[${adminAll}]];
    let registerAll = [[${registerAll}]];
    let file = [[${file}]];

    var ctx4 = document.getElementById('adminAllChart');
    var ctx5 = document.getElementById('adminRegisterChart');
    var ctx6 = document.getElementById('adminFileChart');


    var adminAllChart = new Chart(ctx4, {
    type: 'polarArea',
    data: {
    labels: ['공지사항','고객센터','자유게시판','투표 게시판','댓글'],
    datasets: [{
    label: '관리자용 서비스 현황',
    data: adminAll,
    backgroundColor: [
    'rgba(255, 99, 132, 0.5)',
    'rgba(54, 162, 235, 0.5)',
    'rgba(255, 206, 86, 0.5)',
    'rgba(75, 192, 192, 0.5)',
    'rgba(153, 102, 255, 0.5)',
    'rgba(255, 159, 64, 0.5)'
    ],
    borderColor: [
    'rgb(255, 99, 132,1.5)',
    'rgba(54, 162, 235, 1.5)',
    'rgba(255, 206, 86, 1.5)',
    'rgba(75, 192, 192, 1.5)',
    'rgba(153, 102, 255, 1.5)',
    'rgba(255, 159, 64, 1.5)'
    ]


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
    var adminRegisterChart = new Chart(ctx5, {
    type: 'line',
    data: {
    labels: ['8주전', '7주전', '6주전', '5주전', '4주전', '3주전', '2주전','1주전','최근'],
    datasets: [{
    label: '회원가입 현황',
    data: registerAll,
    backgroundColor: [
    'rgba(255, 99, 132, 0.5)',
    'rgba(54, 162, 235, 0.5)',
    'rgba(255, 206, 86, 0.5)',
    'rgba(75, 192, 192, 0.5)',
    'rgba(153, 102, 255, 0.5)',
    'rgba(255, 159, 64, 0.5)'
    ],
    borderColor: [
    'rgb(255, 99, 132,1.5)',
    'rgba(54, 162, 235, 1.5)',
    'rgba(255, 206, 86, 1.5)',
    'rgba(75, 192, 192, 1.5)',
    'rgba(153, 102, 255, 1.5)',
    'rgba(255, 159, 64, 1.5)'
    ]


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
    var adminRegisterChart = new Chart(ctx6, {
    type: 'pie',
    data: {
    labels: ['파일이 없는 게시글','파일이 있는 게시글'],
    datasets: [{
    label: '게시물 파일 여부',
    data: file,
    backgroundColor: [
    'rgba(255, 99, 132, 0.5)',
    'rgba(54, 162, 235, 0.5)',
    'rgba(255, 206, 86, 0.5)',
    'rgba(75, 192, 192, 0.5)',
    'rgba(153, 102, 255, 0.5)',
    'rgba(255, 159, 64, 0.5)'
    ],
    borderColor: [
    'rgb(255, 99, 132,1.5)',
    'rgba(54, 162, 235, 1.5)',
    'rgba(255, 206, 86, 1.5)',
    'rgba(75, 192, 192, 1.5)',
    'rgba(153, 102, 255, 1.5)',
    'rgba(255, 159, 64, 1.5)'
    ]


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
