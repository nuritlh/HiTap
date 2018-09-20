import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Company from './views/CompanyOverview.vue'
import Services from './views/Services.vue'
import Projects from './views/Projects.vue'
import Contact from './views/Contact.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/company',
      name: 'company',
      component: Company
    },
    {
      path: '/services',
      name: 'services',
      component: Services
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
  ]
})
