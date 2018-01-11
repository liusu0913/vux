import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/HelloFromVux'
// import form1 from '@/components/form1'
// import form2 from '@/components/form2'
// import form3 from '@/components/form3'
// import form4 from '@/components/form4'
// import form5 from '@/components/form5'
// 方案1：方案1需要添加 syntax-dynamic-import 插件 npm install --save-dev babel-plugin-syntax-dynamic-import即可安装
const form1 = () => import('@/components/form1.vue');
const form2 = () => import('@/components/form2.vue');
const form3 = () => import('@/components/form3.vue');
const form4 = () => import('@/components/form4.vue');
const form5 = () => import('@/components/form5.vue');

// 按需加载方案2
// const form1 = r => require.ensure([], () => r(require('@/components/form1.vue')), '1')
// const form2 = r => require.ensure([], () => r(require('@/components/form2.vue')), '2')
// const form3 = r => require.ensure([], () => r(require('@/components/form3.vue')), '3')
// const form4 = r => require.ensure([], () => r(require('@/components/form4.vue')), '4')
// const form5 = r => require.ensure([], () => r(require('@/components/form5.vue')), '5')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/form1',
      name: 'form1',
      component: form1
    },
    {
      path: '/form2',
      name: 'form2',
      component: form2
    },
    {
      path: '/form3',
      name: 'form3',
      component: form3
    },
    {
      path: '/form4',
      name: 'form4',
      component: form4
    },
    {
      path: '/form5',
      name: 'form5',
      component: form5
    }
  ]
})
