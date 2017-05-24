// JavaScript Document


window.onload=function(){
//登录注册切换
//	(function(){
//		document.getElementById('denglu').onclick=function(){
//			document.getElementById('article1').style.display="none";
//			document.getElementById('article2').style.display="block";
//			return false;
//			};	
//	    document.getElementById('zuce').onclick=function(){
//			document.getElementById('article1').style.display="block";
//			document.getElementById('article2').style.display="none";
//			return false;		
//			};	
//	
//	    document.getElementById('zuce2').onclick=function(){
//			document.getElementById('article1').style.display="block";
//			document.getElementById('article2').style.display="none";
//			return false;		
//			};
//	
//	})();
	//注册验证
	(function(){
		//随机验证
		var start=String.fromCharCode(Math.floor(Math.random()*10+48),Math.floor(Math.random()*26+65),Math.floor(Math.random()*26+97),Math.floor(Math.random()*10+48))
			document.getElementById('zctext_btn').value=start;	
		document.getElementById('zctext_btn').onclick=function(){
			var a=String.fromCharCode(Math.floor(Math.random()*10+48),Math.floor(Math.random()*26+65),Math.floor(Math.random()*26+97),Math.floor(Math.random()*10+48))
			document.getElementById('zctext_btn').value=a;
			return false;
			};
			

		//user验证
		document.getElementById('zcuser').onblur=function user(){
			var b=document.getElementById('zcuser').parentNode.getElementsByTagName('b');
			var pattern=/^[a-zA-Z]([a-zA-Z0-9_]){5,15}$/g;
			var u=document.getElementById('zcuser');
			//alert(!pattern.test(u.value))
			if(u.value==""){
				b[0].style.display="inline-block";
				b[1].style.display="none";
				document.getElementById('zctijiao').onclick=function(){	return false;};
			}
			else if(!pattern.test(u.value)){
				b[0].style.display="none";
				b[1].style.display="inline-block";
				document.getElementById('zctijiao').onclick=function(){	return false;};
			}
			else{
				b[0].style.display="none";
				b[1].style.display="none";
				document.getElementById('zctijiao').onclick=function(){	return true;};
			}

		};
		//email验证
		document.getElementById('zcemail').onblur=function email(){
			var b=document.getElementById('zcemail').parentNode.getElementsByTagName('b');
			var pattern=/^[1-9][0-9]{5,8}@qq\.com|[1-2][0-9]{9}@qq\.com $/g;
			var e=document.getElementById('zcemail');
			//alert(!pattern.test(u.value))
			if(e.value==""){
				b[0].style.display="inline-block";
				b[1].style.display="none";
				document.getElementById('zctijiao').onclick=function(){	return false;};
			}
			else if(!pattern.test(e.value)){
				b[0].style.display="none";
				b[1].style.display="inline-block";
				document.getElementById('zctijiao').onclick=function(){	return false;};
			}
			else{
				b[0].style.display="none";
				b[1].style.display="none";
				document.getElementById('zctijiao').onclick=function(){	return true;};
			}	
		
		
		
		};
		//密码验证
		document.getElementById('zcpassword1').onblur=function pw1(){
			var b=document.getElementById('zcpassword1').parentNode.getElementsByTagName('b');
			var pattern=/^([a-zA-z1-9|_]){6,16}$/g;
			var p1=document.getElementById('zcpassword1');
			//alert(!pattern.test(u.value))
			if(p1.value==""){
				b[0].style.display="inline-block";
				b[1].style.display="none";
				document.getElementById('zctijiao').onclick=function(){	return false;};
			}
			else if(!pattern.test(p1.value)){
				b[0].style.display="none";
				b[1].style.display="inline-block";
				document.getElementById('zctijiao').onclick=function(){	return false;};
			}
			else{
				b[0].style.display="none";
				b[1].style.display="none";
				document.getElementById('zctijiao').onclick=function(){	return true;};
			}		
	
			
		};
		
		document.getElementById('zcpassword2').onblur=function pw2(){
			var b=document.getElementById('zcpassword2').parentNode.getElementsByTagName('b');
			p1=document.getElementById('zcpassword1').value;
			p2=document.getElementById('zcpassword2').value;
			if(p2!=p1){
			 	b[0].style.display="inline-block";
				document.getElementById('zctijiao').onclick=function(){	return false;};
			}
			else{
				b[0].style.display="none";
				document.getElementById('zctijiao').onclick=function(){	return true;};
			}
			};
		//验证码验证
		document.getElementById('zctext').onblur=function text(){
			var b=document.getElementById('zctext').parentNode.getElementsByTagName('b');
			p1=document.getElementById('zctext_btn').value;
			p2=document.getElementById('zctext').value;
			if(p2!=p1){
			 	b[0].style.display="inline-block";	
			var restore=String.fromCharCode(Math.floor(Math.random()*10+48),Math.floor(Math.random()*26+65),Math.floor(Math.random()*26+97),Math.floor(Math.random()*10+48))
			document.getElementById('zctext_btn').value=restore;
			document.getElementById('zctijiao').onclick=function(){	return false;};
			}
			else{
				b[0].style.display="none";
				document.getElementById('zctijiao').onclick=function(){	return true;};
			}
			};
		//提交全部验证
	})();
	
	
	
//    //登录验证
//    (function(){
//		var start=String.fromCharCode(Math.floor(Math.random()*10+48),Math.floor(Math.random()*26+65),Math.floor(Math.random()*26+97),Math.floor(Math.random()*10+48))
//		document.getElementById('text_btn').value=start;
//			
//		document.getElementById("dltijiao").onclick=function(){
//				var t1=document.getElementById('dltext').value;
//				var t2=document.getElementById('text_btn').value;
//			    if(t1!=t2){
//	            var a=String.fromCharCode(Math.floor(Math.random()*10+48),Math.floor(Math.random()*26+65),Math.floor(Math.random()*26+97),Math.floor(Math.random()*10+48))
//				document.getElementById('zctext_btn').value=a;				
//				return false;
//				}
//				else{return true;}
//	    };
//	})();

};
