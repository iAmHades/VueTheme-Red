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
renderObject.menus = customeMenuData;
customeMenuData.forEach((menu) => {
    renderObject.addPage(menu.id, new Page());
});

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
    },
    // 自定义页面中，菜单组件的编辑部分
    updateCustomeMenus(allState, menu, actionType) {
        const menuData = [];
        switch (actionType) {
            case 'del':
                for (let i = 0; i < allState.renderObject.menus.length; i++) {
                    if (menu.id !== allState.renderObject.menus[i].id) {
                        menuData.push(allState.renderObject.menus[i]);
                    }
                }
                allState.renderObject.menus = menuData;
                delete allState.renderObject.pages[menu.id];
                break;
            case 'add':
                allState.renderObject.menus.push(menu);
                allState.renderObject.addPage(menu.id, new Page());
                break;
            case 'update':
                for (let i = 0; i < allState.renderObject.menus.length; i++) {
                    if (menu.id !== allState.renderObject.menus[i].id) {
                        menuData.push(allState.renderObject.menus[i]);
                    } else {
                        menuData.push(menu);
                    }
                }
                allState.renderObject.menus = menuData;
                break;
            default:
        }
        // allState.renderObject.menus = menuData;
    },
    // 自定义页面中，对里面组件的编辑
    // menuid 菜单id， actionType 操作类型，componentName 页面中唯一的组件名称， componentType 组件类型
    updateCustomePages(allState, menuid, actionType, componentName, componentType, componentsArray) {
        const components = allState.renderObject.pages[menuid];
        switch (actionType) {
            case 'del':
                if (components) {
                    for (let i = 0; i < components.length; i++) {
                        if (components[i].name === componentName) {
                            components.splice(i, 1);
                        }
                    }
                }
                break;
            case 'add':
                allState.renderObject.pages[menuid].addComponent({
                    name: componentName,
                    type: componentType,
                    x: null,
                    y: null,
                    width: null,
                    height: null
                });
                break;
            case 'updateall':
                allState.renderObject.pages[menuid].components = componentsArray;
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