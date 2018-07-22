import Vue from 'vue'
import App from './App.vue'
import Pagination from './lib'
Vue.use(Pagination)
new Vue({
  el: '#app',
  render: h => h(App)
})
