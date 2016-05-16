<template>
<div class="container-fluid admin-panel">
  <div class="row">
    <div class="col-md-2 leftmenu-borad">
        <div class="">
           <ul class="left-menu" v-el:leftmenu>
             <li><a href="#leftlayout" target="_blank">模版</a></li>
             <li>
                <div @click="showSubMenu()">控件</div>
                <ul v-show="isshowcomp" class="dragtarget">
                  <li :class="{'menu-active':selectedMenu===submenu.id}" draggable="true" v-for="submenu in menus" @click="dragComponent(submenu)">{{submenu.text}}</li>
                </ul>
             </li>
             <li>设置</li>
           </ul>
       </div>
    </div>
    <div class="col-md-10">
      <router-view slot="left_container" class="view" transition="expand" transition-mode="out-in"></router-view>
    </div>
  </div>
</div>
</template>
<script>
    import './util/drag.js';
    import store from './vuex/store';
    import {
        getMenus,
        getComponentMenus,
        setRenderLayout
    } from './vuex/actions';
    export default {
        store,
        vuex: {
            getters: {
                menus: state => state.menus
            },
            actions: {
                getMenus,
                getComponentMenus,
                setRenderLayout
            }
        },
        data(){
          return {
            activeindex:0,
            gridster: null,
            dragDomWidth: 0,
            dragDomHeight: 0,
            isshowcomp:false,
            selectedMenu:0
          };    
        },
        ready() {
           this.getMenus();
        },
        methods: {
            showSubMenu() {
                this.isshowcomp = !this.isshowcomp;
            },
            dragComponent(menu) {
                if (menu.type === 'back') {
                    this.getMenus();
                } else {
                    if (menu.type === 'layout') {
                        let url = '';
                        switch (menu.id) {
                            case 21:
                                url = '/toplayout';
                                this.setRenderLayout('top');
                                break;
                            case 22:
                                url = '/leftlayout';
                                 this.setRenderLayout('left');
                                break;
                            default:
                        }
                        this.getComponentMenus();
                        window.router.go({
                            path: url
                        });
                    }
                    this.selectedMenu = menu.id;
                }
            }
        }
    };
</script>
<style>
/*菜单*/
ul.left-menu{
  list-style: none;
}
ul.left-menu li{
    min-height: 40px;
    line-height: 40px;
    border-bottom: 1px black solid;
}
ul.left-menu ul{
  list-style: none;
}

.menu-active {
  background-color: #D6D3D3;
}

</style>
