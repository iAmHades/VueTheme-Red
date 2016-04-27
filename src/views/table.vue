<template>
<div>
  <grid :pagesize="pagesize" :data="gridData" :url="url" :columns="columns" :total="total"></grid>
</div>
</template>

<script>
    import grid from './../components/table.vue';
    export default {
        components: {
            grid
        },
        data() {
            return {
                gridData: [{
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
                url: '/admin/activity/queryActivit',
                total: null,
                pagesize: '15',
                start: '0',
                columns: {
                    _id: '编号',
                    type: '组件类型',
                    name: '组件名字',
                    remarks: '备注',
                    op: '查看',
                    del: '操作'
                }
            };
        },
        ready(){
           this.translateHtml(this.gridData);
        },
        methods: {
            translateHtml(data){
                data.forEach((record) => {
                  record._id = '<a v-link="admin">'+record._id+'</a>';
                  record.op = '<button @click.stop="edit">查看</button>';
                });
            },
            edit() {
                alert('edit');
            }
            // rowClick(index) {
            //     alert(index);
            // }
        }
    };
</script>
