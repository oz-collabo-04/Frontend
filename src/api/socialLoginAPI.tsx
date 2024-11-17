import axios from 'axios';

const socialLoginAPI = axios.create({
  baseURL: 'http://localhost/api/v1/users/login',
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' },
});

// socialLoginAPI.interceptors.response.use{}
// socialLoginAPI.interceptors.request.use{}

export default socialLoginAPI;
