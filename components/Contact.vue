<template>
  <section id="contact" class="contact">
    <Container>
      <Title title="Contact me" />
      <div class="row">
        <div class="col-twothird">
          <form action="/api/contact" method="post">
            <BaseInput
              v-model="firstName"
              required
              count
              label="Fristname"
              placeholder="Your first name"
            />
            <BaseInput
              v-model="lastName"
              required
              count
              label="LastName"
              placeholder="Your last name"
            />
            <BaseTextarea
              v-model="message"
              required
              count
              label="Message"
              placeholder="Your message..."
            />
            <BaseInput type="submit" value="Fristname" />
          </form>
        </div>
      </div>
    </Container>
  </section>
</template>
<script>
import Container from "@/components/shared/Container.vue";
import BaseInput from "@/components/shared/BaseInput.vue";
import BaseTextarea from "@/components/shared/BaseTextarea.vue";
import Title from "@/components/shared/Title.vue";
export default {
  name: "Skills",
  components: { Container, Title, BaseInput, BaseTextarea },
  data() {
    return {
      firstName: "",
      lastName: "",
      message: "",
      error: "",
    };
  },
  methods: {},
};
</script>
<style scoped>
.contact {
  background: #f1faff;
}
</style>