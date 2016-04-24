import menu from '../service/menu';
import category from '../service/category';
import imgblog from '../service/imgblog';

export const getMenus = ({
	dispatch, state
}, userType) => {
	menu.getMenus(
		userType, menus => dispatch('getMenus', menus)
	);
};

export const getCategory = ({
	dispatch
}) => {
	category.getCategory(
		categoryData => dispatch('getCategory', categoryData)
	);
};

export const selectCategory = ({
	dispatch
}, key) => {
	category.selectCategory(
		key, categoryData => dispatch('selectCategory', categoryData)
	);
};

export const getImgBlog = ({
	dispatch
}) => {
	imgblog.getImgBlog(
		imgblogData => dispatch('getImgBlog', imgblogData)
	);
};