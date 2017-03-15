import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import List from '@/views/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }, {
      path: '/list',
      name: 'list',
      component: List
    }
  ]
})
