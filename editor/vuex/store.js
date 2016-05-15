import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/logger';
import {
    RenderObject,
    Page
} from '../util/RenderObject.js';
import {
    customeMenuData
} from './service.js';
Vue.use(Vuex);
Vue.config.debug = true;
const debug = process.env.NODE_ENV !== 'production';

const renderObject = new RenderObject();
const state = {
    menus: [],
    renderObject,
    customeMenuData
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
    },
    // 菜单组件的编辑部分
    updateCustomeMenus(allState, menu, type) {
        const menuData = [];
        switch (type) {
            case 'del':
                for (let i = 0; i < allState.customeMenuData.length; i++) {
                    if (menu.id !== allState.customeMenuData[i].id) {
                        menuData.push(allState.customeMenuData[i]);
                    }
                }
                allState.customeMenuData = menuData;
                break;
            case 'add':
                allState.customeMenuData.push(menu);
                break;
            case 'update':
                for (let i = 0; i < allState.customeMenuData.length; i++) {
                    if (menu.id !== allState.customeMenuData[i].id) {
                        menuData.push(allState.customeMenuData[i]);
                    } else {
                        menuData.push(menu);
                    }
                }
                allState.customeMenuData = menuData;
                break;
            default:
        }
    }

};

export default new Vuex.Store({
    state,
    mutations,
    strict: debug,
    middlewares: debug ? [createLogger()] : []
});