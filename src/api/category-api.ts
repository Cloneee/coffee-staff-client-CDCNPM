import { Category, ListResponse } from 'models';
import axiosClient from './axios-client';

const categoryAPi = {
  getAll(): Promise<ListResponse<Category>> {
    const url = '/category';
    return axiosClient.get(url);
  },
  add(data: Category): Promise<Category> {
    const url = '/category';
    return axiosClient.post(url, data);
  },
  update(data: Category): Promise<Category> {
    const url = '/category';
    return axiosClient.patch(url, data);
  },

  getById(id: string): Promise<Category> {
    const url = `/category/${id}`;
    return axiosClient.get(url);
  },
  remove(id: string): Promise<any> {
    const url = `/category/${id}`;
    return axiosClient.delete(url);
  },
};

export default categoryAPi;
