# Event Management System - Project Report

## Title Page
- Student Name: Abdallah Wehbe
- Date: 23/11/2025
- Github link: https://github.com/abdwehbe/event-management-system

## Abstract
This project implements a basic Event Management System frontend using React and Bootstrap. The system allows users to create events, view event listings, and register for events.

## System Design

### Architecture
The application follows a component-based architecture with:
- **Page Components**: Individual pages for different sections
- **Reusable Components**: Shared UI components (Navbar, Footer, EventCard)

### State Management
- Local state using React useState hook
- Events data passed via props from App to Events component
- Form states managed within respective components

## Technologies Used

### Tools
- **React 19**: JavaScript library for building user interfaces
- **react-router-dom**: This is used for routing between pages.

### Styling
- **Bootstrap 5**: CSS framework for responsive design
- **Custom CSS**: Additional styling for specific components

## Code Snippets

### Event Creation Form
```jsx
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
}
```

## Setup Instructions Summary

1. Clone project: `git clone git@github.com:abdwehbe/event-management-system.git`
3. Run `npm install` to install dependencies
4. Run `npm run dev` to start the development server
5. The app will be available at `http://localhost:5173`
