import { auth } from '@/api/axiosInstance';
import { IEstimationForm } from '@/config/types';

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

export const fetchEstimationsEdit = async (payload: IEstimationForm) => {
  try {
    const response = await auth.post('/estimations/request/', payload);
    console.log('response.status:', response.status);
    return response;
  } catch (error) {
    console.error('post 요청 실패:', error);
    throw error;
  }
};
