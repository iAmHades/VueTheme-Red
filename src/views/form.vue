<template>
  <div>
    <!--input-->
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


    <!--radio-->
    <div class="col-lg-12">
      <h2>Radio</h2>
      <span>Select your like color:['{{radio}}']</span>
      <mdradio :value.sync="radio" radio-value="green" :name.sync="radio"><label slot="radio-text">Green</label>
      </mdradio>
      <mdradio :value.sync="radio" radio-value="yellow" :name.sync="radio"><label slot="radio-text">Yellow</label>
      </mdradio>
    </div>
    <!--checkbox-->
    <div class="col-lg-12">
      <div style="text-align: left">
        <h2>CheckBox</h2>
        <p>Your hobbies: {</p>
        <p>"basketball":{{checkbox.basketball}}</p>
        <p>"football":{{checkbox.football}}</p>
        <p>}</p>
      </div>

      <mdcheckbox :value.sync="checkbox.basketball" checkbox-value="green" :name.sync="checkbox1"><label
        slot="checkbox-text">Basketball</label></mdcheckbox>
      <mdcheckbox :value.sync="checkbox.football" checkbox-value="yellow" :name.sync="checkbox2"><label
        slot="checkbox-text">Football</label></mdcheckbox>
    </div>
  </div>
</template>
<script>
  import mdinput from './../components/form/input.vue';
  import mdradio from './../components/form/radio.vue';
  import mdcheckbox from './../components/form/checkbox.vue';
  export default {
    components: {
      mdinput,
      mdradio,
      mdcheckbox
    },
    data() {
      return {
        firstName: 'Tao',
        lastName: '',
        first: 'FirstName',
        radio: 'green',
        checkbox: {
          basketball: true,
          football: false
        }
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

