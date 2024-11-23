import { services } from '@/config/const';
import { expertDummy, locationDummy } from '@/config/dummy';
import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/mock/experts/register/:id', async ({ params }) => {
    const findExpert = expertDummy.find(({ id }) => id === params.id);

    return HttpResponse.json(findExpert, { status: 200 });
  }),

  http.post('/mock/experts/register', async ({ request }) => {
    const formData = await request.formData();

    const appeal = formData.get('appeal')?.toString() || '';
    const service = formData.get('service')?.toString() || '';
    const expert_image = formData.get('expert_image')?.toString() || '';
    const available_location = formData.get('available_location')
      ? JSON.parse(formData.get('available_location')!.toString())
      : [];
    const careers = formData.get('careers') ? JSON.parse(formData.get('careers')!.toString()) : [];

    const id = Date.now().toString();

    const responseData = {
      id,
      appeal,
      service,
      expert_image,
      available_location,
      careers,
      user: {
        id: (Date.now() + 1).toString(),
        name: '박미선',
        gender: '여자',
      },
    };

    expertDummy.push(responseData);

    return HttpResponse.json(responseData, {
      status: 200,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }),

  http.patch('/mock/experts/register/:id', async ({ params, request }) => {
    const formData = await request.formData(); // FormData 파싱
    const data: any = {}; // 빈 객체로 변환 준비

    // FormData를 객체로 변환
    formData.forEach((value, key) => {
      if (key === 'available_location' || key === 'careers') {
        data[key] = JSON.parse(value as string); // JSON 파싱
      } else {
        data[key] = value;
      }
    });

    if (!params.id) {
      return new HttpResponse('Missing ID in URL', { status: 400 });
    }

    const findExpert = expertDummy.find(({ id }) => id === params.id);
    if (!findExpert) {
      return new HttpResponse('Expert not found', { status: 404 });
    }

    // 데이터 업데이트
    if (data.service) findExpert.service = data.service;
    if (data.appeal) findExpert.appeal = data.appeal;
    if (data.expert_image) findExpert.expert_image = data.expert_image;

    if (Array.isArray(data.available_location) && data.available_location.length > 0)
      findExpert.available_location = [...findExpert.available_location, ...data.available_location];

    if (Array.isArray(data.careers) && data.careers.length > 0)
      findExpert.careers = [...findExpert.careers, ...data.careers];

    return HttpResponse.json(findExpert, { status: 200 });
  }),

  http.get('/mock/services/location/list', () => {
    return HttpResponse.json(locationDummy, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }),

  http.get('/mock/services/list', () => {
    return HttpResponse.json(services, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }),
];
