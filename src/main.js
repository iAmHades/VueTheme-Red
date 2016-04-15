import Vue from 'vue'
import Router from 'vue-router'
import { sync } from 'vuex-router-sync'
import store from './vuex/store'
import App from './App.vue'
import filters from './filter'
import err from './views/500.vue'
import notfind from './views/404.vue'
import index from './views/index.vue'

window.Vue = Vue
Vue.use(Router)
var router = new Router({
	hashbang: false,
	history: false,
	saveScrollPosition: true
})
window.router = router

Object.keys(filters).forEach((k) => {
	Vue.filter(k, filters[k])
})

Vue.use(require('vue-resource'))
Vue.http.options.root = '/root'
Vue.use(require('./ext/vue_ext.js'))

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
	}
})

// router.beforeEach(function(transition) {
//   transition.next()
// })
sync(store, router)
router.start(App, '#app')