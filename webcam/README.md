# webcam

> a vue component what webcam, the webcam is other author write, thx!

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
  web端 调用摄像头 大神链接http://github.com/jhuckaby
  ```

## demo
  
  npm run dev 启动后可直接看到效果，使用demo写在App.vue里面

## 方法说明
  ```
  this.$Webcam.set:  初始化参数
  this.$Webcam.attach: 创建一个摄像头并初始化摄像头位置
  this.$Webcam.snap: 画一个拍照图
  

  ```
## 参数说明
  ```
  params: {
    width: 0,
    height: 0,
    dest_width: 0,         // 捕获图像的大小
    dest_height: 0,        // 默认宽度/高度
    image_format: 'jpeg',  // 图像格式（可以是JPEG或PNG）
    jpeg_quality: 90,      // JPEG图像质量从0（最差）到100（最佳）
    enable_flash: true,    // enable flash fallback,
    force_flash: false,    // 强制闪光模式,
    flip_horiz: false,     // 翻转图像水平（镜像模式）
    fps: 30,               // camera frames per second
    upload_name: 'webcam', // 上传数据的文件名
    constraints: null,     // 自定义用户媒体约束,
    swfURL: '',            // URI to webcam.swf movie (defaults to the js location)
    flashNotDetectedText: 'ERROR: No Adobe Flash Player detected.  Webcam.js relies on Flash for browsers that do not support getUserMedia (like yours).',
    noInterfaceFoundText: '未找到支持的网络摄像头接口.',
    unfreeze_snap: true,    // 是否在快照后解冻相机（默认为true）
    iosPlaceholderText: 'Click here to open camera.',
    user_callback: null,    // 快照的回调函数（如果没有给SNAP函数提供用户参数回调）
    user_canvas: null       // 用户提供的快照画布（如果没有用户的画布参数给SNAP函数使用）
  }  
  ```

## 安装使用

  ``` bash
  # 在项目入口文件中（main.js) 
  # step1: 
  npm install webcam-xm --save-dev

  # step2:
  import Webcam from 'webcam-xm'
  Vue.use(Webcam)

  # step3: 
  this.$Webcam.set({
    width: 300,
    height: 300,
    image_format: 'jpeg',
    jpeg_quality: 90
  });
  this.$Webcam.attach('#camera-window');

  this.$Webcam.snap( function(data_uri) {
    document.getElementById('results').innerHTML = 
        '<h2>Here is your image:</h2>' + 
        '<img src="'+data_uri+'"/>';
  });
  
  ```

有问题请留言
> [Github地址](https://github.com/Tomar-Y/components/webcam)

