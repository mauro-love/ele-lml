<template>
	<div class="discover_header">
			<ul>
				<li v-for="headData in discoverHead">
					<dl>
						<dt>
							<h3>{{headData.title}}</h3>
							<p>{{headData.subtitle}}</p>
						</dt>
						<dd>
							<img :src="headData.main_pic_hash |imgFilter"/>	
						</dd>
					</dl>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		props:{
			discoverHead:Array
		},
		computed:{
			one(){
				if(this.discoverHead[0]){
					return this.discoverHead[0]
				}
			}
		}
	}
</script>

<style>
	.discover_header{
		padding-top: 45px;
		width: 100%;
	}
	.discover_header ul{
		width: 100%;
		overflow: hidden;
		background: #FFFFFF;
	}
	.discover_header ul li{
		width: 50%;
		float: left;
		box-sizing: border-box;
	}
	.discover_header ul li:nth-of-type(1){
		padding: 40px 30px 30px;
		height: 200px;
		border-right: 1px solid #DDDDDD;
	}
	.discover_header ul li:nth-of-type(1) h3{
		color: rgb(255, 151, 0);
		font-size: 20px;
		font-weight: 600;
	}
	.discover_header ul li:nth-of-type(1) p{
		color: #999999;
		font-size: 12px;
	}
	.discover_header ul li:nth-of-type(1) img{
		width: 80px;
		height: 80px;
	}
	.discover_header ul li:nth-of-type(2){
		padding:20px;
		height: 100px;
		position: relative;
		border-bottom: 1px solid #DDDDDD;
	}
	.discover_header ul li:nth-of-type(2) h3{
		color: rgb(245, 120, 93);
		font-size: 20px;
		font-weight: 600;
	
	}
	.discover_header ul li:nth-of-type(2) p{
		color: #999999;
		font-size: 12px;
	
	}
	.discover_header ul li:nth-of-type(2) img{
		width: 40px;
		height: 40px;
		position: absolute;
		top: 20px;
		right: 20px;
	}
	.discover_header ul li:nth-of-type(3){
		padding:20px;
		height: 100px;
		position: relative;
	}
	.discover_header ul li:nth-of-type(3) h3{
		color: rgb(27, 169, 225);
		font-size: 20px;
		font-weight: 600;
	}
	.discover_header ul li:nth-of-type(3) p{
		color: #999999;
		font-size: 12px;
	}
	.discover_header ul li:nth-of-type(3) img{
		width: 40px;
		height: 40px;
		position: absolute;
		top: 20px;
		right: 20px;
	}
</style>