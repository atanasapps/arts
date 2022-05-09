<template>
  <section id="skills">
    <Container>
      <Title title="My Skills" />
      <div class="row">
        <div class="col-twothird">
          <Progress
            v-for="skill in skills"
            :key="skill._id"
            :label="skill.name"
            :percentage="skill.percentage"
          />
          <div class="activities primary">
            <div v-for="activity in activities" :key="activity._id">
              {{ activity.value }} <br />
              {{ activity.name }}
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>
<script>
import Container from "@/components/shared/Container.vue";
import Progress from "@/components/shared/Progress.vue";
import Title from "@/components/shared/Title.vue";
export default {
  name: "Skills",
  components: { Container, Title, Progress },
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
<style scoped>
.activities {
  display: flex;
  text-align: center;
  justify-content: space-around;
  margin-top: 20px;
  padding: 30px;
}
</style>