import Vue from 'vue'
import App from './App.vue'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Validate from './lib'

Vue.use(Element, { size: 'medium' })
Vue.use(Validate)
new Vue({
  el: '#app',
  render: h => h(App)
})
