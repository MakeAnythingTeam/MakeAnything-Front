const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://3.39.161.226:8080',
      pathRewrite: {
        '^/api': ''
      },
      changeOrigin: true
    })
  );
}