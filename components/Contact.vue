<template>
  <section id="contact" class="contact">
    <Container>
      <Title title="Contact me" />
      <Row>
        <Column twohalf_sm twothird_md>
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
        </Column>
      </Row>
    </Container>
  </section>
</template>
<script>
export default {
  name: "Contact",
  data() {
    return {
      firstName: "",
      lastName: "",
      message: "",
    };
  },
};
</script>
<style lang="scss" scoped>
@import "~/assets/scss/variables.scss";

.contact {
  background: $tertiary-color;
  padding: $padding-20;
}
</style>