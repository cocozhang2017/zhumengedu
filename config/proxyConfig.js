module.exports = {
    proxy: {
        '/api': {
            target: 'http://39.106.107.65',  // 接口域名
            changeOrigin: true,  //是否跨域
            pathRewrite: {
                '^/api': '/'
            }
        }
    }
}
