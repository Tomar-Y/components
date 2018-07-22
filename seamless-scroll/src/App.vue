<template>
  <div id="app">
    <seamlessScroll :data="list" :class-option="classOption" class="seamlessBox">
      <ul class="listBox">
        <li v-for="(item, index) in list">
          <a href="javascript:void(0)">
            <span> {{ item.title }} </span>
            <span> {{ item.date }} </span>
          </a>
        </li>
      </ul>
    </seamlessScroll>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
        list: [
          {
            title: '无缝滚动第1行',
            date: '2018-07-18'
          },
          {
            title: '无缝滚动第2行',
            date: '2018-07-18'
          },
          {
            title: '无缝滚动第3行',
            date: '2018-07-18'
          },
          {
            title: '无缝滚动第4行',
            date: '2018-07-18'
          },
          {
            title: '无缝滚动第5行',
            date: '2018-07-18'
          },
          {
            title: '无缝滚动第6行',
            date: '2018-07-18'
          },
          {
            title: '无缝滚动第7行',
            date: '2018-07-18'
          }
          ,
          {
            title: '无缝滚动第8行',
            date: '2018-07-18'
          },
          {
            title: '无缝滚动第9行',
            date: '2018-07-18'
          },
          {
            title: '无缝滚动第10行',
            date: '2018-07-18'
          }
        ]
    }
  },
  computed: {
    classOption () {
      return {
        step: 0.5,
        limitMoveNum: 5
      }
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
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style-type: none
}
.listBox {

}
.seamlessBox {
  height: 280px;
  border: 1px solid #e0e0e0;
  padding: 10px;
  width: 300px;
  overflow: hidden;
  margin: auto;
}
.listBox li {
  line-height: 28px;
  height: 28px;
}
.listBox a {
  display: flex;
  color: #666;
  justify-content: space-between;
  text-align: left;
}
.listBox a > span:first-child{
  width: 80%;
}
.listBox a > span:last-child{
  width: 80%;
  text-align: right;
}
</style>
