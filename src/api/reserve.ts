import { workerStartPromise } from '@/mocks/browsers';
import axios from 'axios';

export const fetchReserveList = async () => {
  await workerStartPromise;
  try {
    const response = await axios.get('/mock/reservations');
    console.log('response.status:', response.status);
    return response.data;
  } catch (err) {
    console.error('Error Fetching reservations:', err);
  }
};
