const babel = require('rollup-plugin-babel');
const commonjs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');
const replace = require('rollup-plugin-replace');

const env = 'production';

process.env.NODE_ENV = env;
process.env.BABEL_ENV = env;

export default {
  dest: 'dist/react-spectre.css.js',
  entry: 'src/index.js',
  format: 'iife',
  moduleName: 'react-spectre.css',
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify(env)
    }),
    resolve({
      jsnext: true,
      extensions: [ '.js', '.jsx', '.json' ]
    }),
    commonjs(),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    })
  ]
}
