const webpack = require('webpack')
const { merge } = require('webpack-merge')
// const path = require('path') // resolve path
// const HtmlWebpackPlugin = require('html-webpack-plugin') // create file.html
// const MiniCssExtractPlugin = require('mini-css-extract-plugin') // extract css to files

// const env = process.env.NODE_ENV
// const isProd = env === 'production'
const baseConfig = require('./webpack.base')

module.exports = merge(baseConfig, {
  devtool: 'eval-cheap-source-map',
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  devServer: {
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,
    https: false,
    port: 3020,
    allowedHosts: ['local.app.surftodo.one'],
    host: '127.0.0.1',
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
})

// module.exports = {
//   mode: env,
//   // devtool: 'eval-cheap-source-map',
//   devtool: 'source-map',

//   performance: {
//     hints: false,
//   },
//   resolve: {
//     extensions: ['.js', '.jsx', '.ts', '.tsx'], // import without .ts or .tsx etc....
//   },
//   entry: {
//     index: path.join(__dirname, '../src/app/index.tsx'),
//   },
//   output: {
//     publicPath: '',
//     path: path.join(__dirname, 'dist'),
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
//       chunkFilename: '[id].[contenthash].css',
//     }),
//     new HtmlWebpackPlugin({
//       template: path.join(__dirname, '../src/index.html'),
//     }),
//   ],

//   optimization: {
//     // minimizer: [new TerserPlugin(), new OptimizeCssAssetsPlugin({})],

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
//         test: /\.png/,
//         type: 'asset/resource',
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
//         test: /\.(ico|jpg|jpeg|gif|eot|otf|webp|ttf|woff|woff2)(\?.*)?$/,
//         use: {
//           loader: 'file-loader',
//           options: {
//             name: '[path][name].[ext]',
//           },
//         },
//       },
//       // {
//       //   test: /\.(png|jpe?g|gif|svg|ttf|woff|otf)$/,
//       //   use: [
//       //     {
//       //       loader: 'url-loader',
//       //       options: {
//       //         name: '[name].[contenthash].[ext]',
//       //         outputPath: 'static/img',
//       //         esModule: false, // <- here
//       //       },
//       //     },
//       //   ],
//       // },
//       {
//         test: /\.html$/,
//         use: [{ loader: 'html-loader' }],
//       },
//       // { test: /\.(woff|woff2|eot|ttf)$/, loader: 'url-loader?limit=100000' },
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
