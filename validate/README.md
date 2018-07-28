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
  校验插件 信息提示及回调机制 基于 element-ui 封装
  支持注册规则 错误回调 新增多重规则 内置规则
  ```

## demo
  
  npm run dev 启动后可直接看到效果，使用demo写在App.vue里面

## 参数配置
  ```
  Validate.prototype.callRules('已注册的校验规则名称', params2, param2, param3)
  param123等: 是多个参数 可以传校验规则 比如 { required: true, message: 'xxx必填', trigger: 'blur' } 也可以穿回调函数 (rule, value, code0) => {}
  rule 会包含错误提示的校验规则，以及载体等信息，code是错误码， 100：校验失败，101：正则表达式错误 

  ```

  ```
  Validate.prototype.register(rules)
  rules 是 定义好的校验规则 比如 

  `QQ: [
    { 
      pattern: /^[1-9][0-9]{4,13}$/,
      message: '输入正确的QQ号', 
      trigger: 'blur' 
    }
  ]`

  ```

## 安装使用

  ``` bash
  # 在项目入口文件中（main.js) 
  # step1: 
  npm install Validate-xm --save-dev

  # step2:
  import Validate from 'Validate-xm'
  Vue.use(Validate)

  # step3: 
  rules: {
    money: this.$Validate.callRules('money', (rule, value, code) => {
        console.log('校验错误的回调信息：', rule, value, code)
    })
  }
  # 其余使用类似 element-ui validate
  
  ```

有问题请留言
> [Github地址](https://github.com/Tomar-Y/components/validate)
