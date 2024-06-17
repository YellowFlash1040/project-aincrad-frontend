import api from '../axiosConfig';

const getUpcoming = async () => {
  try {
    const result = await api.get('games/upcoming');
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export default { getUpcoming };
