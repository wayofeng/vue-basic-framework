import Vue from 'vue'
import Router from 'vue-router'
import pagesConfig from './pages.config.json'
import * as pagesComponents from './pages.components'

Vue.use(Router)

const createAnRoute = (item) => {
  let anRoute = {
    path: item.path,
    name: item.name || '',
    meta: item.meta || '',
    component: pagesComponents[item.component]
  }
  if (item.children && item.children.length > 0) {
    anRoute.children = item.children.map(child => {
      return createAnRoute(child)
    })
  }
  return anRoute
}

const registerRoute = (config) => {
  let route = []
  config.forEach(page => {
    route.push(createAnRoute(page))
  })
  return route
}

const routes = registerRoute(pagesConfig)
console.log(routes)
routes.push({
  path: '*',
  redirect: '/'
})
export default new Router({
  routes
})
