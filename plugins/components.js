import Vue from "vue";
import Container from "@/components/shared/Container.vue";
import Row from "@/components/shared/Row.vue";
import Column from "@/components/shared/Column.vue";
import Title from "@/components/shared/Title.vue";
import BaseButton from "@/components/shared/BaseButton.vue";
import BaseInput from "@/components/shared/BaseInput.vue";
import BaseTextarea from "@/components/shared/BaseTextarea.vue";

const components = { Container, Row, Column, Title, BaseButton, BaseInput, BaseTextarea };

Object.entries(components).forEach(([name, component]) => {
    Vue.component(name, component)
});