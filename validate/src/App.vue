<template>
  <div>
    <el-form :model="form" ref="form" :rules="rules" label-position="right" v-loading="loading">
      <el-row :gutter="8">
        <el-col :span="8">
          <el-form-item label=金额 prop="money">
            <el-input v-model="form.money" size="medium"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-button type="success" @click.native="sub">提交</el-button>
    </el-form>
  </div>
</template>

<script>
import Rules from './lib'
export default {
  name: 'app',
  data () {
    return {
      loading: false,
      form: {
        money: 0
      },
      rules: {
        money: this.$Validate.callRules('money', (rule, value, code) => {
          console.log('校验错误的回调信息：', rule, value, code)
        })
      }
    }
  },
  created () {
    this.init()
  },
  methods:{
    init () {
    },
    // 提交
    sub () {
      this.$refs['form'].validate(valid => {
        if (!valid) return console.log('校验失败')
        // TODO 新增
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
