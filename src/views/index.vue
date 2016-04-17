<template>
    <div class="view">
      <carousel>
        <slider>
          <img src="http://temp.im/1200x500">
          <div class="carousel-caption">
           <h3>Slide #1</h3>
           <p>sunt in culpa qui officia deserunt mollit a.</p>
         </div>
        </slider>
        <slider>
          <img src="http://temp.im/1200x500">
          <div class="carousel-caption">
           <h3>Slide #2</h3>
           <p>sunt in culpa qui officia deserunt mollit a.</p>
         </div>
        </slider>
        <slider>
          <img src="http://temp.im/1200x500">
          <div class="carousel-caption">
           <h3>Slide #3</h3>
           <p>sunt in culpa qui officia deserunt mollit a.</p>
         </div>
        </slider>
      </carousel>
    </div>
</template>

<script>
    import carousel from './../components/carousel.vue'
    import slider from './../components/slider.vue'
    export default {
        components: {
            carousel,
            slider
        },
        data() {
            return {
                author: ''
            }
        },
        route: {
            data(transition) {
                return {
                    author: 'hades!'
                }
            }
        },
        compiled() {}
    }
</script>

<style>
    .view{
        width: 100%;
        height:100%;
        background-color: #ECECEC;
    }
</style>
