import axios from "axios";

const baseURL = 'https://tp-backend-wvue.onrender.com/api'


// Create an Axios instance
const api = axios.create({
  baseURL,
  timeout: 1000 * 60, // Optional: Set a timeout (in ms)
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;