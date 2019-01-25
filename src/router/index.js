import Vue from 'vue'
import Router from 'vue-router'
import PlantsRouter from './plantsRouter'
import CommunitRouter from './communitRouter'
import MallRouter from './mallRouter'
import MineRouter from './mineRouter'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    PlantsRouter,
    CommunitRouter,
    MallRouter,
    MineRouter
  ]
})
