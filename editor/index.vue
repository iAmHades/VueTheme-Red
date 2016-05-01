<template>
<div>
<leftlayout>
     <div slot="left_menu"  class="navbar">
      <div class="">
           <ul class="left-menu" >
             <li v-for="menu in menus">
                <a v-if="!menu.child" href="{{menu.url}}">{{menu.text}}</a>
                <div v-else @click="showSubMenu(menu.id)">{{menu.text}}</div>
                <ul v-if="menu.child" v-show="activeindex==menu.id">
                  <li  v-for="submenu in menu.child">{{submenu.text}}</li>
                </ul>
             </li>
           </ul>
      </div>
  </div>
   <div slot="left_container">
   <!--  <grid v-el:grid v-show="showtable" :pagesize="pagesize" :data="griddata" :url="url" :columns="columns" :total="total"></grid> -->
    <grid  v-el:grid  :pagesize="pagesize" :data="griddata" :url="url" :columns="columns" :total="total"></grid>
    <div v-el:gridster class="gridster">
    </div>
   </div>
</leftlayout>
</div>
</template>
<script>
    import leftlayout from './../src/components/leftlayout.vue';
    import grid from './../src/components/table.vue';
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
                this.$els.grid.ondragstart = function(ev) {
                    self.dragDomWidth = ev.target.offsetWidth;
                    self.dragDomHeight = ev.target.offsetHeight;
                    ev.dataTransfer.effectAllowed = 'move';
                    ev.dataTransfer.setData('text', ev.target.innerHTML);
                    ev.dataTransfer.setDragImage(self.$els.grid, 0, 0);
                    return true;
                };
                this.$els.grid.ondragend = function(ev) {
                    ev.dataTransfer.clearData("text");
                     const shadow = self.$els.gridster.querySelector('.shadow');
                     self.$els.grid.style.left=shadow.style.left;
                     self.$els.grid.style.top=shadow.style.top;
                     self.$els.grid.style.position='absolute';
                     self.$els.grid.style.width='100%';
                     shadow.remove();
                    return false;
                };
                this.$els.gridster.ondragover = function(ev) {
                        const shadow = self.createShadow(self.dragDomWidth, self.dragDomHeight, ev.clientX, ev.clientY);
                        if(shadow){
                            self.$els.gridster.appendChild(shadow);
                        }
                    ev.preventDefault();
                    return true;
                };
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
            showSubMenu(id) {
                if (this.activeindex === id) {
                    this.activeindex = 0;
                } else {
                    this.activeindex = id;
                }
            },
            createShadow(width, height, x, y) {
                let shadow = this.$els.gridster.querySelector('.shadow');
                if (shadow) {
                    shadow.style.top = y + 'px';
                     // 修正位置
                    shadow.style.left = (x-230) + 'px';
                } else {
                    shadow = document.createElement('DIV');
                    shadow.style.width = this.dragDomWidth + 'px';
                    shadow.style.height = this.dragDomHeight + 'px';
                    shadow.style.top = y + 'px';
                    // 修正位置
                    shadow.style.left = (x-230) + 'px';
                    // shadow.style.backgroundColor = 'red';
                    shadow.style.border='1px red solid';
                    shadow.style.position = 'absolute';
                    shadow.className = 'shadow';
                    return shadow;
                }
            },
            onDOCMousemove(ev) {
                ev = ev || window.event;
                const dx = ev.clientX;
                const dy = ev.clientY;
                console.info(dx + ":" + dy);
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

.gridster{
    border: 1px black solid;
    position: absolute;
    top:400px;
    width: 900px;
    height: 900px;
}

</style>
