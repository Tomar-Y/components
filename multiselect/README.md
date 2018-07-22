# multiselect

> a vue component how multiselect with search

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
  支持多选及过滤的下拉框插件
  ```

## demo
  
  npm run dev 启动后可直接看到效果，使用demo写在App.vue里面

## 参数配置
  ```
  # name: 与可选标签元素匹配的名称属性; options: 显示select选项
  {
    name: 'name',
    options: data
  }
  ```

## 安装使用

  ``` bash
  # 在项目入口文件中（main.js) 
  # step1: 
  npm install multiselect-xm --save-dev

  # step2:
  import Multiselect from 'multiselect-xm'
  Vue.use(Multiselect)

  # step3: 
  <multi-select :name="'name'" :options="data"></multi-select>
  ```

有问题请留言
> [Github地址](https://github.com/Tomar-Y/components/Multiselect)
