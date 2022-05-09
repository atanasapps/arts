<template>
  <div>
    <Header />
    <Nuxt />
  </div>
</template>
<script>
import Header from "../components/nav/Header.vue";
import "@/assets/css/index.css";

export default {
  components: { Header },
};
</script>
