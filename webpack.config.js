var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

var isProd = process.env.NODE_ENV === 'production'

var title = "Vladimir Kondenko / Designer + Developer"
var htmlTemplate = "./src/index.html"

var resLoader = {
  loader: 'sass-resources-loader',
  options: {
    resources: "src/res/stylesheet.scss"
  }
}

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader',
          resLoader
        ]
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader?indentedSyntax',
          resLoader
        ],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'name=img/[path][name].[ext]?[hash]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: "file-loader"
      },
      {
        test: /\.(pdf)$/,
        loader: "file-loader"
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': [
              'vue-style-loader',
              'css-loader',
              'sass-loader',
              resLoader
            ],
            'sass': [
              'vue-style-loader',
              'css-loader',
              'sass-loader?indentedSyntax',
              resLoader
            ]
          },
          transformToRequire: {
            image: 'xlink:href'
          }
        }
      },
      {
        test: /\.s[a|c]ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
      assets: path.resolve(__dirname, 'src/assets'),
      ic: path.resolve(__dirname, 'src/assets/icons'),
      ui: path.resolve(__dirname, 'src/components/ui/'),
      mixins: path.resolve(__dirname, 'src/mixins/'),
      res: path.resolve(__dirname, 'src/res/'),
      vtabs: path.resolve(__dirname, 'node-modules/vue-nav-tabs'),
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json', ".scss"]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: title,
      template: htmlTemplate,
      filename: './index.html' //relative to root of the application
    }),
    new VueLoaderPlugin()
  ],
  devtool: '#eval-source-map',
}

if (isProd) {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new HtmlWebpackPlugin({
      hash: true,
      title: title,
      template: htmlTemplate,
      filename: './dist/index.html' //relative to root of the application
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
