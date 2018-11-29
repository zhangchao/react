const path = require('path');

module.exports = {    // 入口文件
   entry: {
        app: './app/main.js'
    },    // 输出到dist文件夹, 文件名字为bundle.js
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'./build')
    },
    module: {
       rules: [
           {
               test: /\.(js|jsx)$/,
               use: 'babel-loader',
               exclude: /node_modules/
           }
       ]
   },
   devServer: {
       port: 3001,
       contentBase: './build'
   }
}
