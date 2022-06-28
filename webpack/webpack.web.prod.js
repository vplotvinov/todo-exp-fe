// const webpack = require('webpack')
// const path = require('path') // resolve path
// const HtmlWebpackPlugin = require('html-webpack-plugin') // create file.html
// const MiniCssExtractPlugin = require('mini-css-extract-plugin') // extract css to files
// const TerserPlugin = require('terser-webpack-plugin') // minify js
// const CopyPlugin = require('copy-webpack-plugin')

// const outputPath = path.resolve(__dirname, '../builds/web-prod')
// const outputAssetsPath = path.resolve(__dirname, '../builds/web-prod/assets')

// const env = process.env.NODE_ENV
// const isProd = env === 'production'

// module.exports = {
//   mode: 'production',
//   resolve: {
//     extensions: ['.js', '.jsx', '.ts', '.tsx'], // import without .ts or .tsx etc....
//   },
//   entry: {
//     index: path.join(__dirname, '../src/app/index.tsx'),
//   },
//   output: {
//     publicPath: '',
//     path: outputPath,
//     filename: '[name].[contenthash].bundle.js', // for production use [contenthash], for developement use [hash]
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
//           from: path.join(__dirname, '../src/app/assets/images'),
//           to: outputAssetsPath,
//         },
//       ],
//     }),
//   ],

//   optimization: {
//     minimizer: [new TerserPlugin()],

//     moduleIds: 'deterministic',
//     runtimeChunk: 'single', // share same code bewteen js files
//     splitChunks: {
//       name: 'runtime',
//       chunks: 'all',
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
