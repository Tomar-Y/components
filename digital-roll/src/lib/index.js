/**
 * Created by Tomar-Y on 17/07/2018
 */
import digitalRoll from './digitalRoll'
const Digitalroll = {
  install: function (Vue) {
    if (typeof window !== 'undefined' && window.Vue) {
      Vue = window.Vue
    }
    Vue.prototype.$Digitalroll = digitalRoll
  }
}
export default Digitalroll
