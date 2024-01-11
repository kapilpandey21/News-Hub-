import { BrowserRouter, Routes,Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import General from "./components/General"
import Business from "./Business"
import Entertainment from "./components/Entertainment"
import Health from "./components/Health"
import Science from "./components/Science"
import Sports from "./components/Sports"
import Technology from "./components/Technology"
import Footer from "./components/Footer"
import Fetch from "./components/Fetch"

const App = () => {

  return (   
    < > 
     <BrowserRouter>
     <Navbar/>
     <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/general" element={<Fetch cat='general'/>}/>
     <Route path="/business" element={<Fetch  cat='business'/>}/>
     <Route path="/entertainment" element={<Fetch  cat='entertainment' />}/>
     <Route path="/health" element={<Fetch  cat='health'/>}/>
     <Route path="/science" element={<Fetch  cat='science'/>}/>
     <Route path="/sports" element={<Fetch  cat='sports'/>}/>
     <Route path="/technology" element={<Fetch  cat='technology'/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App