import Vue from 'vue'
import App from './App.vue'
import Watermark from './lib'
Vue.use(Watermark)
new Vue({
  el: '#app',
  render: h => h(App)
})
