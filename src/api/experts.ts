import { auth, client } from './axiosInstance';

interface props {
  id: string;
  formData: FormData;
}

export const fetchGetExpertRegister = async (id: string) => {
  try {
    const response = await client.get(`/experts/${id}/`);
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

export const fetchPatchExpertRegister = async ({ id, formData }: props) => {
  try {
    const response = await auth.patch(`/experts/${id}/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
