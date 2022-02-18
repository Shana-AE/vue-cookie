import { defineConfig } from 'rollup';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default defineConfig({
  input: 'test/spec/vue-cookie-spec.js',
  output: {
    file: 'test/bundle.js',
    format: 'es',
  },
  plugins: [
    commonjs(),
    nodeResolve(),
    terser(),
  ],
});