<template>
  <section class="share">
    <a :href="d.url" v-for="d in data" target="_blank">
      <img :src="d.img" :alt="d.title">
    </a>
    <vue-q-art :config="config"></vue-q-art>
  </section>
</template>
<script>
import VueQArt from 'vue-qart'
import QArt from 'qartjs'
export default {
  props: {
    'href': {
      required: true,
      type: String
    },
    'title': {
      required: true,
      type: String
    }
  },
  data () {
    return {
      
      }
  },
  computed: {
    enhref() {
      return encodeURIComponent(this.href)
    },
    entitle() {
      return encodeURIComponent(this.title)
    },
    data() {
      let data = [{
        title: '分享到微博',
        type: 'weibo',
        img: 'http://o9xap42x4.bkt.clouddn.com/weibo.png',
        url: `http://service.weibo.com/share/share.php?url=${this.enhref}&title=${this.entitle}&pic=&searchPic=false`
      }, {
        title: '分享到QQ',
        type: 'qq',
        img: 'http://o9xap42x4.bkt.clouddn.com/qq.png',
        url: `http://connect.qq.com/widget/shareqq/index.html?url=${this.enhref}&desc=${this.entitle}&pics=`
      }, {
        title: '分享到腾讯微博',
        type: 'qwb',
        img: 'http://o9xap42x4.bkt.clouddn.com/twb.png',
        url: `http://share.v.t.qq.com/index.php?c=share&a=index&url=${this.enhref}&title=${this.entitle}&appkey=801cf76d3cfc44ada52ec13114e84a96`
      }, {
        title: '分享到微信',
        type: 'wx',
        img: 'http://o9xap42x4.bkt.clouddn.com/weixin.png',
        url: 'javascript:;'
      }]
      return data
    },
    config() {
      var config = {
        value: this.href,
        imagePath: '../assets/imgs/logo.png',
        filter: 'color'
      }
      return config
    }
  },
  components: {
    VueQArt
  }
}
</script>
<style lang="less">
@import '../assets/less/color.less';
.share {
  a {
    display: inline-block;
    margin-right: 8px;
    border: 1px solid @mainColor;
    border-radius: 50%;
    padding: 2px;
    width: 26px;
    height: 26px;
    img {
      width: 20px;
      height: 20px;
    }
  }
}
</style>