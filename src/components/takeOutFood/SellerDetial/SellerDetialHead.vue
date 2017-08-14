<template>
	<div class="sellerDetialHead">
		<p class="iconfont2 icon-jiantou-zuo-copy" @click="btnBack()"></p>
		<div class="title">
			<img :src="title.image_path | imgFilter"/>
			<div class="title_right">
				<h2>{{title.name}}</h2>
				<p>
					<span>商家配送</span>
					<span>
						/{{title.order_lead_time}}分钟送达
					</span>
					<span>
						/{{title.piecewise_agent_fee.description}}
					</span>
				</p>
				<p>
					公告：{{title.supports[0].description}}
				</p>
			</div>
		</div>
		<div class="activities">
			<span :style="{background:'#'+ title.activities[0].icon_color}">{{title.activities[0].icon_name}}</span>
			<span>{{title.activities[0].name}}</span>
			<span>{{title.activities.length}}个活动</span>
		</div>
	</div>
</template>

<script>
	export default {
		props:{
			title:Object
		},
		methods:{
			btnBack(){
				this.$router.back();
			}
		}
	}
</script>

<style>
	.sellerDetialHead{
		background: #D2D2D2;
		color: #FFFFFF;
	}
	.sellerDetialHead>p{
		width: 50px;
		height: 30px;
		padding-left: 20px;
		line-height: 30px;
		font-size: 20px;
	}
	.title{
		width: 100%;
		height: 90px;
		padding-top: 10px;
		box-sizing: border-box;
		padding-left: 20px;
		padding-right: 20px;
		
	}
	.title img{
		width: 70px;
		height: 70px;
		margin-right: 10px;
		float: left;
	}
	.title_right p{
		padding: 5px 0;
		font-size: 10px;
	}
	.activities{
		height: 20px;
		padding-left: 20px;
		padding-right: 20px;
		font-size: 10px;
		line-height: 20px;
	}
	.activities span:nth-of-type(3){
		float: right;
	}
</style>