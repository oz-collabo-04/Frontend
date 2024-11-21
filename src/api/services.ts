import { workerStartPromise } from '@/mocks/browsers';
import axios from 'axios';

export const fetchServiceLocation = async () => {
  await workerStartPromise;

  try {
    const response = await axios.get('/mock/services/location/list');
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const fetchServiceServices = async () => {
  await workerStartPromise;

  try {
    const response = await axios.get('/mock/services/list');
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
