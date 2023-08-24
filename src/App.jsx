import Home from "./components/pages/Home"
import QuemSomos from "./components/pages/QuemSomos"
import Page404 from "./components/pages/Page404"
import {Routes, Route} from "react-router-dom"
import "./App.css"

import "./App.css"

const App = () => {
  return (
  <Routes>
      <Route path="/" element={<Home/>}/>
      
  </Routes>
    // <Home />
  )
}

export default App