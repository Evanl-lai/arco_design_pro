import { mergeConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import baseConig from './vite.config.base';

export default mergeConfig(
  {
    mode: 'development',
    server: {
      open: true,
      fs: {
        strict: false,
      },
    },
    define: {
      "process.env": {
        'VITE_API_URL': 'www.baidu.com22'
      }
    },
    plugins: [
      // eslint({
      //   cache: false,
      //   // include: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.vue'],
      //   exclude: ['node_modules'],
      // }),
    ],
  }, baseConig);
