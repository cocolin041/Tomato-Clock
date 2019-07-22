import Vue from 'vue'
import Router from 'vue-router'
import Clock from './views/Clock.vue'
import ToDoList from './views/ToDoList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ClockPage',
      component: Clock
    },
    {
      path: '/to-do-list',
      name: 'ToDoListPage',
      component: ToDoList
    }
  ]
})
