function About() {
  return (
    <div className="container mt-4">
      <h1>About EventManager</h1>
      <div className="row mt-4">
        <div className="col-md-6">
          <h3>Our Mission</h3>
          <p>
            EventManager is designed to simplify event management for students.
            We provide a platform to create events and handle registrations.
          </p>
        </div>
        <div className="col-md-6">
          <h3>What We Do</h3>
          <ul>
            <li>Event creation and management</li>
            <li>Attendee registration</li>
            <li>Event discovery</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About