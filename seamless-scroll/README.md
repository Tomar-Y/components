# seamless-scroll

> a vue component for seamless-scroll

# desc
` 
 传参:
:optionClass: {
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
`


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
