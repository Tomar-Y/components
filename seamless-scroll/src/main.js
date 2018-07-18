import Vue from 'vue'
import App from './App.vue'
import seamlessScroll from './lib'
Vue.use(seamlessScroll)
new Vue({
  el: '#app',
  render: h => h(App)
})
