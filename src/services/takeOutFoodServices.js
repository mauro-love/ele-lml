//为takeOutFood做请求

import API from '../api'
import axios from 'axios'

//请求地址
function getAddressData(lg, lt){
	return new Promise((resolve,reject)=>{
		axios.get(`${API.addressApi}?longitude=${lg}&latitude=${lt}`)
		//请求成功
		.then((response)=>{
			resolve(response.data.name)
		})
		//请求失败
		.catch(function(error){
			console.log('请求失败')
		});
	})
}
//请求天气
function getWeatherData(lg, lt){
	return new Promise((resolve,reject)=>{
		axios.get(`${API.weatherApi}?longitude=${lg}&latitude=${lt}`)
		//请求成功
		.then((response)=>{
			resolve(response.data)
		})
		//请求失败
		.catch(function(error){
			console.log('请求失败')
		});
	})
}
//请求热搜词
function getHotWords(lg, lt){
	return new Promise((resolve,reject)=>{
		axios.get(`${API.hotWordsApi}?longitude=${lg}&latitude=${lt}`)
		//请求成功
		.then((response)=>{
			resolve(response.data)
		})
		//请求失败
		.catch(function(error){
			console.log('请求失败')
		});
	})
}
//请求分类
function getCategory(lg, lt){
	return new Promise((resolve,reject)=>{
		axios.get(`${API.categoryApi}&longitude=${lg}&latitude=${lt}`)
		//请求成功
		.then((response)=>{
			resolve(response.data[0].entries)
		})
		//请求失败
		.catch(function(error){
			console.log('请求失败')
		});
	})
}
//请求商家列表
function getSellerList(lg, lt){
	return new Promise((resolve,reject)=>{
		axios.get(`${API.homeListApi}&longitude=${lg}&latitude=${lt}`)
		//请求成功
		.then((response)=>{
//			console.log(response);
			var newArr = response.data.map((sellerItem)=>{
				var newItem = {};
				//商家id
				newItem.id = sellerItem.id;
				//店家名称
				newItem.name = sellerItem.name;
				//图片值
				newItem.imgPath = sellerItem.image_path;
				//好评率
				newItem.rating = sellerItem.rating;
				//月下单量
				newItem.orderNum = sellerItem.recent_order_num;
				//活动
				newItem.activities = sellerItem.activities;
				//配送距离
				newItem.distance = sellerItem.distance; 
				//起送价格
				newItem.float_minimum_order_amount = sellerItem.float_minimum_order_amount;  
				//配送费
				newItem.float_delivery_fee = sellerItem.float_delivery_fee;  
				//送达需要时间
				newItem.order_lead_time = sellerItem.order_lead_time; 
				
				return newItem;				
			})
			resolve(newArr);
		})
		//请求失败
		.catch(function(error){
			console.log('请求失败')
		});
	})
}
//搜索地址请求
function searchAddressData(keyword, lg, lt){
	return new Promise((resolve, reject)=>{
//		axios.get(API.addressSearchApi+'&keyword='+keyword)
		axios.get(`${API.addressSearchApi}&longitude=${lg}&latitude=${lt}&keyword=${keyword}`)
		.then((response)=>{
			console.log(response)
			console.log('response')
			resolve(response.data);
		})
		.catch((error)=>{
			console.log(error);
		})
	})
}

//热门词请求
function getHotSearchWord(lg,lt){
	return new Promise((resolve,reject)=>{
		//shopping/v3/hot_search_words?geohash=ws105rz9smwm&latitude=22.54286&longitude=114.059563
		axios.get(`${API.hotSearchWords}&longitude=${lg}&latitude=${lt}`)
//		axios.get(`shopping/v3/hot_search_words?geohash=ws105rz9smwm&latitude=22.54286&longitude=114.059563`)
		.then((response)=>{
			resolve(response.data);
		})
		.catch((error)=>{
			console.log(error);
		})
	})
}
//分类获取
function getSearchCategory(lg,lt){
	return new Promise((resolve,reject)=>{
		axios.get(`${API.searchCategory}?longitude=${lg}&latitude=${lt}`)

		.then((response)=>{
//			console.log(response);
			resolve(response.data);
		})
		.catch((error)=>{
			console.log(error);
		})
	})
}
//分类获取
function getActivityAttributes(lg,lt,word){
	return new Promise((resolve,reject)=>{
		axios.get(`${API.activity_attributes}?longitude=${lg}&latitude=${lt}&kw=${word}` )

		.then((response)=>{
//			console.log(response);
			resolve(response.data);
		})
		.catch((error)=>{
			console.log(error);
		})
	})
}
//获取搜索页面商店列表信息
function getRestaurantsList(lg,lt,word){
	return new Promise((resolve,reject)=>{
		axios.get(`${API.restaurantsList}&longitude=${lg}&latitude=${lt}&keyword=${word}` )

		.then((response)=>{
			console.log(response);
			resolve(response.data);
		})
		.catch((error)=>{
			console.log(error);
		})
	})
}
//获取商品详情头部
function getRestaurantsDetialTitle(lg,lt,id){
	var detialTemp = '?extras[]=activities&extras[]=albums&extras[]=license&extras[]=identification';
	return new Promise((resolve,reject)=>{
		axios.get(`${API.restaurantsDetialTitle}${id}${detialTemp}&longitude=${lg}&latitude=${lt}` )

		.then((response)=>{
			console.log(response.data);
			resolve(response.data);
		})
		.catch((error)=>{
			console.log(error);
		})
	})
}
//获取商品详情中心
function getRestaurantsDetialMain(id){
	return new Promise((resolve,reject)=>{
		axios.get(`${API.restaurantsDetialMain}${id}` )

		.then((response)=>{
			console.log(response.data);
			resolve(response.data);
		})
		.catch((error)=>{
			console.log(error);
		})
	})
}


export default{
	getAddressData,
	getWeatherData,
	getHotWords,
	getCategory,
	getSellerList,
	searchAddressData,
	getHotSearchWord,
	getSearchCategory,
	getActivityAttributes,
	getRestaurantsList,
	getRestaurantsDetialTitle,
	getRestaurantsDetialMain
}
