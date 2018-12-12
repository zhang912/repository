/**

 * 张守华，推广
 */
$(function () {
    /*获取每一页的高度*/
    var h=document.documentElement.clientHeight||document.body.clientHeight;
    var w=document.documentElement.clientWidth||document.body.clientWidth;
    $('._indexMain').css('minWidth','1027px')
    $('._indexMain').css('marginLeft','103px')
    $('.z_first_outer').eq(0).height(h);
    $('.z_first').eq(0).height(h);
    $('.z_second_outer').eq(0).height(h);
    $('.z_three_outer').eq(0).height(h);
    $('.z_four_outer').eq(0).height(h);
    $('.z_five_outer').eq(0).height(h);
    $('._indexFoot').eq(0).css({"top":h-66});
    $(window).resize(function () {//窗口变化的获取高度
        var h=window.innerHeight;
        var w=document.documentElement.clientWidth||document.body.clientWidth;
        $('.z_first_outer').eq(0).height(h);
        $('.z_first').eq(0).height(h);
        $('.z_second_outer').eq(0).height(h);
        $('.z_three_outer').eq(0).height(h);
        $('.z_four_outer').eq(0).height(h);
        $('.z_five_outer').eq(0).height(h);
    })
    /* 左侧菜单栏*/
    $('.-indexLeft-top').eq(0).click(function () {
        $('.-indexLeft-nav').eq(0).slideDown("slow","swing");
    })
    $('.-indexLeft-top').eq(0).dblclick(function () {
        $('.-indexLeft-nav').eq(0).slideUp("slow","swing");
    })
    $('.-indexLeft-sideBar').eq(0).click(function () {
        $('.-indexLeft-nav').eq(0).slideUp("slow","swing");
    })
    /* 底部菜单栏内部图层切换*/
    $('#_topNav li').hover(
        function () {
        var i=$("#_topNav li").index($(this));
        var l=$('#_topNav li').eq(1).width();
        var w=i*l+"px";
        $('#wrap').stop(true,false).animate({"left":w,"top":"0px"})
    },function () {
        $('#wrap').stop(true,false).animate({"left":"0px","top":"0px"});
    })
   /* 时间获取*/
    var date=new Date();
    var n=date.getFullYear();
    var m=date.getMonth()+1;
    var d=date.getDate();
    $("._indexFoot_cal span").html(n+"年"+m+"月"+d+"日");
    /*底部菜单栏上下切换*/
    var x=0;
    $(window).on("mousewheel DOMMouseScroll", function (e) {//JQ滚轮事件兼容
        var delta =(e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1))||  (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));              // firefox
        if (delta > 0) {
            // 向上滚
            /*五页大屏切换*/
            function up() {
                x--;
                if(x<=0){
                    x=0;
                    $('._indexFoot').stop().animate({"top":h-66},1000);
                }
                $('._indexMain').children().eq(x).css("z-index",'1').stop(false,true).fadeIn(500,'swing').siblings().stop().fadeOut(20,'swing');
            }
            up();

        } else if (delta < 0) {
            // 向下滚
            /*五页大屏切换*/
            $('._indexFoot').stop().animate({"top":0},1000);
            function down() {
                x++;
                if(x>=4){
                    x=4;
                }
                $('._indexMain').children().eq(x).css("z-index",'1').stop(false,true).fadeIn(500,'swing').siblings().stop().fadeOut(20,'swing');
               /*第三页效果*/
                if(x==2){
                    $("#z_three_img1").stop().animate({"height":"404"},3450);
                    $(".z_three_left").stop().animate({"height":"404"},4000);
                    $(".z_three_right").stop().animate({"height":"404"},4000);
                }
                /*第四页图片切换效果*/
                if (x==3){
                    $(".z_four_outer li").mouseover(function () {
                        var y=$(".z_four_outer li").index(this);
                        $(".z_four_outer li").eq(y).stop().animate({"backgroundPositionY":"-60"});
                    })
                    $(".z_four_outer li").mouseout(function () {
                        var y=$(".z_four_outer li").index(this);
                        $(".z_four_outer li").eq(y).stop().animate({"backgroundPositionY":"0"});
                    })
                }
            }
            down();
        }
    });
    /*第五页正则*/
    var reg0=/^[\u4e00-\u9fa5]{2,4}$/;
    var reg1=/^[1][358][0-9]{9}$/i;
    var reg2= /^[a-zA-Z0-9_]{2,10}@[a-z0-9]{2,5}\.[a-z]{2,5}$/i;
    $(".z_five_main input").eq(0).focus(function () {
        if(!reg0.test($(".z_five_main input").eq(0).val()))
        {
            $(".z_five_main input").eq(0).css({"border":"1px solid red"})
        }else{
            $(".z_five_main input").eq(0).css({"border":"0px","borderBottom":"1px solid green"})
        }
    })
    $(".z_five_main input").eq(0).blur(function () {
        if(!reg0.test($(".z_five_main input").eq(0).val()))
        {
            $(".z_five_main input").eq(0).css({"border":"1px solid red"})
        }else{
            $(".z_five_main input").eq(0).css({"border":"0px","borderBottom":"1px solid green"})
        }
    })
    $(".z_five_main input").eq(1).focus(function () {
        if(!reg1.test($(".z_five_main input").eq(1).val()))
        {
            $(".z_five_main input").eq(1).css({"border":"1px solid red"})
        }else{
            $(".z_five_main input").eq(1).css({"border":"0px","borderBottom":"1px solid green"})
        }
    })
    $(".z_five_main input").eq(1).blur(function () {
        if(!reg1.test($(".z_five_main input").eq(1).val()))
        {
            $(".z_five_main input").eq(1).css({"border":"1px solid red"})
        }else{
            $(".z_five_main input").eq(1).css({"border":"0px","borderBottom":"1px solid green"})
        }
    })
    $(".z_five_main input").eq(2).focus(function () {
        if(!reg2.test($(".z_five_main input").eq(2).val()))
        {
            $(".z_five_main input").eq(2).css({"border":"1px solid red"})
        }else{
            $(".z_five_main input").eq(2).css({"border":"0px","borderBottom":"1px solid green"})
        }
    })
    $(".z_five_main input").eq(2).blur(function () {
        if(!reg2.test($(".z_five_main input").eq(2).val()))
        {
            $(".z_five_main input").eq(2).css({"border":"1px solid red"})
        }else{
            $(".z_five_main input").eq(2).css({"border":"0px","borderBottom":"1px solid green"})
        }
    })
})