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
<style scoped>
.title {
  color: #141e30;
  padding: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
}

.title h3 {
  border-bottom: 2px solid #141e30;
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
</style>