import Vue from 'vue'
import Router from 'vue-router'
import Home from "./views/Home";
import Login from './views/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      template: "<Home />",
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      template: "<Login />",
      component: Login
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    }
  ]
})