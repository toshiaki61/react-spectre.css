'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/react-spectre.css');
} else {
  module.exports = require('./dist/react-spectre.css.dev');
}
