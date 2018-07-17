/**
 * Created by Tomar-Y on 14/07/2018
 */
import Multiselect from './Multiselect.vue'
window.multiselect = {
  install: function (Vue) {
    console.log(222)
    if (typeof window !== 'undefined' && window.Vue) {
      Vue = window.Vue
    }
    Vue.component('multiSelect', Multiselect)
  }
}
export default multiselect
