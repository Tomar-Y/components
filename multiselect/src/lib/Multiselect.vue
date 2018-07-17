<template>
  <div class="container" :style="'width:' + width + 'px'">
    <div class="chosen-box p-relative">
      <div class="container">
        <span v-for="(item, index) in chosen" :key="index" v-if="item">
        {{ item[name] }}
        <img @click="handleChoice(item, index)" src="../assets/delete.png"/>
        </span>
      </div>
      <div class="e-riglt btnBox">
        <label @click="expanded = !expanded">
          <img v-show="!expanded" src="../assets/xiangxia.png"/>
          <img v-show="expanded" src="../assets/xiangshang.png"/>
        </label>
      </div>
    </div>
    <div class="select-box">
      <input type="text" :placeholder="placeholder" v-model="words" @input="handleFilter" @focus="expanded = true"/>
    </div>
    <div v-show="expanded" class="options-box scroll">
      <ul class="">
        <li v-for="(item, index) in opts" :key="index" v-if="item">
          <a href="javascipt:void(0)" @click="handleChoice(item, index)" :class="chosen[index] ? 'active' : ''">
            <span>{{ item[name] }}</span>
            <img src="../assets/yes.png"/>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      placeholder: 'filter',
      opts: [], // 深拷对象
      chosen: [], // 已选对象
      words: '', // 搜索关键字
      expanded: false, // 控制下拉框显示
    }
  },
  props: {
    options: {
      type: Array,
      default: []
    },
    // 与可选标签元素匹配的名称属性
    name: {
      type: String,
      default: '' 
    },
    width: {
      type: Number,
      default: 320
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    // 初始化工作
    init () {
      const opts = this.options
      if (opts && Object.keys(opts).length > 0) {
        [ ...this.opts ] = opts
        this.chosen = Array.from(new Array(opts.length))
      } else {
        return  
      }
      this.name = this.name || 'label'
    },
    
    // 出发选择
    handleChoice (item, index) {
      const name = item[this.name]
      this.chosen.splice(index, 1, this.chosen[index] ? undefined : item)
    },

    // 获取已选对象
    getChosen () {
      return this.chosen.filter(x => x !== undefined)
    },
    
    // 输入过滤
    handleFilter () {
      const words = this.words
      if (!words) {
        [ ...this.opts ] = this.options
      } else {
        this.opts = []
        this.options.map((opt, index) => {
          if (opt[this.name].includes(words)) {
            this.opts.push(opt)
          } else {
            this.opts.push(undefined)
          }
        })
      }
    }
  }
}    
</script>
<style scoped>
li {
  list-style: none
}
.container {
  min-width: 200px;
}
.container > div {
  width: 100%;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  padding: 4px 6px;
}
.select-box input {
  width: 100%;
  height: 28px;
  line-height: 28px;
  border-radius: 4px;
  border: none;
  outline: none;
}
.container > div.chosen-box {
  min-height: 39px;
}
.chosen-box {
  border: 1px solid #E5E5E5;
  border-radius: 4px;
  padding: 10px 6px;
  line-height: 32px;
}
.chosen-box img {
  width: 14px;
  vertical-align: text-top;
  cursor: pointer;
}
.chosen-box span{
  margin-right: 10px;
  border-radius: 4px;
  border: 1px solid #E5E5E5;
  padding: 2px 4px;
  font-size: 12px;
  display: inline-block;
  margin-bottom: 6px;
  line-height: 22px;
  background: #e0e0e0;
}
.options-box {
  max-height: 180px;
  overflow: hidden;
  overflow-y: auto;
  box-shadow: 0px 3px 3px #e0e0e0;
}
.scroll::-webkit-scrollbar {
  width: 4px;
	height: 4px;
}
.scroll::-webkit-scrollbar-track{
	background: #f6f6f6;
	border-radius: 2px;
}
.scroll::-webkit-scrollbar-thumb{
	background: #aaa;
	border-radius: 2px;
}
.options-box li {
  list-style-type: none;
  padding: 5px;
}
.options-box li + li {
  border-top: 1px solid #e0e0e0;
}
.options-box li > a {
  text-decoration: none;
  color: #666;
  width: 100%;
  display: inline-block;
  position: relative;
}
.options-box li > a > img {
  width: 16px;
  position: absolute;
  right: 4px;
  display: none;
}
.options-box li > a.active > img {
  display: inline;
}
.options-box li span {
  font-size: 14px;
}
.options-box > ul {
  padding: 0px;
  margin: 0px;
}
.chosen-box label {
  width: 100%;
  display: inline-block;
  text-align: center;
  line-height: 28px;
  cursor: pointer;
}
.chosen-box label > img {
  vertical-align: middle;
}
.chosen-box > div {
  display: inline-block;
}
.chosen-box > div.container {
  margin-right: 20px
}
.chosen-box > div.btnBox {
  width: 24px;
  text-align: center;
}
.p-relative {
  position: relative;
}
.e-riglt {
  position: absolute;
  right: 0px;
  top: 5px;
}
</style>