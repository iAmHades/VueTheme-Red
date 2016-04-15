<template>
    <div class="view" >
            
    </div>
</template>

<script>
    export default {
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
