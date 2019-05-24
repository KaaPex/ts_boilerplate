import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';

const config = require('./webpack.config.ts');
const options:WebpackDevServer.Configuration = {
  contentBase: './dist',
  hot: true,
  host: 'localhost'
};

const argv:Object = {
  mode: 'development'
};

WebpackDevServer.addDevServerEntrypoints(config(null, argv), options);
const compiler:webpack.Compiler = webpack(config(null, argv));
const server:WebpackDevServer = new WebpackDevServer(compiler, options);

server.listen(5000, 'localhost', () => {
  console.log('dev server listening on port 5000');
});
