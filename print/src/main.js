import Vue from 'vue'
import App from './App.vue'
import PrintPlugin from './lib'
Vue.use(PrintPlugin)
new Vue({
  el: '#app',
  render: h => h(App)
})
