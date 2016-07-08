const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',

    // With the following line uncommented, clicking the button correctly updates its text.
    //
    // If you comment it out, the button becomes unresponsive.
    'react-hot-loader/patch',

    './src/index.jsx',
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      include: path.join(__dirname, 'src'),
      loader: 'babel-loader',
    }]
  },
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/',
    filename: 'index.bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Hot Loader and ES6 function assignment bug',
      hash: true,
    }),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: path.join(__dirname, 'node_modules'),
  },
};
