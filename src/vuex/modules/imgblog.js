const state = {
	initImgBlogs: [],
	imgblog: []
};

// mutations
const mutations = {
	getInitImgBlogs(allState, imgblog) {
		allState.initImgBlogs = imgblog;
		allState.imgblog = imgblog;
	}
};

export default {
	state,
	mutations
};