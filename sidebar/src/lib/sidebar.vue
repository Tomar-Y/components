<template>
  <div class="menu-wrapper">
    <template v-for="item in routes" v-if="!item.hidden&&item.children&&item.type!='button'">
      <router-link 
       v-if="item.codeType=='PAGE'&&(!item.children||item.children.length===0)"
       :to="parentPath?parentPath:''+'/'+item.code" :key="item.name">
        <el-menu-item index="parentPath+'/'+child.code">
          <i v-if="item.icon" class="iconfont " :class="item.icon"></i>
          <span v-if="item.name">{{generateTitle(item.name)}}</span>
        </el-menu-item>
      </router-link>
      
      <el-submenu v-else :index="item.name||item.path" :key="item.name">
        <template slot="title">
          <i v-if="item.icon" class="iconfont " :class="item.icon"></i>
          <span v-if="item.name">{{generateTitle(item.name)}}</span>
        </template>

        <template v-for="child in item.children" v-if="!child.hidden">
          <sidebar-item class="nest-menu" v-if="child.children&&child.children.length>0&&(child.children[0].codeType==='PAGE'||child.children[0].codeType==='MODULE')" :routes="[child]" :parentPath="'/'+item.code+'/'+child.code" :key="child.code"></sidebar-item>

          <router-link v-else :to="'/'+item.code+'/'+child.code" :key="child.name">
            <el-menu-item :index="'/'+item.code+'/'+child.code">
              <i v-if="child.icon" class="iconfont " :class="child.icon"></i>
              <span v-if="child.name">{{generateTitle(child.name)}}</span>
            </el-menu-item>
          </router-link>
        </template>
      </el-submenu>

    </template>
  </div>
</template>

<script>
import { generateTitle } from '@/utils/i18n'

export default {
  name: 'SidebarItem',
  data () {
    return {

    }
  },
  props: {
    routes: {
      type: Array
    },
    isNest: {
      type: Boolean,
      default: false
    },
    parentPath: {
      type: String
    }
  },
  created () {
  },
  mounted () {
   
  },
  methods: {
    generateTitle
  }
}
</script>
<style scoped>
.el-submenu__title i {
  color: rgb(191, 203, 217);
  font-weight: 600;
}
.el-submenu__title i.iconfont {
  margin-right: 4px;
}
</style>

