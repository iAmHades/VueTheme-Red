const state = {
	category: []
}

// mutations
const mutations = {
	
	getCategory(state, category) {
		state.category = category
	}, 
	selectCategory(state, key) {
		let selected
		key = 'DEVELOPMENT'
		if (key === 'ALL') {
			selected = state.imgblog
		} else {
			selected = state.imgblog.filter((value) => {
				return value.key === key
			})
		}
		console.info(selected)
	}
}

export default {
	state,
	mutations
}