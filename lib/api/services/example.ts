import api from '../index';

interface User {
  id: number;
  name: string;
  email: string;
}

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  accessToken: string;
  user: User;
}

export const exampleApi = {
  getUsers: () => api.get<User[]>('/users'),

  getUserById: (id: number) => api.get<User>(`/users/${id}`),

  createUser: (data: Omit<User, 'id'>) => api.post<User>('/users', data),

  updateUser: (id: number, data: Partial<User>) =>
    api.put<User>(`/users/${id}`, data),

  deleteUser: (id: number) => api.delete<void>(`/users/${id}`),

  login: (data: LoginRequest) => api.post<LoginResponse>('/auth/login', data),
};

