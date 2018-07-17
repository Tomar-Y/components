/**
 * Created by Tomar-Y on 07/07/2018
 */
import Pagination from './Pagination.vue'

const pagination = {
  install: function (Vue) {
    if (typeof window !== 'undefined' && window.Vue) {
      Vue = window.Vue
      console.log('Vue: ', Vue);
    }
    Vue.component('pagination', Pagination)
  }
}
export default Pagination

// Vue.component('pagination', Pagination)
