/**
 * Mocking client-server processing
 */
const menu = [{
  id: 1,
  text: ' Home Pages',
  url: '/'
}, {
  id: 2,
  text: 'Pages',
  url:'#'
}, {
  id: 3,
  text: 'Admin',
  url: '/admin'
}, {
  id: 4,
  text: 'Components',
  url:'#',
  child: [{
    id: 41,
    text: 'from'
  }, {
    id: 42,
    text: 'table'
  }, {
    id: 43,
    text: 'tab'
  }, {
    id: 43,
    text: 'modal'
  }]
}];

const leftmenu = [{
  id: 1,
  text: 'Layout',
  url: '/admin/layout'
}, {
  id: 2,
  text: 'From',
  url: '/admin/from'
}, {
  id: 3,
  text: 'Table',
  url: '/admin/table'
}, {
  id: 4,
  text: 'Modal',
  url: '/admin/modal'
}];

export default {
  getMenus(userType, cb) {
    setTimeout(() => cb(menu), 100);
  },
  getLeftMenus(userType, cb) {
    cb(leftmenu);
  }
};