function Navbar({ setCurrentPage, currentPage }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <span className="navbar-brand">EventManager</span>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button 
                className={`nav-link btn btn-link ${currentPage === 'home' ? 'active' : ''}`}
                onClick={() => setCurrentPage('home')}
              >
                Home
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link btn btn-link ${currentPage === 'about' ? 'active' : ''}`}
                onClick={() => setCurrentPage('about')}
              >
                About
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link btn btn-link ${currentPage === 'services' ? 'active' : ''}`}
                onClick={() => setCurrentPage('services')}
              >
                Services
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link btn btn-link ${currentPage === 'events' ? 'active' : ''}`}
                onClick={() => setCurrentPage('events')}
              >
                Events
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link btn btn-link ${currentPage === 'contact' ? 'active' : ''}`}
                onClick={() => setCurrentPage('contact')}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar