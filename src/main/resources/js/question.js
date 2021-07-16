
    let session = [[${session}]];
    let user = [[${user}]];
    $("#name").val(user.name);


    $(document).ready(function (){
    if(session.userId==1){
    $("#name").prop("readonly",true);
}else if(session.userId>2){
    $("#name").prop("readonly",true);
}else{
    $("#name").prop("readonly",false);
}

    $("#btnSave").click(()=>{
    if($("#title").val().length<2 ){
    alert("제목은 2글자 이상 입력해주세요.");
    $('#form').preventDefault();
}else if($("#name").val().length<2){
    alert("이름은 2글자 이상 입력해주세요.");
    $('#form').preventDefault();
}else if($("#pw").val().length <= 0) {
    alert("비밀번호는 4글자 이상 입력해주세요.");
    $('#form').preventDefault();
}else{
    $('#form').submit();
}
})
})

