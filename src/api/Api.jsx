import axios from "axios";

const instance = axios.create({ 
  // baseURL:  "http://localhost:3001"
  baseURL:  "https://zendb-backend.onrender.com"
});

export default instance;