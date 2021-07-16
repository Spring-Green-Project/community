
    let post = [[${post}]];
    let session = [[${session}]];

    $(document).on('click', '#btnList', function(e){
    if(post.category==="service"){
    location.href="/service";
}else if(post.category ==="on"){
    location.href="/notice";
}else{
    location.href="/board";
}

});

    $(document).ready(function (){
    if(session.userId==1){
    $("#name").prop("readonly",true);
}else if(session.userId>2){
    $("#name").prop("readonly",true);
}else{
    $("#name").prop("readonly","false");
}

    $("#title").val(post.title);
    $("#name").val(post.name);
    $("#content").val(post.content);

    $('#btnSave').click(() => {
    if ($("#title").val().length < 2) {
    alert("제목은 2글자 이상 입력해주세요.");
    $('#form').preventDefault();
} else if ($("#name").val().length < 2) {
    alert("이름은 2글자 이상 입력해주세요.");
    $('#form').preventDefault();
} else if ($("#content").val().length < 3) {
    alert("본문은 3글자 이상 입력해주세요.");
    $('#form').preventDefault();
} else {
    $('#form').submit();
}
})

})


