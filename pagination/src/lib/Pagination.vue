<template>
  <div class="page-container">
    <span class="item-des">共&nbsp;{{ page.total }}&nbsp;条</span>
    <button @click="handleStep(-1)">
      <img src="../assets/syy.png"/>
    </button>
    <ul v-show="pages.show" class="pageNumber">
      <li @click="handleNumber(1)" :class="1 === current ? 'active' : ''">1</li>
      <li v-show="pages.startI" @click="handleCount('minus')"><img src="../assets/slh.png"/></li>
      <li v-for="(item, index) in pages.centerPages" @click="handleNumber(item)" :key="index" :class="item === current ? 'active' : ''">{{ item }}</li>
      <li v-show="pages.endI" @click="handleCount('add')"><img src="../assets/slh.png"/></li>
      <li @click="handleNumber(pages.pagesMax)" :class="pages.pagesMax === current ? 'active' : ''">{{ pages.pagesMax }}</li>
    </ul>
    <button @click="handleStep(1)">
      <img src="../assets/xyy.png"/>
    </button>
    <span></span>
  </div>
</template>
<script>
export default {
  name: 'pagination',
  data () {
    return {
      pages: {
        show: false,
        centerPages: [],
        pagesMax: 0,
        startI: false,
        endI: false
      },
      current: 1
    }
  },
  props: {
    page: {
      type: Object,
      default () {
        return {
          current: 1,
          size: 10,
          total: 0
        }
      }
    },
    pagerCount: {
      type: Number,
      default: 7  
    }
  },
  components: {  },
  watch: {
    current () {
      if (this.current < 1) {
        this.current = 1
      }
      if (this.current > this.pages.pagesMax) {
        this.current = this.pages.pagesMax
      }
      this.layout()
    }
  },
  created() {
    this.initData()  
  },
  mounted() {
      
  },
  methods: {
    // 初始化分页信息
    initData () {
      const total = this.page.total
      const size = this.page.size
      if (total < 1) {
        this.pages.show = false
        return
      }
      this.pages.show = true
      this.page.size = size ? size : 10

      this.current = this.page.current ? this.page.current : 1

      this.pages.pagesMax = Math.ceil(total/this.page.size)
      if (this.pagerCount%2 === 0) {
        this.pagerCount ++
      }
      console.log(this.pagerCount)
      this.layout()
    },
    
    // 控制省略号显示隐藏
    layout () {
      const pagesMax = this.pages.pagesMax
      const pagerCount = this.pagerCount
      let current = this.current

      if (pagesMax > pagerCount) {
        this.pages.startI = current > (pagerCount + 1)/2
        this.pages.endI = current <= (pagesMax - (pagerCount + 1)/2)
      }
      
      this.pages.centerPages = [];
      const bet = (pagerCount-1)/2;
      if (current + bet >= pagesMax) {
        for (let i = pagerCount-2; i > 0; i --) {
          this.pages.centerPages.push(pagesMax - i)
        }
      } else if (current - bet <= 1) {
        for (let i = 0; i < pagerCount-2; i ++) {
          this.pages.centerPages.push(i + 2)
        }
      } else if (current - bet > 1) {
        for (let i = 0; i < pagerCount-2; i ++) {
          this.pages.centerPages.push(current - bet + i + 1)
        }
      }
      
      this.handleEmit()
    },

    // 计算增减
    handleCount (type) {
      if (type === 'minus') {
        this.current = this.current - (this.pagerCount - 2)
        
      } else {
        this.current = this.current + (this.pagerCount - 2)  
      }
    },

    // 触发父组件方法
    handleEmit () {
      this.page.current = this.current
      this.$emit('handlePage', this.current)
    },

    // 点击触发
    handleNumber (num) {
      this.current = num
    },

    // 上一页下一页触发
    handleStep (num) {
      this.current += num
    }
  }
}
</script>
<style scoped>
.page-container {
  width: 100%;
  font-size: 13px;
}
.page-container button {
  margin: 0 10px;
  width: 30px;
  height: 30px;
}
button > img,
li > img {
  width: 20px;
}
ul.pageNumber {
  display: inline-block;
  vertical-align: middle;
  padding: 0 4px;
}
.pageNumber li{
  list-style-type: none;
  display: inline-block;
  line-height: 24px;
  border-radius: 2px;
  vertical-align: top;  
  width: 24px;
  height: 24px;
}
.pageNumber li + li {
  margin-left: 6px;
}
.pageNumber li,
.page-container button {
  padding: 5px;
  background: #f4f4f5;
  color: #666;
  border: none;
  cursor: pointer;
  text-align: center;
  vertical-align: middle;
}
.pageNumber li:hover,
.page-container button:hover {
  color: #409eff;
}
.pageNumber li.active {
  background: #409eff;
  color: #fff;
}
</style>
