const state = {
	imgblog: []
}

// mutations
const mutations = {
	['getImgBlog'](state, imgblog) {
		state.imgblog = imgblog
	}
}

export default {
	state,
	mutations
}