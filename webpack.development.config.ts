module.exports = {
  mode: 'development',
  // addition - add source-map support not production
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  }
};
