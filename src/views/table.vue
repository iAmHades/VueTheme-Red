<template>
<div>
  <!-- <grid :pagesize="pagesize" :data="gridData" :url="url" :columns="columns" :total="total"></grid> -->
  <modal :show.sync="showModal">
     <h3 slot="header">提示消息</h3>
     <h3 slot="body">确定要删除该记录吗?</h3>
  </modal>
</div>
</template>

<script>
    // import grid from './../components/table.vue';
    import modal from './../components/modal.vue';
    export default {
        components: {
            // grid,
            modal
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
                url: '/admin/activity/queryActivit',
                total: null,
                pagesize: '10',
                start: '0',
                columns: {
                    _id: {
                        text:'编号',
                        width:'10%'
                    },
                    type: '组件类型',
                    name: '组件名字',
                    remarks: '备注',
                    op: {
                       text:'查看',
                       render: (value) => '<button @click.stop="edit">查看</button>'
                    }
                },
                showModal:false
            };
        },
        ready(){
          
        },
        methods: {
            edit() {
                // alert('edit');
                this.showModal = true;
            },
            showmodal(){
                this.showModal = true;
            },
            handleCancel(){
                alert('您点击了取消');
                this.showModal = false;
            },
            handleSubmit(){
                alert('您点击了确认');
                this.showModal = false;
            }
        }
    };
</script>
