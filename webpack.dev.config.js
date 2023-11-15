const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.[contenthash].js',

    publicPath: ''
  },
  mode: 'development',

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
        loader: "html-loader",
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpg)$/,
        type: 'asset'
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    })
  ],
  optimization: {
   splitChunks: {
    chunks: 'all'
   },
  },
};