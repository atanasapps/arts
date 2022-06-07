<template>
  <div>
    <Lightbox v-if="modal" :image="image" @close="modal = !modal" />
    <div @click="viewImage" class="container">
      <img :srcset="image.src.srcSet" class="container__img" />
      <div class="container__info">
        <div>
          <h4>{{ image.title }}</h4>
          <q>{{ image.description }}</q>
        </div>
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
<style lang="scss" scoped>
@import "~/assets/scss/variables.scss";

.container {
  position: relative;
  cursor: pointer;
  padding: 5px;

  .container__img {
    max-width: 100%;
    height: auto;
    &:hover {
      filter: grayscale(100%);
    }
  }

  .container__info {
    position: absolute;
    bottom: 6%;
    right: 4%;
    left: 4%;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
    color: white;
    font-size: $text-medium;
    font-style: italic;
    text-align: center;
    cursor: pointer;
    padding: $padding-10;
  }

  &:hover .container__info {
    opacity: 1;
  }
}
</style>