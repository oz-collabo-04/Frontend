import { auth } from '@/api/axiosInstance';

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

export const fetchCalenderList = async ({ month, year }: { month: number; year: number }) => {
  try {
    const response = await auth.get(`/experts/estimations/list/?month=${month}&year=${year}`);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
