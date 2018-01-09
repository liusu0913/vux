import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/HelloFromVux'
import form from '@/components/form'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/form',
      name: 'form',
      component: form
    }
  ]
})
