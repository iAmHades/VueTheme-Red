/**
 * Mocking client-server processing
 */
const category = [{
  key: 'ALL',
  name: 'ALL'
}, {
  key: 'BRANDING',
  name: 'BRANDING'
}, {
  key: 'DEVELOPMENT',
  name: 'DEVELOPMENT'
}, {
  key: 'PRINT',
  name: 'PRINT'
}, {
  key: 'DESIGN',
  name: 'DESIGN'
}];

export default {
    getCategory(cb) {
      setTimeout(() => cb(category), 100);
    },
    selectCategory(key, cb) {
      cb(key);
    }
};