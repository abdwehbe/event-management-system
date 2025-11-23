import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Events from './pages/Events'
import { useState } from 'react'
import './App.css'

function App() {
  const [events, setEvents] = useState([])

  return (
    <div className="App">
      <Navbar />
      <main style={{padding: "0 20%"}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route 
            path="/events" 
            element={<Events events={events} setEvents={setEvents} />} 
          />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App