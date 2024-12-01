import { workerStartPromise } from '@/mocks/browsers';
import axios from 'axios';

export const fetchEstimations = async () => {
  await workerStartPromise;
  try {
    const response = await axios.get('/mock/estimations');
    console.log('response.status:', response.status);
    return response.data;
  } catch (err) {
    console.error('Error Fetching estimations:', err);
  }
};

export const fetchExpertData = async (expertId: number) => {
    await workerStartPromise;
    try {
      const response = await axios.get(`/mock/experts/${expertId}`);
      console.log('response.status:', response.status);
      return response.data;
    } catch (err) {
      console.error('Error Fetching expert data:', err);
      throw err;
    }
  };