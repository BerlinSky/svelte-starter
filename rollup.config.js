import svelte from 'rollup-plugin-svelte';

export default {
  entry: 'src/main.js',
  format: 'iife',
  plugins: [
    svelte()
  ]
};
