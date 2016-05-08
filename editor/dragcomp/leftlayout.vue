<template>
<leftlayout>
    <leftmenu slot="left_menu" :data="menus"></leftmenu>
    <router-view slot="left_container" class="view" transition="expand" transition-mode="out-in"></router-view>
</leftlayout>
</template>
<script>
    import leftlayout from './../../src/components/leftlayout.vue';
    import leftmenu from './../../src/components/leftmenu.vue';
    export default {
        components: {
            leftlayout,
            leftmenu
        },
        data() {
            return {
                menus: [{
                    id: 1,
                    text: '模版',
                    url: '#'
                }, {
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
                }, {
                    id: 3,
                    text: '设置',
                    url: '#'
                }]
            };
        }

    };
</script>
