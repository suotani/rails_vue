import Vue from 'vue'
import VueRouter from 'vue-router'

import Enemy from './components/enemy.vue'
import EnemyInfo from './components/enemy_info.vue'
import Maou from './components/maou.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {path: '/', component: Enemy},
        {path: '/enemies/:id', name: 'enemy_info', component: EnemyInfo},
        {path: '/maou', component: Maou}
    ]
})

export default router