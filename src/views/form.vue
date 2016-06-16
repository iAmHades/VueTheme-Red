<template>
  <div>
    <!--input-->
    <div class="col-md-12 col-lg-12">
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
    <div class="col-md-12 col-lg-12">
      <h2>Radio</h2>
      <span>Select your like color:['{{radio}}']</span>
      <mdradio :value.sync="radio" radio-value="green" :name.sync="radio"><label slot="radio-text">Green</label>
      </mdradio>
      <mdradio :value.sync="radio" radio-value="yellow" :name.sync="radio"><label slot="radio-text">Yellow</label>
      </mdradio>
    </div>
    <!--checkbox-->
    <div class="col-md-12 col-lg-12">
      <h2>CheckBox</h2>
      <div style="text-align: left">

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
        <div class="col-md-12 col-lg-12">
          <h2>Select</h2>
          <mdselect :value.sync="selected" :options="options" :multiple=false :placeholder="choose"></mdselect>
        </div>


        <!-- Textarea -->
        <div class="col-md-12 col-lg-12">
          <h2>Textarea</h2>
          <mdtextarea :value.sync="textarea">
            <label slot="input-lable">Textarea</label>
          </mdtextarea>
        </div>
        <!-- Counter -->
        <div class="col-md-12 col-lg-12">
          <h2>Counter</h2>
          <mdcounter :counter.sync="counter" ></mdcounter>
          <mdcounter :counter.sync="counter" :type.sync="vertial">
          </mdcounter>
          <span>current Number:{{counter}}</span>
        </div>


        <div class="col-md-12 col-lg-12" style="height:100px">
          <mdsearch :value.sync="searchvalue"></mdsearch>
        </div>
        <div class="col-md-12 col-lg-12">
         <mdverifycode :verify.sync="result"></mdverifycode>
       </div>
       <div class="col-md-12 col-lg-12">
        <mdrater :value.sync="star" slot="value"></mdratestar>
        </div>
        
      <div class="col-lg-12 col-md-12">
        <mdalert :show.sync="showAlert1" :text.sync="title" :type="type1" :hide.sync="showColse"></mdalert>
        <mdalert :show.sync="showAlert" :text.sync="title" :type="type2" :hide.sync="showColse2"></mdalert>
        <mdalert :show.sync="showAlert3" :text.sync="title" :type="type3" :hide.sync="showColse"></mdalert>
        <mdalert :show.sync="showAlert" :text.sync="title" :type="type4" :hide.sync="showColse2"></mdalert>
      </div>
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
  import mdsearch from './../components/form/search.vue';
  import mdverifycode from './../components/verifycode.vue';
  import mdrater from './../components/form/rater.vue';
  import mdalert from './../components/alert.vue';
  export default {
    components: {
      mdinput,
      mdradio,
      mdcheckbox,
      mdselect,
      mdtextarea,
      mdcounter,
      mdsearch,
      mdverifycode,
      mdrater,
      mdalert
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
        vertial:'vertial',
        result:false,
        searchvalue:null,
        star:1,
        showAlert:true,
        showAlert1:true,
        showAlert3:true,
        title:'Well done! You successfully read this important alert message.',
        type1:'warning',
        type2:'info',
        type3:'success',
        type4:'danger',
        showColse:false,
        showColse2:true
      };
    },
    watch: {
    },
    compiled(){
    },
    methods:{
      doVerify(d){
        alert(d);
      },
      search(){
        alert(this.searchvalue);
      }
    }

  };
</script>

