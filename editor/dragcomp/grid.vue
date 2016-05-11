<template>
<grid :pagesize="pagesize" :data="griddata" :url="url" :columns="columns" :total="total"></grid>
</template>
<script>
    import grid from './../../src/components/table.vue';
    export default {
        components: {
            grid
        },
        data() {
            return {
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
                    op: {
                        text: '查看',
                        render: (value) => '<button @click.stop="edit">查看</button>'
                    },
                    del: '操作'
                }
            };
        },
        methods: {
            edit(id) {
                
            }
        }

    };
</script>
