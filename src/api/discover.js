//图片主接口
const imgHost = 'http://fuss10.elemecdn.com/';
//发现头部接口
const discoverHeadApi = '/member/v1/discover?platform=1&block_index=0' //&latitude=22.6289887&longitude=113.8321056

//美食热推接口
const hotfoodApi = '/hotfood/v1/guess/likes?offset=0&limit=3&request_id=8a67b8df-3705-4fe9-9b3d-13046b738a82&tag_id=-1&columns=1' //latitude=22.6290166&longitude=113.8320822&


export default{
	imgHost,
	discoverHeadApi,
	hotfoodApi
}
