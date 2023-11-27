const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const ImageminWebpWebpackPlugin= require("imagemin-webp-webpack-plugin");
const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'script.[contenthash].js',

    publicPath: ''
  },
  mode: 'production',
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
    new CopyPlugin({
      patterns: [
        {
          from: "./shared", to: "./shared"
        }
      ],
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.[contenthash].css'
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.hbs',
      minify: {
        collapseWhitespace: false,
        removeComments: false,
      }
    }),
    new CssMinimizerPlugin(),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(), // Minify CSS
      new TerserPlugin(),
      new ImageminWebpWebpackPlugin({
        config: [{
          test: /\.(jpe?g|png|svg)/,
          options: {
            quality: 100
          }
        }],
        overrideExtension: false,
        detailedLogs: true,
        silent: true,
        strict: true
      })
    ],
    splitChunks: {
      chunks: 'all',
      minSize: 3000, // Minimum size, in bytes, for a chunk to be generated.
      maxSize: 200000
    },
  },
};