import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';

const config = require('./webpack.config.ts');
const options = {
  contentBase: './dist',
  hot: true,
  host: 'localhost'
};

WebpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new WebpackDevServer(compiler, options);

server.listen(5000, 'localhost', () => {
  console.log('dev server listening on port 5000');
});