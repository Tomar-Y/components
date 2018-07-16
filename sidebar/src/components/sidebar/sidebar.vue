<template>
    <aside>
      <p class="menu-label">
        后台管理
      </p>
      <ul class="menu-list">
        <li v-for="(item, index) in menus">
          <router-link v-if="!hasChildren(item)" :class="item.id === activeId ? 'is-active' : ''" @click="toggle(item)" :to="item.path">
            <span class="icon is-small"><i :class="['iconfont', item.icon]"></i></span>
            {{ item.nameCn }}
          </router-link>

          <a v-else :class="item.id === activeId ? 'is-active' : ''" @click="toggle(item)">
            <span class="icon is-small"><i :class="['iconfont', item.icon]"></i></span>
            {{ item.nameCn }}
            <span class="icon is-small is-angle">
              <i class="iconfont icon-xiangxia"></i>
            </span>
          </a>

          <expanding v-if="hasChildren(item)">
            <ul v-show="item.id === expandId">
              <li v-for="subItem in item.children">
                <router-link :to="generatePath(item, subItem)">
                  {{ subItem.nameCn }}
                </router-link>
              </li>
            </ul>
          </expanding>
        </li>
      </ul>
    </aside>
</template>

<script>
import Expanding from 'vue-bulma-expanding'

export default {
  name: 'sidebarItem',
  data () {
    return {
      activeId: '',
      expandId: ''
    }
  },
  props: {
    menus: {
      type: Array
    },
    isNest: {
      type: Boolean,
      default: false
    }
  },
  components: { Expanding },
  mounted () {
  },
  methods: {
    hasChildren(item) {
      if (item.children && Object.keys(item.children).length > 0) {
        return true
      }
      return false
    },
    generateTitle(title) {
      // 可以做些国际化处理 或者样式处理（es6）
      return title
    },
    isCollapse() {
      return true
    },
    generatePath (item, subItem) {
      return `${item.component ? item.path + '/' : ''}${subItem.path}`
    },
    isExpanded (item) {
      return item.expanded
    },
    toggle (item) {
      if (this.expandId === item.id) {
        this.expandId = ''
        return
      }
      this.expandId = this.activeId = item.id
    }
  }
}
</script>
<style scoped>
ul {
  list-style: none;
  -webkit-padding-start: 10px;
}
li {
  display: list-item;
  text-align: -webkit-match-parent;
}
a {
  color: #00d1b2;
  cursor: pointer;
  text-decoration: none;
  transition: none 86ms ease-out;
}
p.menu-label {
  border-bottom: 1px solid #f5f5f5;
  margin: 0px;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 180px;
  height: 40px;
  line-height: 40px;
}
.menu-list {
  line-height: 1.4;
  -webkit-padding-start: 0px;
  margin-top: 40px;
}
.menu-list a {
  border-radius: 2px;
  color: #4a4a4a;
  display: block;
  padding: .7em .75em;
  text-align: left;
  font-size: 15px;
}
.menu-list .icon {
  vertical-align: baseline;
}
.icon.is-medium,
.icon.is-small {
  display: inline-block;
  text-align: center;
  vertical-align: text-top;
  margin-right: 6px
}
.icon.is-small {
  font-size: 14px;
  height: 1rem;
  line-height: 1rem;
  width: 1rem;
}
.menu-list .icon.is-angle {
  position: absolute;
  right: 10px;
  transition: transform .377s ease;
}
.menu-list .menu-label {
  padding-left: 5px;
}
.menu-label:not(:last-child) {
  margin-bottom: 1em;
}
.menu-label {
  color: #7a7a7a;
  font-size: .8em;
  letter-spacing: .1em;
  text-transform: uppercase;
}
.menu-list a.is-active {
  background-color: #00d1b2;
  color: #fff;
}
</style>

