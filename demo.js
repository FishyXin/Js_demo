window.onload = function () {
    var imgs = document.querySelectorAll("#slide img"); //获取轮播图图片数组
    var left_side = document.querySelector("#side img:nth-child(1)"); //左滑按钮
    var right_side = document.querySelector("#side img:nth-child(2)"); //右滑按钮
    var buttons = document.querySelectorAll("#buttons img"); //游标按钮数组
    var slide_item = document.getElementById("slide");

    var autoPlay = setInterval(autoChange, 3800); //定时器播放

    left_side.onclick = leftSlide; //左滑事件

    right_side.onclick = rightSlide; //右滑事件

    for (var i = 0; i < buttons.length; i++) { //为游标绑定点击事件
        buttons[i].onclick = clickButton;
    }

    var flag = true;
    var flag1 = true;
    var flag2 = true;

    /* 自动播放 */
    function autoChange() {
        if (flag) {
            var left = parseInt(window.getComputedStyle(slide_item).left);
            if (left > -984 * (imgs.length - 2) - 1) {
                slide_item.style.left = (left - 984) + "px";
            } else {
                slide_item.style.left = 0 + "px";
            }
            changeCurrent(slide_item.style.left);
            pauseSlide();
        }
    }



    /* 左滑 */
    function leftSlide() {
        if (flag1) {
            var left = parseInt(window.getComputedStyle(slide_item).left);
            if (left < 0) {
                slide_item.style.left = (left + 984) + "px";
            } else {
                slide_item.style.left = -984 * (imgs.length - 1) + "px";
            }

            changeCurrent(slide_item.style.left);
            pauseSlide();
        }
    }

    /* 右滑 */
    function rightSlide() {
        if (flag2) {
            var left = parseInt(window.getComputedStyle(slide_item).left);
            if (left > -984 * (imgs.length - 2) - 1) {
                slide_item.style.left = (left - 984) + 'px';
            } else {
                slide_item.style.left = 0 + "px";
            }
            changeCurrent(slide_item.style.left);
            pauseSlide();
        }
    }


    /* 点击下标 */
    function clickButton() {
        for (var j = 0; j < buttons.length; j++)
            buttons[j].style.background = "";
        this.style.background = "#6b5e5e";
        var index = parseInt(this.getAttribute('index'));
        slide_item.style.left = -984 * index + "px";
        pauseSlide();

    }

    /* 滑动改变下标*/
    function changeCurrent(left) {
        var index = -parseInt(left) / 984;
        for (var j = 0; j < buttons.length; j++)
            buttons[j].style.background = "";
        if (index >= buttons.length) index = 0;
        buttons[index].style.background = "#6b5e5e";
    }

    /* 图片滑动过渡时间内*/
    function pauseSlide() {
        flag1 = false;
        flag2 = false;
        flag = false;
        setTimeout(function () {
            flag1 = true;
            flag2 = true;
            flag = true;
        }, 1300);
    }

}
