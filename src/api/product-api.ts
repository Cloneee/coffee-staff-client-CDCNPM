import { ListResponse, ProductResponse } from 'models';
import { Product } from 'models';
import axiosClient from './axios-client';

const productAPi = {
  getAll(): Promise<ListResponse<Product>> {
    const url = '/product';
    return axiosClient.get(url);
  },
  add(data: ProductResponse): Promise<Product> {
    const url = '/product';
    return axiosClient.post(url, data);
  },
  update(id: string, data: Product): Promise<Product> {
    const url = '/product/'+id;
    return axiosClient.put(url, data);
  },

  getById(id: string | undefined): Promise<ProductResponse> {
    const url = `/product/${id}`;
    return axiosClient.get(url);
  },
  remove(id: string): Promise<any> {
    const url = `/product/${id}`;
    return axiosClient.delete(url);
  },
};

export default productAPi;
