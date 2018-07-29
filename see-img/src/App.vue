<template>
  <div id="app">
    <h3>点击图片预览</h3>
    <div>
      <see-box>
        <see-item v-for="(item,index) in imgList" :key="index" :url="item.url" :width="item.w" :height="item.h" :caption="item.c"></see-item>
      </see-box>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data() {
      return {
        imgList: [{
          url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532880849072&di=266fea06907c96c281ce7fbf06e82d6a&imgtype=jpg&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D933399823%2C161984585%26fm%3D214%26gp%3D0.jpg',
          w: 520,
          h: 390,
          c: 'img1'
        }, {
          url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532880848666&di=8ef26b463fdf19019a03269a09667f6a&imgtype=0&src=http%3A%2F%2Fcfnetdoc.cfnet.org.cn%2Fbizs%2Fbaike%2F2015%2F04%2F15%2F1429068192-9.jpg',
          w: 800,
          h: 708,
          c: 'img2'
        },
        {
          url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532880848666&di=bffd4ff4da455d2b137fd7fd0a2ecd66&imgtype=0&src=http%3A%2F%2Fpic35.photophoto.cn%2F20150526%2F0038038205073446_b.jpg',
          w: 700,
          h: 600,
          c: 'img3'
        }]
      }
    },
    mounted () {
      console.log('this.imgList: ', this.imgList)
    },
    methods: {

    }
  }
</script>