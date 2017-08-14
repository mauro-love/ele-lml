import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//外卖
import TakeOutFood from '../page/TakeOutFood/TakeOutFood.vue'
//外卖的子页面
	import Address from '../page/TakeOutFood/Address.vue'
	import Search from '../page/TakeOutFood/Search.vue'
		//搜索子页面
	import SearchHotDetail from '../page/TakeOutFood/SearchHotDetail.vue'
		
	import CategoryDetial from '../page/TakeOutFood/CategoryDetial.vue'
	import SearchDetial from '../page/TakeOutFood/SearchDetial.vue'   
	import SellerDetial from '../page/TakeOutFood/SellerDetial.vue'   

//发现
import Discover from '../page/Discover/Discover.vue'


	
//订单
import Order from '../page/Order/Order.vue'
//我的
import Mine from '../page/mine/Mine.vue'

export default new Router({
  routes: [
	  {
	  	path:"/take-out-food",
	  	component:TakeOutFood,
	  	children:[
		  	{
		  		path:'address',
		  		component:Address
		  	},
		  	{
		  		path:'search',
		  		component:Search,
		  		children:[
			  		{
				  		path:'search-hot-detail/:search_word',
			  			component:SearchHotDetail
			  		}

		  		]
		  	},
		  	{
		  		path:'category-detial/:category',
		  		component:CategoryDetial
		  	},
		  	{
		  		path:'search-hot-detial/:search_word',
		  		component:SearchHotDetail
		  	},
		  	{
		  		path:'seller-detial/:id',
		  		component:SellerDetial
		  	}
	  	]
	  },
	  {
	  	path:"/discover",
	  	component:Discover
	  },
	  {
	  	path:"/order",
	  	component:Order
	  },
	  {
	  	path:"/mine",
	  	component:Mine
	  },
	  {
	  	path:"*",
	  	redirect:"/take-out-food"
	  }
	  
  ]
})
