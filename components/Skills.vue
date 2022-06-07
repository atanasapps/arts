<template>
  <section id="skills" class="skills">
    <Container>
      <Title title="My Skills" />
      <Row>
        <Column twohalf_sm twothird_md>
          <Progress
            v-for="skill in skills"
            :key="skill._id"
            :label="skill.name"
            :percentage="skill.percentage"
          />
          <div class="skills__activities">
            <div v-for="activity in activities" :key="activity._id">
              {{ activity.value }} <br />
              {{ activity.name }}
            </div>
          </div>
        </Column>
      </Row>
    </Container>
  </section>
</template>
<script>
import Progress from "@/components/shared/Progress.vue";
export default {
  name: "Skills",
  components: { Progress },
  data() {
    return {
      skills: [
        { _id: "s1", name: "Photoshop", percentage: 90 },
        { _id: "s2", name: "Photography", percentage: 76 },
        { _id: "s3", name: "Web Design", percentage: 60 },
      ],
      activities: [
        { _id: "a1", name: "Projects Done", value: 55 },
        { _id: "a2", name: "Happy Clients", value: 89 },
        { _id: "a3", name: "Meetings", value: 150 },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "~/assets/scss/variables.scss";

.skills {
  padding: $padding-20;

  .skills__activities {
    display: flex;
    text-align: center;
    justify-content: space-around;
    margin-top: 20px;
    padding: 30px;
    background-color: $primary-color;
    color: white;
  }
}
</style>