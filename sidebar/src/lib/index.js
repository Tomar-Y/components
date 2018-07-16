/**
 * Created by Tomar-Y on 14/07/2018
 */
import sidebar from './aside.vue'
const Sidebar = {
  install: function (Vue) {
    if (typeof window !== 'undefined' && window.Vue) {
      Vue = window.Vue
    }
    Vue.component('sidebarItem', sidebar)
  }
}
export default Sidebar