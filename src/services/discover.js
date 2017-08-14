//为discover请求
import API from '../api/discover.js'
import axios from 'axios'

//请求发现头部数据
function getDiscoverHeadData(lg, lt){
	return new Promise((resolve,reject)=>{
		axios.get(`${API.discoverHeadApi}&longitude=${lg}&latitude=${lt}`)
		//请求成功
		.then((response)=>{
			resolve(response.data[1])
		})
		//请求失败
		.catch(function(error){
			console.log('请求失败')
		});
	})
}
//请求发现美食热推
function getHotFoodData(lg, lt){
	return new Promise((resolve,reject)=>{
		axios.get(`${API.hotfoodApi}&longitude=${lg}&latitude=${lt}`)
		//请求成功
		.then((response)=>{
//			var newArr = response.data.map((sellerItem)=>{
//				var newItem = {};
//				//商家id
//				newItem.id = sellerItem.food[0].id;
//				//店家名称
//				newItem.name = sellerItem.food[0].name;
//				//图片值
//				newItem.imgPath = sellerItem.food[0].image_path;
//				//价格
//				newItem.price = sellerItem.food[0].price;
//				return newItem;
//			})
            console.log(response.data);
			
			console.log('11111');
			resolve(response.data);
		})
		//请求失败
		.catch(function(error){
			console.log('请求失败')
		});
	})
}

export default{
	getDiscoverHeadData,
	getHotFoodData
}
