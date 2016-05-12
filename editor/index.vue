<template>
<div class="container-fluid admin-panel">
  <div class="row">
    <div class="col-md-2 leftmenu-borad">
        <div class="">
           <ul class="left-menu" v-el:leftmenu>
             <li><a>模版</a></li>
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
    import {
        menuData,
        menuCompData
    } from './util/data.js';
    import {
        RenderObject,
        Page
    } from './util/RenderObject.js';
    export default {
        data() {
                return {
                    gridster: null,
                    activeindex: 0,
                    dragDomWidth: 0,
                    dragDomHeight: 0,
                    menus: menuData,
                    isshowcomp: false,
                    selectedMenu: null
                };
            },
            ready() {
            },
            methods: {
                click() {
                    const row = parseInt(Math.random() * 5, 10);
                    const col = parseInt(Math.random() * 5, 10);
                    this.gridster.add_widget('<div>随机添加的组件</div>', row, col);
                },
                showSubMenu() {
                    this.isshowcomp = !this.isshowcomp;
                },
                dragComponent(menu) {
                    if (menu.type === 'back') {
                        this.menus = menuData;
                    } else {
                        if (menu.type === 'layout') {
                            let url = '';
                            switch (menu.id) {
                                case 21:
                                    url = '/toplayout';
                                    break;
                                case 22:
                                    url = '/leftlayout';
                                    break;
                                default:
                            }
                            this.menus = menuCompData;
                            window.router.go({
                                path: url
                            });
                        }
                        this.selectedMenu = menu.id;
                    }
                },
                backLayout() {
                    this.menus = menuData;
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
