<template>
  <div class="progress">
    <h5 class="progress__label">{{ label }}</h5>
    <div class="progress__box">
      <div :style="progressStyle">{{ width }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Progress",
  props: {
    label: { type: String, required: true },
    percentage: { type: Number, default: 20 },
  },
  data() {
    return {
      count: 0,
    };
  },
  created() {
    while (this.count < this.percentage) {
      this.count++;
    }
  },
  computed: {
    width() {
      return `${this.count}%`;
    },
    progressStyle() {
      return { width: this.width };
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~/assets/scss/variables.scss";

.progress {
  overflow: hidden;
  position: relative;
  padding: 10px 0;

  .progress__label {
    color: $primary-color;
  }

  .progress__box {
    width: 100%;
    height: 30px;
    border: 1px solid $primary-color;
    border-radius: $round;

    div {
      height: 100%;
      text-align: center;
      background-color: $primary-color;
      color: white;
    }
  }
}
</style>