function EventCard({ event, onEdit, onDelete }) {
  const eventId = event.id || event._id;

  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card h-100">
        <div className="card-body">
          <h5 className="card-title">{event.title}</h5>
          <p className="card-text">{event.description}</p>
          <p><strong>Date:</strong> {new Date(event.event_date).toLocaleDateString()}</p>
          <p><strong>Time:</strong> {event.event_time}</p>
          <p><strong>Location:</strong> {event.location}</p>
          {event.username ? <p><strong>Event by:</strong> {event.username}</p> : null}
          <div className="d-flex gap-2 mt-3">
            {onEdit && (
              <button
                className="btn btn-sm btn-warning"
                onClick={() => onEdit(event)}
              >
                Edit
              </button>
            )}
            {onDelete && (
              <button
                className="btn btn-sm btn-danger"
                onClick={() => onDelete(eventId)}
              >
                Delete
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventCard