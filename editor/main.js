import Vue from 'vue';
import Router from 'vue-router';
import index from './index.vue';
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
		component: index
	}
});
Vue.partial('red-grid', '<grid></grid>');
Vue.partial('red-leftlayout', '<leftlayout></leftlayout>');
Vue.partial('red-toplayout', '<toplayout></toplayout>');

router.start(index, '#app');