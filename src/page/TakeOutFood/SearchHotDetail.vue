<template>
	<div class="page subpage">
		<search-head ></search-head>
		<bomb-box :searchCategory = "searchCategory"  :activityAttributes = "activityAttributes"></bomb-box>
		分类详情
		<p>{{$route.params.search_word}}</p>
	</div>
</template>

<script>
	import takeOutFoodServices from '../../services/takeOutFoodServices.js'	
	import {mapState} from 'vuex'		
	
	
	import searchHead from "../../components/takeOutFood/searchHead.vue"
	import bombBox from "../../components/takeOutFood/bombBox.vue"
	export default {
		data(){
			return{
				searchCategory :'',
				activityAttributes:'',
				restaurantsList:''
				
			}
		},
		computed:{
			...mapState([
				'longitude',
				'latitude'
			])
		},
		
		components:{
			'search-head' :searchHead,
			'bomb-box' : bombBox
		},
		methods:{
			requestData(){
				//请求搜索页面的分类
				takeOutFoodServices.getSearchCategory(this.longitude,this.latitude)
				.then((searchCategory)=>{
					this.searchCategory = searchCategory;
//					console.log(this.searchCategory)
				})
				//请求搜索页面的属性
				takeOutFoodServices.getActivityAttributes(this.longitude,this.latitude)
				.then((activityAttributes)=>{
					this.activityAttributes = activityAttributes;
//					console.log(this.activityAttributes)
				})
				//请求搜索页面的商家列表
				takeOutFoodServices.getRestaurantsList(this.longitude,this.latitude)
				.then((restaurantsList)=>{
					this.restaurantsList = restaurantsList;
					console.log(this.restaurantsList)
				})
			}
		},
		mounted(){
			//初始化数据
			this.requestData()

		}
	}
</script>

<style>
</style>