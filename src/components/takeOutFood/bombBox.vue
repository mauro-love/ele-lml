<template>
	<div class="bombBox">
		<ul class="bomBoxList">
			<li v-for="word in littleTitle" @click="showList(word)" :class="{active:isShow==word}">
				{{word}} 
				<span  class="iconfont2 icon-sanjiao">
				</span>
			</li>
		</ul>
		<div class="showList">
			<div v-if="isShow == '分类'">
				<ul>
					<li v-for="category in searchCategory">{{category.name}}</li>
				</ul>
			
			</div>
			<div v-if="isShow == '排序'">
				<ul>
					<li>
						<span class="iconfont2 icon-huiyuanqia"></span>
						<p>智能排序</p>
					</li>
					<li>
						<span class="iconfont2 icon-huiyuanqia"></span>
						<p>距离最近</p>
					</li>
					<li>
						<span class="iconfont2 icon-huiyuanqia"></span>
						<p>销量最高</p>
					</li>
					<li>
						<span class="iconfont2 icon-huiyuanqia"></span>
						<p>起送价最低</p>
					</li>
					<li>
						<span class="iconfont2 icon-huiyuanqia"></span>
						<p>配送速度最快</p>
					</li>
					<li>
						<span class="iconfont2 icon-huiyuanqia"></span>
						<p>好评优先</p>
					</li>
				</ul>
			</div>
			<div v-if="isShow == '筛选'">
				<dl class="methods">
					<dt>配送方式</dt>
						
					<dd>
						蜂鸟专送
					</dd>
				</dl>
				<dl class="attribute">
					<dt>商家属性(可多选)</dt>
					<dd v-for="attribute in activityAttributes">
						<span :style="{color:'#' + attribute.icon_color}">{{attribute.icon_name}}</span>
						{{attribute.name}}
					</dd>
				</dl>
				<ul>
					<li><button>清空</button></li>
					<li><button>确定</button></li>
				</ul>
			</div>
		</div>
		
	</div>
	
</template>

<script>
	export default{
		props:{
			searchCategory:Array,
			activityAttributes:Array
		},
		data(){
			return {
				littleTitle:['分类','排序','筛选'],
				isShow:''
			}
		},
		methods:{
			showList(word){
				this.isShow = word;
			}
		}
	}
</script>

<style>
	.bombBox{
		width: 100%;
	}
	.bomBoxList{
		width: 100%;
		height: 20px;
		display: flex;
		flex: 1;
	}
	.bomBoxList li{
		text-align: center;
		flex: 1;
	}
	.active{
		color: #0000FE;
	}
</style>