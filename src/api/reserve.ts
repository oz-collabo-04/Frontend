import axios from 'axios';

export const fetchReserveList = async () => {
  try {
    const response = await axios.get('/reservations');
    console.log('response.status:', response.status);
    return response.data;
  } catch (err) {
    console.error('Error Fetching reservations:', err);
  }
};
