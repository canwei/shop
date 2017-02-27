/*图片的轮播js*/
	 var oDiv = document.getElementById('pic');
	 var oPrev = oDiv.getElementsByTagName('p')[0];
	 var oNext = oDiv.getElementsByTagName('p')[1];
	 var oImg = oDiv.getElementsByTagName('img')[0];
	 var oUl = oDiv.getElementsByTagName('ul')[0];
	 var aLi = oDiv.getElementsByTagName('li');
	 
	 var arrSrc = ['images/L1.jpg','images/L2.jpg','images/L3.jpg','images/L4.jpg','images/L1.jpg','images/L2.jpg','images/L3.jpg'];
	 var num = 0;
	 
	 var timer1 = null;
	
	function autoPlay(){
		timer1 = setInterval(function(){
			num++;
			num%=arrSrc.length;
			fnTab();
		}, 1000);
	}
	autoPlay();
	oDiv.onmouseover = function (){
		clearTimeout( timer1 );
		oPrev.style.display = 'block';
		oNext.style.display = 'block';
	};
	oDiv.onmouseout = show;
	function show(){
	    autoPlay();
	    oPrev.style.display = 'none';
		oNext.style.display = 'none';
	 
	};
	
	
	
	// 初始化
	function fnTab(){
		oImg.src = arrSrc[num];
		for( var i=0; i<aLi.length; i++ ){
			aLi[i].className = '';
		}
		   aLi[num].className = 'active';
	}
	fnTab();
	
	for( var i=0; i<aLi.length; i++ ){
		aLi[i].index = i;			// 索引值
		aLi[i].onclick = function (){
			num = this.index;
			fnTab();
		};
	}
	
	oPrev.onclick = fnPrev;
	oNext.onclick = fnNext;
	
	function fnPrev(){
		num-=1;
		if(num < 0){ num = aLi.length-1; }
		fnTab(num);
    };
	
	function fnNext(){
		num+=1;
		if(num === aLi.length){ num = 0; }
		fnTab(num);
   };