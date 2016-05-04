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
                </ul>
             </li>
           </ul>
       </div>
    </div>
    <div class="col-md-10">
      <div v-el:gridster class="main-container gridster" >
      </div>
    </div>
  </div>
</div>
</template>
<script>
    import leftlayout from './../src/components/leftlayout.vue';
    import grid from './../src/components/table.vue';
    import './util/drag.js';
    // import leftmenu from './../src/components/leftmenu.vue';
    // import menu from './../src/components/menu.vue';
    export default {
        components: {
            leftlayout,
            grid
        },
        data() {
            return {
                showtable: true,
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
                        url: '#'
                    }, {
                        id: 12,
                        text: 'grid',
                        url: '#'
                    }, {
                        id: 13,
                        text: '菜单',
                        url: '#'
                    }]
                }, {
                    id: 3,
                    text: '设置',
                    url: '#'
                }],
                gridster: null,
                activeindex: 0,
                griddata: [{
                    _id: '11',
                    type: '咖啡',
                    name: '表单',
                    remarks: 'material design',
                    op: '查看',
                    del: '操作'
                }, {
                    _id: '22',
                    type: '表格',
                    name: '表跟',
                    remarks: 'material design',
                    op: '查看',
                    del: '操作'
                }, {
                    _id: '33',
                    type: '表单',
                    name: '表单',
                    remarks: 'material design',
                    op: '查看',
                    del: '操作'
                }, {
                    _id: '11',
                    type: '咖啡',
                    name: '表单',
                    remarks: 'material design',
                    op: '查看',
                    del: '操作'
                }, {
                    _id: '22',
                    type: '表格',
                    name: '表跟',
                    remarks: 'material design',
                    op: '查看',
                    del: '操作'
                }, {
                    _id: '33',
                    type: '表单',
                    name: '表单',
                    remarks: 'material design',
                    op: '查看',
                    del: '操作'
                }],
                url: '/xx/xxxx',
                total: null,
                pagesize: 10,
                start: '0',
                columns: {
                    _id: '编号',
                    type: '组件类型',
                    name: '组件名字',
                    remarks: '备注',
                    op: '查看',
                    del: '操作'
                },
                showModal: false,
                dragDomWidth: 0,
                dragDomHeight: 0
            };
        },
        ready() {
            const self = this;
            this.translateHtml(this.griddata);
            this.$nextTick(() => {
                this.gridster = $(this.$els.gridster).gridster({
                    widget_base_dimensions: [50, 50],
                    widget_margins: [5, 5],
                    helper: 'clone',
                    avoid_overlapped_widgets: false,
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
                            console.info('draggable stop');
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
                    elementType: 'menu'
                }], this.gridster);
                dom.initVue(this);
            });
        },
        methods: {
            translateHtml(data) {
                data.forEach((record) => {
                    record._id = '<a v-link="admin">' + record._id + '</a>';
                    record.op = '<button @click.stop="edit">查看</button>';
                });
            },
            edit() {
                alert('edit');
            },
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
