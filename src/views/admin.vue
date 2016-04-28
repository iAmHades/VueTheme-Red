<template>
<div>
<leftlayout>
   <leftmenu slot="left_menu"></leftmenu>
   <router-view slot="left_container" class="view" transition="expand" transition-mode="out-in"></router-view>
</leftlayout>
</div>
</template>
<script>
    import leftlayout from './../components/leftlayout.vue';
    import leftmenu from './../components/leftmenu.vue';
    export default {
        components: {
          leftmenu,
          leftlayout
        },
        data() {
            return {
            };
        },
        compiled() {}
    };
</script>

