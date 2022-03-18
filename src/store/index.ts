import { createPinia } from 'pinia';
import useAppStore from './modules/app';
import useUserStore from './modules/user';
import useHomeStore from './modules/home';
import useCountStore from './modules/home/index1';

const pinia = createPinia();

export { useAppStore, useUserStore, useHomeStore, useCountStore };
export default pinia;
