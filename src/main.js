import Vue from 'vue';
import Router from 'vue-router';
import { sync } from 'vuex-router-sync';
import store from './vuex/store';
import App from './App.vue';
import filters from './filter';
import err from './views/500.vue';
import notfind from './views/404.vue';
import index from './views/index.vue';
import admin from './views/admin.vue';
import table from './views/table.vue';
import components from './views/components.vue';
import modal from './views/modal.vue';
window.Vue = Vue;
Vue.use(Router);
const router = new Router({
	hashbang: false,
	history: false,
	saveScrollPosition: true
});
window.router = router;

Object.keys(filters).forEach((k) => {
	Vue.filter(k, filters[k]);
});

Vue.use(require('vue-resource'));
Vue.http.options.root = '/root';
Vue.use(require('./ext/vue_ext.js'));

router.map({
	'/404': {
		name: 'notfind',
		component: notfind
	},
	'/500': {
		component: err
	},
	'/': {
		name: 'index',
		component: index
	},
	'/admin':{
		name:'admin',
		component:admin,
		subRoutes: {
           '/table':{
           	   component:table
           }
		}
	},
	'/components':{
		name:'components',
		component:components,
		subRoutes:{
			'/modal':{
				component:modal
			}
		}
	}
});

// router.beforeEach(function(transition) {
//   transition.next()
// })
sync(store, router);
router.start(App, '#app');