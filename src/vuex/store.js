import Vue from 'vue'
import Vuex from 'vuex'
import menu from './modules/menu'
import category from './modules/category'
import createLogger from 'vuex/logger'

Vue.use(Vuex)
Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    menu,
    category
  },
  strict: debug,
  middlewares: debug ? [createLogger()] : []
})
