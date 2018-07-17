
import Vue from 'vue'
import App from './App.vue'
import multiSelect from 'multiselect-xm'
Vue.use(multiSelect)
new Vue({
  el: '#app',
  render: h => h(App)
})
