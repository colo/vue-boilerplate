const path = require('path')

module.exports = {
  chainWebpack: config => {
    config.module
      .rule('eslint')
      .use('eslint-loader')
        .loader('eslint-loader')
        .tap(options => {
          options.formatter = require('eslint').CLIEngine.getFormatter('stylish'),
          options.fix = true
          return options
        })
  },
  pluginOptions: {
    'resolve-alias': {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@libs': path.resolve(__dirname, './src/libs'),
        '@etc': path.resolve(__dirname, './src/etc'),
        '@components': path.resolve(__dirname, './src/components'),
        '@mixins': path.resolve(__dirname, './src/components/mixins'),
        '@wrappers': path.resolve(__dirname, './src/components/wrappers'),
        '@apps': path.resolve(__dirname, './src/apps'),
      }
    }
  }
}
