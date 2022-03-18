import { defineStore } from "pinia";

const useHomeStore = defineStore('home', {
    state: (): any => ({
        count: 0
    }),
    getters: {
        getData(state) {
            return { ...state }
        }
    },
    actions: {
        add() {
            this.count += 1
        },
        decrease() {
            this.count -= 1
        }
    }
})

export default useHomeStore;