<template>
	<div class="takeOutFood-header">
		<!--头部的地址和天气-->
		<div class="info">
			<p class="address">
				<router-link to="/take-out-food/address" class="iconfont2 icon-24x24daoda">
					{{address}}
					<em class="iconfont2 icon-sanjiao"></em>
				</router-link>

			</p>
			
			<p class="weather">
				<span>
					{{weather.description}}
				</span>
				<span>
					{{weather.temperature}}°
				</span>
				<img :src="weather.image_hash | imgFilter"/>
			</p>
		</div>
		<!--搜索栏-->
		<router-link class="search" to="/take-out-food/search">
			搜索商家、商品
		</router-link>
		<!--热搜词语-->
		<div class="hot-words">
			<span v-for="word in hotWords" @click="toSeachDetail(word.word)">{{word.word}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		props:{
			weather:Object,
			address:String,
			hotWords:Array
		},
		methods:{
			toSeachDetail(word){
				this.$router.push('/take-out-food/search-hot-detial/' + word);
			}
		}
	}
</script>

<style>
	.takeOutFood-header{
		width: 100%;
		height: 104px;
		padding: 10px;
		background: #0af;
		color: #FFFFFF;
		box-sizing: border-box;
	}
	.info{
		width: 100%;
		height: 30px;
		display: flex;
	}
	.info p:nth-of-type(1){
		width: 70%;
		height: 30px;
		font-size: 18px;
		line-height: 30px;
	}
	.info p:nth-of-type(2){
		flex: 1;
		position: relative;
	}
	.info span{
		display: block;
		width: 40%;
		height: 15px;
		font-size: 12px;
		position: absolute;
		text-align: center;
	}
	.info span:nth-of-type(1){
		top: 15px;
		right: 30px;
	}
	.info span:nth-of-type(2){
		top: 0px;
		right: 30px;
	}
	.info img{
		width: 30px;
		position: absolute;
		top: 0px;
		right: 0px;
	}
	.takeOutFood-header .address a{
		color: #FFFFFF;
	}
	.takeOutFood-header .search{
		display: block;
		width: 100%;
		height: 30px;
		border-radius: 15px;
		background: #FFFFFF;
		text-align: center;
		margin: 8px 0px;
		color: #666666;
		line-height: 30px;
		font-size: 14px;
	}
	.takeOutFood-header .hot-words{
	height: 12px;
	line-height: 12px;
	font-size: 12px;
	white-space: nowrap;
	overflow-x: auto;
	}
	.takeOutFood-header .hot-words span{
		margin: 6px;
	}
</style>

