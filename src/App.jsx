import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Route, Routes} from "react-router-dom"
//components
import Header from "./components/Header"
import Footer from "./components/Footer"

//import pages
import Home from "./pages/Home"
// import About from "./pages/About"
import Projects from "./pages/Projects"


function App() {
  const URL = "https://re-lab-backend.herokuapp.com/"


  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/projects" element={ <Projects URL={URL} /> } />
          {/* <Route path="/about" element={<About URL={URL} />} /> */}
        </Routes>
      <Footer />
    </div>
  )
}

export default App
