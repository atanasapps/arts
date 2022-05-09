<template>
  <div>
    <header>
      <h4>LOGO</h4>
      <a @click="toggle"> ☰ </a>
    </header>
    <Sidenav v-if="isOpen" @toggle="toggle" />
  </div>
</template>
<script>
import Sidenav from "./Sidenav.vue";

export default {
  name: "Header",
  components: { Sidenav },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 15px;
}

header a {
  font-size: 20px;
  cursor: pointer;
  color: #141e30;
}
</style>