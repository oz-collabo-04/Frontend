import { http, HttpResponse } from 'msw';

export const handlers = [
  http.post('/mock/experts/register', async ({ request }) => {
    const formData = await request.formData();
    // Extracting form data values to validate or process
    const appeal = formData.get('appeal');
    const service = formData.get('service');
    const profile_image = formData.get('profile_image');
    const available_location = [];
    const careers = [];
    // Parsing available_location and careers arrays if they exist
    for (const entry of formData.entries()) {
      const [key, value] = entry;
      if (key.startsWith('available_location')) {
        available_location.push(value);
      } else if (key.startsWith('careers')) {
        careers.push(value);
      }
    }
    // Creating a response
    const responseData = {
      appeal,
      service,
      profile_image,
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
];
