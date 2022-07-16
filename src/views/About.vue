<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Miguel Mur</strong>, a passionate game developer from Spain and currently based on Zaragoza. <br/>
      </div>

      <div style="margin-top: 20px;">
        I've worked on several projects, including <router-link to="/game-projects">videogames</router-link> and <router-link to="/other-projects"> game-development tools</router-link>.
        With a group of friends, I've worked on multiple projects, ranging from silly game-jam submissions to custom 3D Game engines built from the ground up.
      </div>

      <div style="margin-top: 40px;">I'm <strong>currently looking for a job</strong> as a game developer. You can reach me at <a href="mailto:mmurcort@gmail.com">mmurcort@gmail.com</a> or <router-link to="/contact">through here</router-link>.</div>
    </div>

    <div class="photo">
      <img src="img/mmur.png" alt="Avatar of John" /> 
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}

</style>