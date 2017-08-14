<template>
	<div id="mine">
		<div class="mine_top">
			<span class="iconfont2 icon-jiantou-zuo-copy" @click="backAction()"></span>
			我的 
		</div>
		<div class="mine_login">
			<span class="iconfont2 icon-touxiang"></span>
			<div class="mine_login_middle">
				<h3>登录/注册</h3>
				<p><span class="iconfont2 icon-phone"></span>登录后享受更多特权</p>
			</div>
			<span class="iconfont2 icon-jiantou"></span>
		</div>
		<div class="mine_content">
			<ul class="mine_content_integral">
				<li class="one-border-right">
					<p>
						<span class="iconfont2 icon-hongbao"></span>
					</p>
					<p>
						优惠
					</p>
				</li>
				<li>
					<p>
						<span class="iconfont2 icon-jifen">
					</span>
					</p>
					<p>
						积分
					</p>
					
				</li>
			</ul>
			<ul class="mine_content_order">
				<li>
					<span class="iconfont2 icon-dingdan"></span>
					<p>我的订单<span class="iconfont2 icon-jiantou"></span></p>
				</li>
				<li>
					<span class="iconfont2 icon-jifenshangcheng"></span>
					<p>积分商城<span class="iconfont2 icon-jiantou"></span></p>
				</li>
				<li>
					<span class="iconfont2 icon-huiyuanqia"></span>
					<p>饿了么会员卡<span class="iconfont2 icon-jiantou"></span></p>
				</li>
			</ul>
			<ul class="mine_content_service">
				<li>
					<span class="iconfont2 icon-hua"></span>
					<p>服务中心<span class="iconfont2 icon-jiantou"></span></p>
				</li>
				<li>
					<span class="iconfont2 icon-eleme"></span>
					<p>下载饿了么APP<span class="iconfont2 icon-jiantou"></span></p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
</script>

<style>
	#mine{
		background: #f5f5f5;
		position: absolute;
		top: 0px;
		bottom: 50px;
	}
	.mine_top{
		width: 100%;
		height: 44px;
		background: #0af;
		color: #FFFFFF;
		text-align: center;
		position: fixed;
		top: 0px;
		left: 0px;
		line-height: 44px;
		font-weight: 900;
		font-size: 20px;
	}
	.mine_top span{
		display: block;
		width: 50px;
		height: 44px;
		position: absolute;
		font-size: 24px;
		font-weight: 100;
	}
	.mine_login{
		margin-top: 44px;
		width: 100%;
		height: 120px;
		background: #0af;
		color: #FFFFFF;
		box-sizing: border-box;
		padding: 30px 30px;
		display: flex;
	}
	.mine_login>span:nth-of-type(1){
		display: block;
		width: 60px;
		height: 60px;
		font-size: 64px;
		border-radius: 30px;
		background: #FFFFFF;
		color: #999999;
		overflow: hidden;
	}
	.mine_login_middle{
		width: 250px;
		height: 60px;
		box-sizing: border-box;
		padding-left:30px ;
	}
	.mine_login_middle h3{
		font-size: 20px;
	}
	.mine_content_integral{
		width: 100%;
		display: flex;
		background: #FFFFFF;
		
	}
	.mine_content_integral li{
		width: 50%;
		height: 100px;
		text-align: center;
		padding-top: 20px;
		box-sizing: border-box;
		position: relative;
	}
	.mine_content_integral li:nth-of-type(1) p span{
		display: inline-block;
		width: 30px;
		height: 30px;
		background: red;
		color: #FFFFFF;
		line-height: 30px;
		border-radius: 15px;
	}
	.mine_content_integral li:nth-of-type(2) p span{
		display: inline-block;
		width: 30px;
		height: 30px;
		background: green;
		color: #FFFFFF;
		line-height: 30px;
		border-radius: 15px;
	}
	.mine_content_order{
		width: 100%;
		margin-top: 10px;
		background: #FFFFFF;
	}
	.mine_content_order li{
		display: flex;
		width: 100%;
	}
	.mine_content_order li>span{
		display: inline-block;
		width: 40px;
		height: 40px;
		color: red;
		line-height: 40px;
	}
	.mine_content_service{
		width: 100%;
		margin-top: 10px;
		background: #FFFFFF;		
	}
</style>