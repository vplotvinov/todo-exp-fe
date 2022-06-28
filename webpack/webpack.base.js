const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

const paths = require('./paths')

const env = process.env.NODE_ENV

// https://github.com/harryheman/Webpack5-Max/blob/main/config/webpack/common.js
https: module.exports = {
  mode: env,
  entry: {
    main: `${paths.src}/app/index.tsx`,
  },
  output: {
    path: `${paths.build}`,
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'], // import without .ts or .tsx etc....
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: `${paths.src}/index.html`,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        PLATFORM: JSON.stringify(process.env.PLATFORM),
        VERSION: JSON.stringify(require('../package.json').version),
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(css|scss)(\?.*)?$/,
        use: [
          { loader: 'style-loader' }, // to inject the result into the DOM as a style block
          { loader: 'css-modules-typescript-loader' }, // to generate a .d.ts module next to the .scss file (also requires a declaration.d.ts with "declare modules '*.scss';" in it to tell TypeScript that "import styles from './styles.scss';" means to load the module "./styles.scss.d.td")
          { loader: 'css-loader', options: { modules: true } }, // to convert the resulting CSS to Javascript to be bundled (modules:true to rename CSS classes in output to cryptic identifiers, except if wrapped in a :global(...) pseudo class)
          { loader: 'sass-loader' }, // to convert SASS to CSS
        ],
      },

      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
    ],
  },
}
