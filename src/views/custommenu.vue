<template>
<div>
<leftlayout>
   <custommenu slot="left_menu" :data="menus" :bottomnav="bottomnav"></custommenu>
   <router-view slot="left_container" class="view" transition="expand" transition-mode="out-in"></router-view>
</leftlayout>
</div>
</template>
<script>
    import leftlayout from './../components/leftlayout.vue';
    import custommenu from './../components/custommenu.vue';
    import { getCustomMenus } from './../vuex/actions';
    export default {
      components: {
        custommenu,
        leftlayout
      },
      vuex: {
        getters: {
          menus: state => state.custommenus
        },
        actions: {
          getCustomMenus
        }
      },
      data() {
        return {
          isShow: false,
          bottomnav:{
            url:'http://www.baidu.com',
            text:'协购产品专区'
          }
        };
      },
      created() {
        this.getCustomMenus();
      },
    };
</script>

