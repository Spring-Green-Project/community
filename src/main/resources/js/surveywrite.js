

    $(document).ready(function (e) {
    $("#btnSave").click(()=> {
        let fileCheck1 = document.getElementById("uploadFile1").value;
        let fileCheck2 = document.getElementById("uploadFile2").value;
        if ($('#opinion1').val().length <= 0) {
            alert("option은 무조건 입력해주세요.");
            $('#form').preventDefault();
        } else if ( $('#opinion2').val().length <= 0) {
            alert('option은 무조건 입력해주세요.');
            $('#form').preventDefault();
        }else if(!fileCheck1 || !fileCheck2){
            alert("이미지를 입력해주세요.");
            $('#form').preventDefault();
        } else{
            $("form[name='form']").submit();
        }

    })
    $(document).on('click', '#btnList', function (e) {
    location.href = "/surveyBoard"; // 7월 2일 12시 19부 수정
});
});

