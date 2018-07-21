# digital-roll

> a vue component what digital roll

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
  数字滚动插件
  ```

## demo
  
  npm run dev 启动后可直接看到效果，使用demo写在App.vue里面

## 参数配置
  ```
  # container: 显示内容的容器; number: '数字（Number）'
  {
    container: '#num-roll',
    number: this.numOne
  }
  ```
## 安装使用

  ``` bash
  # 在项目入口文件中（main.js) 
  # step1: 
  npm install digital-roll-xm --save-dev

  # step2:
  import Digital from 'digital-roll-xm'
  Vue.use(Digital)
  
  # step3: 初始化
  const roll = this.$Digitalroll({
    container: '#num-roll',
    number: this.numOne
  })

  # step4: 更新数据调用
  roll.roll(this.numOne)
  ```

有问题请留言
> [Github地址](https://github.com/Tomar-Y/components/digital-roll)