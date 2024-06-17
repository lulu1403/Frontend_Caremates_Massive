import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api', // URL dasar untuk API Anda
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
