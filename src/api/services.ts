import { workerStartPromise } from '@/mocks/browsers';
import axios from 'axios';
import { auth, client } from './axiosInstance';

export const fetchServiceLocation = async () => {
  await workerStartPromise;

  try {
    // const response = await auth.get('/services/location/list/');
    const response = await axios.get('/mock/services/location/list');
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const fetchServiceServices = async () => {
  await workerStartPromise;

  try {
    // const response = await client.get('/services/list/');
    const response = await axios.get('/mock/services/list');
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
