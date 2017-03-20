<template>
  <footer>
    Copyright@2017 | Powered by <a href="https://github.com/arronf2e/vue2-blog-ghpages" target="_blank">Vue2-gh-pages-blog</a> 🐷
  </footer>
</template>
<script>
export default {

}
</script>
<style lang="less">
@import '../assets/less/color.less';
footer {
  height: 40px;
  text-align: center;
  padding: 4px 0;
  color: @mainColor;
  margin-top: -40px; 
  a {
    color: @mainColor;
    text-decoration: none;
  }
}
</style>