# img-zoom

> for vue component 

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
## 说明
  ```
  图片放大镜插件
  ```

## demo
  npm run dev 启动后可直接看到效果，使用demo写在App.vue里面

## 配置参数
```
    configs: {
        width:650,
        height:350,
        maskWidth:100,
        maskHeight:100,
        maskColor:'red',
        maskOpacity:0.2
    }
```

## 安装使用
  ``` bash
  # 在项目入口文件中（main.js) 
  # step1: 
  npm install img-zoom-xm --save-dev

  # step2:
  import ImgZoom from 'img-zoom-xm'
  Vue.use(ImgZoom)

  # step3:
  <img-zoom :src="'src/assets/img-samll.png'" width="450" height="250" :bigsrc="'src/assets/img-big.jpg'" :configs="configs"></img-zoom>
  ```

有问题请留言
> [Github地址](https://github.com/Tomar-Y/components/img-zoom)