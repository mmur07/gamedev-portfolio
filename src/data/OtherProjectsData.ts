import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-6", "PTSD-Engine", "img/projects/project-1-icon.jpg", 
    `
    <div class="paragraph">
     <strong>PTSD-Engine</strong> is most likely the biggest project I've worked on. It's a <strong>custom 3D engine built from the ground up available on Windows and Linux.</strong><br/>
     It's written on C++ and LUA. Users are able to write scripts on LUA in which they are able to customize their games with the assets they desire.<br/><br/>

     2 basic games were created for testing purposes using this tool: <strong>Ta1Fighter</strong> and <strong>Glock the Clock</strong>. Even though these games are not much to write home about, anyone who has
     worked on something similar will appreciate the work behind them.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/5RQtIul6HrQ" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/Vx3Ug5Hxe9M" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        The main technologies used in this project were :
        <ul>
        <li>Ogre3D</li>
        <li>Bullet</li>
        <li>FMOD-API</li>
        </ul>
    </div>

    <div class="paragraph">
    <div class="notice">
        Source code for PTSD-Engine available on <a href="https://github.com/PTSD-3D/PTSD-Engine" target="_blank">GitHub</a>.<br/>  
        Build and source code for Glock The Clock available on <a href="https://github.com/PTSD-3D/Glock-The-Clock" target="_blank">GitHub</a>.<br/>
        Build and source code for Tai-Fighter available on <a href="https://github.com/PTSD-3D/Tai-Fighter" target="_blank">GitHub</a>.<br/>
    </div>
    </div>
    `, "#c10606", false, true),
    new ProjectData("project-7", "MMOTFG", "img/projects/MMOTFG.png", `
    <div class="paragraph">
                <strong>Massively Multiplayer Online Telegram Fantasy Game</strong> is a framework I worked on that is used to create multiplayer conversational
                rpg adventures that are played via <strong>Telegram bots</strong>.</b>
                The games that can be developed using this framework resemble classic rpgs such as Zork, in which the user had to type what they wanted
                to do or where they wanted to go (go north, use key, drink potion...)</br>
                It was developed using <strong>.NET</strong> (C#). Player progress is stored in a <strong>Firebase</strong> database, and the games can be deployed using <strong>Docker and Azure</strong>. </br></br>
                It's a very complete project I'm very proud of. 
            </div>

            <div class="paragraph center">
                <img class="pc-screenshot" src="img/projects/HelpCommand.png" alt="Help command response" />
                <img class="pc-screenshot" src="img/projects/BatallaItem.png" alt="Using a health potion" />
                <img class="pc-screenshot" src="img/projects/Mamporrazo1.png" alt="Custom battles" /> 
            </div>
            
            <div class="paragraph">
            <div class="notice">
                MMOTFG is available for download on <a href="https://github.com/El-AMPA/MMOTFG" target="_blank">GitHub</a>.<br/>  
            </div>
            </div>
            `,"#1ca1e2")
];