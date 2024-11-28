import { auth } from './axiosInstance';

export const fetchGetExpertRegister = async () => {
  try {
    const response = await auth.get('/experts/detail/');
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const fetchPostExpertRegister = async (expertRegister: FormData) => {
  try {
    const response = await auth.post('/experts/register/', expertRegister, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const fetchPatchExpertRegister = async (formData: FormData) => {
  try {
    const response = await auth.patch('/experts/detail/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
