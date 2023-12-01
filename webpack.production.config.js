const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlCriticalWebpackPlugin = require("html-critical-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const ImageminWebpWebpackPlugin= require("imagemin-webp-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: './shared/js/script.[contenthash].js',

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
            url: false,
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
      filename: './shared/css/styles.[contenthash].css',
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
    new HtmlCriticalWebpackPlugin({
      base: path.resolve(__dirname, './dist'),
      src: 'index.html',
      dest: 'index.html',
      inline: true,
      minify: true,
      extract: true,
      width: 375,
      height: 565,
      penthouse: {
        blockJSRequests: false,
      }
    })
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
      }),
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.sharpMinify,
          options: {
            encodeOptions: {
              jpeg: {
                // https://sharp.pixelplumbing.com/api-output#jpeg
                quality: 100,
              },
              webp: {
                // https://sharp.pixelplumbing.com/api-output#webp
                lossless: true,
              },
              avif: {
                // https://sharp.pixelplumbing.com/api-output#avif
                lossless: true,
              },

              // png by default sets the quality to 100%, which is same as lossless
              // https://sharp.pixelplumbing.com/api-output#png
              png: {},

              // gif does not support lossless compression at all
              // https://sharp.pixelplumbing.com/api-output#gif
              gif: {},
            },
          },
        },
      }),
    ],
    splitChunks: {
      chunks: 'async',
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
};