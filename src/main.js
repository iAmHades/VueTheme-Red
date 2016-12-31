import Vue from 'vue';
import Router from 'vue-router';
import {
  sync
} from 'vuex-router-sync';
import store from './vuex/store';
import App from './App.vue';
import filters from './filter';
import err from './views/500.vue';
import notfind from './views/404.vue';
import index from './views/index.vue';
import admin from './views/admin.vue';
import table from './views/table.vue';
import layout from './views/layout.vue';
import modal from './views/modal.vue';
import carousel from './views/carousel.vue';
import thumbnail from './views/thumbnail.vue';
import tao from './views/tao.vue';
import progress from './views/progress.vue';
import switchs from './views/switchs.vue';
import scrollmonitor from './views/scrollmonitor.vue';
import lazyLoad from './views/lazyLoad.vue';
import datepicker from './views/datepicker.vue';
import form from './views/form.vue';
import custommenu from './views/custommenu.vue';
import dropdown from './views/dropdown.vue';
import upload from './views/upload.vue';
import alert from './views/alert.vue';
import tab from './views/tab.vue';
import tree from './views/tree.vue';

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

console.log('store', store);

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
  '/admin': {
    name: 'admin',
    component: admin,
    subRoutes: {
      '/table': {
        component: table
      },
      '/tree': {
        component: tree
      },
      '/layout': {
        component: layout
      },
      '/modal': {
        component: modal
      },
      '/carousel': {
        component: carousel
      },
      '/thumbnail': {
        component: thumbnail
      },
      '/tao': {
        component: tao
      },
      '/progress': {
        component: progress
      },
      '/switchs': {
        component: switchs
      },
      '/scrollmonitor': {
        component: scrollmonitor
      },
      '/lazyLoad': {
        component: lazyLoad
      },
      '/form': {
        component: form
      },
      '/datepicker': {
        component: datepicker
      },
      '/dropdown': {
        component: dropdown
      },
      '/upload': {
        component: upload
      },
      '/alert': {
        component: alert
      },
      '/tab': {
        component: tab
      }
    }
  },
  '/custommenu': {
    name: 'custommenu',
    component: custommenu
  }
});

// router.beforeEach(function(transition) {
//   transition.next()
// })
sync(store, router);
router.start(App, '#app');