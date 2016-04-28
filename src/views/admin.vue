<template>
<div>
<leftlayout>
   <leftmenu slot="left_menu" :data="menus"></leftmenu>
   <router-view slot="left_container" class="view" transition="expand" transition-mode="out-in"></router-view>
</leftlayout>
</div>
</template>
<script>
    import leftlayout from './../components/leftlayout.vue';
    import leftmenu from './../components/leftmenu.vue';
    import { getLeftMenus } from './../vuex/actions';
    export default {
      components: {
        leftmenu,
        leftlayout
      },
      vuex: {
        getters: {
          menus: state => state.leftmenus
        },
        actions: {
          getLeftMenus
        }
      },
      data() {
        return {
          isShow: false
        };
      },
      created() {
        this.getLeftMenus();
      },
    };
</script>

