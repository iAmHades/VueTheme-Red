import Vue from 'vue';
import Router from 'vue-router';
import index from './index.vue';
import leftlayout from './dragcomp/leftlayout.vue';
import toplayout from './dragcomp/toplayout.vue';

window.Vue = Vue;
Vue.use(Router);
const router = new Router({
	hashbang: false,
	history: false,
	saveScrollPosition: true
});
window.router = router;

Vue.use(require('vue-resource'));
Vue.http.options.root = '/root';
Vue.use(require('./../src/ext/vue_ext.js'));

router.map({
	'/editor': {
		name: 'index',
		component: index,
	},
	'/leftlayout': {
		name: 'leftlayout',
		component: leftlayout
	},
	'/toplayout': {
		name: 'toplayout',
		component: toplayout
	}
});
Vue.partial('red-grid', '<draggrid></draggrid	>');

router.start(index, '#app');