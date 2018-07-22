import Vue from 'vue'
import App from './App.vue'
import Webcam from './lib'
Vue.use(Webcam)
new Vue({
  el: '#app',
  render: h => h(App)
})
