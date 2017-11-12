import Vue from 'vue'
import Router from 'vue-router'
import FormPage from '@/components/FormPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FormPage',
      component: FormPage
    }
  ]
})
