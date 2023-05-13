window.onload = function(){
    // 获取设备宽高
   var device_width = document.getElementById("width");
   var device_height = document.getElementById("height");
   let width = window.innerWidth;
   let height = window.innerHeight;
   device_width.innerHTML = "宽度: " + width + "px";
   device_height.innerHTML = "高度: " + height + "px";
   document.getElementById("hr").style.display = "block";
   // a标签添加taget="_blank";
   var tags = document.getElementsByTagName("a");
   for(var i=0; i<tags.length; i++){
    // 储存for循环后的值
       var a = tags[i];
   // 给a标签赋值
       a.target="_blank";
   }
}
// 时间
setTimeout("time()", 1000);
function time() {
    var myday = setInterval(function(){fun2()},1000);
    function fun2(){
        var d = new Date();
        var y = d.getFullYear();
        var m = d.getMonth()+1;
        var n = d.getDate();
        var w = new Array(7);
        w[0]="星期日"; w[1]="星期一"; w[2]="星期二";
        w[3]="星期三"; w[4]="星期四"; w[5]="星期五";
        w[6]="星期六";
        var h = d.getHours().toString().padStart(2,'0');
        var u = d.getMinutes().toString().padStart(2,'0');
        var s = d.getSeconds().toString().padStart(2,'0');
        var x = document.getElementById("NewDate")
        x.innerHTML= y + "年" + m + "月" + n + "日 " + w[d.getDay()] + "：" + h + ":" + u + "分" + s + "秒";
    }
}
// 搜索功能
let sear = document.getElementById("search");
sear.onkeypress = function() {
    if (event.keyCode == 13) {
        alert("你按了回车键！");
    }
}

