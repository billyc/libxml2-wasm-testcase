<script lang="ts">
import { defineComponent } from 'vue';

import HelloWorld from './components/HelloWorld.vue';
import MyWorker from './LIBXML2WASMEventStreamer.worker?worker';

const MyComponent = defineComponent({
  name: 'MyComponent',
  components: { HelloWorld },

  data() {
    return {
      testMessage: 'Step 0. Starting up...',
    };
  },

  mounted() {
    let msg = 'Step 1.  App mounted';
    this.testMessage = msg;
    console.log(msg);

    const worker = new MyWorker() as Worker;
    worker.onmessage = (e: MessageEvent) => {
      msg = 'Step 4.  Received message! ' + JSON.stringify(e.data);
      this.testMessage = msg;
      console.log(msg);
    };

    worker.postMessage({});

    msg = 'Step 2.  Posted message to worker... should only see this briefly...';
    this.testMessage = msg;
    console.log(msg);
  },
});

export default MyComponent;
</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <h2>
    LibXml2 Status: <br />
    {{ testMessage }}
  </h2>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
h2 {
  color: orange;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
