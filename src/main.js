// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
// 引入路由
import router from './router'
import vueResource from 'vue-resource'
import App from './App'

// 第一个坑alert的样式不显示
import {AlertPlugin, ConfirmPlugin} from 'vux'
Vue.use(AlertPlugin)
Vue.use(ConfirmPlugin)
Vue.use(vueResource)

// 引入全局firstClick
FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  template: '<App/>',
  components: {App}
}).$mount('#app-box');
// $mount('ID')就先刚玉对象当中的el属性