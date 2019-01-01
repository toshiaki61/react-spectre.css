const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const path = require('path')
module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
      },
      {
        loader: require.resolve('react-docgen-typescript-loader'),
      },
    ],
  })
  config.resolve.extensions.push('.ts', '.tsx')
  config.resolve.plugins = [
    new TsconfigPathsPlugin({
      /* options: see below */
    }),
  ]
  // config.module.rules.push({
  //   test: /\.css?$/,
  //   use: ['style-loader', 'raw-loader'],
  //   include: path.resolve(__dirname, '../'),
  // })
  return config
}
