import Vue from 'vue'
import App from './App.vue'
import QRCode from './lib'
Vue.use(QRCode)
new Vue({
  el: '#app',
  render: h => h(App)
})
