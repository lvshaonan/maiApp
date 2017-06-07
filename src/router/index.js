import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home/Home'
import Social from '../components/Social/Social'
import Message from '../components/Message/Message'
import Mine from '../components/Mine/Mine'
// import Category from '../Category/Category.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/social',
      name: 'Social',
      component: Social
    },
    {
      path: '/message',
      name: 'Message',
      component: Message
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
