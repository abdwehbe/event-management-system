import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
  const location = useLocation()
  const [isNavCollapsed, setIsNavCollapsed] = useState(true)

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed)
  }

  const handleLinkClick = () => {
    if (!isNavCollapsed) {
      setIsNavCollapsed(true)
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/" onClick={handleLinkClick}>
          EventManager
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={handleNavCollapse}
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div 
          className={`collapse navbar-collapse ${!isNavCollapsed ? 'show' : ''}`} 
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/' || location.pathname === '/home' ? 'active' : ''}`}
                to="/"
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                to="/about"
                onClick={handleLinkClick}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}
                to="/services"
                onClick={handleLinkClick}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/events' ? 'active' : ''}`}
                to="/events"
                onClick={handleLinkClick}
              >
                Events
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
                to="/contact"
                onClick={handleLinkClick}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar