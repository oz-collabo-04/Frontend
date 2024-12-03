import { auth } from '@/api/axiosInstance'

export const fetchEstimations = async () => {
  try {
    const response = await auth.get('/estimations/');
    console.log('response.status:', response.status);
    return response.data;
  } catch (err) {
    console.error('Error Fetching estimations:', err);
  }
};

export const fetchExpertData = async () => {
    try {
      const response = await auth.get('/experts/estimations/requests/');
      console.log('response.status:', response.status);
      return response.data;
    } catch (err) {
      console.error('Error Fetching expert data:', err);
      throw err;
    }
  };