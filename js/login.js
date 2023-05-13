function userName() {
    var user = /^[a-z0-9]{3,10}$/;
    return user.test();
    //匹配英文大小写与数字0-9，且限定为3-10位数
}
function userwd() {
    var passwd= /^[a-zA-Z0-9]{6,10}$/;
    return passwd.test();
    //匹配英文大小写与数字0-9，且限定为6-10位数
}
function mate() {
    var nub = "vocal";
    var pass = "123456";
    var name = document.getElementById("account").value;
    var wd = document.getElementById("passwd").value;
    if (name == nub) {
        alert("用户名输入正确");
    }
    else{
        ("用户名输入错误");
        document.getElementById("account").focus();
        return false;
    }
    if (wd == pass) {
        alert("密码输入正确");
    }else{
        alert("密码格式错误");
        document.getElementById("passwd").focus();
        return false;
    }
    alert("欢迎回来！")
    return false;
}

function hideShowPsw() {
    var Img = document.getElementById("show");
    var Input = document.getElementById("passwd");
    if (Input.type == "password") {
        Input.type = "text";
        Img.src ="../images/tools/show.png";
    } else {
        Input.type = "password";
        Img.src = "../images/tools/hide.png";
    }
}