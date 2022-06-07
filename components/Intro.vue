<template>
  <div class="intro">
    <h1>Hi, My name is Jhon</h1>
    <div>and I am .............</div>
  </div>
</template>
<style lang="scss" scoped>
@import "~/assets/scss/variables.scss";
.intro {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: white;
  background: $primary-color; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    $secondary-color,
    $primary-color
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    $secondary-color,
    $primary-color
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>