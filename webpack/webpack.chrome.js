const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const paths = require('./paths')

const baseConfig = require('./webpack.base')

module.exports = merge(baseConfig, {
  devtool: false,
  output: {
    path: `${paths.build}/chrome`,
    filename: '[name].[contenthash].bundle.js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: `${paths.src}/chrome`,
          to: `${paths.build}/chrome`,
        },
      ],
    }),
  ],
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
})

// const webpack = require('webpack')
// const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const CopyPlugin = require('copy-webpack-plugin')

// const outputPath = path.resolve(__dirname, '../builds/chrome')

// const env = process.env.NODE_ENV
// const isProd = env === 'production'

// module.exports = {
//   mode: env,
//   devtool: 'source-map',
//   resolve: {
//     extensions: ['.js', '.jsx', '.ts', '.tsx'], // import without .ts or .tsx etc....
//   },
//   entry: {
//     index: path.join(__dirname, '../src/app/index.tsx'),
//   },
//   output: {
//     publicPath: '',
//     path: outputPath,
//     filename: isProd
//       ? '[name].[contenthash].bundle.js'
//       : '[name].[hash].bundle.js',
//   },
//   plugins: [
//     new webpack.DefinePlugin({
//       'process.env': {
//         NODE_ENV: JSON.stringify(process.env.NODE_ENV),
//         PLATFORM: JSON.stringify(process.env.PLATFORM),
//         VERSION: JSON.stringify(require('../package.json').version),
//       },
//     }),
//     new MiniCssExtractPlugin({
//       filename: '[name].[contenthash].css',
//       chunkFilename: '[name].[contenthash].css',
//     }),
//     new HtmlWebpackPlugin({
//       template: path.join(__dirname, '../src/index.html'),
//     }),
//     new CopyPlugin({
//       patterns: [
//         {
//           from: path.join(__dirname, '../src/chrome'),
//           to: outputPath,
//         },
//       ],
//     }),
//   ],

//   optimization: {
//     moduleIds: 'deterministic',
//     runtimeChunk: 'single',
//     splitChunks: {
//       cacheGroups: {
//         vendor: {
//           test: /[\\/]node_modules[\\/]/,
//           name: 'vendors',
//           chunks: 'all',
//         },
//       },
//     },
//   },
//   module: {
//     rules: [
//       {
//         test: /\.svg$/,
//         use: ['@svgr/webpack'],
//       },
//       {
//         test: /\.(css|scss)(\?.*)?$/,
//         // exclude: /node_modules/,
//         use: [
//           { loader: 'style-loader' }, // to inject the result into the DOM as a style block
//           { loader: 'css-modules-typescript-loader' }, // to generate a .d.ts module next to the .scss file (also requires a declaration.d.ts with "declare modules '*.scss';" in it to tell TypeScript that "import styles from './styles.scss';" means to load the module "./styles.scss.d.td")
//           { loader: 'css-loader', options: { modules: true } }, // to convert the resulting CSS to Javascript to be bundled (modules:true to rename CSS classes in output to cryptic identifiers, except if wrapped in a :global(...) pseudo class)
//           { loader: 'sass-loader' }, // to convert SASS to CSS
//         ],
//       },
//       {
//         test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2)(\?.*)?$/,
//         use: {
//           loader: 'file-loader',
//           options: {
//             name: '[path][name].[ext]',
//           },
//         },
//       },
//       {
//         test: /\.html$/,
//         use: [{ loader: 'html-loader' }],
//       },
//       {
//         test: /\.(js|jsx|ts|tsx)$/,
//         exclude: /(node_modules|bower_components|prod)/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: [
//               '@babel/preset-env',
//               '@babel/preset-react',
//               '@babel/preset-typescript',
//             ],
//             plugins: ['@babel/plugin-transform-runtime'],
//           },
//         },
//       },
//     ],
//   },
// }
