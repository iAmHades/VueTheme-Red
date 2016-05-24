<template>
  <div>
      <mddropdown :data='menus'></mddropdown>          
  </div>
  
</template>
<script>
  import { getCustomMenus } from './../vuex/actions';
  import mddropdown from './../components/dropdown.vue';
  export default {
    components: {
      mddropdown
    },
    vuex: {
      getters: {
        menus: state => state.custommenus
    },
    actions: {
      getCustomMenus
    }
  },
  data(){
    return {
      isShow: false,
      bottomnav: {
        url: 'http://www.baidu.com',
        text: '协购产品专区'
      }
    };
  },
  created(){
    this.getCustomMenus();
  },
  };
</script>

