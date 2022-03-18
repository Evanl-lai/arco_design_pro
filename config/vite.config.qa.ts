import { mergeConfig, loadEnv } from 'vite';
import baseConig from './vite.config.base';


export default mergeConfig({
    mode: 'qa',
    define: {
        "process.env": {
            'VITE_API_URL': 'www.baidu.com11'
        }
    },
}, baseConig);
