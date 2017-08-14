<template>
	<div id="discover">
		<div class="discover_top">
			<span class="iconfont2 icon-jiantou-zuo-copy" @click="backAction()"></span>
			发现
		</div>
		<!--头部-->
		<discover-header :discoverHead = "discoverHead"></discover-header>
		<discover-banner></discover-banner>
		<!--美食热推-->
		<discover-food-list :hotFood = "foodList"></discover-food-list>
		<transition enter-active-class="slideInRight animated" leave-active-class="slideOutRight animated">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
	import DiscoverHeader from "../../components/discover/DiscoverHeader.vue"
	import DiscoverBanner from "../../components/discover/DiscoverBanner.vue"
	import DiscoverFoodList from "../../components/discover/DiscoverFoodList.vue"
	import discover from "../../services/discover.js"
	import {mapState} from 'vuex'
	export default {
		data(){
			return{
				discoverHead:[],
				foodList:[]
			}
		},
		methods:{
			backAction(){
				this.$router.back();
			},
			getrequest(){
				var lg = this.longitude;
				var lt = this.latitude;
				//请求发现头部数据
				discover.getDiscoverHeadData(lg, lt)
				.then((head)=>{
					this.discoverHead = head;
				})
				//请求美食热推数据
				discover.getHotFoodData(lg, lt)
				.then((data)=>{
					this.foodList = data;
				})
			}
		},
		computed: {
			...mapState([
				'longitude',
				'latitude'
			])
//			hotFood(){
//				if(this.foodList == null){
//					console.log('tttttt')
//					return this.foodList[0].foods;
//				}
//				
//			},
//			dayPromote(){
//				if(this.foodList == null){
//					return this.foodList[1].foods;
//				}
//
//			},
//			timeGift(){
//				if(this.foodList == null){
//					return this.foodList[2].foods;
//				}

//			}
		},
		components:{
			'discover-header':DiscoverHeader,
			'discover-banner':DiscoverBanner,
			'discover-food-list':DiscoverFoodList
		},
		created(){
			this.getrequest();
		}
	}
</script>

<style>
	#discover{
		position: relative;
		background: #DDDDDD;
	}
	.discover_top{
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
	.discover_top span{
		display: block;
		width: 50px;
		height: 44px;
		position: absolute;
		font-size: 24px;
		font-weight: 100;
	}
</style>