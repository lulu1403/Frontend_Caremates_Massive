import api from './api';

const login = async (email, kata_sandi) => {
  try {
    const response = await api.post('/log_lembaga/login', { email, kata_sandi });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || 'Terjadi kesalahan saat login');
  }
};

export default {
  login,
};
