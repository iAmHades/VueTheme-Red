const state = {
	category: []
}

// mutations
const mutations = {
	['getCategory'](state, category) {
		state.category = category
	}, ['selectCategory'](state, key) {
		let selected
		key = 'DEVELOPMENT'
		if (key === 'ALL') {
			selected = state.imgblog.imgblog
		} else {
			selected = state.imgblog.imgblog.filter((value) => {
				return value.key === key
			})
		}
	}
}

export default {
	state,
	mutations
}