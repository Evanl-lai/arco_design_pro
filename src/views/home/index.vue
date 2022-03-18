<template >
    <div class="container">
        <aside class="left_side">
            <a-card :style="{ height: '100%' }" :loading='loading' v-if="list?.list?.length > 0">
                <template #title>
                    <h1>{{list.list[0].title}}</h1>
                </template>
                <div>{{list.list[0].text}}</div>
                <br />
                <Child />
                <div>父组件事件</div>
                <button @click="addCount">+</button>
                <button @click="home.decrease()">-</button>
                <div>父组件数据:{{count.count}}</div>
            </a-card>
            <a-spin :style="{margin:'auto'}" v-else />

        </aside>
        <aside class="right_side">
            <a-list>
                <template #header>
                    全部公告
                </template>

                <a-list-item v-for="item in list.list" :key="item.id">
                    <a href="#">{{item.title}}</a>
                </a-list-item>

            </a-list>
        </aside>
    </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getHomeNotice } from '@/api/home';
import useRequest from '@/hooks/request';
import { useHomeStore, useCountStore } from '@/store';
import Child from './components/child.vue';

export default defineComponent({
  components: {
    Child,
  },
  setup() {
    const home = useHomeStore();
    const count = useCountStore();
    const { loading, response: list } = useRequest<any[]>(getHomeNotice);
    console.log(home);
    const addCount = () => {
      home.count += 1;
      // home.$patch({ count: (home.count += 2) });
    };
    return { loading, list, home, addCount, count };
  },
});
</script>

<style lang='less' scoped>
.container {
  padding: 20px;
  display: flex;
  height: 100%;
  .left_side {
    flex: 1;
  }
  .right_side {
    background: var(--color-bg-2);
    width: 400px;
    margin-left: 16px;
  }
}
</style>