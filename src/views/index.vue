<template>
    <div class="view">
      <imgblog :data="imgblogs" :category="category"></imgblog>
      <br/><br/>
      <cards :data="card"></cards>
    </div>
</template>

<script>
    import slider from './../components/slider.vue';
    import imgblog from './../components/imgblog.vue';
    import cards from './../components/cards.vue';
    import {
      getMenus,
      getCategory,
      selectCategory,
      getInitImgBlogs,
      getInitCard
    } from './../vuex/actions';
    export default {
      components: {
        slider,
        imgblog,
        cards
      },
      vuex: {
        getters: {
          menus: state => state.menus,
          category: state => state.category,
          imgblogs: state => state.imgblog,
          card: state => state.card
        },
        actions: {
          getMenus,
          getCategory,
          selectCategory,
          getInitImgBlogs,
          getInitCard
        }
      },
      data() {
        return {
        };
      },
      ready() {
        this.getCategory();
        this.getInitImgBlogs();
        this.getInitCard();
      }
    };
</script>

<style>
    .view{
        width: 100%;
        height:100%;
    }
</style>
