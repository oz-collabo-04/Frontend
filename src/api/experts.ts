import { workerStartPromise } from '@/mocks/browsers';
import axios from 'axios';

export const fetchExpertRegister = async (expertRegister: FormData) => {
  await workerStartPromise;

  try {
    const response = await axios.post('/mock/experts/register', expertRegister);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
