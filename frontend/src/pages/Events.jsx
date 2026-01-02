import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EventCard from '../components/EventCard';
import { eventsAPI } from '../services/api';
import { useAuth } from '../contexts/AuthContext';

function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
  });
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    fetchEvents();
  }, [isAuthenticated, navigate]);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      setError('');
      const data = await eventsAPI.getMyEvents();
      setEvents(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(err.message || 'Failed to fetch events');
      console.error('Error fetching events:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      date: '',
      time: '',
      location: '',
    });
    setEditingEvent(null);
    setShowForm(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      if (editingEvent) {
        // Update existing event
        const eventId = editingEvent.id || editingEvent._id;
        await eventsAPI.update(eventId, formData);
      } else {
        // Create new event
        await eventsAPI.create(formData);
      }
      resetForm();
      fetchEvents();
    } catch (err) {
      setError(err.message || 'Failed to save event');
      console.error('Error saving event:', err);
    }
  };

  const handleEdit = (event) => {
    setEditingEvent(event);
    setFormData({
      title: event.title || '',
      description: event.description || '',
      date: new Date(event.event_date).toISOString().split('T')[0] || '',
      time: event.event_time || '',
      location: event.location || '',
    });
    setShowForm(true);
  };

  const handleDelete = async (eventId) => {
    if (!window.confirm('Are you sure you want to delete this event?')) {
      return;
    }

    try {
      setError('');
      await eventsAPI.delete(eventId);
      fetchEvents();
    } catch (err) {
      setError(err.message || 'Failed to delete event');
      console.error('Error deleting event:', err);
    }
  };


  if (loading && events.length === 0) {
    return (
      <div className="container mt-4">
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>My Events</h1>
        <button
          className="btn btn-primary"
          onClick={() => {
            if (showForm) {
              resetForm();
            } else {
              setShowForm(true);
            }
          }}
        >
          {showForm ? 'Cancel' : 'Create Event'}
        </button>
      </div>

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      {showForm && (
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="card-title">
              {editingEvent ? 'Edit Event' : 'Create New Event'}
            </h5>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Event Title</label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    value={formData.title}
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
                    value={formData.date}
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
                    value={formData.time}
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
                    value={formData.location}
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
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-success">
                {editingEvent ? 'Update Event' : 'Create Event'}
              </button>
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
          events.map((event) => (
            <EventCard
              key={event.id || event._id}
              event={event}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Events;
