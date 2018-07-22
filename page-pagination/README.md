# page-pagination
# 一个 分页插件， 需用到element-ui。 同时调用数据需要依赖另外一个组件
> vue and element-ui for pagination

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
  支持异步功能(分页查询，条件查询)的分页插件
  需要安装依赖另一个基于axios封装插件
  ```

## demo
  目前没有demo

## 参数配置
  ```
  # mustParams: 列表查询时必填的参数（比如根据业务需求，此列表查询的是当前登录用户的数据）;
  # current: 当前页（默认是1）
  # size: 每页显示多少条 (默认10)
  # pagesizes: 切换size （默认 [10, 20, 50]）
  # total: 总条数 （默认0）
  # apis: 放所有请求后台方法的对象集 ----必传
  # api: apis 里面的某个方法名  ----必传
  {
    mustParams: { userId: userId },
    current: 1,
    pagesizes: [10, 20, 50]
  }
  ```

## 安装使用

  ``` bash
  # 在项目入口文件中（main.js) 
  # step1: 
  npm install page-pagination-xm --save-dev

  # step2:
  import PagePagination from 'page-pagination-xm'
  Vue.use(PagePagination)

  # step3: 
  <page-pagination :apis="apis" :api="api" ></page-pagination>
  
  ```

有问题请留言
> [Github地址](https://github.com/Tomar-Y/components/Multiselect)
