<template>
    <div class="view">
            
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
