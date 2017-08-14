<template>
	<div class="page subpage sellerDetial">
		<seller-detial-head :title = 'title'></seller-detial-head>
		<seller-detial-main :goodsList = 'goodsList'></seller-detial-main>
	</div>	
</template>

<script>
	import takeOutFoodServices from '../../services/takeOutFoodServices.js'	
	import {mapState} from 'vuex'		
	import SellerDetialHead from '../../components/takeOutFood/SellerDetial/SellerDetialHead.vue'
	import SellerDetialMain from '../../components/takeOutFood/SellerDetial/SellerDetialMain.vue'
	
	export default {
		data(){
			return{
				id:this.$route.params.id,
				title:{},
				goodsList:{}
			}
			
		},
		computed:{
			...mapState([
				'longitude',
				'latitude'
			])
		},
		methods:{
			requestData(){
				//请求商品详情页的头部
				takeOutFoodServices.getRestaurantsDetialTitle(this.longitude,this.latitude,this.id)
				.then((title)=>{
					this.title = title;
				})
				//请求商品详情页的中心
				takeOutFoodServices.getRestaurantsDetialMain(this.id)
				.then((goodsList)=>{
					this.goodsList = goodsList;
//					console.log(this.searchCategory)
				})
			}
			
		},
		created(){
			//初始化数据
			this.requestData()

		},
		components:{
			'seller-detial-head' : SellerDetialHead,
			'seller-detial-main':SellerDetialMain
		}
		
	}
</script>

<style>
.sellerDetial{
	width: 100%;
	height: 100%;
	position: relative;
}
</style>