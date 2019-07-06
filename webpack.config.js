const path = require('path')

module.exports = {
  entry: {
    index: './index.js',
    webcomponent: './webcomponent.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development'
};