<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>注册</title>
<link type="text/css" rel="stylesheet" href="style/zhuce.css">
<script src="JavaScript/denglu_zhuce.js" type="text/javascript"></script>
</head>
<body>
<?php
error_reporting(0);
$zcuser="";
$con = mysql_connect("localhost","root","19940228");
mysql_select_db("users", $con);
$result = mysql_query("SELECT user FROM zhuce");
$row = mysql_fetch_row($result);
if($_POST[zcuser]!=""&&$_POST[zcpassword1]!=""&&$_POST[zcemail]!=""){
	do{
		if($_POST[zcuser]==$row[0]){
				$zcuser='用户名已经存在';
		};
	}while($row = mysql_fetch_row($result));
	if($zcuser=='用户名已经存在');
	else{
	mysql_query("INSERT INTO zhuce (user,password,email) 
	VALUES ('$_POST[zcuser]','$_POST[zcpassword1]','$_POST[zcemail]')");
	  header("Location:http://localhost/videowebsite/");
      exit();
	}
}

mysql_close($con);
?>


<header>
    <div class="h_body">
        <div class="h_left">
            <ul>
                <li><a href="">羁绊咨询</a></li>
                <li><a href="">嘀哩嘀哩</a></li>
                <li><a href="">星辰漫画</a></li>
                <li><a href="">93励志网</a></li>
                <li><a href="">萌娘资源站</a></li>
                <li><a href="">羁绊论坛</a></li>
            </ul>
        </div>
        
        <div class="h_right">
        <a href="denglu.php" id="denglu" target="_self">登 录</a>|
        <a href="zhuce.php" id="zuce" target="_self">注 册</a>
        </div>
    
    </div>
</header>

<article id="article1">
	<div class="a_top">
        <div class="huiyuan">
            <h2>会员中心</h2>
            <h5>usr.005.tv</h5>
        </div>
        <div class="denglu">
            <span class="l_line"></span><span>注册</span><span class="r_line"></span>
        </div>
    </div>
	
    <div class="a_bottom">
     	<form id="zc" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']);?>" method="post" target="_self">
     		<div>
            <img src="images/zuce/user.png"><input type="text"   placeholder="请输入用户名" id="zcuser" name="zcuser"><b>内容不能为空</b><b>输入6-16个字符字母数字或下划线</b><span style="color:#F00;"><?php echo $zcuser;?></span>
            </div>
        	<div>
        	<img src="images/zuce/email.png"><input type="text"  placeholder="请输入邮箱" id="zcemail" name="zcemail"><b>内容不能为空</b><b>输入qq邮箱</b>
            </div>
            <div>
            <img src="images/zuce/password1.png"><input type="password"   placeholder="请输入密码" id="zcpassword1" name="zcpassword1"><b>内容不能为空</b><b>输入6个字符以上</b>
            </div>
            <div>
            <img src="images/zuce/password2.png"><input type="password"  placeholder="请再次输入密码" id="zcpassword2" name="zcpassword2"><b>密码不一致</b>
            </div>
            <div>
            <img src="images/zuce/text.png"><input type="text" value=""  placeholder="输入验证码" id="zctext" name="zctext"><input type="button" value="abcd" id="zctext_btn"  name="zctext_btn"><b>验证码不正确</b>
            </div>
            
            <input type="submit" value="注册" id="zctijiao"><br/>
     	</form>
    </div>
</article>

<!--<article id="article2">
	<div class="a_top">
        <div class="huiyuan">
            <h2>会员中心</h2>
            <h5>usr.005.tv</h5>
        </div>
        <div class="denglu">
            <span class="l_line"></span><span>登录</span><span class="r_line"></span>
        </div>
    </div>
	
    <div class="a_bottom">
        <div class="dl_r">
     	<form  action="php/denglu.php" method="post">
     		<div >
            <img src="images/zuce/user.png"><input type="text" value="" id="u" placeholder="请输入用户名" id="user" name="user">
            </div>

            <div>
            <img src="images/zuce/password1.png"><input type="password"  id="p1" placeholder="请输入密码"  id="password" name="password">
            </div>

            <div>
            <img src="images/zuce/text.png"><input type="text" value="" id="t" placeholder="输入验证码" id="text" name="text"><input type="button" value="abcd" id="text_btn"  name="text_btn">
            </div>
            
            <input type="submit" value="登录" id="tijiao"><input type="submit" value="注册" id="zuce2"><br/><br/>
            <div id="qqdl"><img src="images/denglu/qq_login.gif">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="">忘记密码</a></div>
     	</form>
        </div>
        <div class="dl_l">
           <img src="images/denglu/banner.jpg">
        </div>
    </div>
</article>-->


<footer>
<div class="f_body">
    <div class="f_left">
        <div class="f_nav">
        	<ul>
            	<li><a href="">咨讯</a></li>
                <li><a href="">资源</a></li>
                <li><a href="">新番</a></li>
                <li><a href="">论坛</a></li>
                <li id="border_none"><a href="">官方微博</a></li>
            </ul>
        </div>
        <div>互联网ICP备案：闽ICP备12004074号-8 闽网文（2015）1788-036号</div>
        <div>© 2016 羁绊网络 本站不提供任何视听上传服务，所有内容均来自视频分享站点所提供的公开引用资源</div>
    </div>
    
    <div class="f_right">
    	<div><img src="images/zuce/weixin.png"></div>
        <p>扫描二维码收听公共号</p>
    </div>
</div>
</footer>
</body>
</html>
