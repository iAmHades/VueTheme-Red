const state = {
	imgblog: []
};

// mutations
const mutations = {
	getImgBlog(allState, imgblog) {
		allState.imgblog = imgblog;
	}
};

export default {
	state,
	mutations
};