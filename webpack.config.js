const glob = require('glob')
const path = require('path')

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const configFile = `${__dirname}/tsconfig.build.json`

function getEntries(patterns) {
  const entries = {}
  patterns.forEach(pattern => {
    glob.sync(pattern).forEach(file => {
      entries[file.replace('src/', '')] = path.join(__dirname, file)
    })
  })

  return entries
}

module.exports = {
  entry: `${__dirname}/src/index.ts`, // getEntries(['src/**/*.ts', 'src/**/*.tsx']),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'reactSpectre',
    libraryTarget: 'umd',
  },
  externals: {
    'date-fns': true,
    react: true,
    'react-dom': true,
    'storybook-chromatic': true,
  },
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile,
      }),
    ],
  },
}
