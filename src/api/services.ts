import { auth, client } from './axiosInstance';

export const fetchServiceLocation = async () => {
  try {
    const response = await auth.get('/services/location/list/');
    return response.data.service_locations;
  } catch (err) {
    console.error(err);
  }
};

export const fetchServiceServices = async () => {
  try {
    const response = await client.get('/services/list/');
    return response.data.services;
  } catch (err) {
    console.error(err);
  }
};
