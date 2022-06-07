<template>
  <div class="lightbox">
    <div class="lightbox-content">
      <img :srcset="image.src.srcSet" :style="imageStyle" @dblclick="maxZoom" />
    </div>
    <div class="lightbox-actions">
      <button class="lightbox-actions__btn" :disabled="isMin" @click="zoomOut">
        &#9866;
      </button>
      <button class="lightbox-actions__btn" :disabled="isMax" @click="zoomIn">
        &#10011;
      </button>
      <button
        class="lightbox-actions__btn"
        :disabled="isMin"
        @click="resetZoom"
      >
        &#9744;
      </button>
      <button class="lightbox-actions__btn" @click="close">&#10005;</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Lightbox",
  props: { image: { type: Object, required: true } },
  data() {
    return {
      step: 20,
      min: 80,
      max: 200,
      percentage: 0,
    };
  },
  computed: {
    imageStyle() {
      return {
        width: this.isLansdcape ? `${this.percentage}%` : "auto",
        height: this.isLansdcape ? "auto" : `${this.percentage}%`,
      };
    },
    isLansdcape() {
      return this.image.src.width > this.image.src.height;
    },
    isMin() {
      return this.percentage <= this.min;
    },
    isMax() {
      return this.percentage >= this.max;
    },
  },
  created() {
    this.resetZoom();
  },
  methods: {
    close() {
      this.$emit("close");
    },
    zoomIn() {
      if (this.isMax) return;
      this.percentage += this.step;
    },
    zoomOut() {
      if (this.isMin) return;
      this.percentage -= this.step;
    },
    resetZoom() {
      this.percentage = this.min;
    },
    maxZoom() {
      if (this.isMin) return (this.percentage = this.max);
      this.percentage = this.min;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~/assets/scss/variables.scss";

.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.927);
  overflow: auto;
  width: 100%;
  height: 100%;
  z-index: 2;

  .lightbox-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin: auto;

    img {
      margin: auto;
      display: block;
    }
  }

  .lightbox-actions {
    position: fixed;
    bottom: 3%;
    right: 40%;
    left: 40%;
    background-color: $secondary-color;
    border: 2px solid $secondary-color;
    border-radius: 10px;
    display: flex;
    justify-content: center;
  }

  .lightbox-actions__btn {
    border-color: transparent;
    border-radius: $round;
    background-color: transparent;
    font-size: 18px;
    color: whitesmoke;
    padding: 6px 12px;
    cursor: pointer;

    &:hover {
      color: white;
      font-weight: bolder;
    }

    &:disabled {
      color: rgb(126, 124, 124);
    }
  }

  @media screen and (max-width: 992px) {
    .lightbox-actions {
      right: 35%;
      left: 35%;
    }
  }

  @media screen and (max-width: 768px) {
    .lightbox-actions {
      right: 25%;
      left: 25%;
    }
  }
}
</style>