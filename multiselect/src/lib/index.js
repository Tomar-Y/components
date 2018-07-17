/**
 * Created by Tomar-Y on 14/07/2018
 */
import Multiselect from './Multiselect.vue'
const multiselect = {
  install: function (Vue) {
    if (typeof window !== 'undefined' && window.Vue) {
      Vue = window.Vue
    }
    Vue.component('multiSelect', Multiselect)
  }
}
export default multiselect
