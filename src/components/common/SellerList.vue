<template>
	<ul class="seller-list">
		<li v-for="(item,index) in sellerList" class="seller-item one-border-before">
			<div class="seller-left" @click="toSellerDetail(item.id)">
				<img :src="item.imgPath | imgFilter"/>
			</div>
			<div class="seller-right" >
				<!--商家列表上部分-->
				<div class="seller-top" @click="toSellerDetail(item.id)">
					<div class="seller-top-title">
						<h4>{{item.name}}</h4>
					</div>
					<div class="seller-top-rating">
						<i class="iconfont2 icon-wujiaoxing"></i>
						<i class="iconfont2 icon-wujiaoxing"></i>
						<i class="iconfont2 icon-wujiaoxing"></i>
						<i class="iconfont2 icon-wujiaoxing"></i>
						<i class="iconfont2 icon-wujiaoxing"></i>
						<span>{{item.rating}}</span>
						<span>
							月售{{item.orderNum}}单
						</span>
						
					</div>	
					<div class="seller-top-orderNum">
						<span>￥{{item.float_minimum_order_amount}} 起送 / 配送费￥{{item.float_delivery_fee}}</span>
						<span>{{item.distance | distance}}km/</span>
						<span>{{item.order_lead_time}}分钟</span>
					</div>	
				</div>
				<!--商家列表活动部分-->
				<div class="seller-bottom one-border-before" >
					<div class="seller-actives" v-for="active in sellerActive[index]" >
						<p>
							<span>{{active.icon_name}}</span>
							{{active.name}}
						</p>
						
					</div>
					<!--<div class="seller-actives" v-for="active in sellerActive" v-if="isShow" >
						<p>
							<span>{{active.icon_name}}</span>
							{{active.name}}
						</p>
						
					</div>-->
					<div class="active_button" @click="activeShow()">
						{{item.activities.length}}个活动<i class="iconfont2 icon-sanjiao" :class="{ showActive: isShow }"></i>
					</div>
				</div>
			</div>
		</li>
	</ul>
</template>

<script>
	export default{
		props:{
			sellerList:Array
		},
		data(){
			return {
				sellerActive:[],
				isShow:true
			}
		},
		methods:{
			toSellerDetail(id){
				this.$router.push('/take-out-food/seller-detial/' + id);
			},
			activeShow(){
				console.log(3)
				this.isShow = !this.isShow;
			}
		},
		mounted(){
			this.$watch('sellerList', ()=>{
				//深入拷贝商家列表
//				if(this.sellerList)
				var newSellerList = Array.from(this.sellerList);
				//商家活动
				this.sellerActive = newSellerList.map((item)=>{
					return item.activities.splice(0,2)
				})
//				console.log(this.sellerActive)
			})
		}
	}
</script>

<style>
	.seller-list{
		width: 100%;
	}
	.seller-item{
		width: 100%;
		min-height: 138px;
		display: flex;
		position: relative;
	}
	.seller-left{
		width: 80px;
	}
	.seller-left img{
		display: block;
		width: 60px;
		height: 60px;
		margin: 20px auto;
	}
	.seller-right{
		flex: 1;
	}
	.seller-top-title{
		width: 100%;
		height: 32px;
		line-height: 32px;
	}
	.seller-top-rating{
		width: 100%;
		height: 30px;
		font-size: 10px;
		line-height: 30px
	}
	.seller-top-rating i{
		color: #ffaa0c;
	}
	.seller-top-rating span:nth-of-type(1){
		color: #ff6000;
	}
	.seller-top-rating span:nth-of-type(2){
		color: #666;
	}
	.seller-top-orderNum{
		margin-top: 10px;
		width: 100%;
		height: 24px;
		font-size: 10px;
		position: relative;
	}
	.seller-top-orderNum span{
		display: block;
		height: 24px;
		position: absolute;
		line-height: 24px;
	}
	.seller-top-orderNum span:nth-of-type(1){
		top: 0px;
		left: 0px;
	}
	.seller-top-orderNum span:nth-of-type(2){
		top: 0px;
		right: 40px;
	}
	.seller-top-orderNum span:nth-of-type(3){
		top: 0px;
		right: 5px;
		color: #2395ff;
	}
	.seller-bottom{
		position: relative;
		width: 100%;
	}
	.seller-actives{
		position: relative;
		width: 100%;
	}
	.active_button{
		width: 60px;
		height: 50px;
		position: absolute;
		top: 0px;
		right: 0px;
		color: #999;
		font-size: 10px;
		text-align: center;
		line-height: 50px;
	}
	.showActive{
		transition: all 0.5s;
		transform: rotateZ(180);
	}
</style>