<template>
<div >
 <a  @click="showmodal" class="btn btn-primary">Show Modal</a>
    <modal :show.sync="showModal">
    <h3 slot="header">提示消息</h3>
    <h3 slot="body">这是一个提示消息?</h3>
    </modal>
</div>
</template>
<script>
    import modal from './../components/modal.vue';
    export default {
        components: {
          modal
        },
        data() {
            return {
               showModal: false
            };
        },
        compiled() {},
        methods:{
          showmodal(){
                this.showModal = true;
            },
            handleCancel(){
                this.showModal = false;
            },
            handleSubmit(){
                this.showModal = false;
            }
        }
    };
</script>

<style>
.admin-panel{
  background-color: white;
}
.leftmenu-borad{
  border-right: 1px black solid;
  height: 800px;
}
</style>
