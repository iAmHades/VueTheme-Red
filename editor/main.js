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
Vue.partial('red-leftlayout', '<leftlayout>'+
                                 '<leftmenu slot="left_menu" :data="menus"></leftmenu>'+
                                 '<router-view slot="left_container" class="view" transition="expand" transition-mode="out-in"></router-view>'+
                              '</leftlayout>');
Vue.partial('red-toplayout', '<toplayout>'+
                                 '<menu slot="top_menu" :data="menus"></menu>'+
                                 '<router-view slot="top_container" class="view" transition="expand" transition-mode="out-in"></router-view>'+
                              '</toplayout>');

router.start(index, '#app');