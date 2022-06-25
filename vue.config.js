module.exports = {
	devServer: {
		proxy: {
			'/api': { //前綴帶有此路徑的請求要代理
                target: 'http://api.localhost.web',//http://powentag.com/api',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '', //代理的時候真實請求要把test前綴轉成空
                }
            }
		}
	},
    chainWebpack: config => {           
        // if (process.env.NODE_ENV === 'production') {            
          config.module.rule('vue').uses.delete('cache-loader');            
          config.module.rule('js').uses.delete('cache-loader');         
          // config.module.rule('ts').uses.delete('cache-loader');         
          // config.module.rule('tsx').uses.delete('cache-loader');            
        // }           
      }
}