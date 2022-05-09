<template>
  <div class="progress">
    <h5 class="primary--text">{{ label }}</h5>
    <div class="progress_box">
      <div class="primary" :style="progressStyle">{{ width }}</div>
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
<style scoped>
.progress {
  overflow: hidden;
  position: relative;
  padding: 10px 0;
}
.progress_box {
  width: 100%;
  height: 30px;
  border-radius: 5px;
  border: 1px solid rgb(71, 70, 70);
}

.progress_box div {
  height: 100%;
  text-align: center;
}
</style>