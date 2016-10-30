
/*屏幕滚动的时候监控事件*/
$(document).scroll(function(){
	
	var _height = $(window).scrollTop();
	var _cur = _height+44;
    $(".floatBox").css({top:_cur});
})

/*返回顶部*/
function gotoTop(){
   $(window).scrollTop(0);
   $(".floatBox").css({top:44});
}

/*填充当前日历*/
var fillCurDate = function(){
	var _cur = new Date();
    var _year = _cur.getFullYear();
    var _month = _cur.getMonth()+1;
    var _day = _cur.getDate();
    $(".floatBox").find(".f_1").html(_year+"-"+_month+"-"+_day);
}();

/*qq在线聊天*/
function qqChart(){
	window.open("tencent://message/?uin=1668739195&Site=在线QQ&Menu=yes");
}


