<template>
  <div>
    {{ lists }}
  </div>
</template>
<script>
import api from '@/api'
import conf from '@/config'
export default {
  created () {
    this.getPostsList()
  },
  data () {
    return {
      lists: []
    }
  },
  methods: {
    getPostsList() {
      window.document.title = conf.blogTitle
      api.getList().then(res => {
        this.lists = res
      }).then(error => {
        console.log(error)
      })
    }
  }
}
</script>
<style>
</style>