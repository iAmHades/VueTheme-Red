import Vue from 'vue'
import Vuex from 'vuex'
import menu from './modules/menu'
import category from './modules/category'
import imgblog from './modules/imgblog'
import createLogger from 'vuex/logger'

Vue.use(Vuex)
Vue.config.debug = true
const debug = process.env.NODE_ENV !== 'production'
var allModules = [menu, category, imgblog]
var state = {}
var mutations = {}
allModules.forEach(function (module) {
    Object.keys(module).forEach(function (key) {
        if (key === 'state'){
        	Object.keys(module.state).forEach(function(k){
        		state[k]=module[key][k]
        	})
        }
        if (key === 'mutations'){
            if (!module || !module.mutations) return
            Object.keys(module.mutations).forEach(function (name) {
                var original = module.mutations[name]
                mutations[name] = function (state) {
                    original.apply(undefined, [state].concat(arguments))
                }
            })
        }
    })
})
export default new Vuex.Store({
    state,
    mutations,
    strict: debug,
    middlewares: debug ? [createLogger()] : []
})
