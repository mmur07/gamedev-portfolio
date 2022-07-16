import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-1", "Mobile games", "img/projects/MobileGames.png", `
    <div class="paragraph">
        I participated in 2 versioned copies for academic purposes of the popular apps <strong>0h n0!</strong> and <strong>FlowFree</strong>.</b>
        Both of these games were brought onto PC but using multi-platform development they still can be played on Android.</br>
        FlowFree was developed on <strong>Unity</strong> (C#) and 0hn0! on <strong>AndroidStudio (Java)</strong>.</br></br>
        These games taught me a lot about mobile game and multi-platform development, as a good and solid architecture with many layers of abstraction was required to mantain both versions.
    </div>

        <div class="paragraph">
    <div class="notice">
        Source code and builds for both games are available on <a href="https://github.com/Adrian-de-Lucas-Gomez/VideojuegosTelefonicos" target="_blank">GitHub</a>.
    </div>
    </div>
    `, "#383838", true, false),

    new ProjectData("project-2", "PCE", "img/projects/project-2-icon.png", `
    <div class="paragraph">
        PCE or <strong>Programa de convivencia espacial</strong>, spanish for "Space coexistance program" is a thing of beauty that I am so proud of. I could write about it for hours.<br/><br/>
        In this online 2D party-game, up to 4 players compete in fast-paced rounds that evoke the discrepancies between flatmates, but in <strong>SPACE</strong>. It's kind of like Duck-Game, but in 0 gravity.<br/>
        Players can move around jumping from various objects and platforms, and they have a deadly assortment of weapons at their disposal that they can use to defeat oposing players.<br/>
        There is also a variety of maps, each of them including new and different platforms and hazards.<br/><br/>

        This game was written on C++ using SDL2 and Box2D.<br/>
        The purpose of this game was purely educational to familiarize us into the workflow of game development and to gain proficiency with C++.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/Anq521WAuG4" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
    <div class="notice">
        Windows build available on <a href="https://tai1games.itch.io/programa-de-convivencia-espacial" target="_blank">itch.io</a>.
        Source code is available on <a href="https://github.com/Tai1Games/Programa-de-Convivencia-Espacial" target="_blank">GitHub</a>.
    </div>
    </div>

    `, "#5a78af"),
    new ProjectData("project-3", "Tri-Towers", "img/projects/TriTowers.png", `
    <div class="paragraph">
        <strong>Tri-Towers</strong> is a fun <strong>tower defense browser game</strong> written on JS using Phaser.<br/><br/>
        In this game, each tower and enemy belong to one of three differente elements (fire, water, grass) and they each resist and are super-effective to a different element.<br/>
        The hook of the game is that the element of every tower the player has placed on the map can be changed to the next one (fire into water, water into grass...) with the press of a button. The player
        is supposed to change the element of every tower according to the needs of every round.
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/TriTowers-1.png" alt="Drawing Overload Screenshot" />
    </div>

    <div class="paragraph">
    <div class="notice">
        Game available on <a href="https://mmur07.github.io/Tri-Towers/" target="_blank">the Tri-Towers website</a>.
        Source code is available on <a href="https://mmur07.github.io/Tri-Towers/" target="_blank">GitHub</a>.
    </div>
    </div>

    `, "#383838"),
    new ProjectData("project-4", "PACMA", "img/projects/project-4-icon.png", `
    <div class="paragraph">
    <strong>Programa Animalista de Chillar Muy Alto</strong>, spanish for Animalistic Program of Screeching Very Loud (we kid of have a thing for dumb long names)
    is a submission for the Jam-On Game-Jam that took place in 2022. This game was awarded the 2nd best game of the edition.</br>
    In this game, you play as a cat that is about to give birth, and has jumped into a taxi. For some reason, the driver doesn't know where the hospital is.
    Looking out the windows and reading the road signs, the player can figure out what direction to follow in order to reach the hospital.
    To communicate what direction to follow to the driver, the player will have to talk to their mic (right, left, straight on).
    Also, the screen will blacken increasingly, so the player will have to literally <strong>scream their lungs out</strong> to clear out the screen.</br></br>

    Personally, this is my favourite game I've created with friends. It's super fun to play and super fun to watch other people play.</br>
    I'll never forget how fun it was to watch the rest of the game-jam participants play this game.
    <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@neo8iam">NEOSiAM 2020</a>.
    </div>
    
    <div class="paragraph">
        Main features :
        <ul>
        <li>Some stuff</li>
        <li>Some great stuff</li>
        <li>More awesome stuff</li>
        <li>And then some</li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
        Windows build available on <a href="https://some.where/nice" target="_blank">itch.io</a>.
        </div>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Eugeneable Screenshot" />
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Eugeneable Screenshot" />
    </div>
    `, "#e80fb7"),
    new ProjectData("project-5", "Cloud Drew Land", "img/projects/project-5-icon.png", `
    <div class="paragraph">
        <strong>Cloud Drew Land</strong> is a thing of beauty that I am so proud of. I could write about it for hours.
        <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@cottonbro">cottonbro</a>.
    </div>
    
    <div class="paragraph">
        Main features :
        <ul>
        <li>Some stuff</li>
        <li>Some great stuff</li>
        <li>More awesome stuff</li>
        <li>And then some</li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
        Windows build available on <a href="https://some.where/nice" target="_blank">itch.io</a>.
        Source code available on <a href="https://github.com/yourself" target="_blank">GitHub</a>.
        </div>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Cloud Drew Land Screenshot" />
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Cloud Drew Land Screenshot" />
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Cloud Drew Land Screenshot" />
    </div>`, "#e48246")
];