import Vue from 'vue'
import Router from 'vue-router'
import Select from '../../src/components/Select'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Select',
      component: Select
    }
  ]
})
