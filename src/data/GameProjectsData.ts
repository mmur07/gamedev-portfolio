import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-1", "Mobile games", "img/projects/MobileGames.png", `
    <div class="paragraph">
        I participated in 2 versioned copies for academic purposes of the popular apps <strong>0h n0!</strong> and <strong>FlowFree</strong>.</b>
        Both of these games were brought onto PC but using multi-platform development they still can be played on Android.</br>
        FlowFree was developed on <strong>Unity</strong> (C#) and 0hn0! on <strong>AndroidStudio (Java)</strong>.</br></br>
        These games taught me a lot about mobile game and multi-platform development, as a good and solid architecture with many layers of abstraction was required to mantain both versions working.
    </div>

    <div class="paragraph center">
    <img class="pc-screenshot" src="img/projects/FlowFree.png" alt="PACMA Screenshot 1" />
    <img class="pc-screenshot" src="img/projects/0hn0.png" alt="PACMA Screenshot 2" />
    <div>

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
        Players can move around by jumping from various objects and platforms, and they have a deadly assortment of weapons at their disposal that they can use to defeat oposing players.<br/>
        There is also a variety of maps, each of them including new and different platforms and hazards.<br/><br/>

        This game was written on C++ using SDL2 and Box2D.<br/>
        The purpose of this game was purely educational to familiarize us into the workflow of game development and to gain proficiency with C++.<br/><br/>

        Overall, it's a game I'm really proud of, and if we had dedicated a couple more weeks into it, it could be 10 times better.
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
    new ProjectData("project-4", "PACMA", "img/projects/PACMATitle.png", `
    <div class="paragraph">
    <strong>Programa Animalista de Chillar Muy Alto</strong>, spanish for Animalistic Program of Screeching Very Loud (we kid of have a thing for dumb long names)
    is a submission for the Jam-On Game-Jam that took place in 2021. This game was developed on Unity and was ranked the 3rd best game of the edition.</br></br>
    In this game, you play as a cat that is about to give birth and has jumped into a taxi. For <em>some reason</em>, the driver doesn't know where the hospital is.
    By looking out the windows and reading the road signs, the player can figure out what direction to follow in order to reach the hospital.
    To communicate what direction to follow to the driver, the player has to talk to their mic (right, left, straight on...).
    In addition, the screen will blacken increasingly, so the player will have to literally <strong>scream their lungs out</strong> to clear out the screen.</br></br>

    Personally, this is my favourite game I've created with friends. It's super fun to play 10 times better to watch other people play.</br>
    I'll never forget how fun it was to watch the rest of the game-jam participants play this game.
    
    <div class="paragraph center">
    <img class="pc-screenshot" src="img/projects/PACMA1.png" alt="PACMA Screenshot 1" />
    <img class="pc-screenshot" src="img/projects/PACMA2.png" alt="PACMA Screenshot 2" />
    <div>

    <div class="paragraph">
        <div class="notice">
        Game available for download for Windows platforms on <a href="https://tai1games.itch.io/pacma" target="_blank">itch.io</a>.
        </div>
    </div>

    `, "#735350", false, true),
    new ProjectData("project-5", "Primates Perfectos", "img/projects/PP.png", `
    <div class="paragraph">
        <strong>Primates Perfectos</strong>, spanish for <emph>Perfect Primates</emph> is a submission for the Jam-On Game-Jam that took place in 2021. 
        This game was developed on Unity and was ranked <strong>2nd best game of the edition</strong>.</br></br>
        In this game, the player tries to scam people by selling ugly monkey NFTs. Players are able to customize their monkeys by adding accesories like in the old browser games.
        Each accesory gives points to certain themes (beach, party, cozy...) The player is able to deduce which theme is currently popular by browing a live Twitter timeline in which users
        talk about the things they like, hate, etc. If the NFT you create has points into popular themes, you will gain more money that can be used to unlock new accesories.</br></br>
        This was a really fun project. Selecting the accesories and writing dumb tweets was a blast and even though it's not really intuitive, I'm really proud of what we created.
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/PPGameplay.png" alt="Drawing Overload Screenshot" />
    </div>

    <div class="paragraph">
        <div class="notice">
        Game available for download for Windows platforms on <a href="https://tai1games.itch.io/primatesperfectos" target="_blank">itch.io</a>.
        </div>
    </div>

    </div>`, "#004901")
];