if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test') {
  module.exports = require('./dist/react-spectre.css.min')
} else {
  module.exports = require('./lib/index')
}
