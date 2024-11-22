import axios from 'axios';
const backendBaseURL = import.meta.env.VITE_BACKEND_BASE_URL;

export const client = axios.create({
  baseURL: backendBaseURL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export const auth = axios.create({
  baseURL: backendBaseURL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

const getAccessToken = (): string | null => {
  return localStorage.getItem('access_token');
};

auth.interceptors.request.use(
  (config) => {
    //요청 인터셉트 시 사용할 config 객체
    const accessToken = getAccessToken();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const refreshAccessToken = async (): Promise<string | null> => {
  try {
    const accessToken = getAccessToken();
    const response = await auth.post('/users/token/refresh', { access_token: accessToken });
    const newAccessToken = response.data;
    localStorage.removeItem('access_token');
    localStorage.setItem('access_token', newAccessToken);
    return newAccessToken;
  } catch (error) {
    console.error('access_token 갱신 실패', error);
    return null;
  }
};

auth.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._isRetry) {
      originalRequest._isRetry = true;

      const refreshedAccessToken = await refreshAccessToken();
      if (refreshedAccessToken) {
        originalRequest.headers.Authorization = `Bearer ${refreshedAccessToken}`;
        return client(originalRequest);
      }
    } else if (error.response?.status === 401) {
      console.error('권한이 없습니다. 로그인 페이지로 이동합니다....');
    }
    return Promise.reject(error);
  }
);
