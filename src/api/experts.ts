import { workerStartPromise } from '@/mocks/browsers';
import axios from 'axios';

interface props {
  id: string;
  formData: FormData;
}

export const fetchGetExpertRegister = async (id: string) => {
  await workerStartPromise;

  try {
    const response = await axios.get(`/mock/experts/register/${id}`);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const fetchPostExpertRegister = async (expertRegister: FormData) => {
  await workerStartPromise;

  try {
    const response = await axios.post('/mock/experts/register', expertRegister);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const fetchPatchExpertRegister = async ({ id, formData }: props) => {
  await workerStartPromise;

  try {
    const response = await axios.patch(`/mock/experts/register/${id}`, formData);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
