import Vue from 'vue'

import API from '../api'

Vue.filter('imgFilter',function(val,info){
	if(val == null){
		return '';
	}
	var pex = val.endsWith('png')? ".png":".jpeg";
	return API.imgHost + val + pex;
})
Vue.filter('distance',function(val){
	
	return parseInt(val/10)/100; 
})