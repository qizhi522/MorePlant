const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:9090',
                changeOrigin: true
            }
        }
    },

    // 对脚手架工具使用的webpack进行配置
    chainWebpack: (config)=>{
        // 设置路径的别名
        config.resolve.alias
            // set(路径的别名，真实的路径)
            .set('API',resolve('src/API'))
            .set('fetch',resolve('src/common/fetch'))
            .set('@pages',resolve('src/pages'))
            .set('@components',resolve('src/components'))
    }
}