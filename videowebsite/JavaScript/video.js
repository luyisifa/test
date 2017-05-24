// JavaScript Document

window.onload=function(){

	
//动态设置整体高度
(function(){
	document.getElementById("video_bg").style.height=window.innerHeight+"px";
	window.onresize=function(){
			document.getElementById("video_bg").style.height=window.innerHeight+"px";
	};
})();



	
//视频的播放与暂停	以及图片的切换
var video=document.getElementById('video')
var img=document.getElementById('list_button').getElementsByTagName('img');
img[0].onclick=function(){
	  if(video.paused){
	      video.play();
          img[0].setAttribute('src','v_images/play.png') 
	       }
	  else{	
	        video.pause();
            img[0].setAttribute('src','v_images/pause.png') 
	       } 
	  };
video.onclick=function(){
	  if(video.paused){
	      video.play();
          img[0].setAttribute('src','v_images/play.png') 
	       }
	  else{	
	        video.pause();
            img[0].setAttribute('src','v_images/pause.png') 
	       } 
	  };	  
//切换弹幕图标
var  d=1;
img[2].onclick=function(){
		if(d){
			img[2].setAttribute('src','v_images/danmuguan.png') 
			d=0;
	    }    
	  	else{
			img[2].setAttribute('src','v_images/danmu.png') 	
			d=1;
	    } 
};	


//切换静音TRUE or FALSE	
var voice=document.getElementById('voice')
var  t=1;
(function(){
	img[3].onclick=function(){
			if(t){
				img[3].setAttribute('src','v_images/jinyin.png') 
				video.muted=true;
				t=0;
				voice.value=0;
			}    
			else{
				img[3].setAttribute('src','v_images/shengyin.png') 	
				video.muted=false;
				voice.value=10;
				t=1;
			} 
	};	
})();
//改变声音的值
voice.onchange=function(){
	video.volume=voice.value/10;
	
};
//快进           
var jdt=document.getElementById( "kuaijin");
jdt.onmousedown=function(){
	 video.pause();
	 img[0].setAttribute('src','v_images/pause.png') 
		jdt.onchange=function(){
				 video.currentTime=parseInt(document.getElementById('kuaijin').value/10000*video.duration)
				 video.play();
				 img[0].setAttribute('src','v_images/play.png') 
		}; 

};

(function(){
var sp=document.getElementById('video')	
sp.ontimeupdate=function kj(){
 			
			var ship=sp.duration;
			var shi=sp.currentTime;
            
           document.getElementById('kuaijin').value=parseInt( shi/ship*10000);

			
			//时间显示开始
			
			var shi_ho=parseInt(shi/3600);
			if(shi_ho>=10){shi_ho=shi_ho.toString()}
			else{shi_ho='0'+shi_ho}
			
			var shi_mi=parseInt((shi%3600)/60);
			if(shi_mi>=10){shi_mi=shi_mi.toString()}
			else{shi_mi='0'+shi_mi}
			
			var shi_se=parseInt(shi%60);
			if(shi_se>=10){shi_se=shi_se.toString()}
			else{shi_se='0'+shi_se}
			
			
			
			var ship_ho=parseInt(ship/3600);
			if(ship_ho>=10){ship_ho=ship_ho.toString()}
			else{ship_ho='0'+ship_ho}
			
			var ship_mi=parseInt((ship%3600)/60);
			if(ship_mi>=10){ship_mi=ship_mi.toString()}
			else{ship_mi='0'+ship_mi}
			
			var ship_se=parseInt(ship%60);
			if(ship_se>=10){ship_se=ship_se.toString()}
			else{ship_se='0'+ship_se}


			if(parseInt(ship)>3600)
			{    
			   
				var shi_t=shi_ho+':'+shi_mi+':'+shi_se;
				var ship_t=ship_ho+':'+ship_mi+':'+ship_se;
				document.getElementById('sjxs').innerHTML=shi_t+'/'+ship_t;
			}
			if(3600>parseInt(ship) && parseInt(ship)>60)
			{    
				var shi_t=shi_mi+':'+shi_se;
				var ship_t=ship_mi+':'+ship_se;
				document.getElementById('sjxs').innerHTML=shi_t+'/'+ship_t;		   
				
			}
			if(parseInt(ship)<60)
			{    
				var shi_t=shi_se;
				var ship_t=ship_se;
				document.getElementById('sjxs').innerHTML=shi_t+'/'+ship_t;		   
				
			}	
			
			//时间显示结束
};

})();
	

//全屏
(function(){
		var sp=document.getElementById('video')
		document.getElementById('quanping').onclick=function(){
		
		if(sp.mozRequestFullScreen){sp.mozRequestFullScreen();}
		if(sp.requestFullScreen){sp.requestFullScreen();}
	
		if(sp.msRequestFullscreen){sp.msRequestFullscreen();}  //奇葩ie小写screen
		
		if(sp.webkitRequestFullScreen){sp.webkitRequestFullScreen();}
		};
})();

};
