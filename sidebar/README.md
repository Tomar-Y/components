# sidebar

> a Vue component what sidebar-menus

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
  左侧菜单插件 带滚动功能，在左侧的样式需要自己写
  ```

## demo
  
  npm run dev 启动后可直接看到效果，使用demo写在App.vue里面

## 参数配置
  ```
  # menus: 菜单数据 Array

  ```

## 安装使用

  ``` bash
  # 在项目入口文件中（main.js) 
  # step1: 
  npm install aside-xm --save-dev

  # step2:
  import Aside from 'aside-xm'
  Vue.use(Aside)

  # step3: 
  <sidebar :menus="menus"></sidebar>
  
  ```

有问题请留言
> [Github地址](https://github.com/Tomar-Y/components/sidebar)
