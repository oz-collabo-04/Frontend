import { service } from '@/config/const';
import { locationDummy } from '@/config/dummy';
import { http, HttpResponse } from 'msw';

export const handlers = [
  http.post('/mock/experts/register', async ({ request }) => {
    const formData = await request.formData();
    // Extracting form data values to validate or process
    const appeal = formData.get('appeal');
    const service = formData.get('service');
    const expert_image = formData.get('expert_image');
    const available_location = formData.get('available_location');
    const careers = formData.get('careers');

    // Creating a response
    const responseData = {
      appeal,
      service,
      expert_image,
      available_location,
      careers,
    };
    return HttpResponse.json(responseData, {
      status: 200,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
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
    return HttpResponse.json(service, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }),
];
