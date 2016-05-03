<template>
  <div class="md-radio">
    <input v-model="value"
           :value="radioValue"
           :id="id" :name="group"
           type="radio"/>
  </div>
</template>
<style>
  .md-radio [type="radio"]:checked :before {
    border-radius: 50%;
    background: red;
  }

  .md-radio [type="radio"]:checked :after {
    border: 2px solid red;
    margin: 50px;
  }

</style>
<script>
  module.exports = {
    props: {
      value: {
        type: String,
        required: false,
      },
      radioValue: {
        required: true
      },
      disabled: {
        type: Boolean,
        required: false,
      }
    }
  };

</script>
