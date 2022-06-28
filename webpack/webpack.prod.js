const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // extract css to files

const baseConfig = require('./webpack.base')

module.exports = merge(baseConfig, {
  devtool: false,
  output: {
    filename: '[name].[contenthash].bundle.js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
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

// module.exports = {
//   performance: {
//     hints: false,
//   },

//   output: {
//     publicPath: '',
//     path: path.join(__dirname, 'dist'),
//     filename: isProd
//       ? '[name].[contenthash].bundle.js'
//       : '[name].[hash].bundle.js',
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
