module.exports = {
  baseUrl: './',
  indexPath: 'index.html',
  outputDir: 'dist',
  filenameHashing: true,
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    }
  },
  lintOnSave: process.env.NODE_ENV !== 'production',
  productionSourceMap: false,
  devServer: {
    port: 8099,
    proxy: {
      '/about': {
        target: 'https://s-lear.github.io',
        ws: true,
        changeOrigin: true
      }
    }
  }
}