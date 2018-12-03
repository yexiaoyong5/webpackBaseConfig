const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common,{
  mode:'development', 
  devtool:'inline-source-map',//和上面配置一样，定义开发模式，可以打印更多的test信息和log信息，方便开发，同样在生产环境中，配置对应的选项则可以“瘦身”
  devServer:{
    contentBase:'./dist ',
    hot:true //开启HMR,配合HotModuleReplacementPlugin插件使用
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin() //在开发环境中使用该插件可以实现局部热加载，方便开发，只能在开发环境中使用
  ]
})