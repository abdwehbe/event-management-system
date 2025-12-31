const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

const getAuthToken = () => {
  return localStorage.getItem("token");
};

const apiRequest = async (endpoint, options = {}) => {
  const token = getAuthToken();
  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const config = {
    ...options,
    headers,
  };

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);

    const contentType = response.headers.get("content-type");
    let data;

    if (contentType && contentType.includes("application/json")) {
      data = await response.json();
    } else {
      const text = await response.text();
      data = text ? { message: text } : {};
    }

    if (!response.ok) {
      throw new Error(
        data.message || data.error || `HTTP error! status: ${response.status}`
      );
    }

    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error(error.message || "An unexpected error occurred");
  }
};

export const authAPI = {
  register: async (name, email, password) => {
    return apiRequest("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
    });
  },

  login: async (email, password) => {
    return apiRequest("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
  },
};

export const eventsAPI = {
  getAll: async () => {
    return apiRequest("/api/events/");
  },

  getById: async (id) => {
    return apiRequest(`/api/events/${id}`);
  },

  create: async (eventData) => {
    return apiRequest("/api/events/", {
      method: "POST",
      body: JSON.stringify(eventData),
    });
  },

  update: async (id, eventData) => {
    return apiRequest(`/api/events/${id}`, {
      method: "PUT",
      body: JSON.stringify(eventData),
    });
  },

  delete: async (id) => {
    return apiRequest(`/api/events/${id}`, {
      method: "DELETE",
    });
  },
};
