# water-mark

> a vue watermark component

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
  水印插件 支持图片
  ```

## demo
  
  npm run dev 启动后可直接看到效果，使用demo写在App.vue里面

## 参数配置
  ```
  optiosn: {
    node:node,                                               // 添加水印的节点
    text: options.text ? options.text : "",                      // 水印文字内容
    opacity: options.opacity ? options.opacity : 0.15,           // 水印透明度
    startX: options.startX ? options.startX: 0,                 // X轴开始位置
    startY: options.startY ? options.startY: 15,                // Y轴开始位置
    xSpace: 100,                                             // 横向间隔
    ySpace: 50,                                              // 纵向间隔
    rows: 0,                                                 // 行数
    cols:0,                                                  // 列数
    markWidth: options.markWidth ? options.markWidth: 210,      // 水印高度
    markHeight: options.markHeight ? options.markHeight: 80,    // 水印宽度
    angle: options.angle ? options.angle: 20,                   // 倾斜角度
    fontSize: options.fontSize ? options.fontSize: 12,          // 字体大小
    color: options.color ? options.color: "#000",               // 字体颜色
    fontFamily: options.fontFamily ? options.fontFamily: '微软雅黑', // 字体
    imageSrc: options.imageSrc ? options.imageSrc: '',         // 图片地址
    imageWidth: options.imageWidth ? options.imageWidth: '',         // 图片大小 example 50px
  }
  ```

## 安装使用

  ``` bash
  # 在项目入口文件中（main.js) 
  # step1: 
  npm install watermark-xm --save-dev

  # step2:
  import Watermark from 'watermark-xm'
  Vue.use(Watermark)

  # step3: 
  this.$Watermark(optiosn)
  
  ```

有问题请留言
> [Github地址](https://github.com/Tomar-Y/components/water-mark)

