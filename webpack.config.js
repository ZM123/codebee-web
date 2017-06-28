var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/App.tsx'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function(module) {
        return module.context && module.context.indexOf('node_modules') !== -1;
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    })
  ],
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader']
      },
      { test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: 'file-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx']
  },
  devServer: {
    historyApiFallback: true,
    proxy: {
      '/graphql': 'http://localhost:3000'
    }
  }
};
