import { useState, useEffect } from 'react';
import EventCard from '../components/EventCard';
import { eventsAPI } from '../services/api';

function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchEvents = async () => {
    try {
      setLoading(true);
      setError('');
      const data = await eventsAPI.getAll();
      setEvents(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(err.message || 'Failed to fetch events');
      console.error('Error fetching events:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents()
  }, [])
  

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
        <h1>All Events</h1>
      </div>

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
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
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Events;
