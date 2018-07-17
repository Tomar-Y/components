<template>
  <div id="app">
    <multi-select :name="'name'" :options="data"></multi-select>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      data: [
        {
          name: '选项一',
          value: '0001'
        },
        {
          name: '选项二',
          value: '0002'
        },
        {
          name: '选项三',
          value: '0003'
        },
        {
          name: '选项四',
          value: '0004'
        },
        {
          name: '选项五',
          value: '0005'
        },
        {
          name: '选项六',
          value: '0006'
        },
        {
          name: '选项七',
          value: '0007'
        },
        {
          name: '选项八',
          value: '0008'
        }
      ]
    }
  },
  created () {
  }
}
</script>

<style>
</style>
