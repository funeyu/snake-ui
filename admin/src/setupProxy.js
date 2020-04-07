const proxy = require('http-proxy-middleware');

console.log('proxy', proxy);
module.exports = function(app) {
    app.use(
      proxy.createProxyMiddleware( '/api', {
        target: 'http://127.0.0.1:8090/',
        changeOrigin: true,
      })
    );
  };