// const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const path = require('path')

module.exports = ({config}) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('ts-loader'),
        // options: {
        //   configFile: path.resolve(__dirname, '../', 'tsconfig.json'),
        // },
      },
      // Optional
      {
        loader: require.resolve('react-docgen-typescript-loader'),
      },
    ],
  })
  config.resolve.extensions.push('.ts', '.tsx')

  // rewireCustomEslintSettings
  config.module.rules.forEach(rule => {
    if (!rule.use) {
      return
    }
    rule.use.forEach(u => {
      if (!u.options || !u.options.eslintPath) {
        return
      }
      u.options.useEslintrc = true
    })
  })
  return config
}
