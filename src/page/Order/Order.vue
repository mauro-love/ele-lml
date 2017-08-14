<template>
	<div id="order">
		<div class="order_top">
			<span class="iconfont2 icon-jiantou-zuo-copy" @click="backAction()"></span>
			订单
		</div>
		<div class="order_content">
			<img src="../../../static/images/ordergif.gif"/>
			<p>登录后查看外卖订单</p>
			<button>立即登录</button>
		</div>
	</div>
</template>

<script>
</script>

<style>
	#order{
		width: 100%;
		height: 100%;
		position: absolute;
		bottom: 50px;
		background: #f5f5f5;
	}
	.order_top{
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
	.order_top span{
		display: block;
		width: 50px;
		height: 44px;
		position: absolute;
		font-size: 24px;
		font-weight: 100;
	}
	.order_content{
		width: 100%;
		padding-top: 50px;
		text-align: center;
		position: absolute;
		top: 100px;
		box-sizing: border-box;
	}
	.order_content img{
		width: 300px;
	}
	.order_content p{
		font-size: 14px;
		color: #6a6a6a;
		margin: 10px 0px;
	}
	.order_content button{
		display: inline-block;
		width: 120px;
		height: 40px;
		background: limegreen;
		border: none;
		border-radius: 5px;
		color: #FFFFFF;
	}
</style>