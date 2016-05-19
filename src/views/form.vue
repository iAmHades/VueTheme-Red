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

    <!-- Select -->
    <div class="col-lg-12">
      <h2>Select</h2>
      <div class="col-lg-3">
      <mdselect :value.sync="selected" :options="options" :multiple=true :placeholder="choose"></mdselect>
      </div>
    </div>


    <!-- Textarea -->
    <div class="col-lg-12">
      <h2>Textarea</h2>
      <mdtextarea :value.sync="textarea">
        <label slot="input-lable">Textarea</label>
      </mdtextarea>
      <span>textarea:{{textarea}}</span>
    </div>
    <!-- Counter -->
    <div class="col-lg-12">
      <h2>Counter</h2>
      <mdcounter :counter.sync="counter" :type.sync="vertial">
      </mdcounter>
      <mdcounter :counter.sync="counter" >
      </mdcounter>
      <span>current Number:{{counter}}</span>
    </div>
  </div>
</template>
<script>
  import mdinput from './../components/form/input.vue';
  import mdradio from './../components/form/radio.vue';
  import mdcheckbox from './../components/form/checkbox.vue';
  import mdselect from './../components/form/select.vue';
  import mdtextarea from './../components/form/textarea.vue';
  import mdcounter from './../components/form/counter.vue';
  export default {
    components: {
      mdinput,
      mdradio,
      mdcheckbox,
      mdselect,
      mdtextarea,
      mdcounter
    },
    data() {
      return {
        firstName: 'Tao',
        lastName: '',
        first: 'FirstName',
        radio: 'green',
        textarea:'请输入文本内容',
        checkbox: {
          basketball: true,
          football: false
        },
        selected: null,
        options: ['foo', 'bar', 'baz'],
        choose:'choosing',
        counter:1,
        vertial:'vertial'
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

