<template>
  <div class="view">
      <div class="container">
            <div class="row">
              <ul class="filters">
                <li v-for="c in category" class="active">{{c.key}}</li>
              </ul>
            </div>
          </div>
  </div>
</template>

<script>
 import { getCategory } from './../vuex/actions'
  export default {
    vuex: {
     getters: {
       category: state => state.category.category
     },
     actions: {
       getCategory
     }
   },
   created() {
     this.getCategory()
   }
  }
</script>

<style>
  .filters {
    padding: 0px;
    list-style: none;
    overflow: hidden;
    display: inline-block;
    margin-bottom: 32px;
}
.filters li {
    float: left;
    margin-right: 16px;
    font-family: "Raleway", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: bold;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #3498db;
    cursor: pointer;
}
.filters li.active {
    border-bottom: 2px solid #3498db;
}

</style>
