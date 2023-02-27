//COMPONENTS

import { Introduction } from "./components/introduction";
import {AboutMe} from "./components/about_me";
import {Servicies} from "./components/servicies";
import {Ubication} from "./components/ubications";
import {Carousel} from "./components/comments";


function App() {
  

  return (
    <div className="App"> 
      <Introduction></Introduction>
      <AboutMe></AboutMe>
      <Servicies></Servicies>
      <Ubication></Ubication>
      <Carousel></Carousel>
    </div>
  )
}

export default App
