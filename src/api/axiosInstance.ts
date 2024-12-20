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
  return sessionStorage.getItem('access_token');
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

const refreshAccessToken = async () => {
  try {
    const response = await client.post('users/token/refresh/');
    const newAccessToken = response.data.access_token;
    sessionStorage.removeItem('access_token');
    sessionStorage.setItem('access_token', newAccessToken);
    return newAccessToken;
  } catch {
    // console.error('access_token 갱신 실패', error);
  }
};

auth.interceptors.response.use(
  (response) => {
    return response; // 응답이 성공 => 그대로 리턴함.
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._isRetry) {
      try {
        // 무한 요청 방지
        originalRequest._isRetry = true;

        // 액세스 토큰 재발급
        const refreshedAccessToken = await refreshAccessToken();

        if (refreshedAccessToken) {
          // 새로운 토큰으로 Authorization 헤더 갱신
          originalRequest.headers.Authorization = `Bearer ${refreshedAccessToken}`;

          // 요청 재시도
          return auth(originalRequest);
        } else {
          redirectToLoginPage();
        }
      } catch {
        redirectToLoginPage();
      }
    }

    return Promise.reject(error);
  }
);

let redirectToLogin: () => void;

export const setRedirectFunction = (redirectFuntion: () => void) => {
  redirectToLogin = redirectFuntion;
};

export const redirectToLoginPage = () => {
  if (redirectToLogin) {
    redirectToLogin();
  }
};
