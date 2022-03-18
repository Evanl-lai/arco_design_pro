import { defineStore } from 'pinia';
import { ref } from 'vue';

const useCountStore = defineStore('count', () => {
    const count = ref(0);
    function del() {
        count.value -= 1
    }
    function add() {
        count.value ++
    }
    return { count, del, add }
})

export default useCountStore;