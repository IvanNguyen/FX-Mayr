const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PROJECT_ROOT = path.normalize(__dirname);
const SRC = `${PROJECT_ROOT}/src`;
const PUBLIC = `${PROJECT_ROOT}/public`;
const ENVIRONMENT = process.env.ENVIRONMENT || 'local';

const config = {
  context: SRC,
  entry:  ['babel-polyfill', `${SRC}/assets/scss/main.scss`, `${SRC}/js/main.js`],

  output: {
    path: PUBLIC,
    publicPath: '/',
    filename: 'js/bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        use:'file-loader?name=[name].[ext]',
        exclude: /node_modules/,
      },
      {
        test: /\.(css|scss)$/,
        use: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
      },
      {
        test: /\.(jpg|jpeg|gif|png|woff|woff2|eot|otf|ttf|svg)$/,
        use:'file-loader?name=[path][name].[ext]',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },

  resolve: {
    modules: [SRC, 'node_modules'],
    extensions: [
      '.js',
      '.css', '.scss',
      '.json', '.html', '.ico',
    ],
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin({ filename: 'css/styles.css', allChunks: true }),
    new webpack.DefinePlugin({
      'process.env': {
        'ENVIRONMENT': JSON.stringify(ENVIRONMENT),
        'NODE_ENV': JSON.stringify(ENVIRONMENT),
      }
    }),
  ],
};

if (ENVIRONMENT === 'local') {
  config.watchOptions = { poll: true };
}

module.exports = config;
