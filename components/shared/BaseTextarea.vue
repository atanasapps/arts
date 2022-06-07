<template>
  <div>
    <label for="baseInput">{{ label }}</label>
    <textarea
      id="baseInput"
      :value="value"
      type="text"
      :name="name"
      :placeholder="placeholder"
      :rows="rows"
      :maxlength="maxlength"
      :readonly="readonly"
      :required="required"
      :disabled="disabled"
      @input="onInput"
    />
    <div v-if="count" class="count">
      {{ `${countValue} / ${maxlength}` }}
    </div>
  </div>
</template>
<script>
export default {
  name: "BaseTextarea",
  props: {
    value: { type: String, default: "" },
    label: { type: String, default: "" },
    type: { type: String, default: "text" },
    pattern: { type: String, default: "" },
    placeholder: { type: String, default: "Your text..." },
    rows: { type: Number, default: 3 },
    maxlength: { type: Number, default: 300 },
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
<style lang="scss" scoped>
@import "~/assets/scss/variables.scss";

textarea {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid $primary-color;
  color: $primary-color;
  border-radius: $round;
  box-sizing: border-box;

  &:focus {
    border: 2px solid $primary-color;
  }
}
</style>