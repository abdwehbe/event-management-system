function Home() {
  return (
    <div className="container mt-4">
      <div className="jumbotron bg-light p-5 rounded">
        <h1 className="display-4">Welcome to EventManager</h1>
      </div>

      <div className="row mt-5">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title">Create Events</h5>
              <p className="card-text">Easily create and manage your events</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title">Register</h5>
              <p className="card-text">Simple registration process for attendees</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title">Manage</h5>
              <p className="card-text">Track attendees and event details</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home