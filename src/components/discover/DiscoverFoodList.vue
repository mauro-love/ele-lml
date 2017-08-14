<template>
	<div class="discover_hot">
		<ul class="discover_food">
			<li v-for="food in hotFood" class="discover_foodList">
				<h3>美食热推</h3>
				<p>你的口味,我都懂得</p>
				<ul class="discover_goods">
					<li v-for="item in food.foods" class="discover_goodsList">
						<img :src="item.image_hash | imgFilter"/>
						<p>{{item.name}}</p>
						<span>￥{{item.price}}</span>
						
					</li>
					
				</ul>
				<div class="more" >
					查看更多
				</div>
			</li>
		</ul>
	</div>	
</template>

<script>
	export default{
		props:{
			hotFood:Array
		},
		data(){
			return{
				foods:[]
			}
			
		},
		methods:{
			a(){
				console.log(this.hotFood);
			}
			
		}
	}
</script>

<style>
	.discover_food{
		width: 100%;
		padding-bottom: 50px;
	}
	.discover_foodList{
		width: 100%;
		background: #FFFFFF;
		margin-top: 10px;
		text-align: center;
		padding-top:20px ;
	}
	.discover_foodList:nth-of-type(1){
		margin-top: 0px;
	}
	.discover_foodList h3{
		text-align: center;
		font-size: 20px;
	}
	.discover_foodList>p{
		margin-bottom: 20px;
		font-size: 12px;
		color: #999999;
	}
	.discover_goods{
		width: 100%;
		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
		padding: 10px;
		overflow: hidden;
	}
	.discover_goodsList{
		width: 100%;
		box-sizing: border-box;
	}
	.discover_goodsList img{
		width: 100px;
	}
	.discover_goodsList p{
		font-size: 12px;
		padding-top: 5px;
	}
	.discover_goodsList span{
		font-size: 12px;
		color: #ff5339;
	}
	.more{
		padding-bottom: 20px;
		color: #999999;
		font-size: 14px;
	}
</style>