<template>
  <div id="app">
    <div class="content" id="water-mark-area">
      <h3>一点点文字，主要关心水印</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  },
  mounted () {
   this.$Watermark('#water-mark-area', {
      text: '水印大军来了',
      color: "#000000",
      imageSrc: 'src/assets/logo.png',
      imageWidth: '60px'
    })
  }
}
</script>

<style>

.content {
  height: 600px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
