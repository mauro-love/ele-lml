<template>
		<div class="search_top">
			<span class="iconfont2 icon-jiantou-zuo-copy" @click="backAction()"></span>
			<input type="text" placeholder="请输入商品名称" v-model="searchWord" />
		</div>	
</template>

<script>
	export default {
		data(){
			return{
				searchWord:''
			}
			
		},
		methods:{
			backAction(){
				this.$router.back();
			}
		}
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

</style>