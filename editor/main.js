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
Vue.partial('red-grid', '<grid :pagesize="pagesize" :data="griddata" :url="url" :columns="columns" :total="total"></grid>');
// Vue.partial('red-from', '<grid :pagesize="pagesize" :data="griddata" :url="url" :columns="columns" :total="total"></grid>');
// Vue.partial('red-menu', '<grid :pagesize="pagesize" :data="griddata" :url="url" :columns="columns" :total="total"></grid>');
router.start(index, '#app');