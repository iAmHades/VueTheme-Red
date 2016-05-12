import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/logger';

Vue.use(Vuex);
Vue.config.debug = true;
const debug = process.env.NODE_ENV !== 'production';

const state = {
    menus: []
};

const mutations = {
    getMenus(allState, menus) {
        allState.menus = menus;
    },
    getComponentMenus(allState, menus) {
        allState.menus = menus;
    }
};

export default new Vuex.Store({
    state,
    mutations,
    strict: debug,
    middlewares: debug ? [createLogger()] : []
});