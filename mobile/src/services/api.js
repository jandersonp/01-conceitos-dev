import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.40.108',
});

export default api;