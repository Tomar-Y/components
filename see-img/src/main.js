import Vue from 'vue'
import App from './App.vue'
import seeImg from 'vue-see'
Vue.use(seeImg)
new Vue({
  el: '#app',
  render: h => h(App)
})
