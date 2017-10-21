import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import product from '@/components/product'
import aboutus from '@/components/aboutebra'
import partners from '@/components/partners'
import contactus from '@/components/contactus'
import politics from '@/components/politics'
import bean1 from '@/components/bean1'
import bean2 from '@/components/bean2'
import bean3 from '@/components/bean3'
import bean4 from '@/components/bean4'
import bean5 from '@/components/bean5'
import bean6 from '@/components/bean6'
import bean7 from '@/components/bean7'
import bean8 from '@/components/bean8'
import bean9 from '@/components/bean9'

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
    },
    {
      path: '/bean2',
      name: 'bean2',
      component: bean2
    },
    {
      path: '/bean3',
      name: 'bean3',
      component: bean3
    },
    {
      path: '/bean4',
      name: 'bean4',
      component: bean4
    },
    {
      path: '/bean5',
      name: 'bean5',
      component: bean5
    },
    {
      path: '/bean6',
      name: 'bean6',
      component: bean6
    },
    {
      path: '/bean7',
      name: 'bean7',
      component: bean7
    },
    {
      path: '/bean8',
      name: 'bean8',
      component: bean8
    },
    {
      path: '/bean9',
      name: 'bean9',
      component: bean9
    }
  ]
})
