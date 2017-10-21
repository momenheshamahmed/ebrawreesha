// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
// my components
import myheader from './components/header'
import myslider from './components/slider'
import aboutus from './components/aboutus'
import beanbags from './components/beanbags'
import clients from './components/clientshome'
import footer from './components/footer'

Vue.component('myheader', myheader)
Vue.component('myslider', myslider)
Vue.component('aboutus', aboutus)
Vue.component('beanbags', beanbags)
Vue.component('clients', clients)
Vue.component('myfooter', footer)

require('@/owl/owlCarousel.css')
Vue.use(VueResource)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  template: '<App/>',
  components: { App },
  mode:'history'
})
