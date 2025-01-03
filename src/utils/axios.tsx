import axios from "axios";

const baseURL = 'https://tp-backend-wvue.onrender.com/api'
// const baseURL = 'http://localhost:5000/api'


// Create an Axios instance
const api = axios.create({
  baseURL: baseURL, // Replace with your global API base URL
  timeout: 5000, // Optional: Set a timeout (in ms)
  headers: {
    'Content-Type': 'application/json', // Set default headers
  },
});

export default api;