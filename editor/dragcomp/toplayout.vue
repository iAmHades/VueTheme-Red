<template>
<toplayout>
   <menu slot="top_menu" :data="menus"></menu>
   <div v-el:gridster class="main-container gridster" >
         <ul>
        
         </ul>
    </div>
</toplayout>
</template>
<script>
    import toplayout from './../../src/components/toplayout.vue';
    import menu from './../../src/components/menu.vue';
    export default {
        components: {
            toplayout,
            menu
        },
        data() {
            return {
                menus: [{
                    id: 2,
                    text: '控件',
                    url: '#',
                    child: [{
                        id: 11,
                        text: '表单',
                        type: 'from',
                        url: '#'
                    }, {
                        id: 12,
                        text: 'grid',
                        type: 'grid',
                        url: '#'
                    }, {
                        id: 13,
                        text: '上下布局',
                        type: 'toplayout',
                        url: '#'
                    }, {
                        id: 14,
                        text: '左右布局',
                        type: 'leftlayout',
                        url: '#'
                    }]
                }]
            };
        },
        ready(){
            console.info('xx');
        }
    };
</script>
