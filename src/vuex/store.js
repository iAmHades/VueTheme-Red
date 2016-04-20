import Vue from 'vue'
import Vuex from 'vuex'
import menu from './modules/menu'
import category from './modules/category'
import imgblog from './modules/imgblog'
import createLogger from 'vuex/logger'

Vue.use(Vuex)
Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    menu,
    category,
    imgblog
  },
  strict: debug,
  middlewares: debug ? [createLogger()] : []
})
