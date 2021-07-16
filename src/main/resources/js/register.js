

    $(document).ready(function () {
    $('#check').click(function (e) {
        let userId = $('#userId').val();
        let obj = {
            "userId": userId
        }
        $.ajax({
            type:"POST",
            url:"/userIdCheck",
            data:obj,
            dataType:'text',
            success : function (data){
                if(data === 'true'){
                    alert('생성 가능한 아이디입니다.');
                    $('#userId').attr('readonly',true);
                } else{
                    alert('이미 생성된 아이디입니다.')
                }
            },
            error : ()=>{ }
        });
        $("#submit").click(() => {
            if ($("#userId").val().length < 6) {
                alert("아이디를 6자 이상 입력하세요");
            } else if ($("#name").val().length < 2) {
                alert("이름은 2글자 이상 입력하세요");
            } else if ($("#gender").val() === null) {
                alert("성별을 체크해주세요.");
            } else if ($("#userId").val() === $("#userPw").val()) {
                alert("아이디와 비밀번호는 일치하면 안됩니다.");
            } else if ($("#userPw").val().length < 6) {
                alert("비밀번호는 6자 이상 입력하세요");
            } else {
                $("#submit").prop("type", "submit");
            }
        })
    });
});



