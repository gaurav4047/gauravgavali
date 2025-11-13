const { defineConfig } = require('vite');
const { resolve } = require('path');

module.exports = defineConfig({
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'portfolio.html'),
      },
    },
  },
  server: {
    open: '/portfolio.html',
  },
});
