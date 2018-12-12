var slider = new fz.Scroll('.ui-slider', {
    role: 'slider',
    indicator: true,
    autoplay: true,
    interval: 3000
});
/* 底部导航栏*/
$("._foot li").tap(function(){
    var i=$('._foot li').index(this);
    var
        arr1=["../images/community-foot1-1.png","../images/community-foot2-1.png","../images/community-foot4-1.png","../images/community-foot5-1.png"];
    var
        arr2=["../images/community-foot1.png","../images/community-foot2.jpg","../images/community-foot4.png","../images/community-foot5.png"];
    $('._foot li img').eq(i).attr('src',arr1[i]).parent().parent().siblings().find('img').each(function (a) {
        for (var j=0;j<$('._foot li').length;j++){
            if (i!=j){
                $('._foot li img').eq(j).attr('src',arr2[j]);
            }
        }
    });
    $('._foot li span').eq(i).css({"color":"#ff9934"}).parent().parent().siblings().find('span').css({"color":"#666"})
});
