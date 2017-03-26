<template>
  <div>
    <Loading v-if="loading"></Loading>
    <div class="list" v-else>
      <div class="list-post" v-for="post in lists">
        <div class="title" @click="goPost(post.sha)">
          <p class="name">🐹   {{ post.title }}</p>
          <p class="date">{{ post.date }}</p>
        </div>
        <div class="options">
          
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import api from '@/api'
import conf from '@/config'
import Friends from '@/components/Friends'
import Mailme from '@/components/Mailme'
import Loading from '@/components/Loading'
export default {
  created () {
    this.getPostsList()
  },
  data () {
    return {
      lists: [],
      loading: true
    }
  },
  methods: {
    getPostsList() {
      window.document.title = conf.blogTitle
      api.getList().then(res => {
        this.loading = false
        this.lists = res.reverse()
      }).then(error => {
        console.log(error)
      })
    },
    goPost(hash) {
      this.$router.push({
        name: 'post',
        params: {
          hash: hash
        }
      })
    }
  },
  components: {
    Friends,
    Mailme,
    Loading
  }
}
</script>
<style lang="less">
@import '../assets/less/color.less';
.fa-icon {
  width: auto;
  height: 1em; /* or any other relative font sizes */
}
.list {
  &-post {
    padding: 10px;
    border-radius: 6px;
    background: #fff;
    margin-bottom: 20px;
    .title {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      cursor: pointer;
      .name {
        font-size: 18px;
        color: @mainColor;
      }
      .date {
        font-size: 12px;
        color: #333;
      }
    }
    .options {
      height: 50px;
    }
  }
}
</style>
