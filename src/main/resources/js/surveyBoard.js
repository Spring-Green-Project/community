

    document.querySelector('#searchButton').addEventListener('click', searchButtonSubmit);

    function searchButtonSubmit(){
    if (document.querySelector('#value').value.length == 0 ){
    alert ("검색어를 입력하세요");
} else {
    document.querySelector('#searchForm').submit();
}
}
    $(document).ready(function (){
    let session = [[${session}]];

    $("#writeButton").click(function (){
    if(session.userId==2){
    alert("회원만 이용할 수 있습니다.");
    location.href = "/surveyBoard";
}else{
    location.href = "/surveyWrite";
}
})
})

