const state = {
	category: []
};

// mutations
const mutations = {
	getCategory(allState, category) {
		allState.category = category;
	},
	selectCategory(allState, key) {
		let selected;
		key = 'DEVELOPMENT';
		if (key === 'ALL') {
			selected = allState.imgblog;
		} else {
			selected = allState.imgblog.filter(value => value.key === key);
		}
		console.info(selected);
	}
};

export default {
	state,
	mutations
};