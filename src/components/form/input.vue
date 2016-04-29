<template>
<div class="input-field col-lg-3">
    <input v-if="disabled"
           v-model="value"
           :placeholder="placeholder" :id="id"
           :type="type"
           :lazy="lazy" :number="number" :debounce="debounce"
           disabled="disabled" class="input"  />
    <input v-else
           v-model="value"
           :placeholder="placeholder" :id="id"
           :type="type"
           :lazy="lazy" :number="number" :debounce="debounce"
           @focus="activateField"
           @blur="deactivateField"
           class="input" />
</div>
</template>
<script >
module.exports = {
        props: {
            value: {
            type: String,
            required: false,
            twoWay: false
        },
        placeholder: {
            type: String,
            required: false,
            twoWay: false
        },
        disabled: {
            type: Boolean,
            required: false,
            twoWay: false
        },
        type: {
            type: String,
            required: false,
            twoWay: false
        },
        lazy: {
            type: Boolean,
            required: false,
            twoWay: false
        },
        number: {
            type: Boolean,
            required: false,
            twoWay: false
        },
        debounce: {
            type: Number,
            required: false,
            twoWay: false
        }
        },
        methods: {
            activateField(){
            }
        }

    };
</script>
<style type="text/css">
    .input-field{
        float: left;
        height: 100px;
    }
    .input{
        margin: 20px;
        border: none;
        border-bottom: 1px solid red;
    }
    .input:focus{
        outline: none;
         border-bottom: 2px solid red;
    }
</style>