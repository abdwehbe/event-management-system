function Services() {
  const services = [
    {
      title: "Event Creation",
      description: "Create and publish events with basic details"
    },
    {
      title: "Registration System",
      description: "Allow attendees to register for your events"
    },
    {
      title: "Event Discovery",
      description: "Browse and find events that interest you"
    },
    {
      title: "Attendance Tracking",
      description: "Track how many people registered for each event"
    }
  ]

  return (
    <div className="container mt-4">
      <h1>Our Services</h1>
      <div className="row mt-4">
        {services.map((service, index) => (
          <div key={index} className="col-md-6 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services