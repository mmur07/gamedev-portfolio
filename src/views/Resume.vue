<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      I'm <strong>Miguel Mur</strong>, a recent Game Dev graduate from Zaragoza, Spain.
      <br />
      <br />I've been creating games and game-dev tools for over 4 years with various technologies and coding languages.
      <br />I'm especially comfortable with <strong>Unity, C++ and C#</strong>, but I have experience with quite a lot of different technologies.
      <br />
      <br />With a group of friends from college, I've been a part of <a href="https://tai1games.itch.io/" target="_blank">Tai1Games</a>, and we've participated in a couple game-jams and developed some fun games.
      <br />One of my strongest skills is <strong>teamwork and planning</strong>, as I've used agile methodologies for all of the major projects I've participated in. I'm really comfortable
      <br />with <strong>Scrum and Kanban</strong>.
      <br />
      <br />Right now I'm looking for a place to start my carreer in the games industry.
      <br />
      <br />Besides game dev, I'm also interested about videogames <it>(duh)</it>, manga, dogs and cooking.

      <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="d/CV-EN-MiguelMur.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download as PDF ᴇɴ</a>
        <a class="download-link" href="d/CV-EN-MiguelMur.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Descargar como PDF ᴇs</a>
        <div style="clear:both"></div>
      </div>
    </div>
    <div class="photo">
      <img src="img/mmur.png" alt="Photo of Myself :)" />
    </div>

    <div style="clear:both"></div>

    <div class="full-content">
      <h2>Work experience</h2>

      <h3>Operation Classified - Delta Force</h3>
      <h4>2018-2019</h4>

      <div>It's classified so I can't speak about it.</div>

      <div class="tech-stack">Firearms, knives, grenades, Hummer vehicle, parachute,...</div>

      <h3>Operation Classified - Delta Force</h3>
      <h4>2015-2017</h4>

      <div>It's classified so I can't speak about it.</div>

      <div class="tech-stack">Even more Firearms, knives, grenades, Hummer vehicle, parachute,...</div>

      <h3>Operation Classified - Delta Force</h3>
      <h4>2012-2015</h4>

      <div>It's classified so I can't speak about it.</div>

      <div class="tech-stack">Firearms, knives, grenades, Hummer vehicle, parachute,...</div>

      <h2>Skills</h2>

      <div class="skill-set">
        <h3>Ample knowledge</h3>
        <div class="skill">C#</div> 
        <div class="skill">C++</div> 
        <div class="skill">Unity</div>
        <div class="skill">Agile</div>
        <div class="skill">Git</div>
        <div class="skill">SDL2</div>
      </div>

      <div class="skill-set">
        <h3>Comfortable</h3>
        <div class="skill">C</div> 
        <div class="skill">Java</div> 
        <div class="skill">Python</div> 
        <div class="skill">AndroidStudio</div> 
        <div class="skill">FMOD</div> 
        <div class="skill">Blender</div> 
        <div class="skill">Telegram development</div>
        <div class="skill">Multi-platform development</div> 
      </div>

      <div class="skill-set">
        <h3>Familiar</h3>
        <div class="skill">LUA</div> 
        <div class="skill">JavaScript</div> 
        <div class="skill">Firebase</div> 
        <div class="skill">Docker</div> 
        <div class="skill">NumPy</div> 
        <div class="skill">Reaper</div> 
      </div>
      <div style="clear:both" />

      <h2>Education</h2>

      <h3>Universidad Complutense de Madrid (2018/19 - 2021/22)</h3>
      <h4>Game development</h4>
      <div>Bachelor's degree in computer science specialized on game development</div>

      <h2>Languages</h2>

      <h3>English</h3>
      <div><strong>B2 Cambridge certified.</strong></div>
      <div>I've also participated in language immersion programs in Canada (2015) and the Netherlands (2016)</div>

      <h3>Spanish</h3>
      <div>Native</div>

      <h3>Japanese</h3>
      <div>NOKEN 5 - Certified</div>

      <h2>Besides...</h2>
      <div>
        <h3>I ❤️ Video games</h3>
        <div>I love everything from FromSoftware, Undertale, TBOI, Warframe, FFIX... I also ruined my teenage years on World of Warcraft and Dota2.</div>

        <h3>I 🧡 Manga</h3>
        <div>I adore Berserk, Oyasumi Punpun and all the work of Junji Ito.</div>

        <h3>I 💛 My Dog</h3>
        <div>His name's Gauss and I love him very very much :)</div>
        <div>
          <img src="img/Gaussito.jpg" alt="Photo of my precious dog" width=300px style="margin-left: 5%; padding-top: 15px;"/>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SkillRate from "@/components/SkillRate.vue";

export default Vue.extend({
  name: "Resume",
  components: {

  },
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
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
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px; 
  }

  .skill{
    border: 1px solid white;
    padding: 3px;
    float:inherit;
    margin:  5px;
  }
}
</style>