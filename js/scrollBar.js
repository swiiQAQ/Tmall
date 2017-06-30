const len = $("#scroll_bar").children().length;
var count = 0;
var startScroll=setInterval(scrollBar, 4000);
//自动播放
function scrollBar() {
    count = count > len - 2 ? -1 : count;
    count++;
    changeImgOrCircle(count)
}
//点击圆点可以跳转到相应的banner
$(".scroll_circle ul li").click(function(){
    var index=$(this).index();
    changeImgOrCircle(index);
    count = index;
});

function prev(){
    
}
function next(){

}

function changeImgOrCircle(index){
    $(".scroll_img").eq(index).fadeIn().siblings().fadeOut();
    $(".scroll_circle").children().children().eq(index).addClass("active").siblings().removeClass("active")
}

//移动鼠标停止自动播放
function stopScroll(){
    $('.scroll_img').mouseover(function(){
        clearInterval(startScroll);
    });
    $('.scroll_img').mouseout(function(){
        startScroll=setInterval(scrollBar, 4000);
    });
}
stopScroll();