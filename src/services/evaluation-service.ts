import api from './api';

export const getEvaluations = async () => {
  const response = await api.get('/evaluations');
  return response.data;
};

export const getEvaluationById = async (id: string) => {
  const response = await api.get(`/evaluations/${id}`);
  return response.data;
};

export const createEvaluation = async (evaluationData: any) => {
  const response = await api.post('/evaluations', evaluationData);
  return response.data;
};

export const updateEvaluation = async (id: string, evaluationData: any) => {
  const response = await api.put(`/evaluations/${id}`, evaluationData);
  return response.data;
};

export const deleteEvaluation = async (id: string) => {
  const response = await api.delete(`/evaluations/${id}`);
  return response.data;
};
