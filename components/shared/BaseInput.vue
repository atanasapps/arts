<template>
  <div>
    <label for="baseInput">{{ label }}</label>
    <input
      id="baseInput"
      :value="value"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :readonly="readonly"
      :required="required"
      :disabled="disabled"
      @input="onInput"
    />
    <div v-if="count" class="count-input">{{ `${countValue} / ${maxlength}` }}</div>
  </div>
</template>
<script>
export default {
  name: "BaseInput",
  props: {
    value: { type: String, default: "" },
    label: { type: String, default: "" },
    type: { type: String, default: "text" },
    pattern: { type: String, default: "" },
    placeholder: { type: String, default: "Your text..." },
    maxlength: { type: Number, default: 50 },
    readonly: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    count: { type: Boolean, default: false },
  },
  data() {
    return {
      countValue: 0,
    };
  },
  computed: {
    name() {
      return this.label.toLowerCase();
    },
  },
  methods: {
    onInput(e) {
      this.countValue = e.target.value.length;
      return this.$emit("input", e.target.value);
    },
  },
};
</script>
<style scoped>
input {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #141e30;
  color: #141e30;
  border-radius: 4px;
  box-sizing: border-box;
}

input:focus {
  border: 2px solid #141e30;
}

input[type="submit"] {
  width: 100%;
  background-color: #141e30;
  color: white;
  padding: 12px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #141e30d3;
}
</style>