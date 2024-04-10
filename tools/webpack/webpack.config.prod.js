const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: ['./src/main.tsx'],
  module: {
    rules: require('./webpack.rules'),
  },
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
    clean: true,
    publicPath: process.env.PUBLIC_URL || '',
  },
  plugins: [
    ...require('./webpack.plugins'),
    new webpack.DefinePlugin({
      'process.env.API_URL':
        process.env.SAME_ORIGIN === 'true'
          ? JSON.stringify('')
          : JSON.stringify('https://gyechunsik.site'),
      'process.env.WEBSOCKET_URL':
        process.env.SAME_ORIGIN === 'true'
          ? JSON.stringify('')
          : JSON.stringify('wss://gyechunsik.site'),
    }),
  ],
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.scss'],
    alias: {
      // Custom Aliases
      ...require('./webpack.aliases'),
    },
  },
  stats: 'errors-warnings',
  optimization: {
    minimize: true,
    sideEffects: true,
    concatenateModules: true,
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: 10,
      minSize: 0,
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
        },
      },
    },
  },
};
