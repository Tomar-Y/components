# see-img

> 图片预览插件

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

# 使用
import VueSee from 'vue-see'
var options={}
Vue.use(VueSee,options)

# 组件

see-box：多个图片的包裹层，必须

see-item：图片列表渲染，必须

API

imgList：图片列表数组，可以是服务器端返回的数据，必需

key：推荐使用的列表key，非必需

url：图片url，string类型，必需

width：图片宽度，number类型，默认300像素，非必需

height：图片高度，number类型，默认300像素，非必需

caption：图片描述，string类型，默认空，非必需

建议正确设置图片宽高，达到图片的最佳预览效果



> [Github地址](https://github.com/zhaohaodang/vue-see)