/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_NAVER_CLIENT_ID: string; // 네이버 클라이언트 ID
  readonly VITE_REDIRECT_BASE_URL: string; // 리다이렉트 URI
  readonly VITE_BACKEND_BASE_URL: string;
  readonly VITE_GOOGLE_CLIENT_ID: string;
  readonly VITE_KAKAO_CLIENT_ID: string;
  // 다른 환경 변수를 추가적으로 정의
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
