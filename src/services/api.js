import axios from 'axios';

const api = axios.create({
  baseURL: 'https://g86haarxm7.execute-api.us-east-1.amazonaws.com/dev/api/v1/'
});

export default api;