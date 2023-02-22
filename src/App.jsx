//COMPONENTS

import { Introduction } from "./components/introduction";
import {AboutMe} from "./components/about_me";
import {Servicies} from "./components/servicies";
import {Ubication} from "./components/ubications";


function App() {
  

  return (
    <div className="App"> 
      <Introduction></Introduction>
      <AboutMe></AboutMe>
      <Servicies></Servicies>
      <Ubication></Ubication>
    </div>
  )
}

export default App
