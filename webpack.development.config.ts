import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';

const devConfig: webpack.Configuration = {
  mode: 'development',
  // addition - add source-map support not production
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: __dirname + '/app/index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = devConfig;
