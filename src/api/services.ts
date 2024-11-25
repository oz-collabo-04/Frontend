import { workerStartPromise } from '@/mocks/browsers';
import axios from 'axios';
const backendBaseURL = import.meta.env.VITE_BACKEND_BASE_URL;

export const fetchServiceLocation = async () => {
  await workerStartPromise;

  try {
    // const response = await axios.get(`${backendBaseURL}/services/location/list/`);
    const response = await axios.get('/mock/services/location/list');
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const fetchServiceServices = async () => {
  await workerStartPromise;

  try {
    // const response = await axios.get(`${backendBaseURL}/services/list/`);
    const response = await axios.get('/mock/services/list');
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
