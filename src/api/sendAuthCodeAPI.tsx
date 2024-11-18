// import socialLoginAPI from './socialLoginAPI';
// const redirectBaseURL = import.meta.env.VITE_REDIRECT_BASE_URI;

// interface SocialLoginPayload {
//   provider: 'naver' | 'kakao' | 'google';
//   code: string;
//   state?: string; // naver
// }
// export const sendAuthCodeAPI = async ({ provider, code, state }: SocialLoginPayload) => {
//   const redirectURL = `${redirectBaseURL}`;
//   const callbackURL = `${provider}/callback/`;

//   const queryParams = new URLSearchParams({ code });

//   if(provider === 'naver' && state){
//     queryParams.append('state', state)
//   }
// };
