/**
 * Mocking client-server processing
 */
const menu = [{
  id: 1,
  text: ' Home Pages'
}, {
  id: 2,
  text: 'Blog Pages'
}, {
  id: 3,
  text: 'Pages'
}, {
  id: 4,
  text: 'Components',
  child: [{
      id: 41,
      text: 'from',
    }, {
      id: 42,
      text: 'table',
    }, {
      id: 43,
      text: 'tab',
    }, {
      id: 43,
      text: 'modal',
    }
  ]
}];

export default {
  getMenus(userType, cb) {
    setTimeout(() => cb(menu), 100);
  },
};