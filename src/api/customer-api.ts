import { ListResponse } from 'models';
import { Customer } from 'models';
import axiosClient from './axios-client';

const CustomerAPi = {
  getAll(): Promise<ListResponse<Customer>> {
    const url = '/customer';
    return axiosClient.get(url);
  },
  add(data: Customer): Promise<Customer> {
    const url = '/customer';
    return axiosClient.post(url, data);
  },
  update(id:string , data: Customer): Promise<Customer> {
    const url = '/customer/'+id;
    return axiosClient.put(url, data);
  },

  getById(id: string): Promise<Customer> {
    const url = `/customer/${id}`;
    return axiosClient.get(url);
  },
  search(query: string): Promise<ListResponse<Customer>> {
    const url = `/customer/search`;
    return axiosClient.post(url, {"text" : query});
  },
  remove(id: string): Promise<any> {
    const url = `/customer/${id}`;
    return axiosClient.delete(url);
  },
};

export default CustomerAPi;
