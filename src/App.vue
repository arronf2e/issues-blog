<template>
  <div id="app">
    <Navbar></Navbar>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <Zfooter></Zfooter>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Zfooter from '@/components/Zfooter'
export default {
  name: 'app',
  mounted () {
    
  },
  components: {
    Navbar,
    Zfooter
  }
}
</script>

<style lang="less">
#app {
  height: 100%;
}
.fade-enter-active, .fade-leave-active {
    transition: all 0.3s ease;
}
.fade-enter {
    opacity: 1;
    transform: translate3d(0, 100px, 0);
}
.fade-leave-active {
    opacity: 0;
    transform: translate3d(100px, 0, 0);
}
</style>
