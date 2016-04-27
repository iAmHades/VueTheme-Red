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
}, {
  id: 3,
  text: 'Admin',
  url: '/admin'
}, {
  id: 4,
  text: 'Components',
  url:'/components',
  child: [{
    id: 41,
    text: 'form',
    url: '#/components/form'
  }, {
    id: 42,
    text: 'table',
    url: '#/components/table'
  }, {
    id: 43,
    text: 'tab',
    url: '#/components/tab'
  }, {
    id: 43,
    text: 'modal',
    url: '#/components/modal'
  }]
}];
const childmenu = [{
  id: 41,
    text: 'form',
    url: '#/components/form'
  }, {
    id: 42,
    text: 'table',
    url: '#/components/table'
  }, {
    id: 43,
    text: 'tab',
    url: '#/components/tab'
  }, {
    id: 43,
    text: 'modal',
    url: '#/components/modal'
}];
const leftmenu = [{
  id: 1,
  text: 'Layout',
  url: '#/admin/layout'
}, {
  id: 2,
  text: 'From',
  url: '#/admin/from'
}, {
  id: 3,
  text: 'Table',
  url: '#/admin/table'
}];

export default {
  getMenus(userType, cb) {
    setTimeout(() => cb(menu), 100);
  },
  getLeftMenus(userType, cb) {
    cb(leftmenu);
  },
  getChildMenus(userType, cb){
    cb(childmenu);
  }
};