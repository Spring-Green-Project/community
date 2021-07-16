
    $(document).ready(function() {
    let comment = [[${commentlist}]];
    let post = [[${postlist}]];
    let svcomment = [[${svcommentlist}]];
    let flag = false;

    $('#sel').change(function(){
    let state = $('#sel option:selected').val();
    if(state =='option1') {
    flag = false;
    $("#containsectrion").empty();
    $("#containsectrion").append("<table style='margin-right: 0%; margin-top: 5px;'> " +
    "<tr style='border-bottom: #B7B7B7 1px double ;'> " +
    "<td style='width: 330px;height: 50px;margin-right: 2px;text-align: center;'>" + 'No' +
    "</td><td style='width: 330px;border-bottom: #B7B7B7 1px double;text-align: center;'>" + '제목' + "</td>" +
    "<td style='width: 330px;text-align: center;'>" + '조회수' + "</td>" +
    "</tr> " +
    "</table>");
    if (flag == false) {
    post.forEach(i => {
    $("#containsectrion").append("<table style='margin-right: 0%; margin-top: 5px;'> " +
    "<tr style='border-bottom: #B7B7B7 1px double ;'> " +
    "<td style='width: 330px;height: 50px;margin-right: 2px;text-align: center;'>" + i.postNo +
    "</td><td style='width: 330px;border-bottom: #B7B7B7 1px double;text-align: center;'>" + i.title + "</td>" +
    "<td style='width: 330px;text-align: center;'>" + i.views + "</td>" +
    "</tr> " +
    "</table>")
})
}
    flag = true;
}
    if(state =='option2') {
    let survey = [[${surveylist}]];
    flag = false;
    $("#containsectrion").empty();
    $("#containsectrion").append("<table style='margin-right: 0%; margin-top: 5px;'> " +
    "<tr style='border-bottom: #B7B7B7 1px double ;'> " +
    "<td style='width: 330px;height: 50px;margin-right: 2px;text-align: center;'>" + 'No' +
    "</td><td style='width: 330px;border-bottom: #B7B7B7 1px double;text-align: center;'>" +'제목'+ "</td>" +
    "<td style='width: 330px;text-align: center;'>" + '조회수' + "</td>" +
    "</tr> " +
    "</table>" );
    if(flag == false){
    survey.forEach(i=>{
    $("#containsectrion").append("<table style='margin-right: 0%; margin-top: 5px;'> " +
    "<tr style='border-bottom: #B7B7B7 1px double ;'> " +
    "<td style='width: 330px;height: 50px;margin-right: 2px;text-align: center;'>" + i.surveyNo +
    "</td><td style='width: 330px;border-bottom: #B7B7B7 1px double;text-align: center;'>" + i.title + "</td>" +
    "<td style='width: 330px;text-align: center;'>" + i.views + "</td>" +
    "</tr> " +
    "</table>")
})
}
}
    if(state =='option3') {
    flag = false;
    $("#containsectrion").empty();
    $("#containsectrion").append("<table style='margin-right: 0%; margin-top: 5px;'> " +
    "<tr style='border-bottom: #B7B7B7 1px double ;'> " +
    "<td style='width: 330px;height: 50px;margin-right: 2px;text-align: center;'>" + 'No' +
    "</td><td style='width: 330px;border-bottom: #B7B7B7 1px double;text-align: center;'>" +'내용'+ "</td>" +
    "<td style='width: 330px;text-align: center;'>" + '적성일' + "</td>" +
    "</tr> " +
    "</table>" );
    if(flag == false){
    comment.forEach(i=>{
    $("#containsectrion").append("<table style='margin-right: 0%; margin-top: 5px;'> " +
    "<tr style='border-bottom: #B7B7B7 1px double ;'> " +
    "<td style='width: 330px;height: 50px;margin-right: 2px;text-align: center;'>" + i.commentNo +
    "</td><td style='width: 330px;border-bottom: #B7B7B7 1px double;text-align: center;'>" + i.content + "</td>" +
    "<td style='width: 330px;text-align: center;'>" + i.regDate + "</td>" +
    "</tr> " +
    "</table>")
})
}
    flag = true;
}
    if(state =='option4') {
    flag = false;
    $("#containsectrion").empty();
    $("#containsectrion").append("<table style='margin-right: 0%; margin-top: 5px;'> " +
    "<tr style='border-bottom: #B7B7B7 1px double ;'> " +
    "<td style='width: 330px;height: 50px;margin-right: 2px;text-align: center;'>" + 'No' +
    "</td><td style='width: 330px;border-bottom: #B7B7B7 1px double;text-align: center;'>" + '내용' + "</td>" +
    "<td style='width: 330px;text-align: center;'>" + '적성일' + "</td>" +
    "</tr> " +
    "</table>");
    if (flag == false) {
    svcomment.forEach(i => {
    $("#containsectrion").append("<table style='margin-right: 0%; margin-top: 5px;'> " +
    "<tr style='border-bottom: #B7B7B7 1px double ;'> " +
    "<td style='width: 330px;height: 50px;margin-right: 2px;text-align: center;'>" + i.id +
    "</td><td style='width: 330px;border-bottom: #B7B7B7 1px double;text-align: center;'>" + i.content + "</td>" +
    "<td style='width: 330px;text-align: center;'>" + i.regDate + "</td>" +
    "</tr> " +
    "</table>")
})
}
    flag = true;
}

})


})
