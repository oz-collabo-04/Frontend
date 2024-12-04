import axios from 'axios';
const backendBaseURL = import.meta.env.VITE_BACKEND_BASE_URL;

export const client = axios.create({
  baseURL: backendBaseURL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache, no-store, must-revalidate', // 캐싱 비활성화
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

const refreshAccessToken = async () => {
  try {
    const response = await client.post('users/token/refresh/');
    const newAccessToken = response.data.access_token;
    localStorage.removeItem('access_token');
    localStorage.setItem('access_token', newAccessToken);
    return newAccessToken;
  } catch (error) {
    console.error('access_token 갱신 실패', error);
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
          console.error('토큰 갱신 실패: 로그인 페이지로 리다이렉트합니다.');
          redirectToLoginPage();
        }
      } catch (refreshError) {
        console.error('토큰 갱신 중 에러 발생:', refreshError);
        redirectToLoginPage();
      }
    }

    // // 다른 401 에러 처리 (무한 반복 요청 방지)
    // if (error.response.status !== 200) {
    //   console.error('에러로 인한 토큰 재발급 실패', error);
    //   return;
    // }

    // 다른 에러는 그대로 반환
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
  } else {
    console.error('리다이렉트 함수가 없습니다.');
  }
};
