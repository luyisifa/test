// JavaScript Document
window.onload=function(){
	//个人中心
	(function(){
		var grzx=document.getElementById('gerenzhongxin');
		var gr=document.getElementById('geren');
		grzx.onmouseover=function(){
				gr.style.display="block";
				gr.onmouseover=function(){
					gr.style.display="block";
				}
				gr.onmouseout=function(){
					gr.style.display="none";
				}
		}
        grzx.onmouseout=function(){
				gr.style.display="none";
		}

 	})();
	
    //搜索
    (function(){
		var text=document.getElementById("text")
		text.onfocus=function(){
			if(text.value=="搜索感兴趣的动漫"){text.value="";}
			
		};
		text.onblur=function(){
			if(text.value==""){text.value="搜索感兴趣的动漫";}
		};	
	})();
	
    //右边切换
	(function(){
		var yue=document.getElementById('yue');
		var nian=document.getElementById('nian');
		var content1=document.getElementById('right_center1');
		var content2=document.getElementById('right_center2');
		yue.onmouseover=function(){
			
			yue.setAttribute("class","s3 active");
			nian.setAttribute("class","s4");
			content1.style.display="block";
			content2.style.display="none";
	
		};
	
		nian.onmouseover=function(){
	
			yue.setAttribute("class","s3");
			nian.setAttribute("class","s4 active");	
			content1.style.display="none";
			content2.style.display="block";					
	
		};		
	
	})();
	
	//content切换
	(function(){
		var content1=document.getElementById('right_center1').getElementsByTagName('div');
		var content2=document.getElementById('right_center2').getElementsByTagName('div');
		var content3=document.getElementById('right_center3').getElementsByTagName('div');
		for(i=0;i<content1.length;i++){
			
			content1[i].onmouseover=function(){
				
				for(i=0;i<content1.length;i++){
					
					content1[i].removeAttribute("class");
					
					};
					
				this.setAttribute("class","active");
				
				};
				
		};
		for(i=0;i<content2.length;i++){
			
			content2[i].onmouseover=function(){
				
				for(i=0;i<content2.length;i++){
					
					content2[i].removeAttribute("class");
					
					};
					
				this.setAttribute("class","active");
				
				};
				
		};
		for(i=0;i<content3.length;i++){
			
			content3[i].onmouseover=function(){
				
				for(i=0;i<content3.length;i++){
					
					content3[i].removeAttribute("class");
					
					};
					
				this.setAttribute("class","active");
				
				};
				
		};		
	
	})();
}