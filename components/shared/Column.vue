<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "Column",
  props: {
    quarter_xs: { type: Boolean, default: false },
    third_xs: { type: Boolean, default: false },
    half_xs: { type: Boolean, default: false },
    twothird_xs: { type: Boolean, default: false },
    threequarter_xs: { type: Boolean, default: false },
    twohalf_xs: { type: Boolean, default: false },
    quarter_sm: { type: Boolean, default: false },
    third_sm: { type: Boolean, default: false },
    half_sm: { type: Boolean, default: false },
    twothird_sm: { type: Boolean, default: false },
    threequarter_sm: { type: Boolean, default: false },
    twohalf_sm: { type: Boolean, default: false },
    quarter_md: { type: Boolean, default: false },
    third_md: { type: Boolean, default: false },
    half_md: { type: Boolean, default: false },
    twothird_md: { type: Boolean, default: false },
    threequarter_md: { type: Boolean, default: false },
    twohalf_md: { type: Boolean, default: false },
    quarter_lg: { type: Boolean, default: false },
    third_lg: { type: Boolean, default: false },
    half_lg: { type: Boolean, default: false },
    twothird_lg: { type: Boolean, default: false },
    threequarter_lg: { type: Boolean, default: false },
    twohalf_lg: { type: Boolean, default: false },
  },
  computed: {
    classes() {
      return Object.entries(this.$props).map(([name, value]) => {
        return { [name]: value };
      });
    },
  },
};
</script>
<style scoped>
@media only screen and (max-width: 600px) {
  .quarter_xs {
    width: 24.99%;
  }

  .third_xs {
    width: 33.33%;
  }

  .half_xs {
    width: 50%;
  }

  .twothird_xs {
    width: 66.33%;
  }

  .threequarter_xs {
    width: 74.99%;
  }

  .twohalf_xs {
    width: 100%;
  }
}

@media only screen and (min-width: 600px) {
  .quarter_sm {
    width: 24.99%;
  }

  .third_sm {
    width: 33.33%;
  }

  .half_sm {
    width: 50%;
  }

  .twothird_sm {
    width: 66.33%;
  }

  .threequarter_sm {
    width: 74.99%;
  }

  .twohalf_sm {
    width: 100%;
  }
}

@media only screen and (min-width: 768px) {
  .quarter_md {
    width: 24.99%;
  }

  .third_md {
    width: 33.33%;
  }

  .half_md {
    width: 50%;
  }

  .twothird_md {
    width: 66.33%;
  }

  .threequarter_md {
    width: 74.99%;
  }

  .twohalf_md {
    width: 100%;
  }
}

@media only screen and (min-width: 992px) {
  .quarter_lg {
    width: 24.99%;
  }

  .third_lg {
    width: 33.33%;
  }

  .half_lg {
    width: 50%;
  }

  .twothird_lg {
    width: 66.33%;
  }

  .threequarter_lg {
    width: 74.99%;
  }

  .twohalf_lg {
    width: 100%;
  }
}
</style>