<template>
<div class="container-fluid admin-panel">
  <div class="row">
    <div class="col-md-2 leftmenu-borad">
        <div class="">
           <ul class="left-menu" v-el:leftmenu>
             <li v-for="menu in menus">
                <a v-if="!menu.child" href="{{menu.url}}">{{menu.text}}</a>
                <div v-else @click="showSubMenu(menu.id)">{{menu.text}}</div>
                <ul v-if="menu.child" v-show="activeindex==menu.id">
                  <li draggable="true" v-for="submenu in menu.child">{{submenu.text}}</li>
                  <li><a @click="click">随机添加组件测试</a></li>
                </ul>
             </li>
           </ul>
       </div>
    </div>
    <div class="col-md-10">
      <div v-el:gridster class="main-container gridster" >
         <ul>
        
         </ul>
      </div>
    </div>
  </div>
</div>
</template>
<script>
    import leftlayout from './dragcomp/leftlayout.vue';
    import toplayout from './dragcomp/toplayout.vue';
    import grid from './dragcomp/grid.vue';
    import './util/drag.js';
    export default {
        components: {
            leftlayout,
            toplayout,
            grid
        },
        data() {
            return {
                gridster: null,
                activeindex: 0,
                dragDomWidth: 0,
                dragDomHeight: 0,
                menus: [{
                    id: 1,
                    text: '模版',
                    url: '#'
                }, {
                    id: 2,
                    text: '控件',
                    url: '#',
                    child: [{
                        id: 11,
                        text: '表单',
                        type: 'from',
                        url: '#'
                    }, {
                        id: 12,
                        text: 'grid',
                        type: 'grid',
                        url: '#'
                    }, {
                        id: 13,
                        text: '上下布局',
                        type: 'toplayout',
                        url: '#'
                    }, {
                        id: 14,
                        text: '左右布局',
                        type: 'leftlayout',
                        url: '#'
                    }]
                }, {
                    id: 3,
                    text: '设置',
                    url: '#'
                }]
            };
        },
        ready() {
            const self = this;
            this.$nextTick(() => {
                this.gridster = $('.gridster ul').gridster({
                    widget_base_dimensions: [50, 50],
                    widget_margins: [5, 5],
                    helper: 'clone',
                    // avoid_overlapped_widgets: false,
                    max_cols: 30,
                    resize: {
                        enabled: true,
                        max_size: [25, 10],
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
                const lis = this.$els.leftmenu.querySelectorAll('li ul li');
                const dom = new Draggable([{
                    dom: lis[0],
                    elementType: 'from'
                }, {
                    dom: lis[1],
                    elementType: 'grid'
                }, {
                    dom: lis[2],
                    elementType: 'toplayout'
                }, {
                    dom: lis[3],
                    elementType: 'leftlayout'
                }], this.gridster);
                dom.initVue(this);
            });
        },
        methods: {
            click() {
                const row = parseInt(Math.random() * 5, 10);
                const col = parseInt(Math.random() * 5, 10);
                this.gridster.add_widget('<div>随机添加的组件</div>', row, col);
            },
            showSubMenu(id) {
                if (this.activeindex === id) {
                    this.activeindex = 0;
                } else {
                    this.activeindex = id;
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

/*gridster*/
.gridster div{
    /*border: 1px black solid;*/
}
  
.gridster * {
  margin:0;
  padding:0;
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
