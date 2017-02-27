
//下拉列表
$('#shortcut li').hover(function(){
	if($(this).children('dl').length){
		$(this).addClass('li-activate');
	}
},function(){
	if($(this).children('dl').length){
		$(this).removeClass('li-activate');
	}
});

$('.module-tabs').each(function(){
	$(this).HDtabs();
});
//搜索框
$('#keyword').focus(function(){
	$(this).val('');
});
$('#keyword').blur(function(){
	if($(this).val()==''){
		$(this).val($(this).attr('default'));
	}
});
// header-cart,我的京东 购物车
$('#header-cart dl').hover(function(){
	$(this).addClass('hover');
},function(){
	$(this).removeClass('hover');
});
// nav-list  首页滑动栏，添加图片做背景
$('#nav-list li').hover(function(){
	$(this).addClass('nav-activate');
},function(){
	if($(this).attr('activate')!='true'){
	$(this).removeClass('nav-activate');
}
});
//  item-hover  左边的侧边栏弹出层
$('#cate-list-show li').hover(function(){
	$(this).addClass('item-hover');
	$(this).children('.item-list').show();
	var _this_top=$(this).position().top,
		_child_height=$(this).children('.item-list').height();
	if(_this_top>_child_height){
		$(this).children('.item-list').css('top',(_this_top+45-_child_height));
	}
},function(){
	$(this).removeClass('item-hover');
});

//关闭×按钮点击
$('#cate-list-show .item-list-close').click(function(){
	$(this).parent().hide();
	return false;
});


//下面的晒单
function HDroll(id,time,speed){
	var time=time || 2500,
		speed=speed || 'slow',
		li_height=$('#'+id+' ul li:last').height();
	setInterval(function(){
		$('#'+id+' ul').prepend($('#'+id+' ul li:last').css("height","0px").animate({"height":li_height+"px"},"slow"));
	},time)
}
HDroll('hot-share');
HDroll('hot-goout');