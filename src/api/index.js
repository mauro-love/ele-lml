//图片主接口
const imgHost = 'http://fuss10.elemecdn.com/';
//地址请求接口
const addressApi = '/bgs/poi/reverse_geo_coding';//?latitude=22.54286&longitude=114.059563
//天气请求接口
const weatherApi = '/bgs/weather/current';//?latitude=22.54286&longitude=114.059563
//热搜词请求接口
const hotWordsApi = '/shopping/v3/hot_search_words';//?latitude=22.54286&longitude=114.059563
//轮播图请求接口
const categoryApi = '/shopping/v2/entries?templates[]=main_template';//latitude=22.54286&longitude=114.059563&
//商家列表请求接口
const homeListApi = '/shopping/restaurants?offset=0&limit=20&extras[]=activities&terminal=h5';//latitude=22.54286&longitude=114.059563&
///shopping/v1/restaurants/search?offset=0&limit=20&search_item_type=2&extra[]=activities


//接口参数
const addressSearchApi = '/bgs/poi/search_poi_nearby?offset=0&limit=10';//longitude=114.059563&latitude=22.54286
//热搜词
const hotSearchWords = '/shopping/v3/hot_search_words?geohash=ws105rz9smwm'//latitude=22.54286&longitude=114.059563
//热搜词详情
const hotSearchWordsDetial = '/shopping/v1/restaurants/search?offset=0&limit=20&search_item_type=2&extra[]=activities' 

//搜索分类
const searchCategory = '/shopping/v2/restaurant/category' //latitude=22.6289426&longitude=113.8321476
//活动属性
const activity_attributes = '/shopping/v1/restaurants/activity_attributes' //latitude=22.6289426&longitude=113.8321476&kw=

const restaurantsList = '/shopping/v1/restaurants/search?offset=0&limit=20&search_item_type=2&extra[]=activities'
//&keyword=%E9%B8%A1%E7%88%AA&latitude=22.6289426&longitude=113.8321476
// 商家详情头部
const restaurantsDetialTitle = '/shopping/restaurant/'//&latitude=22.6289426&longitude=113.8321476
//商家详情中心
const restaurantsDetialMain = '/shopping/v2/menu?restaurant_id='

export default{
	imgHost,
	addressApi,
	weatherApi,
	hotWordsApi,
	categoryApi,
	homeListApi,
	addressSearchApi,
	hotSearchWords,
	hotSearchWordsDetial,
	searchCategory,
	activity_attributes,
	restaurantsList,
	restaurantsDetialTitle,
	restaurantsDetialMain
}
