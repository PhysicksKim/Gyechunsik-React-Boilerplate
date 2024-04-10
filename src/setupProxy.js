// CORS 임시 해결을 위한 Proxy Middleware 설정
/*
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api/test',
    createProxyMiddleware({
      target: 'http://localhost:8080',
      changeOrigin: true,
      pathRewrite: { '^/api/test': '/test' },
    }),
  );
};
*/
