

    document.querySelector('#searchButton').addEventListener('click', searchButtonSubmit);

    function searchButtonSubmit(){
    if (document.querySelector('#value').value.length == 0 ){
    alert ("검색어를 입력하세요");
} else {
    document.querySelector('#searchForm').submit();
}
}

