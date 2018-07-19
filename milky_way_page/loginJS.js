function next_page ()
{
    var pk=$('#id').val();
    var ps=$('#password').val();

    if (pk=='sea_bom_12' && ps=='gpfla123')
    {
        location.href="./next_page_HTML.html";
    }
    else
    {
        alert('잘못 입력하셨습니다. 다시 입력하세요.');
    }
}