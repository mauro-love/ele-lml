<template>
	<div class="page subpage">
		<div class="search_top">
			<span class="iconfont2 icon-jiantou-zuo-copy" @click="backAction()"></span>
			<input type="text" placeholder="请输入商品名称" v-model="searchWord" />
		</div>
		<div class="hotSearch">
			<h2>热门搜索</h2>
			<span v-for="word in hotWord" @click="toHotWordDetial(word.search_word)">{{word.word}}</span>
		</div>
		<!--子页面-->
		<transition enter-active-class="slideInRight animated" leave-active-class="slideOutRight animated">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
	import takeOutFoodServices from '../../services/takeOutFoodServices.js'	
	import {mapState} from 'vuex'		
	export default{
		data(){
			return {
				hotWord:[],
				searchWord:''
			}
			
		},
		computed:{
			...mapState([
				'longitude',
				'latitude'
			])
		},
		methods:{
			backAction(){
				this.$router.back();
			},
			requestData(){
				//请求搜索页面的热门词
				takeOutFoodServices.getHotSearchWord(this.longitude,this.latitude)
				.then((searchHotWords)=>{
					this.hotWord = searchHotWords;
					console.log(this.hotWord)
				})
			},
			toHotWordDetial(search_word){
				this.$router.push('/take-out-food/search/search-hot-detail/'+ search_word)
			}
		},
		created(){
			//初始化数据
			this.requestData()
		}
//		updata(){
//			this.$watch('hotWord',)
//		}
		
		
		
	}
				
</script>

<style>
	.search_top{
		width: 100%;
		height: 44px;
		display: flex;
		padding: 0px 20px;
		box-sizing: border-box;
	}
	.search_top span{
		display: block;
		width: 10%;
		height: 44px;
		color: #666666;	
		font-size: 20px;
		line-height: 44px;
	}
	.search_top input{
		outline:none ;
		display: block;
		margin-top: 8px;
		height: 30px;
		flex: 1;
		border: none;
		background: #EEEEEE;
		border-radius: 22px;
		padding-left: 20px;
		box-sizing: border-box;
	}
	.hotSearch{
		width: 100%;
		padding: 10px 20px;
		box-sizing: border-box;
	}
	.hotSearch h2{
		margin: 10px 0px;
	}
	.hotSearch span{
		display: inline-block;
		margin: 5px 10px;
		background: #E0E2E4;
		padding: 5px;
	}
</style>