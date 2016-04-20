import Vue from 'vue'
import Vuex from 'vuex'
import menu from './modules/menu'
import category from './modules/category'
import imgblog from './modules/imgblog'
import createLogger from 'vuex/logger'

Vue.use(Vuex)
Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'
var {setPath, getPath} = Vue.parsers.path
var allModules = [menu, category, imgblog]
var state = {}
var mutations = {}
allModules.forEach(function (module) {
    Object.keys(module).forEach(function (key) {
        if (key === 'state'){
            state[key]=module[key]
            setPath(state, key, module[key].state || {})
        }
        if (key === 'mutation'){
            if (!module || !module.mutations) return
            Object.keys(module.mutations).forEach(function (name) {
                var original = module.mutations[name]
                mutations[name] = function (state) {
                    for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
                        args[_key3 - 1] = arguments[_key3]
                    }
                    original.apply(undefined, [getPath(state, key)].concat(args))
                }
            })
        }
    })
})
console.info(state)
console.info(mutations)
export default new Vuex.Store({
    state,
    mutations,
    strict: debug,
    middlewares: debug ? [createLogger()] : []
})