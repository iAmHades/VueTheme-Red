import menu from '../service/menu'
import category from '../service/category'
import imgblog from '../service/imgblog'

export const getMenus = ({ dispatch, state }, userType) => {
  menu.getMenus(
    userType, (menus) => dispatch('getMenus', menus)
  )
}

export const getCategory = ({ dispatch, state }) => {
  category.getCategory(
     (category) => dispatch('getCategory', category)
  )
}

export const getImgBlog = ({ dispatch, state }) => {
  imgblog.getImgBlog(
     (imgblog) => dispatch('getImgBlog', imgblog)
  )
}
