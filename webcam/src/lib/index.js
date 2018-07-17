/**
 * Created by Tomar-Y on 17/07/2018
 */
import webcam from './webcam'
const Webcam = {
  install: function (Vue) {
    if (typeof window !== 'undefined' && window.Vue) {
      Vue = window.Vue
    }
    Vue.prototype.$Webcam = webcam
  }
}
export default Webcam
