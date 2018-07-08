<template>
  <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="current"
      :page-sizes="pagesizes"
      :page-size="size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalSize">
    </el-pagination>
  </div>
</template>
  
<script>
import { deepClone } from '../utils'

export default {
  name: 'page-pagination',
  data () {
    return {
      totalSize: 0,
      params: {
        page: {
          
        },
        search: {

        }
      }
    }
  },
  watch: {
   
  },
  props: {
    current: {
      type: Number,
      default: 1
    },
    size: {
      type: Number,
      default: 10
    },
    pagesizes: {
      type: Array,
      default () {
        return [10, 20, 50]
      }
    },
    total: {
      type: Number,
      default: 0
    },
    apis: {
      type: Object
    },
    api: {
      type: String
    },
    // 一定有查询条件的 list (比如通过某个角色id查询对应的用户列表)
    mustParams: {
      type: Object
    }
  },
  components: {},
  created () {
    console.log('api: ', this.api);
    this.initData();
  },
  mounted () {
  },
  methods: {
    initData () {
      this.totalSize = this.total;
      this.params.page.current = this.current;
      this.params.page.size = this.size;

      if (this.mustParams && Object.keys(this.mustParams).length > 0) {
        this.params.search = deepClone(this.mustParams);
      }
      if (this.apis && Object.keys(this.apis).length > 0 && this.api) {
        this.pageList();
      }
    },
    search (search) {
      this.params.page.isAnd = search.isAnd;
      this.params.page.current = 1;
      this.params.page.size = this.size;
      this.params.search = deepClone(search);
      this.pageList();
    },
    pageList () {
      this.apis[this.api](this.params).then((res) => {
        this.params.page.isAnd = true; // 重置默认
        this.totalSize = res.data.data.total;
        this.$emit('complete', res)
      }).catch((error) => {
        this.$message.error(error || '系统异常。');
      });
    },
    // 刷新当前页
    refresh () {
      this.pageList();
    },
    // 条数显示条数
    handleSizeChange(val) {
      this.params.page.size = val;
      this.pageList();
    },
    // 当前页
    handleCurrentChange(val) {
      this.params.page.current = val;
      this.pageList();
    }
  }
  
}
</script>