import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import List from '@/views/List'
import Post from '@/views/Post'
import Main from '@/views/Main'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      children:[{
        path: '',
        name: 'list',
        component: List
      }, {
        path: '/post/:hash',
        name: 'post',
        component: Post
      }]
    },{
      path: 'test',
      component: Hello
    }
  ]
})
