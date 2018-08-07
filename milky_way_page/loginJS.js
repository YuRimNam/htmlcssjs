function next_page ()
{
    var pk=document.getElementById('id').value;
    var ps=document.getElementById('password').value;

    if (pk=='sea_bom_12' && ps=='gpfladbfla1')
        location.href="./next_page_HTML.html";
    else if(pk=='')
        alert('아이디를 입력하세요.');
    else if(ps=='')
        alert('패스워드를 입력하세요.');
    else if(pk!='sea_bom_12' && ps!='gpfla123')
        alert('잘못 입력하셨습니다. 다시 입력하세요.');
}