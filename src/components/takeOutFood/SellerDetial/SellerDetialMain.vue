<template>
	<div class="goodsMain">
		<ul class="goodsMainTitle">
			<li v-for="item in title" class="goodsMainTitleList" @click="toList(item)" :class="{goodsMainTitleListActive:isShow == item}">{{item}}</li>
		</ul>
		<div class="goods" v-if="isShow == '商品'">
			
		<!--商品侧边栏-->
			<div class="goodsList" >
				<ul class="goodsListTitle">
					<li v-for="list in goodsList">
						{{list.name}}
					</li>				
				</ul>
			</div>
			<!--商品详情列表-->
			<div class="goodsDetail">
				<ul>
					<li v-for="goods in goodsList">
						<!--商品分类标题-->
						<div class="goodsTitle">
							<h3>{{goods.name}}</h3>
							<p>{{goods.description}}</p>
						</div>
						<!--一组分类商品-->
						<ul>
							<li v-for="foods in goods.foods">
								<div class="foods">
									<div class="foodsImages">
										<img :src="foods.image_path | imgFilter"/>
									</div>
									<div class="foodsRight">
										<h3>{{foods.name}}</h3>
										<p>{{foods.description}}</p>
										<p>月销售{{foods.month_sales}} <span>好评率{{foods.satisfy_rate}}%</span></p>
										<div class="price">
											<p>￥{{foods.specfoods[0].price}}</p>
											<div class="count">
												<span v-show="count > 0" @click="minceCount()">-</span>
												<span v-show="count > 0">{{count}}</span>
												<span @click="addCount()">+</span>
											</div>
										</div>
									</div>
								</div>
								
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
		<div class="goodsEvaluate" v-if="isShow == '评价'">
			评价
		</div>
		<div class="goodsShop" v-if="isShow == '店铺'">
			店铺
		</div>
	</div>
</template>

<script>
	export default {
		props:[
			'goodsList'   //接收商品数据
		],		
		data(){
			return {
				title:['商品','评价','店铺'],
				isShow:'商品',
				titleScroll:null,
				goodsScroll:null,
				count: 0
			}
		},
		computed:{
//			goodsAttr : Array.from(goodsList)
		},

		methods:{
			toList(item){
				this.isShow = item;
			},
			addCount(){
				this.count = ++this.count;
			},
			minceCount(){
				this.count = --this.count;
			}
			
		},
		mounted(){
			//创建侧边滚动视图
			this.titleScroll = new IScroll(".goodsList", {
				probeType: 3
			});
			this.titleScroll.on('scrollStart', ()=>{
				this.titleScroll.refresh();
			})
			//创建商品滚动视图
			this.goodsScroll = new IScroll(".goodsDetail", {
				probeType: 3
			});
			this.goodsScroll.on('scrollStart', ()=>{
				this.goodsScroll.refresh();
			})
			
		}
//		updated(){
//			this.titleScroll.refresh();
//			
//		}
		
		
	}
</script>

<style>
	.goodsMain{
		position: absolute;
		width: 100%;
		top: 140px;
		bottom: 0px;
	}
	.goodsMainTitle{
		width: 100%;
		height: 40px;
		display: flex;
	}
	.goodsMainTitleList{
		flex: 1;
		text-align: center;
		line-height: 40px;
	}
	.goodsMainTitleListActive{
		border-bottom: 3px solid #0062CC;
		color: #0062CC;
	}
	.goods{
		width: 100%;
		position: absolute;
		top: 40px;
		bottom:0px ;
		overflow: hidden;
		
	}
	.goodsList{
		width: 80px;
		position: absolute;
		top: 0px;
		bottom: 50px;
		overflow: hidden;
	}
	.goodsListTitle{
		width: 80px;
	}
	.goodsListTitle li{
		width: 100%;
		height: 50px;
		text-align: center;
		line-height: 50px;
		font-size: 10px;
		white-space: wrap;
		background: #D4D4D4;
		border-bottom: 1px solid #FFFFFF;
	}
	.goodsDetail{
		position: absolute;
		top: 0px;
		left: 80px;
		bottom: 50px;
		right: 0px;
		overflow: hidden;
	}
	.goodsTitle{
		width: 100%;
		height:30px ;
		background: #DDDDDD;
		display: flex;
		line-height: 30px;
		padding-left:10px ;
	}
	.goodsTitle p{
		font-size: 10px;
		padding-left: 10px;
	}
	.foods{
		width: 100%;
		height: 130px;
		box-sizing: border-box;
		padding: 10px 15px;
		display: flex;
	}
	.foods img{
		width: 50px;
		height: 50px;
		margin-right: 10px;
	}
	.foodsRight>p:nth-of-type(1){
		font-size: 10px;
		color: #666666;
	}
	.foodsRight>p:nth-of-type(2){
		font-size: 12px;
		color: #333333;
	}
	.price{
		display: flex;
	}
	.count{
		padding-left:50px ;
		flex: 1;
		display: flex;
		justify-content: space-around;
	}
	.count span{
	display: block;	
	width: 20px;
	height: 20px;
	background: #3190e8;
	border-radius: 10px;
	text-align: center;
	line-height: 20px;
	
	}
	.count span:nth-of-type(2){
		background: none;
	}
</style>