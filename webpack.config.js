const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const nodeEnv = process.env.NODE_ENV || 'development';
const isProduction = nodeEnv === 'production';

const jsSourcePath = path.join(__dirname, './src');
const buildPath = path.join(__dirname, './public');
// const sourcePath = path.join(__dirname, './src');


// the path(s) that should be cleaned
const pathsToClean = [
  'public',
];

// the clean options to use
const cleanOptions = {
  root: '/full/webpack/root/path',
  exclude: ['shared.js'],
  verbose: true,
  dry: false,
};

// Common plugins
const plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(nodeEnv),
    },
  }),
  new webpack.ProvidePlugin({
    'window._': 'lodash',
    _         : 'lodash',
  }),
  new webpack.NamedModulesPlugin(),
];

// Common rules
const rules = [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: [
      'babel-loader',
    ],
  },
  {
    test: /\.css/,
    exclude: /(node_modules)/,
    use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
        options: {
          modules: true,
        },
      },
    ],
  },
  {
    test: /\.(png|gif|jpe?g)(\?[a-z0-9=.]+)?$/,
    use: 'file-loader',
  },
  {
    test: /\.svg$/,
    loader: 'svg-inline-loader?classPrefix',
  },
  {
    test: /\.(woff|woff2|eot|ttf|otf)$/,
    use: {
      loader: 'url-loader',
      options: {
        limit: 100000,
      },
    },
  },

];

if (isProduction) {
  // Production plugins
  plugins.push(
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      },
      output: {
        comments: false,
      },
    }),
  );

  // Production rules
  // rules.push(
  //   {
  //     test: /\.scss$/,
  //     loader: ExtractTextPlugin.extract({
  //       fallback: 'style-loader',
  //       use: 'css-loader!postcss-loader!sass-loader',
  //     })
  //   }
  // );
} else {
  // Development plugins
  plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(pathsToClean, cleanOptions),
  );

  // Development rules
  rules.push(
    {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader',
        'sass-loader?sourceMap',
      ],
    },
  );
}

module.exports = {
  devtool: isProduction ? 'eval' : 'source-map',
  context: jsSourcePath,
  entry: {
    js: './app.js',
  },
  output: {
    path: buildPath,
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    rules,
  },
  resolve: {
    extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      jsSourcePath,
    ],
  },
  plugins,
  devServer: {
    contentBase: isProduction ? './public' : './public',
    port: 3000,
    compress: isProduction,
    inline: !isProduction,
    hot: !isProduction,
    host: '0.0.0.0',
    historyApiFallback: true,
    stats: {
      assets: true,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: false,
      timings: true,
      version: false,
      warnings: true,
      colors: {
        green: '\u001b[32m',
      },
    },
  },
};
