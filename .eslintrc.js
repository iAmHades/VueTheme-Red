module.exports = {
    root: true,
    extends: 'standard',
    plugins: [
        'html'
    ],
    globals:{
        'Vue':true,
        'alert':true
    },
    rules: {
        'arrow-parens': 0,
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'space-before-function-paren': [0, 'never'],
        'indent':0,
        'eol-last':0,
        'spaced-comment':[2, "always"],
        'comma-spacing':[2, {"before": false, "after": true}],
        'no-trailing-spaces':[2, { "skipBlankLines": true }],
        'space-infix-ops':0,
        'key-spacing':[0, { "beforeColon": false, "afterColon": true }],
        'quotes':[1, "single"],
        'padded-blocks':0,
        'space-before-blocks':[2,'always'],
        'eqeqeq': 2,
        'no-trailing-spaces':1,
        'no-multiple-empty-lines':2,
        'space-before-blocks':0
    }
}