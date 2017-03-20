<template>
  <div class="g">
    <div class="wrap">
      <div class="main">
        <div class="main-content">
          <router-view></router-view>
        </div>
        <div class="main-right">
          <Friends></Friends>
          <Mailme></Mailme>
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
export default {
  components: {
    Friends,
    Mailme
  }
}
</script>
<style lang="less">
@import '../assets/less/color.less';
.g {
  min-height: 100%;
  padding: 60px 0 40px 0;
  .wrap {
    padding-top: 20px;
    padding-bottom: 20px;
    .main {
      width: 1000px;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      &-content {
        width: 60%;
      }
      &-right {
        width: 35%;
      }
    }
  }
}
</style>