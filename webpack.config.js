"use strict";

module.exports = {
  entry: './demo/app.jsx',
  output: {
    publicPath: 'http://localhost:8090/assets'
  },
  module: {
    loaders: [{
      test: /\.jsx$/,
      loader: require.resolve("babel-loader")
    }]
  },
  externals: {
    'react': 'React'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
