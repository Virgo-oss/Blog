// 控制音乐播放
// duration 属性返回当前音频的长度，以秒计。
var music = document.getElementById("music");  // 播放按钮
// 音乐时长
var musicTime = document.getElementById("musicTimes");
// }
var musicPlay = document.getElementById("musicPlay");
function play(){
    var myVar = setInterval(function () {
            var nowTime=music.currentTime;  // 当前时长
            var allTime=music.duration;  // 总时长
            // 当前准确的时间速
            var nowMinute=parseInt(nowTime/60)<10?`0${parseInt(nowTime/60)}:`:`${parseInt(nowTime/60)}:`
            var nowSecond=parseInt(nowTime%60)<10?`0${parseInt(nowTime%60)} /  `:`${parseInt(nowTime%60)} / `
            // 总时长解析后的分秒
            var allMinute=parseInt(allTime/60)<10?`0${parseInt(allTime/60)}:`:`${parseInt(allTime/60)}:`
            var allSecond=parseInt(allTime%60)<10?`0${parseInt(allTime%60)}`:`${parseInt(allTime%60)}`
            console.log(nowMinute,nowSecond,allMinute,allSecond);
            musicTime.innerHTML = `${nowMinute}${nowSecond}${allMinute}${allSecond}`
            // 进度条更新、进度条时间
            let dynamic = document.getElementById("musicProgress");
            dynamic.style.width = (nowTime / allTime * 100) + "%";
            if (nowTime == allTime) {
                dynamic.style.width = 0;
                musicTime.innerHTML = "00:00 / 00:00";
            }
    }, 1000)
    if (music.paused) {
        music.play();
        musicPlay.style.background = "url(images/tools/pause.png)";
    }
    else{
        music.pause();
        // clearInterval(myVar);
        musicPlay.style.background = "url(images/tools/play.png)";
    }
    // 播放完成按钮变换
    music.onpause = function() {
        musicPlay.style.background = "url(images/tools/play.png)";
    }
}

var next = document.getElementById("musicNext");
var music_path = 'music/';
// 创建FileSystemObject对象
// let fso = new ActiveXObject("Scripting.FileSystemObject");
// 获取目录下所有文件，对于该浏览器缓存目录，仅能获取到一个文件
// 要访问对象的相关属性，首先要建立指向对象的句柄，这就要通过get系列方法实现：
// GetDrive负责获取驱动器信息，GetFolder负责获取文件夹信息，GetFile负责获取文件信息。
// var f1 = fso.GetFolder(music_path);
// var ff = new Enumerator(f1.Files);   // 获取文件夹对象
// 下一首
var songs = ['梦回还.mp3','mystery of love.mp3','So Far Away.mp3']
var i = 0
next.onclick = function (){
    if (songs[-1]){
        i = 0
    }
    music.src = music_path + songs[i]
    play();
    i++
}

// 自动播放下一首
music.addEventListener('ended', function () {       
    music.src = music_path + songs[i]
    play()
}, false);

setTimeout("weather()", 800);
function weather() {
    let sky = document.getElementById("sky");
    let weather = document.getElementById("weather");
    let timer;
    sky.onmouseover = function () {
      weather.style.display = "block";
      timer = setTimeout(function () {
        weather.style.display = "none";
      }, 3000);
    };
    sky.onmouseout = function() {
        clearTimeout(timer);
    }
    weather.onmouseover = function() {
        weather.style.display = "block";
    }
    weather.onmouseout = function() {
        weather.style.display = "none";
    }
}

window.onscroll = function() {scrollFunction()};
function scrollFunction() {console.log(121);
    let backtop = document.getElementById("back_top").style;
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backtop.display = "block";
    } else {
        backtop.display = "none";
    }
}
// setTimeout("ownual()", 1500);
// function ownual() {
//     let mutual = document.getElementById("mutual");
//     let talk = document.getElementById("talk").style;

// }
