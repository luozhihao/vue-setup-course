import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import Index from '../views/index.vue'

export default new Router({
	mode: 'hash',
	routes: [
		{ 
            path: '/', 
            name: 'index', 
            component: Index,
        },
        { path: '*', redirect: '/' },
	]
})