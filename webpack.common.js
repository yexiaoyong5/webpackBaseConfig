const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin  = require('html-webpack-plugin')

module.exports = {
  //构建入口地址，可以是数组
  entry:{
    app:'./src/index.js'
    // another:'./src/another-module.js'
  },
  plugins:[
      new CleanWebpackPlugin(['dist']),//dist目录每次自动清空重新生成，无需手动更新
      new HtmlWebpackPlugin({         //当入口文件产生变化时，index.html应用的目录将自动更新，而不需要人工修改
        title:'production'
      }),
      new webpack.HashedModuleIdsPlugin() //对于第三方lib，vendor文件我们不希望每次构建都是重新产生，且更新缓存，使用该插件来避免
  ],
  resolve: {
    extensions: ['.js', '.vue', '.json'],  //当项目中引入没有带后缀文件时，优先按照这个来找对应文件，如果都找不到，侧报错
    alias: { //应用别名
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      '@packages': resolve('packages')
    },
  },
  output:{
    filename: '[name].[chunkhash].js',//使用hash值来命名文件，主要和缓存使用对应起来，保证了缓存的更新，同时后面还会说到通过配置splitChunksPlugin（commonChunkPlugin）插件来配置优化缓存机制的应用
    // chunkFilename: '[name].bundle.js',
    path:path.resolve(__dirname,'dist')
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: { //将第三方库(library)（例如 lodash 或 react）提取到单独的 vendor chunk 文件中，是比较推荐的做法，这是因为，它们很少像本地的源代码那样频繁修改。因此通过实现以上步骤，利用客户端的长效缓存机制，可以通过命中缓存来消除请求，并减少向服务器获取资源，同时还能保证客户端代码和服务器端代码版本一致
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all' //该配置用来避免文件中多出引用同一lib，从而重复打包的问题
        }
      }
    }
  },
  module:{
    //通过loader来加载各种插件，来生成让webpack可以识别的文件，从而来构建模块化机制运行环境
    rules:[{
      test:/\.css$/,
      include: path.resolve(__dirname, 'src'),//将loaders应用于最少数的必要模块中，所加上该属性
      loader: 'babel-loader'
    },
    {
    test: /\.(png|svg|jpg|gif)$/,
    use: [
      'file-loader'
    ]
    }]
  }
}