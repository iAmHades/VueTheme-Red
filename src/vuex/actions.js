import menu from '../service/menu'
import category from '../service/category'
import imgblog from '../service/imgblog'

export const getMenus = ({
	dispatch, state
}, userType) => {
	menu.getMenus(
		userType, (menus) => {
			debugger
			return dispatch('getMenus', menus)
		}
	)
}

export const getCategory = ({
	dispatch
}) => {
	category.getCategory(
		(category) => dispatch('getCategory', category)
	)
}

export const selectCategory = ({
	dispatch
}, key) => {
	category.selectCategory(
		key, (category) => dispatch('selectCategory', category)
	)
}

export const getImgBlog = ({
	dispatch
}) => {
	imgblog.getImgBlog(
		(imgblog) => dispatch('getImgBlog', imgblog)
	)
}