<template>
  <div>
    <Intro />
    <ImagesList />
    <About />
    <Skills />
    <Contact />
    <Footer />
    <ScrollTop />
  </div>
</template>
<script>
import Intro from "@/components/Intro.vue";
import ImagesList from "@/components/images/ImagesList.vue";
import About from "@/components/About.vue";
import Skills from "@/components/Skills.vue";
import Contact from "@/components/Contact.vue";
import Footer from "@/components/Footer.vue";
import ScrollTop from "@/components/ScrollTop.vue";

export default {
  components: { Intro, ImagesList, About, Skills, Contact, Footer, ScrollTop },
};
</script>