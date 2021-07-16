
    $(document).ready(function (){
    $("#submit").click(function (){
        if($("#checkBox").is(":checked")===false){
            alert("개인정보 이용 동의를 해주세요.\n 동의 하지 않으면 비회원으로 이용해야 합니다.");
        }else{
            $("#submit").prop("type", "submit");
        }
    })

})
