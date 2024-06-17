import api from './api';

const getAllAdmin = async () => {
  try {
    const response = await api.get('/admin');
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || 'Terjadi kesalahan saat mengambil data admin');
  }
};


// Fungsi-fungsi lainnya seperti update dan delete

export default {
  getAllAdmin,
};
