import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';

const development = require('./webpack.development.config');

const config: webpack.Configuration = {
  mode: 'production',
  entry: './app/app.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  resolve: {
    // changed from extensions: [".js", ".jsx"]
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      // changed from { test: /\.jsx?$/, use: { loader: 'babel-loader' } },
      {
        test: /\.(t|j)sx?$/,
        use: {
          loader: 'awesome-typescript-loader'
        }
      },
      // addition - add source-map support
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    console.log('Setting up Dev Mode');
    return { ...config, ...development };
  }

  if (argv.mode === 'production') {
  }

  return config;
};
