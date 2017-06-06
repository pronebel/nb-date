const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: {
      'DateRange': ['./src/date-range.js'],
      'DateDiff': ['./src/date-diff.js'],
  },
  externals: {

  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          cacheDirectory: '/tmp/',
          plugins: ['transform-flow-strip-types'],
          presets: ['es2015', 'stage-0']
        }
      },
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   loader: 'eslint-loader',
      //   enforce: 'pre'
      // }
    ]
  },
  resolve: {
    modules: [
      path.resolve(__dirname, './src'),
      path.resolve(__dirname, './node_modules')
    ]
  },
  resolveLoader: {
    modules: [
      path.resolve(__dirname, './node_modules')
    ]
  },
  output: {

    filename: "[name].min.js",
    library: '[name]',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, './dist'),
    umdNamedDefine: true
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false,
            drop_debugger: true,
            drop_console: true
        },
        sourceMap: true
    })
  ]
};
