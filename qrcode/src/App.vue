<template>
  <div id="app">
    <div class="demoBox">
      <input v-model="codeText" @input="makeCode"/>
      <div id="qrcodeArea"></div>
    </div>
    <p>二维码随着输入的信息，实时在变化</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      codeText: 'Welcome to Your Vue.js App'
    }
  },
  watch: {
    codeText () {
      if (!this.codeText) {
        console.log('ERROR: ', '二维码文本不能为空！')
        return
      }
      this.makeCode()
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.qrcode = this.$QRCode('#qrcodeArea', {
        width : 150,
        height : 150,
        colorDark: '#123',
        colorLight: '#fff'
      });
      this.makeCode()
    },
    makeCode () {
      if (!this.codeText) {
        console.log('ERROR: ', '二维码文本不能为空！')
        return
      }
      this.qrcode.makeCode(this.codeText);
    }
  }

}
</script>

<style>
#app {
  text-align: center;
  padding: 10px 0;
}
.demoBox {
  margin-top: 100px;
}
div {
  text-align: center;
  margin: auto
}
div#qrcodeArea img {
  margin: 20px auto 0;
}
input {
  border-radius: 4px;
  border: 1px solid #e0e0e0;
  padding: 0 6px;
  color: #666;
  line-height: 28px;
  width: 220px;
}
</style>
