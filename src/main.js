// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//路由
import router from './router'

//请求
import axios from 'axios'
Vue.prototype.$http = axios;
//过滤
import './filter'

//状态管理
import store from './store'

//过滤器
import './filter'
//处理非父子组件的通信
var Event = new Vue();
Vue.prototype.$eventHandle = Event;



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
	router,
	store,
  template: '<App/>',
  components: { App }
})
