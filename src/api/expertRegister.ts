import axios from 'axios';

export const fetchExpertRegister = async (expertRegister: FormData) => {
  try {
    const response = await axios.post('/mock/experts/register', expertRegister);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
