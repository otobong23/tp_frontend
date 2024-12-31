import axios from "axios";

// Create an Axios instance
const api = axios.create({
  baseURL: 'https://tp-backend-wvue.onrender.com/api', // Replace with your global API base URL
  timeout: 10000, // Optional: Set a timeout (in ms)
  headers: {
    'Content-Type': 'application/json', // Set default headers
  },
});

export default api;