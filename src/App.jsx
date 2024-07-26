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
        <Route path="/Personal-Website" element={<Navigate to="/about" />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
