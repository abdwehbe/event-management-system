function EventCard({ event, onRegister }) {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card h-100">
        <div className="card-body">
          <h5 className="card-title">{event.title}</h5>
          <p className="card-text">{event.description}</p>
          <p><strong>Date:</strong> {event.date}</p>
          <p><strong>Time:</strong> {event.time}</p>
          <p><strong>Location:</strong> {event.location}</p>
          <p><strong>Attendees:</strong> {event.attendees.length}</p>
          <button 
            className="btn btn-primary"
            onClick={() => onRegister(event.id)}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  )
}

export default EventCard