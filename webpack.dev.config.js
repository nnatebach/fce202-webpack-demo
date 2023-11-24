const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    index: [
      './index.js',
      './shared/css/common.css',
      './shared/css/header.css',
      './shared/css/index.css',
      './shared/css/shared.css',
      './shared/css/slick.min.css'
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.[contenthash].js',

    publicPath: ''
  },
  mode: 'production',

  devServer: {
    port: 9000, // 1. a port on which this server will be running (e.g. 9000)

    static: {
      // https://webpack.js.org/configuration/dev-server/#directory
      directory: path.resolve(__dirname, './dist') // 2. tell Webpack Dev Server what exactly should be served on that port, simply pointing Webpack to the 'dist' folder.
    },
    // Read more: https://webpack.js.org/configuration/dev-server/#devserverdevmiddleware
    devMiddleware: { // handles webpack assets
      index: 'index.html', // 3. define the index file. In this case, we are going to use 'index.html'

      writeToDisk: true // 4. Have Webpack dev server explicitly writing the generated files to the 'dist' folder
    }
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
          options: {
            minimize: false
          }
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, {
          loader: "css-loader",
          options: {
            url: false
          }
        }],
      },
      {
        test: /\.(png|jpg)$/,
        type: 'asset/resource',
      },
      {
        test: /\.hbs$/,
        use: [
          'handlebars-loader'
        ]
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.[contenthash].css'
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.hbs',
      minify: {
        collapseWhitespace: false
      }
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
  },
};