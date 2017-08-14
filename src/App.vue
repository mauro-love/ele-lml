<template>
  <div id="app">
    <router-view></router-view>
 <!--底部导航-->
    <nav class="footer one-border-before">
    	<router-link v-for="tab in footerData" :to="tab.path">
    		<span class="iconfont1" :class="tab.icon"></span>
    		<span>{{tab.title}}</span>
    	</router-link>
    </nav>
    
  </div>
</template>

<script>
export default {
	data(){
		return{
			footerData:[
				{title:"外卖",path:'/take-out-food',icon:'icon-eleme'},
				{title:"发现",path:'/discover',icon:'icon-discover'},
				{title:"订单",path:'/order',icon:'icon-order'},
				{title:"我的",path:'/mine',icon:'icon-me'}
			]
		}
	}
}
</script>

<style>
#app{
	width: 100%;
	height: 100%;
}
#app .page{
	position: absolute;
	top: 0;
	left: 0;
	bottom: 50px;
	width: 100%;
	overflow: hidden;
}
#app>.footer{
	width: 100%;
	height: 50px;
	position: fixed;
	left: 0px;
	bottom: 0px;
	display: flex;
	background: #FFFFFF;
	overflow: hidden;
}
#app>.footer a{
	display: block;
	flex: 1;
	color: #666666;
}
#app>.footer .router-link-active{
	color: #0089dc;
}
#app>.footer a span:nth-of-type(1){
	display: block;
	width: 100%;
	height: 25px;
	text-align: center;
	line-height: 32px;
}
#app>.footer a span:nth-of-type(2){
	display: block;
	width: 100%;
	height: 25px;	
	text-align: center;
	line-height: 18px;
	font-size: 12px;
}
</style>
