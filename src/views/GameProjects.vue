<template>
  <div>
    <h1>Videogames</h1>

    <div style="margin-bottom: 30px;">
      The following are some videogames I've had the pleasure of participating in.
    </div>

    <ProjectsList v-bind:projects="projects" />

  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import gameProjectsData from "@/data/GameProjectsData.ts";

export default Vue.extend({
  name: "GameProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: gameProjectsData,
    };
  },
});
</script>
