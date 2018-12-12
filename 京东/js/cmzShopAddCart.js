var hd_site=document.getElementsByTagName('hd_site');
var hd_site_change=document.getElementById('hd_site_change');
var hd_site_as=hd_site_change.getElementsByTagName('a');
var hd_site_show=document.getElementById('hd_site_show');
var hd_site_sp=hd_site_show.getElementsByTagName('span');

	for (var i = 0; i < hd_site_as.length; i++) {
		hd_site_as[i].onclick=function(){
			for (var j = 0; j < hd_site_as.length; j++) {
				hd_site_as[j].className='';
			}
			this.className='hd-site-slct';
			hd_site_sp[0].innerHTML=this.innerHTML;
			// hd_site_change.style.display='none';
		};
	}
	
/*-------------------------------------------------------------------*/
function byClass(el,oClass){
	var aEl=el.getElementsByTagName("*");
	var arr=[];
	var reg=new RegExp("\\b"+oClass+"\\b","g");
	for (var i=0; i<aEl.length; i++){
		if (reg.test(aEl[i].className)){
			arr.push(aEl[i]);
		}
	}
	return arr;
}
window.onload=function (){
	var focus=document.getElementById("focus");
	var slider_panels=byClass(focus,'slider-panel');
	var slider_nav=byClass(focus,'slider-nav')[0];
	var slider_items=slider_nav.children;
	var slider_page=byClass(focus,'slider-page')[0];
	var slider_page_a=slider_page.children;
	var timer=null;
	var timer2=null;
	var num=0;
	function move(num){
		clearInterval(timer);
		for (var j=0; j<slider_panels.length; j++){
			slider_items[j].style.backgroundColor="red";
			slider_panels[j].style.opacity=0;
			slider_panels[j].style.filter='alpha(opacity=0)';
			
		}
		if(num<=0){
            slider_panels[5].style.opacity=1;
            slider_panels[5].style.filter='alpha(opacity=1)';
		}else if(num>5){
            slider_panels[0].style.opacity=1;
            slider_panels[0].style.filter='alpha(opacity=1)';
        }else{
            slider_panels[num-1].style.opacity=1;
            slider_panels[num-1].style.filter='alpha(opacity=1)';
        }
		slider_items[num].style.backgroundColor="#666";
		var ind=0;
		timer=setInterval(function (){
			ind+=0.02;
			if (ind>=1){
				ind=1;
				clearInterval(timer);
			}
			slider_panels[num].style.opacity=ind;
			slider_panels[num].style.filter='alpha(opacity='+ind*100+')';
		},25);
	}

	function automove() {
		num++;
		if (num>=slider_panels.length){
			num=0;
			move(num);
		}
		move(num);
	}

	timer2=setInterval(automove,2000); //进入页面执行

	for (var i=0; i<slider_items.length; i++){
		slider_items[i].index=i;
		slider_items[i].onmouseover=function (){
			clearInterval(timer2);
			num=this.index;//同步下标
			move(num);
		};
		slider_items[i].onmouseout=function (){
			timer2=setInterval(automove,2000);
		}
	}
	
	slider_page_a[0].onclick=function () {
		clearInterval(timer2);
		num--;
		if (num<0) {
			num=slider_panels.length-1;
		}
		move(num);
		timer2=setInterval(automove,2000);
	};
	slider_page_a[1].onclick=function () {
		clearInterval(timer2);
		num++;
		if (num>=slider_panels.length){
			num=0;
		}
		move(num);
		timer2=setInterval(automove,2000);
	}
};
// -----------------------focus end----------------------
$('.lifeserve_select').hover(function(){
    var i=$(this).index('.lifeserve_select');
	$('#lifeserve_tit a').animate({'padding-top':0},500,'swing');
    $('#lifeserve_show').css('display','block').animate({'top':'28px'},500,'swing');
    $('#lifeserve_show .lifeserve_showc').eq(i).addClass('life_show').siblings().removeClass('life_show')
})
$('#lifeserve .lifeserve_select').mouseenter(function(){
    $(this).addClass('lifeserve_selectColor').siblings().removeClass('lifeserve_selectColor');
});
$('.lifeserve_close').click(function(){
    var i=$(this).index('.lifeserve_select');
    $('#lifeserve_tit a').stop(true,true).animate({'padding-top':'41px'},500,'swing');
    $('#lifeserve_show').stop(true,true).animate({'top':'210px'},500,'swing',function(){
        $('#lifeserve_show').css('display','none');
    });
    $('#lifeserve_show .lifeserve_showc').removeClass('life_show');
    $('.lifeserve_select').removeClass('lifeserve_selectColor');
});
/*-----------------------------lifeserve	END----------------------------------------*/
/*-----------------------------todays	start----------------------------------------*/
var bigRolWrap=document.getElementById('bigRolWrap');
var bigRolCon=document.getElementById('bigRolCon');
var bigRolConAs=bigRolCon.getElementsByTagName('a');
var bigRollL=document.getElementById('bigRollL');
var bigRollR=document.getElementById('bigRollR');
var bigRolSlider=document.getElementById('bigRolSlider');
var bigRolltimer1=null,bigRolltimer2=null,bigRolIndex=0;
var bigRolConAW=bigRolConAs[0].offsetWidth;
function bigRollOnego(){
	clearInterval(bigRolltimer2);
	var bigRollStart=bigRolWrap.scrollLeft;
	//定义开始位置，是当前情况下的滚动条距离
	var bigRollEnd=bigRolConAW*bigRolIndex;
	//结束位置为图片的宽度*x，也就是说x的值决定了结束位置
	var bigRollOne=(bigRollEnd-bigRollStart)/20;
	//每张图分20次走完
	var bigRollNum=0;
	bigRolltimer2=setInterval(function(){
		bigRollNum++;
		if(bigRollNum>=20){
			clearInterval(bigRolltimer2);
			bigRollNum=0;
		};
		bigRollStart+=bigRollOne;
		bigRolWrap.scrollLeft=bigRollStart;
	},10);
};
//每一张的图片的走，每张图片实现缓慢的走通过计时器实现，确定步数，开始位置和结束为止
function bigRollAutogo(){
	clearInterval(bigRolltimer1);
	bigRolltimer1=setInterval(function(){
		bigRolIndex++;
		if(bigRolIndex>=bigRolConAs.length){
			bigRolIndex=1;
			bigRolWrap.scrollLeft=0;
			//实现瞬间走一张图片
		};
		bigRollOnego();
	},2000);
};
bigRollAutogo();
//进入页面调用自动走函数
//每一张图片实现缓慢的走
//每过两秒走一张图片
bigRollR.onclick=function(){
	clearInterval(bigRolltimer1);
	clearInterval(bigRolltimer2);
	bigRolIndex++;
	if(bigRolIndex>=bigRolConAs.length){
		bigRolIndex=1;
		bigRolWrap.scrollLeft=0;
	};
	bigRollOnego();
	bigRollAutogo();
};
//右点击函数
bigRollL.onclick=function(){
	clearInterval(bigRolltimer1);
	clearInterval(bigRolltimer2);
	bigRolIndex--;
	if(bigRolIndex<0){
		bigRolIndex=bigRolConAs.length-2;
		bigRolWrap.scrollLeft=bigRolConAW*(bigRolIndex+1);
	};
	//临界值判断
	bigRollOnego();
	bigRollAutogo();
};
//左点击函数
/*-----------------------------todays	END----------------------------------------*/
/*-----------------------------guess you like	start----------------------------------------*/
var guessNum=0;
$('.guessTitR').click(function(){
    guessNum++;
    if(guessNum>=$('.guessCon').length){
        guessNum=0
    }
   $('.guessCon').eq(guessNum).addClass('guessConSel').siblings().removeClass('guessConSel');
})
/*-----------------------------guess you like	END----------------------------------------*/
/*-----------------------------floor	start----------------------------------------*/
/*-----------------------------floor1	start----------------------------------------*/
$('.floorTitRight li').mouseenter(function(){
    var i=$(this).index('.floorTitRight li');
    if(i==0){
        $('.floorTitRight span').eq(0).css('display','none').siblings().css('display','block');
    }else if(i==$('.floorTitRight li').length-1){
        $('.floorTitRight span').eq(1).css('display','none').siblings().css('display','block');
    }else{
        $('.floorTitRight span').css('display','block');
        $('.floorTitRight span').eq(i-1).css('display','none');
        $('.floorTitRight span').eq(i).css('display','none');
    }
    $(this).addClass('floorTitRSel').siblings().removeClass('floorTitRSel');
    $('.floorConRight .floorConRCon').eq(i).addClass('floorConRConSel').siblings().removeClass('floorConRConSel');
})
function floor(bigRolWrap,bigRolCon,bigRollL,bigRollR,bigRolSlider){
	var bigRolWrap1=document.getElementById(bigRolWrap);
	var bigRolCon1=document.getElementById(bigRolCon);
	var bigRolConAs1=bigRolCon1.getElementsByTagName('a');
	var bigRollL1=document.getElementById(bigRollL);
	var bigRollR1=document.getElementById(bigRollR);
	var bigRolSlider1=document.getElementById(bigRolSlider);
	var bigRolSliderLis1=bigRolSlider1.getElementsByTagName('li');
	var bigRolltimer101=null,bigRolltimer201=null,bigRolIndex1=0;
	var bigRolConAW1=bigRolConAs1[0].offsetWidth;
	function bigRollOnego1(){
		clearInterval(bigRolltimer201);
		var bigRollStart1=bigRolWrap1.scrollLeft;
		//定义开始位置，是当前情况下的滚动条距离
		var bigRollEnd1=bigRolConAW1*bigRolIndex1;
		//结束位置为图片的宽度*x，也就是说x的值决定了结束位置
		var bigRollOne1=(bigRollEnd1-bigRollStart1)/20;
		//每张图分20次走完
		var bigRollNum1=0;
		bigRolltimer201=setInterval(function(){
			bigRollNum1++;
			if(bigRollNum1>=20){
				clearInterval(bigRolltimer201);
				bigRollNum1=0;
			};
			bigRollStart1+=bigRollOne1;
			bigRolWrap1.scrollLeft=bigRollStart1;
		},10);
	};
//每一张的图片的走，每张图片实现缓慢的走通过计时器实现，确定步数，开始位置和结束为止
	function bigRollAutogo1(){
		clearInterval(bigRolltimer101);
		bigRolltimer101=setInterval(function(){
			bigRolIndex1++;
			if(bigRolIndex1>=bigRolConAs1.length){
				bigRolIndex1=1;
				bigRolWrap1.scrollLeft=0;
				//实现瞬间走一张图片
			};
			// alert(bigRolWrap1.scrollLeft)
			bigRollOnego1();
			bigRollList1();
		},2000);
	};
	bigRollAutogo1();
//进入页面调用自动走函数
//每一张图片实现缓慢的走
//每过两秒走一张图片
	bigRollR1.onclick=function(){
		clearInterval(bigRolltimer101);
		clearInterval(bigRolltimer201);
		bigRolIndex1++;
		if(bigRolIndex1>=bigRolConAs1.length){
			bigRolIndex1=1;
			bigRolWrap1.scrollLeft=0;
		};
		bigRollOnego1();
		bigRollAutogo1();
		bigRollList1();
	};
//右点击函数
	bigRollL1.onclick=function(){
		clearInterval(bigRolltimer101);
		clearInterval(bigRolltimer201);
		bigRolIndex1--;
		if(bigRolIndex1<0){
			bigRolIndex1=bigRolConAs1.length-2;
			bigRolWrap1.scrollLeft=bigRolConAW1*(bigRolIndex1+1);
		};
		//临界值判断
		bigRollOnego1();
		bigRollAutogo1();
		bigRollList1();
	};
//左点击函数
	for(var i=0;i<bigRolSliderLis1.length;i++){
		bigRolSliderLis1[i].onclick=function(){
			clearInterval(bigRolltimer101);
			clearInterval(bigRolltimer201);
			for (var j = 0; j < bigRolSliderLis1.length; j++) {
				if(bigRolSliderLis1[j]==this){
					bigRolSliderLis1[j].className='bigRolSelect1';
					bigRolIndex1=j;
					bigRollOnego1();
					bigRollAutogo1();
				}else{
					bigRolSliderLis1[j].className='';
				};
			};
		};
	};
	function bigRollList1(){
		for(var i=0;i<bigRolSliderLis1.length;i++){
			bigRolSliderLis1[i].className='';
		};
		if(bigRolIndex1==bigRolSliderLis1.length){
			bigRolSliderLis1[0].className='bigRolSelect1';
		}else{
			bigRolSliderLis1[bigRolIndex1].className='bigRolSelect1';
		};

	};
}
floor('bigRolWrap1','bigRolCon1','bigRollL1','bigRollR1','bigRolSlider1');
/*var bigRolWrap1=document.getElementById('bigRolWrap1');
var bigRolCon1=document.getElementById('bigRolCon1');
var bigRolConAs1=bigRolCon1.getElementsByTagName('a');
var bigRollL1=document.getElementById('bigRollL1');
var bigRollR1=document.getElementById('bigRollR1');
var bigRolSlider1=document.getElementById('bigRolSlider1');
var bigRolSliderLis1=bigRolSlider1.getElementsByTagName('li');
var bigRolltimer101=null,bigRolltimer201=null,bigRolIndex1=0;
var bigRolConAW1=bigRolConAs1[0].offsetWidth;
function bigRollOnego1(){
    clearInterval(bigRolltimer201);
    var bigRollStart1=bigRolWrap1.scrollLeft;
    //定义开始位置，是当前情况下的滚动条距离
    var bigRollEnd1=bigRolConAW1*bigRolIndex1;
    //结束位置为图片的宽度*x，也就是说x的值决定了结束位置
    var bigRollOne1=(bigRollEnd1-bigRollStart1)/20;
    //每张图分20次走完
    var bigRollNum1=0;
    bigRolltimer201=setInterval(function(){
        bigRollNum1++;
        if(bigRollNum1>=20){
            clearInterval(bigRolltimer201);
            bigRollNum1=0;
        };
        bigRollStart1+=bigRollOne1;
        bigRolWrap1.scrollLeft=bigRollStart1;
    },10);
};
//每一张的图片的走，每张图片实现缓慢的走通过计时器实现，确定步数，开始位置和结束为止
function bigRollAutogo1(){
    clearInterval(bigRolltimer101);
    bigRolltimer101=setInterval(function(){
        bigRolIndex1++;
        if(bigRolIndex1>=bigRolConAs1.length){
            bigRolIndex1=1;
            bigRolWrap1.scrollLeft=0;
            //实现瞬间走一张图片
        };
        // alert(bigRolWrap1.scrollLeft)
        bigRollOnego1();
        bigRollList1();
    },2000);
};
bigRollAutogo1();
//进入页面调用自动走函数
//每一张图片实现缓慢的走
//每过两秒走一张图片
bigRollR1.onclick=function(){
    clearInterval(bigRolltimer101);
    clearInterval(bigRolltimer201);
    bigRolIndex1++;
    if(bigRolIndex1>=bigRolConAs1.length){
        bigRolIndex1=1;
        bigRolWrap1.scrollLeft=0;
    };
    bigRollOnego1();
    bigRollAutogo1();
    bigRollList1();
};
//右点击函数
bigRollL1.onclick=function(){
    clearInterval(bigRolltimer101);
    clearInterval(bigRolltimer201);
    bigRolIndex1--;
    if(bigRolIndex1<0){
        bigRolIndex1=bigRolConAs1.length-2;
        bigRolWrap1.scrollLeft=bigRolConAW1*(bigRolIndex1+1);
    };
    //临界值判断
    bigRollOnego1();
    bigRollAutogo1();
    bigRollList1();
};
//左点击函数
for(var i=0;i<bigRolSliderLis1.length;i++){
    bigRolSliderLis1[i].onclick=function(){
        clearInterval(bigRolltimer101);
        clearInterval(bigRolltimer201);
        for (var j = 0; j < bigRolSliderLis1.length; j++) {
            if(bigRolSliderLis1[j]==this){
                bigRolSliderLis1[j].className='bigRolSelect1';
                bigRolIndex1=j;
                bigRollOnego1();
                bigRollAutogo1();
            }else{
                bigRolSliderLis1[j].className='';
            };
        };
    };
};
function bigRollList1(){
    for(var i=0;i<bigRolSliderLis1.length;i++){
        bigRolSliderLis1[i].className='';
    };
    if(bigRolIndex1==bigRolSliderLis1.length){
        bigRolSliderLis1[0].className='bigRolSelect1';
    }else{
        bigRolSliderLis1[bigRolIndex1].className='bigRolSelect1';
    };

};*/
/*-----------------------------floor1	END----------------------------------------*/
/*-----------------------------floor2	start----------------------------------------*/
floor('bigRolWrap2','bigRolCon2','bigRollL2','bigRollR2','bigRolSlider2');
/*-----------------------------floor2	END----------------------------------------*/
/*-----------------------------floor3	start----------------------------------------*/
floor('bigRolWrap3','bigRolCon3','bigRollL3','bigRollR3','bigRolSlider3');
/*-----------------------------floor3	END----------------------------------------*/
/*-----------------------------floor4	start----------------------------------------*/
floor('bigRolWrap4','bigRolCon4','bigRollL4','bigRollR4','bigRolSlider4');
/*-----------------------------floor3	END----------------------------------------*/
/*-----------------------------floor5	start----------------------------------------*/
floor('bigRolWrap5','bigRolCon5','bigRollL5','bigRollR5','bigRolSlider5');
/*-----------------------------floor5	END----------------------------------------*/
/*-----------------------------floor6	start----------------------------------------*/
floor('bigRolWrap6','bigRolCon6','bigRollL6','bigRollR6','bigRolSlider6');
/*-----------------------------floor5	END----------------------------------------*/
/*-----------------------------floor7	start----------------------------------------*/
floor('bigRolWrap7','bigRolCon7','bigRollL7','bigRollR7','bigRolSlider7');
/*-----------------------------floor7	END----------------------------------------*/
/*-----------------------------floor8	start----------------------------------------*/
floor('bigRolWrap8','bigRolCon8','bigRollL8','bigRollR8','bigRolSlider8');
/*-----------------------------floor8	END----------------------------------------*/
/*-----------------------------floor9	start----------------------------------------*/
floor('bigRolWrap9','bigRolCon9','bigRollL9','bigRollR9','bigRolSlider9');
/*-----------------------------floor9	END----------------------------------------*/
/*-----------------------------floor10	start----------------------------------------*/
floor('bigRolWrap10','bigRolCon10','bigRollL10','bigRollR10','bigRolSlider10');
/*-----------------------------floor10	END----------------------------------------*/
/*-----------------------------floor11	start----------------------------------------*/
floor('bigRolWrap11','bigRolCon11','bigRollL11','bigRollR11','bigRolSlider11');
/*-----------------------------floor11	END----------------------------------------*/
/*-----------------------------floor12	start----------------------------------------*/
floor('bigRolWrap12','bigRolCon12','bigRollL12','bigRollR12','bigRolSlider12');
/*-----------------------------floor12	END----------------------------------------*/
/*-----------------------------elevator show	start----------------------------------------*/
function eleShow(){
    var docH=document.documentElement.offsetHeight;
    var winH=document.documentElement.clientHeight;
    // var floorStartH = $('.floor')[0].offsetHeight;
    var floorEndH = $('.floor')[11].offsetHeight;
    var scrollEnd=document.documentElement.scrollTop+document.body.scrollTop;
    if((scrollEnd > $('.floor')[0].offsetTop - winH)&&(scrollEnd < $('.floor')[11].offsetTop + floorEndH - 20)){
        $('#elevator').css('display','block');
    }else{
        $('#elevator').css('display','none');
    }
};
eleShow()
/*-----------------------------elevator show	end----------------------------------------*/
/*-----------------------------elevator csroll	start----------------------------------------*/
var scrollNum=0,scrollStart=0,arr=[];
for(var i=0;i<$('.floor').length;i++){
    arr[i]=true;
}
/*-----------------------------elevator   resize	start----------------------------------------*/
function elevatorResize(){
    var winH=$(window).height();
    var winW=$(window).width();
    $('#elevator')[0].style.top=(winH-$('#elevator').height())/2+'px';
    $('#elevator')[0].style.left=(winW-1210)/2-$('#elevator').width()-10+'px';
}
elevatorResize();

$(window).resize(function(){
    /*var winH=$(window).height();
     var winW=$(window).width();
     $('#elevator')[0].style.top=(winH-$('#elevator').height())/2+'px';
     $('#elevator')[0].style.left=(winW-1210)/2-$('#elevator').width()-10+'px';*/
    elevatorResize();
})
/*-----------------------------elevator resize	end----------------------------------------*/
window.onscroll=function(){
    var docH=document.documentElement.offsetHeight;
    var winH=document.documentElement.clientHeight;
    var scrollEnd=document.documentElement.scrollTop+document.body.scrollTop;
    // alert(scrollEnd)
    // alert($('.floor')[0].offsetTop - winH)
    // alert($('.floor')[11].offsetTop + floorH)
    /*-----------------------------elevator show	start----------------------------------------*/
    /*if((scrollEnd > $('.floor')[0].offsetTop - winH)&&(scrollEnd < $('.floor')[11].offsetTop + $('.floor')[11].offsetHeight - 20)){
        $('#elevator').css('display','block');
    }else{
        $('#elevator').css('display','none');
    }*/
    eleShow()
    elevatorResize();
    /*-----------------------------elevator show	end----------------------------------------*/
    if(scrollEnd>scrollStart) {
        for (var i = 0; i < $('.floor').length; i++) {
            var floorH = $('.floor')[i].offsetHeight;

            // console.log(i)
            if (i == 0) {
                if (scrollEnd > $('.floor')[0].offsetTop - winH && scrollEnd < $('.floor')[0].offsetTop + floorH - 20) {
                    if (arr[i] == true) {
                        $('.floorTitBg div').remove();
                        $('.floorTitBg').eq(i).append('<div>&nbsp;' + (i + 1) + 'F</div>');
                        $('.floorTitBg div').css({
                            'z-index': '10',
                            'width': '31px',
                            'height': '0',
                            'position': 'absolute',
                            'left': '0',
                            'top': '0',
                            'background': 'url(../images/cmz_floorbg.png) 0 0 no-repeat'
                        }).stop().animate({'height': '25px'}, 300, 'swing');
                       /*------------------------content    change  start---------------------------*/
                        for(var eleIndex=0;eleIndex<$('#elevator a').length;eleIndex++){
                            $('#elevator a').eq(eleIndex).html((eleIndex+1)+'F');
                        };
                        $('#elevator a').css('color','#666');
                        $('#elevator a').eq(0).html('服饰');
                        $('#elevator a').eq(0).css('color','#C81623');
                        /*------------------------content    change end---------------------------*/
                        for (var j = 0; j < $('.floor').length; j++) {
                            arr[j] = true;
                        }
                        arr[i] = false;
                    }
                }
            } else {
                if (scrollEnd < $('.floor')[i].offsetTop + floorH - 20 && scrollEnd > $('.floor')[i].offsetTop - 110 - 20) {
                    if (arr[i] == true) {
                        $('.floorTitBg div').remove();
                        $('.floorTitBg').eq(i).append('<div>&nbsp;' + (i + 1) + 'F</div>');
                        $('.floorTitBg div').css({
                            'z-index': '10',
                            'width': '31px',
                            'height': '0',
                            'position': 'absolute',
                            'left': '0',
                            'top': '0',
                            'background': 'url(../images/cmz_floorbg.png) 0 0 no-repeat'
                        }).stop().animate({'height': '25px'}, 300, 'swing');
                        /*------------------------content    change  start---------------------------*/
                        for(var eleIndex=0;eleIndex<$('#elevator a').length;eleIndex++) {
                            $('#elevator a').eq(eleIndex).html((eleIndex + 1) + 'F');
                        };
                        if(i==1){
                            $('#elevator a').eq(1).html('美妆');
                        }else if(i==2){
                            $('#elevator a').eq(2).html('手机');
                        }else if(i==3){
                            $('#elevator a').eq(3).html('家电');
                        }else if(i==4){
                            $('#elevator a').eq(4).html('数码');
                        }else if(i==5){
                            $('#elevator a').eq(5).html('运动');
                        }else if(i==6){
                            $('#elevator a').eq(6).html('居家');
                        }else if(i==7){
                            $('#elevator a').eq(7).html('母婴');
                        }else if(i==8){
                            $('#elevator a').eq(8).html('食品');
                        }else if(i==9){
                            $('#elevator a').eq(9).html('图书');
                        }else if(i==10){
                            $('#elevator a').eq(10).html('车品');
                        }else if(i==11){
                            $('#elevator a').eq(11).html('服务');
                        }
                        $('#elevator a').css('color','#666');
                        $('#elevator a').eq(i).css('color','#C81623');
                        /*------------------------content    change  end---------------------------*/

                        for (var j = 0; j < $('.floor').length; j++) {
                            arr[j] = true;
                        }
                        arr[i] = false;
                    }
                }
            }
        }
    }else if(scrollEnd<scrollStart){

        for (var i = 0; i < $('.floor').length; i++) {
            var floorH = $('.floor')[i].offsetHeight;
            if (i == 0) {
                if (scrollEnd > $('.floor')[0].offsetTop - winH && scrollEnd < $('.floor')[0].offsetTop + floorH - 20) {
                    if (arr[i] == true) {
                        $('.floorTitBg div').remove();
                        $('.floorTitBg').eq(i).append('<div>&nbsp;' + (i + 1) + 'F</div>');
                        $('.floorTitBg div').css({
                            'z-index': '10',
                            'width': '31px',
                            'height': '0',
                            'position': 'absolute',
                            'left': '0',
                            'top': '0',
                            'background': 'url(../images/cmz_floorbg.png) 0 0 no-repeat'
                        }).stop().animate({'height': '25px'}, 300, 'swing');
                        /*------------------------content    change  start---------------------------*/
                        for(var eleIndex=0;eleIndex<$('#elevator a').length;eleIndex++){
                            $('#elevator a').eq(eleIndex).html((eleIndex+1)+'F');
                        };
                        $('#elevator a').css('color','#666');
                        $('#elevator a').eq(0).html('服饰');
                        $('#elevator a').eq(0).css('color','#C81623');
                        /*------------------------content    change end---------------------------*/
                        for (var j = 0; j < $('.floor').length; j++) {
                            arr[j] = true;
                        }
                        arr[i] = false;
                    }
                }
            } else {
                if (scrollEnd < $('.floor')[i].offsetTop + floorH - 20 && scrollEnd > $('.floor')[i].offsetTop - 110 - 20) {
                    if (arr[i] == true) {
                        $('.floorTitBg div').remove();
                        $('.floorTitBg').eq(i).append('<div>&nbsp;' + (i + 1) + 'F</div>');
                        $('.floorTitBg div').css({
                            'z-index': '10',
                            'width': '31px',
                            'height': '0',
                            'position': 'absolute',
                            'left': '0',
                            'top': '0',
                            'background': 'url(../images/cmz_floorbg.png) 0 0 no-repeat'
                        }).stop().animate({'height': '25px'}, 300, 'swing');
                        /*------------------------content    change  start---------------------------*/
                        for(var eleIndex=0;eleIndex<$('#elevator a').length;eleIndex++) {
                            $('#elevator a').eq(eleIndex).html((eleIndex + 1) + 'F');
                        };
                        if(i==1){
                            $('#elevator a').eq(1).html('美妆');
                        }else if(i==2){
                            $('#elevator a').eq(2).html('手机');
                        }else if(i==3){
                            $('#elevator a').eq(3).html('家电');
                        }else if(i==4){
                            $('#elevator a').eq(4).html('数码');
                        }else if(i==5){
                            $('#elevator a').eq(5).html('运动');
                        }else if(i==6){
                            $('#elevator a').eq(6).html('居家');
                        }else if(i==7){
                            $('#elevator a').eq(7).html('母婴');
                        }else if(i==8){
                            $('#elevator a').eq(8).html('食品');
                        }else if(i==9){
                            $('#elevator a').eq(9).html('图书');
                        }else if(i==10){
                            $('#elevator a').eq(10).html('车品');
                        }else if(i==11){
                            $('#elevator a').eq(11).html('服务');
                        }
                        $('#elevator a').css('color','#666');
                        $('#elevator a').eq(i).css('color','#C81623');
                        /*------------------------content    change  end---------------------------*/
                        for (var j = 0; j < $('.floor').length; j++) {
                            arr[j] = true;
                        }
                        arr[i] = false;
                    }
                }
            }
        }
    }
    scrollStart=scrollEnd;
}
/*-----------------------------elevator scroll	end----------------------------------------*/
/*-----------------------------floorTitBg	start----------------------------------------*/

/*-----------------------------floorTitBg	END----------------------------------------*/

/*-----------------------------floor	END----------------------------------------*/
/*-----------------------------elevator	start----------------------------------------*/

/*-----------------------------elevator click	start----------------------------------------*/
var eleClickTimer=null;
$('#elevator ul li').click(function(){
    clearInterval(eleClickTimer);
    var i=$(this).index();
    /*if(i==0){
        $('#elevator a').eq(0).html('服饰');
    }else if(i==1){
        $('#elevator a').eq(1).html('美妆');
    }else if(i==2){
        $('#elevator a').eq(2).html('手机');
    }else if(i==3){
        $('#elevator a').eq(3).html('家电');
    }else if(i==4){
        $('#elevator a').eq(4).html('数码');
    }else if(i==5){
        $('#elevator a').eq(5).html('运动');
    }else if(i==6){
        $('#elevator a').eq(6).html('居家');
    }else if(i==7){
        $('#elevator a').eq(7).html('母婴');
    }else if(i==8){
        $('#elevator a').eq(8).html('食品');
    }else if(i==9){
        $('#elevator a').eq(9).html('图书');
    }else if(i==10){
        $('#elevator a').eq(10).html('车品');
    }else if(i==11){
        $('#elevator a').eq(11).html('服务');
    }
    $('#elevator a').eq(i).css({'color':'#fff'});*/
    var eleNum=0;
    var winH=document.documentElement.clientHeight;
    var scrollStart=document.documentElement.scrollTop+document.body.scrollTop;
    var scrollEnd=$('.floor')[i].offsetTop - 20;
    var eleStep=(scrollEnd-scrollStart)/20;
    eleClickTimer=setInterval(function () {
        eleNum++;
        if(eleNum>=20){
            clearInterval(eleClickTimer);
        }
        scrollStart+=eleStep;
        document.body.scrollTop=scrollStart;
         document.documentElement.scrollTop=scrollStart;
    },10);
})
/*-----------------------------elevator click	end----------------------------------------*/

/*-----------------------------elevator hover	start----------------------------------------*/
$('#elevator ul li').hover(function(){
    var i=$(this).index();
    if(i==0){
        $('#elevator a').eq(0).html('服饰');
    }else if(i==1){
        $('#elevator a').eq(1).html('美妆');
    }else if(i==2){
        $('#elevator a').eq(2).html('手机');
    }else if(i==3){
        $('#elevator a').eq(3).html('家电');
    }else if(i==4){
        $('#elevator a').eq(4).html('数码');
    }else if(i==5){
        $('#elevator a').eq(5).html('运动');
    }else if(i==6){
        $('#elevator a').eq(6).html('居家');
    }else if(i==7){
        $('#elevator a').eq(7).html('母婴');
    }else if(i==8){
        $('#elevator a').eq(8).html('食品');
    }else if(i==9){
        $('#elevator a').eq(9).html('图书');
    }else if(i==10){
        $('#elevator a').eq(10).html('车品');
    }else if(i==11){
        $('#elevator a').eq(11).html('服务');
    }
    $('#elevator a').eq(i).css({'color':'#fff','background':'#C81623'});
},
function(){
    var i=$(this).index();
    var floorH = $('.floor')[i].offsetHeight;
    var winH=document.documentElement.clientHeight;
    var scrollEnd=document.documentElement.scrollTop+document.body.scrollTop;

    if(i==0){
        if (scrollEnd > $('.floor')[0].offsetTop - winH && scrollEnd < $('.floor')[0].offsetTop + floorH - 20) {
            // $('#elevator a').eq(i).css({'color':'#666','background':'#fff'});
            $('#elevator a').eq(0).html('服饰');
            $('#elevator a').eq(0).css({'color':'#C81623','background':'#fff'});
        }else{
            $('#elevator a').eq(0).html('1F');
            $('#elevator a').eq(0).css({'color':'#666','background':'#fff'});
        }
    }
    else if (scrollEnd < $('.floor')[i].offsetTop + floorH - 20 && scrollEnd > $('.floor')[i].offsetTop - 110 - 20) {
        if(i==1){
            $('#elevator a').eq(1).html('美妆');
        }else if(i==2){
            $('#elevator a').eq(2).html('手机');
        }else if(i==3){
            $('#elevator a').eq(3).html('家电');
        }else if(i==4){
            $('#elevator a').eq(4).html('数码');
        }else if(i==5){
            $('#elevator a').eq(5).html('运动');
        }else if(i==6){
            $('#elevator a').eq(6).html('居家');
        }else if(i==7){
            $('#elevator a').eq(7).html('母婴');
        }else if(i==8){
            $('#elevator a').eq(8).html('食品');
        }else if(i==9){
            $('#elevator a').eq(9).html('图书');
        }else if(i==10){
            $('#elevator a').eq(10).html('车品');
        }else if(i==11){
            $('#elevator a').eq(11).html('服务');
        }
        $('#elevator a').eq(i).css({'color':'#C81623','background':'#fff'});
    }else{
        $('#elevator a').eq(i).html((i+1)+'F');
        $('#elevator a').eq(i).css({'color':'#666','background':'#fff'});
    }
})
/*-----------------------------elevator hover	end----------------------------------------*/
$('.marLeft1').hover(function(){
    $('.marIngGo').stop(true,false).animate({'margin-left':'15px'},300,'swing');
},function(){
    $('.marIngGo').animate({'margin-left':'30px'},300,'swing');
})
$('.marLeftMain .marLeft2').hover(function(){
    var i=$(this).index('.marLeftMain .marLeft2');
    $('.marLeftMain .marleftImg2').eq(i).stop(true,false).animate({'margin-left':'-10px'},300,'swing');
},function(){
    var i=$(this).index('.marLeftMain .marLeft2');
    $('.marLeftMain .marleftImg2').eq(i).animate({'margin-left':'0'},300,'swing');
})

/*-----------------------------elevator	END----------------------------------------*/
/*-----------------------------everyday margin start----------------------------------------*/
var seaScr=document.getElementById('seamlessScrolling');
var seaScrMain=document.getElementById('seaScrMain');
var seaScrMainLis=seaScrMain.getElementsByTagName('li');
var seaScrMainLisH=seaScrMainLis[0].offsetHeight;
var seaScrTime=null,seaScrTime2=null,seaScrLength=seaScrMainLis.length-2;
function seaScrAutogo() {
    seaScrTime2=setInterval(function() {
        seaScr.scrollTop++;
        if (seaScr.scrollTop>=seaScrMainLisH*seaScrLength) {
            seaScr.scrollTop=0;
        };
        if (seaScr.scrollTop%(seaScrMainLisH)==0) {
            clearInterval(seaScrTime);
            clearInterval(seaScrTime2);
            seaScrTime=setTimeout(function() {
                seaScrAutogo();
            },1000)
        };
    },10)
};
//封装函数减少代码量，函数代表的是计时器的执行

seaScrAutogo();//进入页面自动执行；
seaScr.onmouseover=function() {
    clearInterval(seaScrTime);
    clearInterval(seaScrTime2);
};
seaScr.onmouseout=function() {
    seaScrAutogo();
};
/*-----------------------------everyday margin	END----------------------------------------*/


