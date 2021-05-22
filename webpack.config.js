const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");
const port = process.env.PORT || 8080;

module.exports = {
  mode:'development',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry: {
    app: ['./src/index'], //resolve - extension에서 확장자 설정해서 client만 적어줘도 알아서 js or jsx 파일에서 검색
  },
  output:{
    path: __dirname + '/dist',
    filename: 'bundle.[hash].js'
  },
  module:{
    rules:[
      { // 첫번째 룰
        test:/\.(js|jsx)$/,
        exclude:/node_modules/,
        use:[{
          loader: 'babel-loader'
          ,
          options: {
            presets: [
                [
                  '@babel/preset-env', {
                    "targets": {"chrome": "55"}, /* chrome 55 이상으로 지정 */
                  }
                ],
                '@babel/preset-react'
            ],
        }
        }],
        
      },
      { // 두번째 룰
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: true,
              // camelCase: true,
              // sourceMap: true,
              import: true,
            },
          },
          "sass-loader"
        ],
        exclude: /node_modules/
      },
      {
        test:/\.(png|jpg|svg)$/,
        use: [
          'file-loader'
        ]
      }
    ],
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      // filename: 'index.html' // output으로 출력할 파일은 index.html 이다.
      // favicon: 'public/favicon.ico' 파비콘은 준비가 되어있지 않아 주석처리합니다.
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
    new CleanWebpackPlugin()
  ],

  devServer: {
    contentBase: path.resolve("./dist"),
    port: port,
    historyApiFallback: true
  }
};