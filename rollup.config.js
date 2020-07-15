import run from '@rollup/plugin-run'
import babel from '@rollup/plugin-babel'

const dev = process.env.NODE_ENV === 'development'

export default {
  input: 'src/index.js',
  output: {
    dir: 'build',
    format: 'cjs',
  },
  plugins: [
    babel(),
    dev &&
      run({
        execArgv: ['-r', 'dotenv/config'],
      }),
  ],
}
