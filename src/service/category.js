/**
 * Mocking client-server processing
 */
const _category = [{
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
}]

export default {
  getCategory(cb) {
    setTimeout(() => cb(_category), 100)
  }
}