import Vue from 'vue'
import App from './App.vue'
import Digitalroll from './lib'
Vue.use(Digitalroll)
new Vue({
  el: '#app',
  render: h => h(App)
})
