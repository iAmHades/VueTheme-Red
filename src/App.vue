<template>
<div class="container">
  <!-- main view -->
  <menu></menu>
  <div class="main-container">
     <router-view  class="view"  transition="expand" transition-mode="out-in"></router-view>
  </div>
  <foot></foot>
</div>
</template>

<script>
    import menu from './components/menu.vue'
    import foot from './components/footer.vue'
    module.exports = {
        components: {
            menu,
            foot
        },
        data() {
            return {

            }
        }
    }

</script>

<style lang="less">
@import './../static/css/variables.less';
@import './../static/css/layout.less';
@import './../static/css/utilities.less';



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