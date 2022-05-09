<template>
  <button
    type="button"
    :disabled="disabled"
    :class="[`base-button__${color}`]"
    @click="onClick"
  >
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
  methods: {
    onClick() {
      return this.$emit("click");
    },
  },
};
</script>
<style scoped>
.base-button__primary {
  background-color: #141e30;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 16px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.144),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.base-button__white {
  background-color: white;
  color: #141e30;
  border: none;
  border-radius: 4px;
  padding: 16px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.144),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.base-button__white:hover,
base-button__primary:hover {
  background-color: #345375e0;
  color: white;
}
</style>