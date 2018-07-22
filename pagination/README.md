# pagination

> for table pagination

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
  不带异步功能的分页插件
  ```

## demo
  
  npm run dev 启动后可直接看到效果，使用demo写在App.vue里面

## 参数配置
  ```
  # page: 分页配置; 
  # pagerCount: 显示的btn个数（基数，传偶数会被+1）
  # handlePage: 点击分页的按钮 会触发的回调函数 
  {
    page: {
      current: 1,
      size: 10,
      total: 0
    },
    pagerCount: 7
  }
  ```

## 安装使用

  ``` bash
  # 在项目入口文件中（main.js) 
  # step1: 
  npm install pagination-xm --save-dev

  # step2:
  import Pagination from 'pagination-xm'
  Vue.use(Pagination)

  # step3: 
  <pagination :page="page" :pagerCount="pagerCount" @handlePage="handlePage"></pagination>
  ```

有问题请留言
> [Github地址](https://github.com/Tomar-Y/components/pagination)
