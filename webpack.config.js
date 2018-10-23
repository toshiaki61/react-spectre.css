const path = require('path')

module.exports = (env, argv) => ({
  entry: path.join(__dirname, 'src', 'index.ts'),
  output: {
    libraryTarget: 'commonjs',
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  externals: {
    'aws-sdk': true,
    rxjs: true,
  },
  target: 'node',
  mode: argv.mode || 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
})
