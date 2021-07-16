
    document.querySelector('#deleteButton').addEventListener('click', deleteSurvey);
    function deleteSurvey() {
    let deleteForm = document.querySelector('#deleteButton');
    let deleteConfirm = confirm("게시글을 삭제하시겠습니까?");
    if (deleteConfirm) {
    console.log("Hello")
    $("#deleteForm").submit();
}
}
    $(document).ready(function () {
    let list = [[${comment}]];


    let session = [[${session}]];
    if (session.userId === 2) {
    alert("비회원입니다");
    location.href = "/surveyBoard";
}
    let img = [[${img}]];
    let option1 = img.option1;
    $(".opnion1").append(option1);

    let option2 = img.option2;
    $(".opnion2").append(option2);
    let file1 = "./survey/" + img.fileName1;
    let file2 = "./survey/" + img.fileName2;
    $("#img1").attr("src", file1);
    $("#img2").attr("src", file2);

    if (img.fileName1 === "" || img.fileName2 === "") { // img 경로가 없을 경우 숨기기
    $("#img1").hide();
    $("#img2").hide();
}

    if (list.length <= 15) {
    $('#icon').contents().unwrap().text('');
    $('#listadd').unwrap().text('');
}
    let flag = false;
    $(window).scroll(function () {   //스크롤이 최하단 으로 내려가면 리스트를 조회하고 page를 증가시킨다.
    if ($(window).scrollTop() >= $(document).height() - $(window).height() - 1 && !flag) {
    list = list.slice(0, 15);
    list.forEach(i => {
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
})
    $('#listadd').click(function () {
    list = [[${comment}]]
    flag = false;
    list = list.slice(15, undefined);
    if (flag == false) {
    list.forEach(i => {
    $("#replyList").append("<table style='margin-top: 5px;'> " +
    "<tr style='border-bottom: #B7B7B7 1px double ;'> " +
    "<td style='width: 900px;height: 50px;margin-right: 2px'>" + i.content +
    "</td><td style='width: 200px;border-bottom: #B7B7B7 1px double; width: 50px'>" + i.regDate + "</td>" +
    "<td style='width: 100px'>" + i.name + "</td>" +
    "</tr> " +
    "</table>");
});
    flag = true;
}
    $('#icon').contents().unwrap().text(''); //속성제거 + text변경
    $('#listadd').unwrap().text(''); //속성 제거
})
})

    $('#hit').click(function () {
    let surveyNo = [[${img.surveyNo}]]
    console.log(surveyNo);
    let obj = {
    "surveyNo": surveyNo
}
    $.ajax({
    type: "POST",
    url: "/hitSend",
    data: obj,
    async: false,
    success: function (data) {
    console.log(data);
    $('#hitText').text(data);
    $('#hitIcon').css('color', "red");
    $('#hitIcon').css('left', "50%");
    $('#hitIcon').css('position', "absolute");
    $('#hit').contents().unwrap();
},
    error: () => {
}
});
})

    $("#btnReplySave").click(function (event) {
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
    dataType: "text",
    success: function (data) {
    console.log(data)
    if (data == 'true')
    location.reload();
},
    error: function (request, status, error) {
    alert(request + "|" + status + "|" + error);
}

});
})





