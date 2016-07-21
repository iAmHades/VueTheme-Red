<template>
    <div>
        <alert :show.sync="showAlert" :text.sync="title" :type="type" :hide.sync="showColse"></alert>
    </div>
</template>
<script>
  import alert from './../components/alert.vue';
  export default {
    components: {
      alert,
    },
    data(){
    return {
      showAlert:true,
      title:'Well done! You successfully read this important alert message.',
      type:'info',
      showColse:false
    };
  },
    watch: {
    },
    compiled(){
    }

  };
</script>