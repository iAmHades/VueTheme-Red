const state = {
	category: []
};

// mutations
const mutations = {
	getCategory(allState, category) {
		allState.category = category;
	},
	selectCategory(allState, key) {
		if (key === 'ALL') {
			allState.imgblog = allState.initImgBlogs;
		} else {
			allState.imgblog = allState.initImgBlogs.filter(value => value.key === key);
		}
	}
};

export default {
	state,
	mutations
};