/**
 * Created by Tomar-Y on 19/07/2018
 */
import qrcode from './qrcode'
const QRCode = {}
QRCode.install = function (Vue, options) {
    // 4. 添加实例方法
    Vue.prototype.$QRCode = qrcode
}
export default QRCode