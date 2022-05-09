<template>
  <div class="modal">
    <div class="modal-actions">
      <button class="modal-actions__btn" :disabled="isMin" @click="zoomOut">
        &#9866;
      </button>
      <button class="modal-actions__btn" :disabled="isMax" @click="zoomIn">
        &#10011;
      </button>
      <button class="modal-actions__btn" :disabled="isMin" @click="resetZoom">
        &#9744;
      </button>
      <button class="modal-actions__btn" @click="close">&#10005;</button>
    </div>
    <div class="modal-content">
      <img
        class="modal-content__img"
        :srcset="image.src.srcSet"
        :style="imageStyle"
        @dblclick="maxZoom"
      />
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
<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  background-color: black;
  overflow: auto;
  width: 100%;
  height: 100%;
  z-index: 2;
}

.modal-actions {
  position: fixed;
  bottom: 3%;
  right: 40%;
  left: 40%;
  background-color: #243b55c7;
  border: 2px solid #243b55;
  border-radius: 10px;
  display: flex;
  justify-content: center;
}

@media screen and (max-width: 900px) {
  .modal-actions {
    right: 35%;
    left: 35%;
  }
}

@media screen and (max-width: 600px) {
  .modal-actions {
    right: 20%;
    left: 20%;
  }
}

.modal-actions__btn {
  border-color: transparent;
  border-radius: 50%;
  background-color: transparent;
  font-size: 18px;
  color: whitesmoke;
  padding: 6px 12px;
  cursor: pointer;
}

.modal-actions__btn:hover {
  color: white;
  font-weight: bolder;
}

.modal-actions__btn:disabled {
  color: rgb(126, 124, 124);
}

.modal-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 10px;
  margin: auto;
}

.modal-content__img {
  margin: auto;
  display: block;
}
</style>