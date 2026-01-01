## Created this app using this command:
`npm create vite@latest event-management-system -- --template react`

## Project Description

This is an Event Management System that allows users to:
- Register and login to the system
- Create events with basic details (title, description, date, time, location)
- View all created events
- Edit existing events
- Delete events
- Browse through different pages (Home, About, Services, Contact, Events)

The application is built using React with Vite and styled with Bootstrap for responsive design. It integrates with a backend API for authentication and event management.

## Setup Instructions

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn
- Backend API server running (see Backend Configuration below)

### Installation

1. Clone or download the project files
2. Navigate to the project directory in your terminal
3. Install dependencies:
   ```bash
   npm install
   ```
4. Configure the backend API URL (see Backend Configuration below)
5. Start the development server:
   ```bash
   npm run dev
   ```

### Backend Configuration

The app needs to connect to a backend API. By default, it expects the backend to be running at `http://localhost:3000`.

To configure a different backend URL, create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=http://localhost:3000
```

Replace `http://localhost:3000` with your actual backend API URL.

### Backend API Endpoints

The application expects the following backend endpoints:

**Authentication:**
- `POST /api/auth/register` - Register a new user (name, email, password)
- `POST /api/auth/login` - Login user (email, password)

**Events (require authentication token in Authorization header):**
- `GET /api/events/` - Get all events
- `GET /api/events/:id` - Get event by ID
- `POST /api/events/` - Create new event (title, description, date, time, location)
- `PUT /api/events/:id` - Update event (title, description, date, time, location)
- `DELETE /api/events/:id` - Delete event

All event endpoints require a Bearer token in the Authorization header.
    