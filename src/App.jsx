import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Skills from "./components/Skills"
import Work from "./components/Work"
import Contact from "./components/contact"
import Image from "./components/img"
function App() {

  return (
    <>
      <div>
      
        <Navbar/>
         <Image/>
        <Home/>
        <About/>
        <Skills/>
        <Work/>
        <Contact/>
      </div>
    </>
  )
}

export default App
