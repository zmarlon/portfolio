import logo from './logo.jpeg'
import instagramLogo from './instagram-logo.svg'
import githubLogo from './github-logo.svg'
import linkedInLogo from './linkedin-logo.png'
import './App.css';
import './css/bootstrap.min.css'
import { openInNewTab } from './util';

//images
import nativeFunctionLoader from './resources/native-function-loader.png'
import puzzleGame from './resources/puzzle-game.png'
import metalExample from './resources/metal-3-example.png'
import vokselRs from './resources/voksel-rs.png'
import marchingCubes from './resources/marching-cubes.png'
import sanctuaryIsland from './resources/sanctuary-island.png'
import pdEngine from './resources/pdengine.png'
import portfolio from './resources/portfolio.png'
import gelatoItaliano from './resources/gelato-italiano.png'

const description = "I am a 23 year old software developer from Zell-Mosel. Since I was 16 years old, I have developed a deep fascination in computer programming. What I enjoy most is always finding the best solution for any kind of problem. I love to keep learning new technologies, expanding my knowledge and staying on the cutting edge of technology."

function SocialMediaAccount({platform, logo, link}) {
  return (
    <div className="col-md-2 text-center SocialMediaAccount m-2" onClick={() => {openInNewTab(link)}}>
      <div className='p-3'>
        <img src={logo} alt={platform + "_logo"} width="48" height="48"></img>
      </div>
      <p>{platform}</p>
    </div>
  )
}

function SocialMediaAccounts() {
  return (
    <div className='pb-3'>
      <div className="row justify-content-md-center">
      <SocialMediaAccount platform="Instagram" logo={instagramLogo} link="https://www.instagram.com/zmxrlxn/"></SocialMediaAccount>
      <SocialMediaAccount platform="Github" logo={githubLogo} link="https://github.com/zmarlon"></SocialMediaAccount>
      <SocialMediaAccount platform="Linked in" logo={linkedInLogo} link="https://www.linkedin.com/in/marlon-klaus-133b01263/"></SocialMediaAccount>
      </div>
    </div>
  )
}

function AboutMe() {
  return (
    <div className="px-4 pt-5 pb-3 my-5 text-center">
            <img className="Logo d-block mx-auto mb-4" src={logo} alt="Profile picture" width="128" height="128"></img>
            <h1 className="display-5 fw-bold">Hey, I'm Marlon!</h1>
            <div className="col-lg-8 mx-auto">
              <p className="lead mb-4">{description}</p>
              <p className='lead mb-4'>Programming languages: C#, C++, Rust</p>
            </div>
          </div>
  )
}

function Project({platform, language, name, description, link, thumbnail}) {
  return (
    <div className="px-4 pb-3 pt-3 m-4 Entry" onClick={() => {openInNewTab(link)}}>
      <div className='ProjectDescription'>
        <p className="lead GreenText">{name}</p>
        <p className="text-end">{language}</p>
      </div>
      <p className="lead">{description}</p>
      {
        thumbnail != null ? (<img className="ProjectImage" src={thumbnail}></img>) : (<></>)
      }
    </div>
  )
}

function App() {
  return (
    <main>
      <div className="App row">
        <div className="col-xl">
          <div className='sticky-top'>
            <AboutMe></AboutMe>
            <SocialMediaAccounts></SocialMediaAccounts>
          </div>
        </div>
        <div className="col-xl SecondColumn">
          <div className="px-4 pb-3 pt-3 m-4 text-right Entry">
            <p className="lead GreenText">Interest aroused?</p>
            <p className="lead">Feel free to check out my projects!</p>
          </div>

          <Project platform="Github" language="C#" name="Native Function Loader" description="A library loader for loading native functions as unmanaged delegate pointers to archive the best performance." link="https://github.com/zmarlon/NativeFunctionLoader" thumbnail={nativeFunctionLoader}></Project>
          <Project platform="Github" language="C++" name="Metal 3 Example" description="A project in which I used a new mesh shader technology released by Apple in June 2022 to render a dragon. " link="https://github.com/ProjectKML/metal_3_example" thumbnail={metalExample}></Project>
          <Project platform="Github" language="Rust" name="Puzzle Game (Commercial, no source available)" description="A puzzle game with 4 different colored players. The goal is to get each player to the assigned target. The game has a level editor and was programmed with a custom game engine that uses WGPU for rendering." thumbnail={puzzleGame}></Project>
          <Project platform="Itchio" language="C#" name="Sanctuary Island (Game Dev Week 2022 Trier)" description="A 2D game created with Unity, in which you breed animals and complete tasks with their help. Each tamed animal has a special ability that you can take advantage of." link="https://github.com/BeastLe9enD/sanctuary-island" thumbnail={sanctuaryIsland}></Project>
          <Project platform="Gitlab" language="Rust" name="Voksel-RS" description="In this project I rendered a section of a world consisting of voxels. " link="https://git.karmakrafts.dev/kk/voksel-rs/" thumbnail={vokselRs}></Project>
          <Project platform="Gitea" language="C#" name="Marching Cubes" description="An implementation of the Marching Cube algorithm visualized with Unity." link="https://www.gitea.com/zmarlon/MarchingCubes" thumbnail={marchingCubes}></Project>
          <Project platform="Gitea" language="C++ / C#" name="PD Engine" description="A C++ game engine that uses Vulkan and has a NET runtime embedded." link="hgitttps://www.gitea.com/zmarlon/PDEngine" thumbnail={pdEngine}></Project>
          <Project platform="Gitea" language="Php" name="Gelato Italiano Homepage" description="A homepage for an ice cream store, where the owner can dynamically manage currently available ice cream flavors on the website." link="https://www.gitea.com/zmarlon/GelatoItaliano" thumbnail={gelatoItaliano}></Project>
          <Project platform="Github" language="JavaScript" name="Portfolio" description="My portfolio using React and Bootstrap." link="https://github.com/zmarlon/portfolio" thumbnail={portfolio}></Project>
          <Project platform="Github" language="Rust" name="Vulkan Experiments" description="A project in which I tried out newly released Vulkan extensions: VK_NV_mesh_shader, VK_KHR_dynamic_rendering, VK_KHR_synchronization_2." link="https://github.com/ProjectKML/vulkan_experiments"></Project>
          <Project platform="Github" language="Rust" name="Fast Obj Rs" description="Rust bindings for the fastobj loader." link="https://github.com/ProjectKML/fast-obj-rs"></Project>
          <Project platform="Gitlab" language="C++" name="kommons++" description="A C++ utility library." link="https://git.karmakrafts.dev/kk/kommons-cpp/-/tree/045ec3da5479e7eaf4e222b558c3c2b806404fd4"></Project>
          <Project platform="Gitlab" language="C#" name="CoreOBJ" description="Typesafe, low-level bindings for fast_obj based on CoreInvoke." link="https://git.karmakrafts.dev/kk/coreobj"></Project>
          <Project platform="Gitlab" language="C#" name="CoreGPU .NET" description="Typesafe, low-level bindings for wgpu_native based on CoreInvoke." link="https://git.karmakrafts.dev/kk/coregpu-dotnet"></Project>
          <Project platform="Gitlab" language="C#" name="ShaderCore .NET" description="Typesafe, low-level bindings for ShaderC based on CoreInvoke." link="https://git.karmakrafts.dev/kk/shadercore-dotnet"></Project>
        </div>
      </div>
    </main>
  )
}

export default App;
