import api from './api';

export const getSignatures = async () => {
  const response = await api.get('/signatures');
  return response.data;
};

export const getSignatureById = async (id: string) => {
  const response = await api.get(`/signatures/${id}`);
  return response.data;
};

export const createSignature = async (signatureData: any) => {
  const response = await api.post('/signatures', signatureData);
  return response.data;
};

export const updateSignature = async (id: string, signatureData: any) => {
  const response = await api.put(`/signatures/${id}`, signatureData);
  return response.data;
};

export const deleteSignature = async (id: string) => {
  const response = await api.delete(`/signatures/${id}`);
  return response.data;
};
