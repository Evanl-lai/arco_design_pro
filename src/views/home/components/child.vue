<template>
    <div>
        子组件pinia数据:{{home.count}}
    </div>
    <div>
        子组件操作
    </div>
    <button @click="count.add()">+</button>
    <button @click="count.del()">-</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useHomeStore, useCountStore } from '@/store';

export default defineComponent({
  setup() {
    const home = useHomeStore();
    const count = useCountStore();
    return { home, count };
  },
});
</script>

<style lang="less" scoped>
</style>