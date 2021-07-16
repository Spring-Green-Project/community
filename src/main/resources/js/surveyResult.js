
    let result1 = [[${result1}]];
    let result2 = [[${result2}]];
    let img1 = [[${img1}]];
    let img2 = [[${img2}]];
    let opnion1 = [[${opnion1}]];
    let opnion2 = [[${opnion2}]];
    let file1 = "./survey/"+img1;
    let file2 = "./survey/"+img2;

    if(result1>result2){
    $("#change").append("<br><h3>"+opnion1+" 우세</h3>");
    if(img1===""){
    $("#img").hide();
}
    $("#img").attr("src",file1);
}else if(result1<result2){
    $("#change").append("<br><h3>"+opnion2+" 우세</h3>");
    if(img1===""){
    $("#img").hide();
}
    $("#img").attr("src",file2);
}else{
    $("#change").append("<br><h3>동등</h3>");
    $("#img").remove();
}


    let color= {
    color1 : [
    'rgb(66, 133, 244)',
    'rgb(234, 67, 53)'
    ],

    color2 : [
    'rgb(234, 67, 53)',
    'rgb(251, 188, 5)'
    ],
    color3 : [
    'rgb(251, 188, 5)',
    'rgb(52, 168, 83)'
    ],
    color4 : [
    'rgb(251, 188, 5)',
    'rgb(66, 133, 244)'
    ],
    color5 : [
    'rgb(234, 67, 53)',
    'rgb(52, 168, 83)'
    ],
    color6 : [
    'rgb(108, 139, 79)',
    'rgb(56, 140, 225)'
    ],
    color7 : [
    'rgb(232, 128, 170)',
    '#241B52'
    ],
    color8 : [
    'rgb(167, 197, 75)',
    '#8D4C31'
    ],
    color9 : [
    'rgb(156, 98, 18)',
    '#01407E'
    ],
    color10 : [
    'rgb(96, 0, 100)',
    'rgb(182, 166, 1)'
    ]
}
    let borderColor= {
    color1 : [
    'rgb(45, 91, 167)',
    'rgb(157, 45, 35)'
    ],

    color2 : [
    'rgb(157, 45, 35)',
    'rgb(174, 130, 3)'
    ],
    color3 : [
    'rgb(174, 130, 3)',
    'rgb(28, 91, 45)'
    ],
    color4 : [
    'rgb(174, 130, 3)',
    'rgb(45, 91, 167)'
    ],
    color5 : [
    'rgb(157, 45, 35)',
    'rgb(28, 91, 45)'
    ]
}
    let type = {
    type1 : "doughnut",
    type2 : "pie",

}
    let rand = Math.floor(Math.random() *11);
    let typeRand = Math.floor(Math.random()*3);

    function selectType(typeRand){
    if(typeRand===1){
    return type.type1;
}else{
    return type.type2;
}
}
    function selectColor(rand){
    if(rand===1){
    return color.color1;
}else if(rand===2){
    return color.color2;
}else if(rand===3){
    return color.color3;
}else if(rand===4){
    return color.color4;
}else if(rand===5){
    return color.color5;
}else if(rand===6){
    return color.color6;
}else if(rand===7){
    return color.color7;
}else if(rand===8){
    return color.color8;
}else if(rand===9){
    return color.color9;
}else{
    return color.color10;
}
}
    function selectBorderColor(rand){
    if(rand===1){
    return borderColor.color1;
}else if(rand===2){
    return borderColor.color2;
}else if(rand===3){
    return borderColor.color3;
}else if(rand===4){
    return borderColor.color4;
}else{
    return borderColor.color5;
}
}

    $(document).ready(function (){

    $("#myChart").click(function (){
        $(".modal").fadeIn();
    })
    $(".modal").click(function (){
    $(".modal").fadeOut();
})
    let list = [[${comment}]];

    if(list.length <= 15){
    $('#icon').contents().unwrap().text('');
    $('#listadd').unwrap().text('');
}
    let flag = false;
    $(window).scroll(function () {   //스크롤이 최하단 으로 내려가면 리스트를 조회하고 page를 증가시킨다.
    if($(window).scrollTop() >= $(document).height() - $(window).height()-1 && !flag ) {
    list = list.slice(0,15);
    list.forEach(i => {
    $("#replyList").append("<table style='margin-top: 5px;'> " +
    "<tr style='border-bottom: #B7B7B7 1px double ;'> " +
    "<td style='width: 900px;height: 50px;margin-right: 2px'>" + i.content +
    "</td><td style='width: 200px;border-bottom: #B7B7B7 1px double; width: 50px'>" + i.regDate + "</td>" +
    "<td style='width: 100px'>" + i.name + "</td>" +
    "</tr> " +
    "</table>");
})
    flag=true;
}
})
    $('#listadd').click(function (){
    list = [[${comment}]]
    flag = false;
    list = list.slice(15,undefined);
    if(flag==false){
    list.forEach(i=>{
    $("#replyList").append("<table style='margin-top: 5px;'> " +
    "<tr style='border-bottom: #B7B7B7 1px double ;'> " +
    "<td style='width: 900px;height: 50px;margin-right: 2px'>" + i.content +
    "</td><td style='width: 200px;border-bottom: #B7B7B7 1px double; width: 50px'>" + i.regDate + "</td>" +
    "<td style='width: 100px'>" + i.name + "</td>" +
    "</tr> " +
    "</table>");
})
    flag = true;
}
    $('#icon').contents().unwrap().text(''); //속성제거 + text변경
    $('#listadd').unwrap().text(''); //속성 제거
})

})

    $("#btnReplySave").click(function(event) {
    let content = $('#content').val();
    let user = $('#reg_id').val();
    let regDate = new Date();
    let today = regDate.toLocaleDateString();
    let cnt = 1;

    let testString = window.location.href;
    let regex = /[^0-9]/g;// 숫자가 아닌 문자열을 선택하는 정규식
    let testm = testString.replace(regex, "");   // 원래 문자열에서 숫자가 아닌 모든 문자열을 빈 문자로 변경
    let result = testm.slice(4, testm.length);
    if (cnt % 2 === 0) {
    alert("댓글은 1분당 한개만 작성할 수 있습니다.");
    setTimeout(function () {
    cnt++;
}, 3000);
}
    let obj = {
    "surveyNo": result,
    "name": user,
    "content": content,
    "regDate": today
}
    $.ajax({ // 댓글 Server 저장
    url: "/commentChoice",
    type: "POST",
    data: obj,
    dataType:"text",
    success: function (data) {
    console.log(data)
    if(data == 'true')
    location.reload();
},
    error: function (request, status, error) {
    alert(request + "|" + status + "|" + error);
}

});
})

    $('#hit').click(function (){
    let surveyNo = [[${img.surveyNo}]]
    console.log(surveyNo);
    let obj = {
    "surveyNo": surveyNo
}
    $.ajax({
    type:"POST",
    url:"/resultHitrSend",
    data:obj,

    success : function (data){
    console.log(data);
    $('#hitText').text(data);
    $('#hitIcon').css('color',"red");
    $('#hitIcon').css('left',"50%");
    $('#hitIcon').css('position',"absolute");
    $('#hit').contents().unwrap();
},
    error : ()=>{ }
});
})






    let ctx = document.getElementById('myChart');
    let myChart = new Chart(ctx, {
    type: selectType(typeRand),
    data: {
    labels: [opnion1, opnion2],
    datasets: [{

    data: [result1, result2],
    backgroundColor:
    selectColor(rand)
    ,
    borderColor:
    selectBorderColor(rand)
    ,
    borderWidth: 2
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


