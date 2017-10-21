import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import product from '@/components/product'
import aboutus from '@/components/aboutebra'
import partners from '@/components/partners'
import contactus from '@/components/contactus'
import politics from '@/components/politics'
import bean1 from '@/components/bean1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'myindex',
      component: index
    },
    {
      path: '/product',
      name: 'product',
      component: product
    },
    {
      path: '/aboutus',
      name: 'aboutebra',
      component: aboutus
    },
    {
      path: '/partners',
      name: 'partners',
      component: partners
    },
    {
      path: '/contactus',
      name: 'contactus',
      component: contactus
    },
    {
      path: '/politics',
      name: 'politics',
      component: politics
    },
    {
      path: '/bean1',
      name: 'bean1',
      component: bean1
    }
  ]
})
