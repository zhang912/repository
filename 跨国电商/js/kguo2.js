/**
 * Created by Ibokan on 2016/9/22.
 */
$(function () {
    $('.heac2 .hea-1').hover(function () {
        var i=$('.heac2 .hea-1').index(this);
        $(this).css({'background':' url("../imgs/xiaj1.png") 98px 15px no-repeat'})
        $(this).children().css({'color':'red'})
    },function () {
        $('.heac2 .hea-1').css({'background':' url("../imgs/xiaj.png") 98px 15px no-repeat'})
        $('.heac2 li a').css({'color':'#666666'})
    })

    $('.heac2 .hea-2').hover(function () {
        var i=$('.heac2 .hea-2').index(this);
        $(this).css({'background':' url("../imgs/xiaj1.png") 118px 15px no-repeat'})
        $(this).children().css({'color':'red'})
    },function () {
        $('.heac2 .hea-2').css({'background':' url("../imgs/xiaj.png") 118px 15px  no-repeat'})
        $('.heac2 li a').css({'color':'#666666'})
    })
    $('.heac2 .hea-3').hover(function () {
        var i=$('.heac2 .hea-3').index(this);
        $(this).css({'background':' url("../imgs/xiaj1.png") 75px 15px  no-repeat'})
        $(this).children().css({'color':'red'})
    },function () {
        $('.heac2 .hea-3').css({'background':' url("../imgs/xiaj.png")  75px 15px  no-repeat'})
        $('.heac2 li a').css({'color':'#666666'})
    })
    $('.heac1 li a').hover(function () {
        var i=$('.heac1 li').index(this);
        $(this).css('color','red')

    },function () {
        $('.heac1 .heac1-1 a').css({'color':'#666666'})
        $('.heac1 .heac1-2 a').css({'color':'#666666'})
    })

/* 导航开始*/

    $('.heuls li').mouseover(function (){
        var i=$('.heuls li').index(this);

        $('.heuls li a').eq(i).css({'color':'orange'});
        if (i==0){
            return false;
        }
        $('.heuls li div').eq(i-1).stop().show().animate({'height':'150px'},500,'swing')

    })
    $('.heuls li').mouseout(function (){

        var i=$('.heuls li ').index(this);
        $('.heuls li a').eq(i).css({'color':'#000',});
        $('.heuls li div').eq(i-1).stop().animate({'height':'0px'},500,'swing',function (){
            $('.heuls li div').eq(i-1).hide();
        })
    })
    $('.heuls .dao2').hover(function () {
        var i=$('.heuls .dao2').index(this);
        $(this).css({'background':' url("../imgs/xiaj1.png") 111px 10px  no-repeat'})

    },function () {
        $('.heuls .dao2').css({'background':' url("../imgs/xiaj.png")  111px 10px  no-repeat'})

    })
    $('.heuls .dao3').hover(function () {
        var i=$('.heuls .dao3').index(this);
        $(this).css({'background':' url("../imgs/xiaj1.png") 80px 10px  no-repeat'})

    },function () {
        $('.heuls .dao3').css({'background':' url("../imgs/xiaj.png")  80px 10px  no-repeat'})

    })
    $('.heuls .dao4').hover(function () {
        var i=$('.heuls .dao4').index(this);
        $(this).css({'background':' url("../imgs/xiaj1.png") 90px 10px  no-repeat'})

    },function () {
        $('.heuls .dao4').css({'background':' url("../imgs/xiaj.png")  90px 10px  no-repeat'})

    })
    /*导航结束*/
    $('.inpt').on({
        'focus':function () {
            if($('.inpt').val('Please enter the contenr you want to search')){
                $('.inpt').val('');
            }
        },'blur':function () {
            if($('.inpt').val('')){
                $('.inpt').val('Please enter the contenr you want to search')
            }
        }
    })
    /*tab切换*/
    $('.tabhe li').click(function() {
        var i=$(this).index('.tabhe li');
        $(this).addClass('r_show').siblings().removeClass('r_show');
        // $('.tabq2 li').eq(i).addClass('forea').siblings().removeClass('forea');
        $('.tabq2 li').eq(i).show().siblings().hide();

    })

    

})


/*大图滚动版无缝滚动*/

var swrap=document.getElementById('swrap');
var sinner=document.getElementById('sinner');
var divs=sinner.getElementsByTagName('div');
var btn=document.getElementById('sbtn');
var btns=sbtn.getElementsByTagName('div');
var time2=null,time12=null,time22=null,time32=null,time42=null;

var divsw=divs[0].offsetWidth+30;
/*alert(divsw)*/
var y=0;
function everygo2() {
    clearInterval(time22);

    var start=swrap.scrollLeft;
    var end=divsw*y;//利用下标[0]....
    var everystep=(end-start)/20;
    var step=0;

    time22=setInterval(function() {
        step++;
        if (step>=20) {
            clearInterval(time22);
            step=0;
        };
        start+=everystep;
        swrap.scrollLeft=start;
    },10)
};//每一张图片的走
function autogo2() {

    clearInterval(time12);
    time12=setInterval(function() {
        // alert(y);
        y++;
        if (y>=divs.length/2) {
            y=0;
        };
        everygo2();

        /*for (var i = 0; i < lis.length; i++) {
         lis[i].className='';

         };
         lis[x].className'select';*/

        //每一张图片缓慢的走；
        //wrap.scrollLeft=imgw*x
        /*var start=wrap.scrollLeft;
         var end=imgw*x;//利用下标[0]....
         var everystep=(end-start)/20;
         var step=0;

         timer2=setInterval(function() {
         step++;
         if (step>=20) {
         clearInterval(timer2);
         step=0;
         };
         start+=everystep;
         wrap.scrollLeft=start;
         },10)*/

    },2000)
};
autogo2();//调用
//每过两秒走一张图片；每张图片走也是一个缓慢的过程，自动走效果；

btns[0].onclick=function() {
    clearInterval(time12)
    clearInterval(time22)
    y++;
    if (y>divs.length/2) {
        y=0;
    };
    everygo2();
    autogo2();

};
btns[1].onclick=function() {
    clearInterval(time12)
    clearInterval(time22)
    y--;
    if (y<0) {

        y=divs.length/2;
    };
    everygo2();
    autogo2();

};




