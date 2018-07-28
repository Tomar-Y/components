/**
 * Created by Tomar-Y on 22/07/2018
 */
import Validate from './Validate'
const validate = {}
validate.install = function (Vue, options) {
  Vue.prototype.$Validate = Validate()
  Vue.prototype.$Rules = Vue.prototype.$Validate.rules
}
export default validate