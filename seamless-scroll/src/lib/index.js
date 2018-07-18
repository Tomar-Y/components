/**
 * Created by Tomar-Y on 18/07/2018
 */
import seamlessScroll from './seamlessScroll'
const SeamlessScroll = {
  install: function (Vue) {
    if (typeof window !== 'undefined' && window.Vue) {
      Vue = window.Vue
    }
    Vue.component('seamlessScroll', seamlessScroll)
  }
}
export default SeamlessScroll
