import axios from 'axios';

const backendBaseURL = import.meta.env.VITE_BACKEND_BASE_URL;

const apiClient = axios.create({
  baseURL: backendBaseURL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

apiClient.interceptors.request.use(
  (config) => {
    // 공통으로 Authorization 헤더를 설정
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 403) {
      console.error('권한이 없습니다. 로그인 페이지로 이동합니다....');
    }
    return Promise.reject(error);
  }
);
export default apiClient;
