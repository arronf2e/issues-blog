<template>
  <div id="app">
    <Navbar></Navbar>
    <transition name="slideFade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style lang="less">
// .slideFade-enter-active,
// .slideFade-leave-active {
//   transition: all .2s cubic-bezier(0.66, 0.1, 0.38, 1.45);
//   width: 100%;
//   position: absolute;
//   top: 0;
//   left: 0;
//   opacity: 1;
// }
// .slideFade-enter {
//   transform: translateX(100%) scale(.3);
//   opacity: 0;
// }
// .slideFade-leave-active {
//   transform: translateX(-100%) scale(.3);
//   opacity: 0;
// }
</style>
