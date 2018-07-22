<template>
  <scroll-bar>
    <sidebar-item :menus="menus" v-if="menus.length > 0"></sidebar-item>
  </scroll-bar>
</template>

<script>
import sidebarItem from '../components/sidebar/sidebar'
import ScrollBar from '../components/scrollerBar'

export default {
  data() {
    return {
      
    }
  },
  components: { sidebarItem, ScrollBar },
  props: {
    menus: {
      type: Array
    }
  },
  created () {
    this.initData()
  },
  mounted () {
    
  },
  computed: {

    isCollapse() {
      return true
    }
  },
  created () {
    this.initData()
  },
  methods: {
    initData () {
      if (!this.menus || this.menus.length < 1) {
       // 这里应该去获取数据 (正常情况菜单数据 存放在全局状态管理工具里面)
       console.log('未找到数据。') // 用于测试 可删
       return
      }
    }
  }
}
</script>
<style>
#app .sidebar-container .el-menu {
  width: 100%;
  border: none
}
#app .sidebar-container .menu-wrapper > a {
  border: 1px solid #e0e0e0
}
</style>
