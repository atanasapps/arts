<template>
  <section id="images" class="images">
    <Title title="My images" />
    <div class="images_row">
      <div v-for="(col, i) in columns" :key="i" class="images_column">
        <div v-for="(image, i) in col" :key="i">
          <ImageItem :image="image" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { getImagesPerColumn } from "~/services/image.js";
import ImageItem from "./ImageItem.vue";
import Title from "@/components/shared/Title.vue";
import Container from "@/components/shared/Container.vue";
import images from "@/data/images";

export default {
  name: "Images",
  components: { ImageItem, Title, Container },
  data() {
    return {
      columns: [],
    };
  },
  created() {
    this.getColumns();
  },
  methods: {
    getColumns() {
      this.columns = getImagesPerColumn(images, 4);
    },
  },
};
</script>
<style scoped>
.images {
  background: white;
}

.images_row {
  display: -ms-flexbox; /* IE 10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE 10 */
  flex-wrap: wrap;
}

.images_column {
  flex: 25%;
  padding: 0 4px;
}

@media screen and (max-width: 1200px) {
  .images_column {
    flex: 33.33%;
    max-width: 33.33%;
    padding: 0 4px;
  }
}

@media screen and (max-width: 900px) {
  .images_column {
    flex: 50%;
    max-width: 50%;
  }
}

@media screen and (max-width: 600px) {
  .images_column {
    flex: 100%;
    max-width: 100%;
  }
}
</style>