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
                  <li draggable="true" v-for="submenu in menus" @click="dragComponent(submenu.id)">{{submenu.text}}</li>
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
    export default {
        data() {
            return {
                gridster: null,
                activeindex: 0,
                dragDomWidth: 0,
                dragDomHeight: 0,
                menus: menuData,
                isshowcomp: false
            };
        },
        ready() {
            const self = this;
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
            dragComponent(id) {
                if (id === 99) {
                    this.menus = menuData;
                } else {
                    this.menus = menuCompData;
                }
                let url = '';
                switch (id) {
                    case 21:
                        url = '/toplayout';
                        break;
                    case 22:
                        url = '/leftlayout';
                        break;
                    default:
                }
                window.router.go({ path: url });
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

</style>
