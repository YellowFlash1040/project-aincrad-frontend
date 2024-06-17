import api from '../axiosConfig';

const getUpcoming = async () => {
  try {
    const result = await api.get('/games/upcoming');
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

const getTopNewReleases = async () => {
  try {
    const result = await api.get('/games/top-new-releases');
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export default { getUpcoming, getTopNewReleases };
