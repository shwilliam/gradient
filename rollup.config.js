import babel from '@rollup/plugin-babel'
import run from '@rollup/plugin-run'
import copy from 'rollup-plugin-copy'

const dev = process.env.NODE_ENV === 'development'

export default {
  input: 'src/index.js',
  output: {
    dir: 'build',
    format: 'cjs',
  },
  plugins: [
    babel(),
    copy({
      targets: [
        {
          src: 'src/public/**',
          dest: 'build/public',
        },
      ],
    }),
    dev &&
      run({
        execArgv: ['-r', 'dotenv/config'],
      }),
  ],
}
