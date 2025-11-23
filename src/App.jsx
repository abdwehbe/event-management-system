import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Events from './pages/Events'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [events, setEvents] = useState([])

  const renderPage = () => {
    if(currentPage === "home") {
      return <Home/>
    } else if(currentPage === "about") {
      return <About/>
    }
    else if (currentPage === 'services')
      return <Services />
    else if (currentPage === 'contact')
      return <Contact />
    else if (currentPage === 'events')
      return <Events events={events} setEvents={setEvents} />
    return <Home />
  }

  return (
    <div className="App">
      <Navbar setCurrentPage={setCurrentPage} currentPage={currentPage} />
      <main style={{padding: "0 20%"}}>
        {renderPage()}
      </main>
      <Footer />
    </div>
  )
}

export default App