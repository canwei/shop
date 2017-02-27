// 左边的侧边栏
$(function() {  
    var top = $('#sidebar').offset().top ;//1200px
	var limit = $('#pc-digit').offset().top ;///1208px   第一个 1
	var lim = $('#home-dispath').offset().top ;///1660px  2
	var li = $('#beautiful-people').offset().top ;///2112px  3
	var lai = $('#popul').offset().top ;///2564px  4
	var food = $('#food').offset().top ;///3016px  5
	var video = $('#pic-video').offset().top ;///3340px 6
	
    var maxY = 4000 - $('#sidebar').outerHeight();  //4254-312 = 3842,开始隐藏sidebar
	var oUl = document.getElementById('ul1');
	var aLi = oUl.getElementsByTagName('li');
	
	aLi[0].onclick = function(){
		var t = $(window).scrollTop();
		$('body,html').animate({'scrollTop':1208},300);
		
		for(var i=0;i<aLi.length;i++){
				aLi[i].className = '';
			}
		   this.className = 'active';
	}
	
	aLi[1].onclick = function(){
		var t = $(window).scrollTop();
		$('body,html').animate({'scrollTop':1660},300);
		for(var i=0;i<aLi.length;i++){
				aLi[i].className = '';
			}
		   this.className = 'active';
	}
	aLi[2].onclick = function(){
		var t = $(window).scrollTop();
		$('body,html').animate({'scrollTop':2112},200);
		for(var i=0;i<aLi.length;i++){
				aLi[i].className = '';
			}
		   this.className = 'active';
	}
	
	aLi[3].onclick = function(){
		var t = $(window).scrollTop();
		$('body,html').animate({'scrollTop':2564},300);
		for(var i=0;i<aLi.length;i++){
				aLi[i].className = '';
			}
		   this.className = 'active';
	}
	aLi[4].onclick = function(){
		var t = $(window).scrollTop();
		$('body,html').animate({'scrollTop':3016},300);
		for(var i=0;i<aLi.length;i++){
				aLi[i].className = '';
			}
		   this.className = 'active';
	}
	aLi[5].onclick = function(){
		var t = $(window).scrollTop();
		$('body,html').animate({'scrollTop':3340},300);
		for(var i=0;i<aLi.length;i++){
				aLi[i].className = '';
			}
		   this.className = 'active';
	}
	
	aLi[6].onclick = function(){
		var t = $(window).scrollTop();
		$('body,html').animate({'scrollTop':0},1000);
		for(var i=0;i<aLi.length;i++){
				aLi[i].className = '';
			}
		   this.className = 'active';
	}
	
	
    $(window).scroll(function(evt) {  
        var y = $(this).scrollTop(); //当前滚动条的的距离 
        if (y > top) {  
            if (y < maxY) {  
                $('#sidebar').addClass('fixed').removeAttr('style');  
			
				if(1000<y && y<1610)
				{
				   $('#ul1 li').removeClass('active');
				   $('#ul1 li').eq(0).addClass('active');
				}
				 if(1610<y && y<2062)
				{
				   $('#ul1 li').removeClass('active');
				   $('#ul1 li').eq(1).addClass('active');
				}
				if(2062<y && y<2514)
				{
				   $('#ul1 li').removeClass('active');
				   $('#ul1 li').eq(2).addClass('active');
				}
				if(2514<y && y<2966)
				{
				   $('#ul1 li').removeClass('active');
				   $('#ul1 li').eq(3).addClass('active');
				}
				if(2966<y && y<3290)
				{
				   $('#ul1 li').removeClass('active');
				   $('#ul1 li').eq(4).addClass('active');
				}
				if(3290<y && y<3550)
				{
				   $('#ul1 li').removeClass('active');
				   $('#ul1 li').eq(5).addClass('active');
				}
				if(3550<y )
				{
				   $('#ul1 li').removeClass('active');
				   $('#ul1 li').eq(6).addClass('active');
				}
				
            } else {  
                $('#sidebar').removeClass('fixed').css({  
                    position: 'absolute',  
                    top: (maxY - top) + 'px'  
                });  
            }  
        } else {  
            $('#sidebar').removeClass('fixed');
			$('#ul1 li').removeClass('active');  
        } 
		 
    }); 
	
	
	
	
});  