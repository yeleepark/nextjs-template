import type { AxiosRequestConfig } from 'axios';
import axiosClient from '../axios/interceptors';
import type { ApiResponse } from '../axios/types';

const get = async <T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<ApiResponse<T>> => {
  const response = await axiosClient.get<ApiResponse<T>>(url, config);
  return response.data;
};

const post = async <T, D = unknown>(
  url: string,
  data?: D,
  config?: AxiosRequestConfig,
): Promise<ApiResponse<T>> => {
  const response = await axiosClient.post<ApiResponse<T>>(url, data, config);
  return response.data;
};

const put = async <T, D = unknown>(
  url: string,
  data?: D,
  config?: AxiosRequestConfig,
): Promise<ApiResponse<T>> => {
  const response = await axiosClient.put<ApiResponse<T>>(url, data, config);
  return response.data;
};

const patch = async <T, D = unknown>(
  url: string,
  data?: D,
  config?: AxiosRequestConfig,
): Promise<ApiResponse<T>> => {
  const response = await axiosClient.patch<ApiResponse<T>>(url, data, config);
  return response.data;
};

const del = async <T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<ApiResponse<T>> => {
  const response = await axiosClient.delete<ApiResponse<T>>(url, config);
  return response.data;
};

const api = {
  get,
  post,
  put,
  patch,
  delete: del,
};

export default api;

