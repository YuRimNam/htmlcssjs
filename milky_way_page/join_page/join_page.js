function together() {
    let birth = document.getElementById('year-box');
    let name = document.getElementById('in-name');
    let how = document.getElementById('how-box');
    let id = document.getElementById('i-box');
    let password = document.getElementById('p-box');

    if (birth == '') {
        alert("생년월을 입력해 주세요.");
    } else if (name == '') {
        alert("이름을 입력해 주세요.");
    } else if (how == '') {
        alert("저를 어떻게 생각하시는지 입력해 주세요.")
    } else if (id == '') {
        alert("아이디를 입력해 주세요.");
    } else if (password == '') {
        alert("패스워드를 입력해 주세요.");
    } else {
        console.log(id);
        alert("감사합니다! 아이디와 비밀번호는 생성되지 않습니다. :)");
    }
};