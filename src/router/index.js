import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)


const Container = r => require.ensure([], () => r(require('./../container.vue')), 'Container')


const router = new Router({
    routes: [{
        path: '/',
        name: 'Container',
        component: Container,
        // redirect: '/index',
        meta: { keepAlive: true },
        // children: [{
        //     path: '404',
        //     name: 'Err',
        //     component: Err,
        //     meta: { keepAlive: true },
        // }]
    }]

})
export default router;