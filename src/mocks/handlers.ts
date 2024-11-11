import { test2 } from '@/config/const';
import { userDummy } from '@/config/dummy';
import { http, HttpResponse } from 'msw';

export const handlers = [
  // 유저 아이디로 유저 찾기
  http.get('/mock/user', () => {
    return HttpResponse.json(userDummy, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }),

  http.get('/mock/test2', () => {
    return HttpResponse.json(test2, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }),
];
