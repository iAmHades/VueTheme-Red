<template>
<div>
  <mdinput :value.sync="firstName" placeholder="Placeholder">
    FirstName
  </mdinput>
  <mdinput :value.sync="lastName" placeholder="Placeholder">
    First Name
  </mdinput>
</div>
</template>
<script>
    import mdinput from './../components/form/input.vue';
    export default {
      components: {
        mdinput
      },
      data() {
        return {
          firstName:'Tao',
          lastName:''
        };
      }
    };
</script>

