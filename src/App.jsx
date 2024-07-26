import { useState } from 'react'
import { Navbar } from './Navbar'
import About from "./pages/About"
import Work from "./pages/Work"
import Contact from "./pages/Contact"
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/Personal-Website" element={<Navigate to="/Personal-Website/about" />} />
        <Route path="/Personal-Website/about" element={<About />} />
        <Route path="/Personal-Website/work" element={<Work />} />
        <Route path="/Personal-Website/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
