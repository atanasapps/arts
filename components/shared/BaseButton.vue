<template>
  <button type="button" :disabled="disabled" :class="classes" @click="onClick">
    <slot>Button</slot>
  </button>
</template>
<script>
export default {
  name: "BaseButton",
  props: {
    color: {
      type: String,
      default: "primary",
      validator(value) {
        return ["primary", "white"].includes(value);
      },
    },
    disabled: { type: Boolean, default: false },
  },
  computed: {
    classes() {
      return {
        btn: true,
        [this.color]: true,
      };
    },
  },
  methods: {
    onClick() {
      return this.$emit("click");
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~/assets/scss/variables.scss";

button {
  border: none;
  border-radius: $round;
  padding: 16px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.144),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.primary {
  background-color: $primary-color;
  color: white;

  &:hover {
    background-color: $secondary-color;
    color: white;
  }
}

.white {
  background-color: white;
  color: $primary-color;

  &:hover {
    background-color: $primary-color;
    color: white;
  }
}
</style>