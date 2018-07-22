/**
 * Created by Tomar-Y on 07/07/2018
 */

import Pagination from './Pagination.vue'

const pagination = {
  install: function (Vue) {
    console.log('Vue: ', Vue)
    if (typeof window !== 'undefined' && window.Vue) {
      Vue = window.Vue
    }
    Vue.component('page-pagination', Pagination)
  }
}

export default pagination