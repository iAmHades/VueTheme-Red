import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/logger';
import {
    RenderObject,
    Page
} from '../util/RenderObject.js';

Vue.use(Vuex);
Vue.config.debug = true;
const debug = process.env.NODE_ENV !== 'production';

const renderObject = new RenderObject();
const state = {
    menus: [],
    renderObject
};

const mutations = {
    getMenus(allState, menus) {
        allState.menus = menus;
    },
    getComponentMenus(allState, menus) {
        allState.menus = menus;
    },
    setRenderLayout(allState, type) {
        allState.renderObject.layoutType = type;
    }
};

export default new Vuex.Store({
    state,
    mutations,
    strict: debug,
    middlewares: debug ? [createLogger()] : []
});