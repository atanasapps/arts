<template>
  <div v-show="show" class="scroll-top">
    <BaseButton color="white" @click="scrollTop"> Up </BaseButton>
  </div>
</template>
<script>
export default {
  name: "ScrollTop",
  data() {
    return {
      show: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      this.show = window.scrollY > 400;
    },
    scrollTop() {
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>
<style scoped>
.scroll-top {
  position: fixed;
  bottom: 2%;
  right: 2%;
}
</style>