<template>
  <div class="container" :style="'width:' + width + 'px'">
    <div contenteditable="true" class="chosen-box">
      <span v-for="(item, index) in chosen" :key="index" v-if="item">
      {{ item[name] }}
      <img src="../assets/delete.png"/>
      </span>
    </div>
    <div class="select-box">
      <input type="text" :placeholder="placeholder" v-model="words" @input="handleFilter"/>
    </div>
    <div class="options-box">
      <ul>
        <li v-for="(item, index) in opts" :key="index">
          <a href="javascipt:void(0)" @click="handleChoice(item, index)" :class="chosen[index] ? 'active' : ''">
            <span>{{ item[name] }}</span>
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
      placeholder: 'filter element',
      opts: [],
      chosen: [], // 已选对象
      words: ''
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
      default: 200
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
        console.log('this.chosen: ', this.chosen)
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

    handleFilter () {
      
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
 width: 100%
}
.select-box input {
  width: 100%;
  height: 28px;
  line-height: 28px;
  border-radius: 4px;
  border: 1px solid #E5E5E5;
  padding: 4px 6px;
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
}
.chosen-box span{
  margin-right: 10px;
  border-radius: 4px;
  border: 1px solid #E5E5E5;
  padding: 2px 4px;
  font-size: 12px;
  display: inline-block;
  margin-bottom: 6px;
}
.options-box li {
  list-style-type: none;
  padding: 5px;
}
.options-box li > a {
  text-decoration: none;
  color: #666;
}
.options-box > ul {
  padding: 4px 0px;
  margin: 0px;
}
</style>