<template>
    <div class="view">
        <div v-if="$loadingRouteData">Loading ...</div>
        <div v-if="!$loadingRouteData" v-el:test>
             welcome.. --{{author}}
            
        </div>
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
