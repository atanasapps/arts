<template>
  <div>
    <Lightbox v-if="modal" :image="image" @close="modal = !modal" />
    <div @click="viewImage" class="container">
      <img :srcset="image.src.srcSet" class="container__img" />
      <div class="container__info">
        <h4>{{ image.title }}</h4>
        <q>{{ image.description }}</q>
      </div>
    </div>
  </div>
</template>
<script>
import Lightbox from "@/components/shared/Lightbox.vue";

export default {
  name: "ImageItem",
  props: { image: { type: Object, required: true } },
  components: { Lightbox },
  data() {
    return {
      modal: false,
    };
  },
  methods: {
    viewImage() {
      this.modal = !this.modal;
    },
  },
};
</script>
<style scoped>
.container {
  position: relative;
  cursor: pointer;
}

.container__img {
  margin-top: 4px;
  max-width: 100%;
  height: auto;
}

.container__info {
  position: absolute;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  opacity: 0;
  color: white;
  font-size: 14px;
  font-style: italic;
  padding: 20px;
  text-align: center;
  cursor: pointer;
}

.container__img:hover {
  filter: grayscale(100%);
}

.container:hover .container__info {
  opacity: 1;
}
</style>