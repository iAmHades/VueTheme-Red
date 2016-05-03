<template>
   <div>
     <div class="select-wrapper">
       <span class="caret">▼</span>
       <input @click="open" readonly="readonly" :value="valueContent"
              type="text" class="select-dropdown">

       <md-dropdown-list :active="active" class="select-dropdown">
         <slot></slot>
       </md-dropdown-list>

       <select v-el:field
               v-model="value"
               v-bind-boolean:multiple="multiple"
               :placeholder="placeholder" :id="id"
               :type="type">
         <option v-for="opt in options" :value="opt.value" v-bind-boolean:disabled="opt.disabled">{{opt.content}}</option>
       </select>
     </div>
   </div>
</template>
<style>

</style>
<script>

</script>
