# qrcode

> 二维码插件

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
  二维码生成插件
  ```

## demo
  
  npm run dev 启动后可直接看到效果，使用demo写在App.vue里面

## 参数配置
  ```
  opts: {
    width : 256,
    height : 256,
    typeNumber : 4,
    colorDark : "#000000", // 二维码颜色
    colorLight : "#ffffff", // 二维码背景色
    correctLevel : QRErrorCorrectLevel.H // 等级
  }
  ```

## 安装使用

  ``` bash
  # 在项目入口文件中（main.js) 
  # step1: 
  npm install print-xm --save-dev

  # step2:
  import Print from 'print-xm'
  Vue.use(Print)

  # step3: 
  # 3.1 初始化二维码图片位置
  const qrcode = this.$QRCode('#qrcodeArea', {
    width : 150,
    height : 150,
    colorDark: '#444',
    colorLight: '#F5F5F5'
  })
  # 3.2 设置二维码内容 并且创建一个二维码到指定的位置
  qrcode.makeCode('二维码显示的内容')
  ```

有问题请留言
> [Github地址](https://github.com/Tomar-Y/components/print)
