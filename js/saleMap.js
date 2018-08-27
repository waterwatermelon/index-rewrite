//除e-chart图表外的脚本代码
$(function(){
    // 显示时钟
    function showDate() {
        var oTime = document.getElementById("time");
        var oDate = document.getElementById("date");
        function updateCalendar() {
            var time = new Date();
            var day = ['日', '一', '二', '三', '四', '五', '六'];
            // 程序计时的月从0开始取值后+1
            var m = time.getMonth() + 1;
            var timeStr = toTwoDigit(time.getHours()) + ":"
                + toTwoDigit(time.getMinutes()) + ":" + toTwoDigit(time.getSeconds());
            var dateStr = toTwoDigit(time.getFullYear()) + "-" + toTwoDigit(m) + "-"
                + toTwoDigit(time.getDate()) + "  |  "
                + "星期" + day[time.getDay()];
            oTime.innerText = timeStr;
            oDate.innerHTML = dateStr;
            function toTwoDigit(num) {
                return num < 10 ? ('0' + num) : num;
            }
        }
        // 初始化显示时钟
        updateCalendar();
        setInterval(updateCalendar, 1000);// 更新时钟
    }
    window.addEventListener('load',showDate);
    //重新调整字体大小
    function resizeFontSize() {
        var html = document.documentElement;
        var rate = html.clientWidth / 1440 ;
        html.style.fontSize = rate * 100 + '%';
        console.log(html.style.fontSize);
    }
    //google浏览器字体最小尺寸与360浏览器效果不一样。
    window.addEventListener('load', resizeFontSize);
    window.addEventListener('resize', resizeFontSize);
    // 全屏切换
    function screenSwitch() {
        var oFullscreen = document.getElementById('fullscreen');
        var oSwitch = document.getElementById('screen-switch');
        var oImplyTxt = document.getElementById('imply-txt');
        if (oSwitch.className == 'fscreen-open') //进入全屏
        {
            console.log('fullScreen');
            if (oFullscreen.requestFullscreen) {
                oFullscreen.requestFullscreen();
            } else if (oFullscreen.mozRequestFullScreen) {
                oFullscreen.mozRequestFullScreen();
            } else if (oFullscreen.webkitRequestFullScreen) {
                oFullscreen.webkitRequestFullScreen();
            }
            oImplyTxt.innerText = "退出全屏";
            oSwitch.className = 'fscreen-exit';
        }
        //退出全屏
        else {
            console.log(' exit full Screen');
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
            oImplyTxt.innerText = "进入全屏";
            oSwitch.className = 'fscreen-open';
        }
    }
    // 显示全屏切换按钮文字提示
    function showImply() {
        var oImplyTxt = document.getElementById('imply-txt');
        oImplyTxt.style.opacity = '1';
    }
    function closeImply() {
        var oImplyTxt = document.getElementById('imply-txt');
        oImplyTxt.style.opacity = '0';
    }
    // 全屏按钮 监听事件注册
    $('#switch-box').click(screenSwitch);
    $('#switch-box').mouseover(showImply);
    $('#switch-box').mouseout(closeImply);
});