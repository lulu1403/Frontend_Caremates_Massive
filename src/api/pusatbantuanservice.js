import api from './api';

const getAllPusatbantuan = async () => {
  try {
    const response = await api.get('/pusatbantuan');
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || 'Terjadi kesalahan saat mengambil data pusatbantuan');
  }
};

const createPusatbantuan = async (pertanyaan, jawaban) => {
  try {
    const response = await api.post('/pusatbantuan', { pertanyaan, jawaban });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || 'Terjadi kesalahan saat menambahkan pertanyaan baru');
  }
};

// Fungsi-fungsi lainnya seperti update dan delete

export default {
  getAllPusatbantuan,
  createPusatbantuan,
  // Tambahkan fungsi lain sesuai kebutuhan
};
