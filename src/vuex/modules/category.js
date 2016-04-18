const state = {
  category: []
}

// mutations
const mutations = {
  ['getCategory'](state, category) {
    state.category = category
  }
}

export default {
  state,
  mutations
}