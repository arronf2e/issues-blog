// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vodal from 'vodal'
import "vodal/fade.css"
import "vodal/rotate.css"
import Toast from './components/toast'
import _ from 'lodash'
import 'prismjs/themes/prism.css'

Toast.config({
  duration: 3000,
  position:'top center'
})

router.afterEach((to,from) => {
  window.scroll(0,0)
}) 

Vue.use(Toast)
Vue.use(_)
Vue.component(Vodal.name, Vodal)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
