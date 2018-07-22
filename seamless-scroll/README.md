# seamless-scroll

> a vue component for seamless-scroll

# desc
```
  optionClass: {
    step: 1, //步长
    limitMoveNum: 5, //启动无缝滚动最小数据数
    hoverStop: true, //是否启用鼠标hover控制
    direction: 1, // 0 往下 1 往上 2向左 3向右
    openTouch: true, //开启移动端touch
    singleHeight: 0, //单条数据高度有值hoverStop关闭
    singleWidth: 0, //单条数据宽度有值hoverStop关闭
    waitTime: 1000, //单步停止等待时间
    switchOffset: 30,
    autoPlay: true,
    switchSingleStep: 134,
    switchDelay: 400,
    switchDisabledClass: 'disabled',
    isSingleRemUnit: false // singleWidth/singleHeight 是否开启rem度量
  }
```


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
  无缝滚动插件
  ```

## demo
  
  npm run dev 启动后可直接看到效果，使用demo写在App.vue里面

## 参数配置
  ```
  # data: 滚动的数据，小于100条
  # classOption: 详情见上

  ```

## 安装使用

  ``` bash
  # 在项目入口文件中（main.js) 
  # step1: 
  npm install seamless-scroll-xm --save-dev

  # step2:
  import SeamlessScroll from 'seamless-scroll-xm'
  Vue.use(SeamlessScroll)

  # step3: 
  <seamlessScroll :data="list" :class-option="classOption" class="seamlessBox">
    <ul class="listBox">
    <li v-for="(item, index) in list">
        <a href="javascript:void(0)">
        <span> {{ item.title }} </span>
        <span> {{ item.date }} </span>
        </a>
    </li>
    </ul>
  </seamlessScroll>
  
  ```

有问题请留言
> [Github地址](https://github.com/Tomar-Y/components/seamless-scroll)