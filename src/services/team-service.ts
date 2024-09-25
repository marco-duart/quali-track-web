import api from './api';

export const getTeams = async () => {
  const response = await api.get('/teams');
  return response.data;
};

export const getTeamById = async (id: string) => {
  const response = await api.get(`/teams/${id}`);
  return response.data;
};

export const createTeam = async (teamData: any) => {
  const response = await api.post('/teams', teamData);
  return response.data;
};

export const updateTeam = async (id: string, teamData: any) => {
  const response = await api.put(`/teams/${id}`, teamData);
  return response.data;
};

export const deleteTeam = async (id: string) => {
  const response = await api.delete(`/teams/${id}`);
  return response.data;
};
