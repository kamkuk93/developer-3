const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    // app.use(createProxyMiddleware("api/send-email", { target: "http://127.0.0.1:4000" }));
    // app.use(createProxyMiddleware("/blog", { target: "http://[::1]:3000" }));

    app.use(createProxyMiddleware("/send-email", { target: "http://127.0.0.1:4000/" }));


    // app.use(createProxyMiddleware("/wordpress", { target: "http://127.0.0.1/" }));
    app.use(createProxyMiddleware("/wordpress", { target: "http://127.0.0.1:8080/" }));
};