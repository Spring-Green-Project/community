

    let post = [[${post}]];
    let comment = [[${comment}]];
    let all = [[${all}]];

    var ctx = document.getElementById('myChart');
    var ctx2 = document.getElementById('myCommentChart');
    var ctx3 = document.getElementById('myAllChart');

    var myChart = new Chart(ctx, {
    type: 'line',
    data: {
    labels: ['8주전', '7주전', '6주전', '5주전', '4주전', '3주전', '2주전','1주전','최근'],
    datasets: [{
    label: '최근 게시글 활동 추이',
    data: post,

    backgroundColor:
    'rgba(75, 192, 192, 1)',
    borderWidth: 1
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
    var myCommentChart = new Chart(ctx2, {
    type: 'bar',
    data: {
    labels: ['8주전', '7주전', '6주전', '5주전', '4주전', '3주전', '2주전','1주전','최근'],
    datasets: [{
    label: '최근 댓글 활동 추이',
    data: comment,
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
    var myAllChart = new Chart(ctx3, {
    type: 'doughnut',
    data: {
    labels: ['자유게시물', '자유게시물 댓글', '투표 게시물', '투표 게시물 댓글'],
    datasets: [{
    label: '최근 활동 추이',
    data: all,
    backgroundColor: [
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 1
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
