<template>
  <nav class="sidenav">
    <div class="sidenav__content">
      <nuxt-link to="/#images" @click.native="toggle">MY IMAGES </nuxt-link>
      <nuxt-link to="/#about" @click.native="toggle"> ABOUT ME </nuxt-link>
      <nuxt-link to="/#skills" @click.native="toggle"> MY SKILLS </nuxt-link>
      <nuxt-link to="/#contact" @click.native="toggle"> CONTACT </nuxt-link>
      <a class="sidenav__close" @click.native="toggle"> CLOSE </a>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Sidenav",
  methods: {
    toggle() {
      this.$emit("toggle");
    },
  },
};
</script>
<style scoped>
.sidenav {
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: rgba(17, 17, 17, 0.94);
  overflow-x: hidden;
  padding-top: 20px;
  text-align: center;
  transition: 0.5s;
}

.sidenav__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: inherit;
}

.sidenav__content a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 18px;
  color: #818181;
  display: block;
  cursor: pointer;
}

.sidenav__content a:hover {
  color: #f1f1f1;
}

.sidenav__close {
  padding-top: 20px;
}
</style>