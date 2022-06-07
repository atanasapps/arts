<template>
  <div class="title">
    <h3>{{ title }}</h3>
  </div>
</template>
<script>
export default {
  name: "Title",
  props: {
    title: { type: String, require: true },
  },
};
</script>
<style lang="scss" scoped>
@import "~/assets/scss/variables.scss";

.title {
  color: $primary-color;
  padding: $padding-20 0px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;

  h3 {
    border-bottom: 2px solid $primary-color;
    width: 20%;
    text-align: center;
  }

  @media only screen and (max-width: 900px) {
    .title h3 {
      width: 60%;
    }
  }

  @media only screen and (max-width: 600px) {
    .title h3 {
      width: 80%;
    }
  }
}
</style>