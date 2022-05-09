<template>
  <footer class="footer">
    <Container>
      <div class="row">
        <div class="col-half">
          <div class="footer_icons">
            <a href="https://facebook.com" target="__blank">
              <img :src="fb_img" class="social" alt="Facebook" />
            </a>
            <a href="https://linkedin.com" target="__blank">
              <img :src="linked_img" class="social" alt="Linkedin" />
            </a>
            <a href="https://instagram.com" target="__blank">
              <img :src="insta_img" class="social" alt="Instagram" />
            </a>
            <a href="https://pinterest.com" target="__blank">
              <img :src="pinterest_img" class="social" alt="Pinterest" />
            </a>
          </div>
          <p>Powered by: Atanas Lazarovski</p>
        </div>
      </div>
    </Container>
  </footer>
</template>
<script>
import Container from "@/components/shared/Container.vue";
import fb_img from "@/assets/images/social/fb.png";
import pinterest_img from "@/assets/images/social/pinterest.png";
import insta_img from "@/assets/images/social/insta.png";
import linked_img from "@/assets/images/social/linked.png";

export default {
  name: "Footer",
  components: { Container },
  data() {
    return {
      fb_img,
      pinterest_img,
      insta_img,
      linked_img,
    };
  },
};
</script>
<style scoped>
.footer {
  background: #243b55;
  text-align: center;
  color: white;
}
.footer_icons {
  padding: 10px;
}
.footer_icons img {
  width: 30px;
}
</style>