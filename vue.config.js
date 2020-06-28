module.exports = {
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: {
            '/mi': {
                target: 'http://mi.rzi2016.online/mi/', //API服务器的地址
                changeOrigin: true,
                pathRewrite: {
                    '^/mi': ''
                }
            },
        },
    }
}