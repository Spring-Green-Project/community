
    $(document).ready(function (){

    $('#btnSave').click(()=> {

        if ($("input[name='title']").val().length < 2) {
            alert("제목은 2글자 이상 입력해주세요.");
            $('#form').preventDefault();
        } else if ($("input[name='name']").val().length < 2) {
            alert("이름은 2글자 이상 입력해주세요.");
            $('#form').preventDefault();
        } else if ($("input[name='pw']").val().length <= 0) {
            alert("비밀번호는 4글자 이상 입력해주세요.");
            $('#form').preventDefault();
        } else {
            $('#form').submit();
        }
    })

})


