var webpack = require('webpack');
var bowerDir = __dirname + '/bower_components';
var BowerWebPackPlugin = require('bower-webpack-plugin');

module.exports = {
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/dev-server',
      './src/js/index.jsx'
    ]
  },
  resolve: {
    alias: {
      'react': bowerDir + '/react/react.min.js'
    },
    extensions: ['', '.jsx', '.js', 'min.js']
  },
  output: {
    path: __dirname + '/generated/js',
    filename: 'bundle.js', 
    publicPath: '/js/'
  },
  module: {
    noParse: [ // Ask wepack not to parse pre-built files
      bowerDir + '/react/react.js',
      bowerDir + '/react/react.min.js'
    ],
    loaders: [
      { test: /\.jsx$/, loader:  'jsx-loader?insertPragma=React.DOM&harmony' },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.scss$/, loader: 'style!css!sass' },
      { test: /\.jpeg$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$/, loader: 'file' }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new BowerWebPackPlugin()
  ],
  externals: {
  }
};
