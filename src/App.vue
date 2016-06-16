<template>
    <div>
       <toplayout>
         <menu slot="top_menu" :data="menus"></menu>
         <router-view slot="top_container" class="view" transition="expand" transition-mode="out-in"></router-view>
         <foot slot="top_footer"></foot>
     </toplayout>
 </div>
</template>

<script>
    import toplayout from './components/toplayout.vue';
    import menu from './components/menu.vue';
    import foot from './components/footer.vue';
    import store from './vuex/store';
    import {
        getMenus
    } from './vuex/actions';
    module.exports = {
        store,
        components: {
            menu,
            foot,
            toplayout
        },
        vuex: {
            getters: {
                menus: state => state.menus
            },
            actions: {
                getMenus
            }
        },
        ready() {
            this.getMenus();
        }
    };
</script>

<style lang="less">


    .expand-transition {

    }

    .expand-enter {
        animation: expand-in 0.2s;
    }

    .expand-leave{
        animation: expand-out 0.5s;
    }

    @keyframes expand-in {
        0% {
            opacity: 0;
        }
        25% {
            opacity: 0.25;
        }
        50% {
            opacity: 0.5;
        }
        75% {
            opacity: 0.75;
        }
        100% {
            opacity: 1;
        }
    }

    @keyframes expand-out {
     0% {
        opacity: 1;
    }
    25% {
        opacity: 0.75;
    }
    50% {
        opacity: 0.5;
    }
    75% {
        opacity: 0.25;
    }
    100% {
        opacity: 0;
    }
}

</style>