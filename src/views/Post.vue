<template>
  <div class="post">
    <Loading v-if="!content"></Loading>
    <div v-else>
      <h1 class="post-title">
        {{ title }} 
      </h1>
      <p class="post-tags">
        标签：
        <i v-for="tag in tags">
          {{ tag }}
        </i>
      </p>
      <h3 class="post-date">{{ date | formateDate }}</h3>
      <article v-html="htmlFromMarkdown"></article>
    </div>
  </div>
</template>
<script>
import api from '@/api'
import conf from '@/config'
import fm from 'front-matter'
import marked from '@/utils/render.js'
import Loading from '@/components/Loading'
export default {
  created () {
    this.getPost()
  },
  data () {
    return {
      title: '',
      date: null,
      content: '',
      tags: []
    }
  },
  computed: {
    htmlFromMarkdown () {
      return marked(this.content)
    }
  },
  methods: {
    getPost() {
      api.getPost(this.$route.params.hash)
        .then((data) => {
          const content = fm(data)
          this.content = content.body
          this.title = content.attributes.title
          this.date = content.attributes.date
          this.tags = content.attributes.tags
          window.document.title = `${this.title} - ${conf.blogTitle}`
        },(err) => {
          console.log(`ERR: ${err}`)
        })
    }
  },
  filters: {
    formateDate(val) {
      var date = new Date(val)
      var y = date.getFullYear()
      var m = date.getMonth() + 1
      var d = date.getDate()
      m = m < 10 ? `0${m}` : m
      return `${y}-${m}-${d}`
    }
  },
  components: {
    Loading
  }
}
</script>
<style lang="less">
@import '../assets/less/color.less';
.post {
  background: #fff;
  padding: 20px;
  &-title {
    line-height: 1;
    text-align: center;
  }
  &-date {
    font-size: 12px;
    font-weight: 400;
    line-height: 2;
    color: #999;
    text-align: right;
  }
  &-tags {
    margin-top: 10px;
    text-align: center;
    color: #666 ;
      font-size: 12px;
    i {
      display: inline-block;
      padding: 2px 5px;
      border: 1px solid #666;
      border-radius: 10px;
    }
  }
  article {
    pre {
      background: #f7f7f7 !important;
      padding: 16px;
      overflow-x: auto;
      white-space: pre;
    }
    code {
      background: #f7f7f7;
    }
    blockquote {
      margin: 10px 0;
      padding: 0 16px;
      border-left: 4px solid #ddd;
    }
    h3,h4,h5 {
      padding: 10px 0;
    }
    p {
      line-height: 20px;
      padding: 10px 0;
      img {
        width: 100%;
      }
    }
    a {
      display: inline-block;
      color: @mainColor;
      margin: 5px 0;
    }
    ol,ul {
      padding-left: 20px;
    }
  }
}
</style>