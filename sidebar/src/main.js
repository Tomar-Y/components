import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Sidebar from './lib'
Vue.use(VueRouter)
Vue.use(Sidebar)

const router = new VueRouter({
  // mode: 'history',
  'linkActiveClass': 'active',
});
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
