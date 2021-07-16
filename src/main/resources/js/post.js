
    let img = [[${img}]];
    let post = [[${post}]];
    let session = [[${session}]];

    let file = "./post/"+img;
    $(document).ready(function (){
    if(img===""){
    $("#img").hide();
}else{
    $("#img").attr("src",file);
}

    if(post.category=="service"){
    if(post.userNo.userNo==session.userId){

}else if(session.userId==1) {

}else{
    alert("권한이 없습니다.");
    location.href="/service";
}
}else{

}

})

    if ([[${userNo}]] != 2) {
    document.querySelector('#newCommentNameNm').readOnly = true;
}

    function editPostFunc() {
    let editPostForm = document.querySelector('#editPostForm');
    if ([[${post.userNo.userNo}]] != 2) {
    if ([[${post.userNo.userNo}]] == [[${userNo}]] || [[${userNo}]] == 1) {
    editPostForm.submit();
} else {
    alert("권한이 없습니다.");
}
} else {
    if ([[${userNo}]] == 1) {
    editPostForm.submit();
} else {
    let pwCheck = prompt("비밀번호를 입력해주세요.");
    if (pwCheck == [[${post.pw}]]) {
    editPostForm.submit();
} else if (pwCheck == null) {

} else {
    alert("권한이 없습니다.");
}
}
}
}

    function deletePostFunc() {
    let deletePostForm = document.querySelector('#deletePostForm');
    if ([[${post.userNo.userNo}]] != 2) {
    if ([[${post.userNo.userNo}]] == [[${userNo}]] || [[${userNo}]] == 1) {
    console.log([[${post.userNo.userNo}]]);
    let deleteConfirm = confirm("게시글을 삭제하시겠습니까?");
    if (deleteConfirm) {
    deletePostForm.submit();
}
} else {
    alert("권한이 없습니다.");
}
} else {
    if ([[${userNo}]] == 1) {
    let deleteConfirm = confirm("게시글을 삭제하시겠습니까?");
    if (deleteConfirm) {
    deletePostForm.submit();
}
} else {
    let pwCheck = prompt("비빌번호를 입력하세요.");
    if (pwCheck == [[${post.pw}]]) {
    deletePostForm.submit();
} else if (pwCheck == null) {
} else {
    alert("권한이 없습니다.");
}
}
}
}

    function newCommentFuncM() {
    let newCommentForm = document.querySelector('#newCommentForm');
    let content = document.querySelector('#newCommentContent').value;

    if (content.length < 5) {
    alert("이름, 비밀번호 혹은 댓글 내용이 너무 짧습니다.");
} else {
    document.querySelector('#name').value = [[${name}]];
    document.querySelector('#pw').value = "0000";
    document.querySelector('#content').value = content;
    document.querySelector('#userNo').value = [[${userNo}]];

    newCommentForm.submit();
}
}

    function newCommentFuncNm() {
    let newCommentForm = document.querySelector('#newCommentForm');
    let name = document.querySelector('#newCommentNameNm').value;
    let pw = document.querySelector('#newCommentPassword').value;
    let content = document.querySelector('#newCommentContent').value;

    if (name.length < 2 || pw.length < 4 || content.length < 5) {
    alert("이름, 비밀번호 혹은 댓글 내용이 너무 짧습니다.");
} else {
    document.querySelector('#name').value = name;
    document.querySelector('#pw').value = pw;
    document.querySelector('#content').value = content;
    document.querySelector('#userNo').value = [[${userNo}]];

    newCommentForm.submit();
}
}

    function deleteCommentFunc(commentNo, userNo, pw) {
    let deleteCommentForm = document.querySelector('#deleteCommentForm');
    document.querySelector('#commentNo').value = commentNo;

    if (userNo != 2) {
    if (userNo == [[${userNo}]] || [[${userNo}]] == 1) {
    let deleteConfirm = confirm("댓글을 삭제하시겠습니까?");
    if (deleteConfirm) {
    deleteCommentForm.submit();
}
} else {
    alert("권한이 없습니다.");
}
} else {
    if ([[${userNo}]] == 1) {
    let deleteConfirm = confirm("댓글을 삭제하시겠습니까?");
    if (deleteConfirm) {
    deleteCommentForm.submit();
}
} else {
    let pwCheck = prompt("비밀번호를 입력해주세요.");
    if (pwCheck == pw) {
    deleteCommentForm.submit();
} else if (pwCheck == null) {

} else {
    alert("권한이 없습니다.");
}
}
}
}

    function board() {
    let category = [[${post.category}]];
    let page = "";
    if (category == "on") {
    page = "/notice";
} else if (category == "off") {
    page = "/board";
} else {
    page = "/service";
}
    location.href = page;
}


    document.querySelector('#editPostButton').addEventListener('click', editPostFunc);
    document.querySelector('#deletePostButton').addEventListener('click', deletePostFunc);

    if ([[${userNo}]] != 2) {
    document.querySelector('#newCommentButton').addEventListener('click', newCommentFuncM);
} else if ([[${userNo}]] == 2) {
    document.querySelector('#newCommentButton').addEventListener('click', newCommentFuncNm);
}
    document.querySelector('#boardButton').addEventListener('click', board);

