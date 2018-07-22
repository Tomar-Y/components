<template>
  <div id="app">
    <pagination :page="page" :pagerCount="pagerCount" @handlePage="handlePage"></pagination>
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
    handlePage (current) {
      console.log(current)
    }
  }
}
</script>

<style>

</style>
