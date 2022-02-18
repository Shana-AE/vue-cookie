import { defineConfig } from 'rollup';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default defineConfig({
  input: 'src/vue-cookie.js',
  output: {
    file: 'build/vue-cookie.js',
    format: 'esm',
  },
  plugins: [
    commonjs(),
    nodeResolve(),
    terser(),
  ],
});
