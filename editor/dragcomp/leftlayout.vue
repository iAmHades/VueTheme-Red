<template>
<div>
  <leftlayout>
    <div slot="left_menu" class="navbar">
           <ul class="left-menu" >
             <li v-for="menu in renderObject.menus" :class="{'menu-active':selectedmenuid===menu.id}">
                <a @click="goto(menu.id)">{{menu.text}}</a>
             </li>
           </ul>
    </div>
    <!-- <leftmenu slot="left_menu" :data="renderObject.menus" ></leftmenu> -->
    <div slot="left_container">
       <div class="gridster">
          <ul></ul>
       </div>   
         <button @click="click">添加菜单</button>
      <button @click="destryedDrag">删除菜单</button>
      <button @click="update">更新菜单</button>
      <button @click="addRouter">添加路由</button>
    </div>


  </leftlayout>
</div>
</template>
<script>
    import leftlayout from './../../src/components/leftlayout.vue';
    import leftmenu from './../../src/components/leftmenu.vue';
    import draggrid from './grid.vue';
    import store from './../vuex/store.js';
    import {
        updateCustomeMenus,
        updateCustomePages
    } from './../vuex/actions.js';
    import {
        parseHtmlToComponent,
        compiledComponentToHtml
    } from './../util/view.js';
    export default {
        components: {
            leftlayout,
            leftmenu,
            draggrid
        },
        vuex: {
            getters: {
                renderObject: state => state.renderObject
            },
            actions: {
                updateCustomeMenus,
                updateCustomePages
            }
        },
        ready() {
            this.$nextTick(() => {
                this.compiledDrag();
            });
        },
        data() {
            return {
                selectedmenuid: '123abcef', // 当前选择的菜单,
                gridster: null,
                draggable: null
            };
        },
        methods: {
            click() {
                const start = new Date().getTime();
                const row = parseInt(Math.random() * 5, 10);
                const col = parseInt(Math.random() * 5, 10);
                const vueDom = this.draggable.createVueDom('grid');
                this.gridster.add_widget(vueDom, 30, 6, 1, 1);
                const end = new Date().getTime();
                console.info('addWidget speed time:' + (end - start));
            },
            compiledDrag() {
                this.gridster = $('.gridster ul').gridster({
                    widget_base_dimensions: [50, 50],
                    widget_margins: [5, 5],
                    helper: 'clone',
                    // avoid_overlapped_widgets: false,
                    max_cols: 30,
                    resize: {
                        enabled: true,
                        max_size: [50, 50],
                        min_size: [1, 1]
                    },
                    draggable: {
                        start(e, ui) {},
                        drag(e, ui) {

                        },
                        stop(e, ui) {

                        }
                    }
                }).data('gridster');
                const lis = document.querySelectorAll('ul.dragtarget li');
                this.draggable = new Draggable([{
                    dom: lis[1],
                    elementType: 'from'
                }, {
                    dom: lis[2],
                    elementType: 'grid'
                }], this.gridster);
                this.draggable.initVue(this);
                this.draggable.onAddWidgetEnd = (component) => {
                    const name = component.getAttribute('componentname');
                    const type = component.getAttribute('module');
                    // menuid, actionType, componentName, componentType
                    this.updateCustomePages(this.selectedmenuid, 'add', name, type);
                };
            },
            destryedDrag() {
                this.gridster.remove_all_widgets();
            },
            add() {
                this.updateCustomeMenus({
                    id: 8,
                    text: '菜单八',
                    url: '#'
                }, 'add');
            },
            del() {
                this.updateCustomeMenus({
                    id: 8,
                    text: '菜单八',
                    url: '#'
                }, 'del');
            },
            update() {
                this.updateCustomeMenus({
                    id: 8,
                    text: '菜单八修改',
                    url: '#'
                }, 'update');
            },
            addRouter() {
                window.router.on('/ttt', {
                    component: {
                        template: '<div>this is a test</div>'
                    }
                });
            },
            goto(id) {
                // 切换前
                const oldpage = this.renderObject.pages[this.selectedmenuid];
                const components = parseHtmlToComponent(document.querySelector('.gridster ul'));
                this.updateCustomePages(this.selectedmenuid, 'updateall', null, null, components);
                this.selectedmenuid = id;
                // 删除
                debugger;
                this.destryedDrag();
                // 切换后
                const newpage = this.renderObject.pages[id];
                // compiledComponentToHtml(newpage.components, this.draggable, this.gridster);
                for (let i = 0; i < newpage.components.length; i++) {
                    const vueDom = this.draggable.createVueDom(newpage.components[i].type);
                    // this.gridster.add_widget(vueDom, newpage.components[i].width, newpage.components[i].height, 1, 1);
                    const width = newpage.components[i].width;
                    const height = newpage.components[i].height;
                    console.info(width+":"+height);
                    const start = new Date().getTime();
                    this.gridster.add_widget(vueDom, width, height, 1, 1);
                    const end = new Date().getTime();
                    console.info('addWidget speed time:' + (end - start));
                }

            }
        }
    };
</script>
<style>
    
/*gridster*/
.gridster div{
    /*border: 1px black solid;*/
}
  
.gridster * {
  margin:0;
  padding:0;
}

.menu-active {
    background-color: #D6D3D3;
}

ul {
  list-style-type: none;
}

.controls {
    margin-bottom: 20px;
}

.gridster ul {
    background-color: #EFEFEF;
}

.gridster li {
    font-size: 1em;
    font-weight: bold;
    text-align: center;
    line-height: 100%;
}

.gridster {
    margin: 0 auto;
    opacity: .8;
    -webkit-transition: opacity .6s;
    -moz-transition: opacity .6s;
    -o-transition: opacity .6s;
    -ms-transition: opacity .6s;
    transition: opacity .6s;
}

.gridster .gs-w {
    background: #DDD;
    cursor: pointer;
}

.gridster .player {
    background: #BBB;
}

.gridster .preview-holder {
    border: none!important;
    background: red!important;
}

.gridster {
    position:relative;
}

.gridster > * {
    margin: 0 auto;
    -webkit-transition: height .4s, width .4s;
    -moz-transition: height .4s, width .4s;
    -o-transition: height .4s, width .4s;
    -ms-transition: height .4s, width .4s;
    transition: height .4s, width .4s;
}

.gridster .gs-w {
    z-index: 2;
    position: absolute;
}

.ready .gs-w:not(.preview-holder) {
    -webkit-transition: opacity .3s, left .3s, top .3s;
    -moz-transition: opacity .3s, left .3s, top .3s;
    -o-transition: opacity .3s, left .3s, top .3s;
    transition: opacity .3s, left .3s, top .3s;
}

.ready .gs-w:not(.preview-holder),
.ready .resize-preview-holder {
    -webkit-transition: opacity .3s, left .3s, top .3s, width .3s, height .3s;
    -moz-transition: opacity .3s, left .3s, top .3s, width .3s, height .3s;
    -o-transition: opacity .3s, left .3s, top .3s, width .3s, height .3s;
    transition: opacity .3s, left .3s, top .3s, width .3s, height .3s;
}

.gridster .preview-holder {
    z-index: 1;
    position: absolute;
    background-color: #fff;
    border-color: #fff;
    opacity: 0.3;
}

.gridster .player-revert {
    z-index: 10!important;
    -webkit-transition: left .3s, top .3s!important;
    -moz-transition: left .3s, top .3s!important;
    -o-transition: left .3s, top .3s!important;
    transition:  left .3s, top .3s!important;
}

.gridster .dragging,
.gridster .resizing {
    z-index: 10!important;
    -webkit-transition: all 0s !important;
    -moz-transition: all 0s !important;
    -o-transition: all 0s !important;
    transition: all 0s !important;
}

.gs-resize-handle {
    position: absolute;
    z-index: 1;
}

.gs-resize-handle-both {
    width: 20px;
    height: 20px;
    bottom: -8px;
    right: -8px;
    background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pg08IS0tIEdlbmVyYXRvcjogQWRvYmUgRmlyZXdvcmtzIENTNiwgRXhwb3J0IFNWRyBFeHRlbnNpb24gYnkgQWFyb24gQmVhbGwgKGh0dHA6Ly9maXJld29ya3MuYWJlYWxsLmNvbSkgLiBWZXJzaW9uOiAwLjYuMSAgLS0+DTwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DTxzdmcgaWQ9IlVudGl0bGVkLVBhZ2UlMjAxIiB2aWV3Qm94PSIwIDAgNiA2IiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmMDAiIHZlcnNpb249IjEuMSINCXhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiDQl4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjZweCIgaGVpZ2h0PSI2cHgiDT4NCTxnIG9wYWNpdHk9IjAuMzAyIj4NCQk8cGF0aCBkPSJNIDYgNiBMIDAgNiBMIDAgNC4yIEwgNCA0LjIgTCA0LjIgNC4yIEwgNC4yIDAgTCA2IDAgTCA2IDYgTCA2IDYgWiIgZmlsbD0iIzAwMDAwMCIvPg0JPC9nPg08L3N2Zz4=');
    background-position: top left;
    background-repeat: no-repeat;
    cursor: se-resize;
    z-index: 20;
}

.gs-resize-handle-x {
    top: 0;
    bottom: 13px;
    right: -5px;
    width: 10px;
    cursor: e-resize;
}

.gs-resize-handle-y {
    left: 0;
    right: 13px;
    bottom: -5px;
    height: 10px;
    cursor: s-resize;
}

.gs-w:hover .gs-resize-handle,
.resizing .gs-resize-handle {
    opacity: 1;
}

.gs-resize-handle,
.gs-w.dragging .gs-resize-handle {
    opacity: 0;
}

.gs-resize-disabled .gs-resize-handle {
    display: none!important;
}

[data-max-sizex="1"] .gs-resize-handle-x,
[data-max-sizey="1"] .gs-resize-handle-y,
[data-max-sizey="1"][data-max-sizex="1"] .gs-resize-handle {
    display: none !important;
}
</style>
