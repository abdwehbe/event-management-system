import { useState } from 'react'
import EventCard from '../components/EventCard'

function Events({ events, setEvents }) {
  const [showForm, setShowForm] = useState(false)
  const [newEvent, setNewEvent] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    location: ''
  })

  const handleInputChange = (e) => {
    setNewEvent({
      ...newEvent,
      [e.target.name]: e.target.value
    })
  }

  const handleCreateEvent = (e) => {
    e.preventDefault()
    const event = {
      ...newEvent,
      id: Date.now(),
      attendees: []
    }
    setEvents([...events, event])
    setNewEvent({ title: '', description: '', date: '', time: '', location: '' })
    setShowForm(false)
  }

  const handleRegister = (eventId) => {
    const updatedEvents = events.map(event => {
      if (event.id === eventId) {
        return {
          ...event,
          attendees: [...event.attendees, `Attendee${event.attendees.length + 1}`]
        }
      }
      return event
    })
    setEvents(updatedEvents)
    alert('Successfully registered for the event!')
  }

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Events</h1>
        <button 
          className="btn btn-primary"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Cancel' : 'Create Event'}
        </button>
      </div>

      {showForm && (
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="card-title">Create New Event</h5>
            <form onSubmit={handleCreateEvent}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Event Title</label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    value={newEvent.title}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Date</label>
                  <input
                    type="date"
                    className="form-control"
                    name="date"
                    value={newEvent.date}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Time</label>
                  <input
                    type="time"
                    className="form-control"
                    name="time"
                    value={newEvent.time}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Location</label>
                  <input
                    type="text"
                    className="form-control"
                    name="location"
                    value={newEvent.location}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea
                  className="form-control"
                  name="description"
                  rows="3"
                  value={newEvent.description}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-success">Create Event</button>
            </form>
          </div>
        </div>
      )}

      <div className="row">
        {events.length === 0 ? (
          <div className="col-12">
            <div className="alert alert-info text-center">
              No events available. Create your first one.
            </div>
          </div>
        ) : (
          events.map(event => (
            <EventCard 
              key={event.id} 
              event={event} 
              onRegister={handleRegister}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default Events