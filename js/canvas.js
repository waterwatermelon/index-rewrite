$(function(){
    var canvas = document.getElementById("myCanvas");
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
    var ctx = canvas.getContext("2d");
    //创建小球的构造函数
    function Ball() {
        this.x = randomNum(3, canvas.width - 3);
        this.y = randomNum(3, canvas.height - 3);
        this.r = randomNum(2, 4);
        this.r = randomNum(1, 2);
        this.color = randomColor();
        this.speedX = randomNum(-3, 3) * 0.1;
        this.speedY = randomNum(-3, 3) * 0.1;
    }
    Ball.prototype = {
        //绘制小球
        draw: function () {
            ctx.shadowOffsetX = 0; // 阴影Y轴偏移
            ctx.shadowOffsetY = 0; // 阴影X轴偏移
            ctx.shadowBlur = 20; // 模糊尺寸
            ctx.shadowColor = '#fff'; // 颜色
            ctx.beginPath();
            ctx.globalAlpha = 1;
            ctx.fillStyle = this.color;
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
            ctx.arc(this.x, this.y, this.r, 0, Math.PI);
            ctx.fill();
        },
        //小球移动
        move: function () {
            this.x += this.speedX;
            this.y += this.speedY;
            //为了合理性,设置极限值
            if (this.x <= 3 || this.x > canvas.width - 3) {
                this.speedX *= -1;
            }
            if (this.y <= 3 || this.y >= canvas.height - 3) {
                this.speedY *= -1;
            }
        }
    }
    //存储所有的小球
    var balls = [];
    //创建120个小球
    for (var i = 0; i < 60; i++) {
        var ball = new Ball();
        balls.push(ball);
    }
    main();

    function main() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
       
        //小球与小球之间自动画线
        drawCircle();
        //使用关键帧动画，不断的绘制和清除
        // requestAnimationFrame 浏览器请求重绘画面
        window.requestAnimationFrame(main);
    }
    //添加鼠标移动事件
    //记录鼠标移动时的mouseX坐标
    var mouseX;
    var mouseY;
    canvas.onmousemove = function (e) {
        var ev = event || e;
        mouseX = ev.offsetX;
        mouseY = ev.offsetY;
    }
    //判断是否划线

    function drawCircle() {
        for (var i = 0; i < balls.length; i++) {
            balls[i].draw();
            balls[i].move();
        }
    } 
     
    //随机函数
    function randomNum(m, n) {
        return Math.floor(Math.random() * (n - m + 1) + m);
    }
    //随机颜色
    function randomColor() {
        var colors = ['rgb(215,224,230)','rgb(14,128,199)' ,'rgb(215,255,255)'];
        return colors[ randomNum(0, colors.length) ];
    }
});