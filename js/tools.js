// 控制音乐播放
// duration 属性返回当前音频的长度，以秒计。
function play(){
    var music = document.getElementById("music");
    let musicPlay = document.getElementById("musicPlay");
    if (music.paused) {
        music.play();
        musicPlay.style.background = "url(images/tools/pause.png)";
    }else{
        music.pause();
        musicPlay.style.background = "url(images/tools/play.png)";
    }
    // 播放完成按钮变换
    music.onpause = function() {
        musicPlay.style.background = "url(images/tools/play.png)";
    }
    // 进度条更新、进度条时间
    // 监听事件：addEventListener("timeupdate", function (){条件语句});
    music.ontimeupdate = function() {
        let dynamic = document.getElementById("musicProgress");
        let musicTime = document.getElementById("musicTime");
            dynamic.style.background = "#747373";
            dynamic.style.width = (music.currentTime / music.duration * 100) + "%";
            musicTime.innerHTML = Math.round(music.currentTime) + " / " + Math.round(music.duration);
        if (music.currentTime == music.duration) {
            dynamic.style.width = 0;
            musicTime.innerHTML = "0 / " + Math.round(music.duration);
        }
    }
}