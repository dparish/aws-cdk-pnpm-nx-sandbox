import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  target: 'es2020',
  format: ['esm', 'cjs'],
  // TODO: Not sure I like this might switch to vite
  noExternal: ['@middy'],
  splitting: false,
  sourcemap: false,
  clean: true,
  dts: true
});
