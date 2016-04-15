const state = {
  menus: []
}

// mutations
const mutations = {
  ['getMenus'](state, menus) {
    state.menus = menus
  }
}

export default {
  state,
  mutations
}