import api from './api';

const loginadmin = async (username, password) => {
  try {
    const response = await api.post('/admin/loginadmin', { username, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || 'Terjadi kesalahan saat login');
  }
};

export default {
  loginadmin,
};
