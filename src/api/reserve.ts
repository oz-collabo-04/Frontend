import { client } from './axiosInstance';

export const fetchReserveList = async () => {
  try {
    const response = await client.get('/reservations/');
    console.log('response.status:', response.status);
    return response.data;
  } catch (err) {
    console.error('Error Fetching reservations:', err);
  }
};
