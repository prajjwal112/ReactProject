const { linksByPath } = require('./links')

// Make map in format expected by next.js
const exportPathMap = () => ({
  // Map root path, app takes care of redirect using router.update
  '/': { page: '/app' },
  ...Object.fromEntries(
    // Single page app so everything points to ./app
    Object.keys(linksByPath).map(path => [path, { page: '/app' }])
  )
})

module.exports = { exportPathMap }
