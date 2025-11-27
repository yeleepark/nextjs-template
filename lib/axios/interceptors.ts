import type { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import axiosClient from './client';
import type { ApiError, ApiResponse } from './types';

const onRequest = (
  config: InternalAxiosRequestConfig,
): InternalAxiosRequestConfig => {
  const token =
    typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;

  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
};

const onResponseError = (error: AxiosError<ApiResponse>): Promise<ApiError> => {
  const status = error.response?.status || 500;
  const message = error.response?.data?.message || '오류가 발생했습니다.';

  const apiError: ApiError = {
    message,
    status,
    code: error.code,
    details: error.response?.data,
  };

  if (status === 401) {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('accessToken');
      window.location.href = '/login';
    }
  }

  return Promise.reject(apiError);
};

axiosClient.interceptors.request.use(onRequest, onRequestError);
axiosClient.interceptors.response.use(onResponse, onResponseError);

export default axiosClient;

