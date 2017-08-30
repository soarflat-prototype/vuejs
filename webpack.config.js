const path = require('path');

module.exports = {
  entry: {
    'guide/app': './src/js/guide/app',
    'instance/app': './src/js/instance/app',
    'syntax/app': './src/js/syntax/app',
    'router/app': './src/js/router/app',
    'component/app': './src/js/component/app',
  },

  output: {
    path: path.join(__dirname, 'docs/js'),
    filename: '[name].js',
  },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        query: {
          presets: ['env'],
        },
      }],
    }],
  },

  resolve: {
    alias: {
      'vue': 'vue/dist/vue.min.js',
    },
  },
};