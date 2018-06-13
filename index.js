if (process.env.NODE_ENV === 'production') {
  module.exports = require('./lib/react-spectre.css.min')
} else {
  module.exports = require('./lib/index')
}
