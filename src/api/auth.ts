import { workerStartPromise } from '@/mocks/browsers';
import axios from 'axios';

export const authFetch = async () => {
  await workerStartPromise;
  try {
    const response = await axios.get('/mock/user');
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
