<template>
  <div id="app">
    <section id="print">
      打印
      打印2
      <div class="no-print">不打印</div>
    </section>

    <button @click="handlePrint">打印</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      pagerCount: 5,
      page: {
        total: 290
      }
    }
  },
  methods: {
    handlePrint () {
      this.$print('#print')
    }
  }
}
</script>

<style scoped>
button {
  border: 1px solid #e0e0e0;
  margin: 0;
  padding: 10px 20px;
  text-align: center;
  background: #409eff;
  color: #fff;
  margin: 40px 20px 0 0;
  cursor: pointer;
}
button:hover {
  background: #fff;
  color: #409eff;
}
</style>
