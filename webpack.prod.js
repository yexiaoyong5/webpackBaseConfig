const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')

module.exports = merge(common,{
  mode:'production',
  devtool:'source-map',//和上面配置一样，定义开发模式，可以打印更多的test信息和log信息，方便开发，同样在开发环境中，可以更清晰的看到test信息和log信息
  plugins:[
      new webpack.DefinePlugin({//该插件通过定义全局环境变量，来告诉一些lib，此模式下忽略log和test信息，从而实现代码优化，bundle文件瘦身
        'process.env.NODE_ENV':JSON.stringify('production')
      }),
      new UglifyJSPlugin({ //和配置devtool和mode一样，在生产环境中通过该插件来优化js文件，为bundle文件瘦身
        sourceMap: true
      })
  ],
  externals: { //对于一些体积比较大的第三方lib，通过该配置来避免打到bundles中，而是在用户使用模块时候，再引入，该配置可大大减少bundle的大小，类似懒加载使用，见index.js使用
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_'
    }
  }
})