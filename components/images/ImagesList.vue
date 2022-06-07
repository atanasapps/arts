<template>
  <section id="images" class="images">
    <Title title="My images" />
    <Row>
      <Column
        v-for="(col, i) in columns"
        :key="i"
        twohalf_sm
        half_md
        quarter_lg
      >
        <template v-for="(image, i) in col">
          <ImageItem :image="image" :key="i" />
        </template>
      </Column>
    </Row>
  </section>
</template>
<script>
import { getImagesPerColumn } from "~/services/image.js";
import ImageItem from "./ImageItem.vue";
import images from "@/data/images";

export default {
  name: "Images",
  components: { ImageItem },
  data() {
    return {
      columns: [],
    };
  },
  async created() {
    this.columns = await getImagesPerColumn(images);
  },
};
</script>
<style scoped>
.images {
  background: white;
}
</style>