<template>
  <div>
    <div class="col-lg-12">
      <h2>Input</h2>
      <mdinput :value.sync="firstName">
        <label slot="input-lable">FirstName</label>
      </mdinput>
      <mdinput :value.sync="lastName">
        <label slot="input-lable">LastName</label>
      </mdinput>
      <span>firstName:{{firstName}}   lastName:{{lastName}}</span>
    </div>
    <hr/>
    <div class="col-lg-12">
      <h2>Radio</h2>
      <mdradio :value.sync="radio" radio-value="green">Green</mdradio>
      <mdradio :value.sync="radio" radio-value="yellow">Yellow</mdradio>
    </div>
    <hr/>
  </div>
</template>
<script>
  import mdinput from './../components/form/input.vue';
  import mdradio from './../components/form/radio.vue';
  export default {
    components: {
      mdinput,
      mdradio
    },
    data() {
      return {
        firstName: 'Tao',
        lastName: '',
        first: 'FirstName',
        radio: 'green'
      };
    },
    watch: {
//      radio(){
//        alert(this.radio);
//      }
    },
    compiled(){
    }

  };
</script>

