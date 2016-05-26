<template>
    <div>
        <upload :uploadurl.sync='url'></upload>
        <span>{{url}}</span>
    </div>
</template>
<script>
  import upload from './../components/qiniu_upload.vue';
  export default {
    components: {
      upload,
    },
    data(){
    return {
      url:''
    };
  },
    watch: {
    },
    compiled(){
    }

  };
</script>