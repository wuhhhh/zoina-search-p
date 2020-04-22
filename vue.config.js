module.exports = {
    // baseUrl 3.4版本已废弃  refs:https://cli.vuejs.org/zh/config/#baseurl
    // publicPath 等价于 webpack 的 output.publicPath
    publicPath: '/',
    devServer: {
        host:'localhost',
        disableHostCheck: true, //禁用主机检查
        port: "8082",
        proxy: {
            "/api": {
                // target: process.env.VUE_APP_API,
                target: "http://localhost:8080/",
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    "^/api": "/api"
                }
            }
        }
    },

    // disable source map in production
    productionSourceMap: false
};
