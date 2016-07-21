h<template>
    <div>
    <button  @click="showmodal">Show Modal</button>
    <modal :show.sync="showModal">
       <h3 slot="header">提示消息</h3>
       <h3 slot="body">这是一个对话框！</h3>
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
                showModal:false
            };
        },
        compiled() {

        },
        methods: {
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

