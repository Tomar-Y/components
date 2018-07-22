
## 说明
  ```
  打印插件
  ```

## demo
  
  npm run dev 启动后可直接看到效果，使用demo写在App.vue里面

## 参数配置
  ```
  # dom: 打印的区域doc对象，或者doc对象的id选择器，class（只会找第一个）选择器, ref等; 
  # .no-print: 不需要打印的区域加上该样式
  {
    dom
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
  this.$print('#print')
  ```

有问题请留言
> [Github地址](https://github.com/Tomar-Y/components/print)
