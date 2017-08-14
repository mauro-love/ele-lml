<template>
	<div id="take-out-food">
		<!--当前页面-->
		<div class="page main">
			<div class="wrap">
				<!--头部-->
				<take-out-food-header :address="address" :weather="weatherData" :hotWords="hotWords"></take-out-food-header>
				<!--banner部分-->
				<take-out-food-banner :category="category"></take-out-food-banner>
				<h3 class="subTitle">推荐商家</h3>
				<!--商家列表-->
				<seller-list :sellerList = "sellerList"></seller-list>
			</div>
		</div>
		<!--子页面-->
		<transition enter-active-class="slideInRight animated" leave-active-class="slideOutRight animated">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
	import takeOutFoodServices from '../../services/takeOutFoodServices.js'
	import TakeOutFoodBanner from "../../components/takeOutFood/TakeOutFoodBanner.vue"
	import TakeOutFoodHeader from "../../components/takeOutFood/TakeOutFoodHeader.vue"
	import SellerList from "../../components/common/SellerList.vue"
	import {mapState} from 'vuex'
	export default {
		data(){
			return{
				address:"地址",
				weatherData:{},
				hotWords:[],
				category:[],
				sellerList:[],
				contentScroll: null,
				searchHotWords:[]
			}
			
		},
		computed: {
			...mapState([
				'longitude',
				'latitude'
			])
		},
		components:{
			'take-out-food-header':TakeOutFoodHeader,
			'take-out-food-banner':TakeOutFoodBanner,
			'seller-list':SellerList
		},
		methods:{
			requestData(){
				var lg = this.longitude;
				var lt = this.latitude;
				//请求地址
				takeOutFoodServices.getAddressData(lg, lt)
				.then((address)=>{
					this.address = address;
				})
				//请求地址
				takeOutFoodServices.getWeatherData(lg, lt)
				.then((weather)=>{
					this.weatherData = weather;
				})
				//请求外卖热搜词
				takeOutFoodServices.getHotWords(lg, lt)
				.then((hotWords)=>{
					this.hotWords = hotWords;
				})
				//请求分类
				takeOutFoodServices.getCategory(lg, lt)
				.then((category)=>{
					this.category = category;
				})
				//请求商家列表
				takeOutFoodServices.getSellerList(lg, lt)
				.then((sellerList)=>{
					this.sellerList = sellerList;
				})

			}
		},
		created(){
			//初始化页面数据，发送各种请求
			this.requestData()
			//监听地址改变的事件
			this.$eventHandle.$on('get-address', (val)=>{
//				console.log('home接收到了新地址'+val);
				this.address = val;
			})
			
			//监听经纬度变化
			this.$watch('longitude', this.requestData);
			this.$watch('latitude', this.requestData);
		},
		mounted(){
			//创建滚动视图
			this.contentScroll = new IScroll("#take-out-food .main", {
				probeType: 3
			});
				
		},
		updated(){
			this.contentScroll.refresh();
		}
	}
</script>

<style>
	#take-out-food{
		background: #f5f5f5;
	}
	#take-out-food .subTitle{
		border-top: 8px solid #eee;
		height: 30px;
		padding-left: 10px;
		font-size: 16px;
		font-weight: bold;
		line-height: 30px;
		color: #333;
	}
	#take-out-food .subpage{
		z-index: 5;
		bottom: 0;
		background: #fff;
	}
</style>