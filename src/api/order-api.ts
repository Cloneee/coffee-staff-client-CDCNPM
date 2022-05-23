import { IOrderRequest, ListParams, ListResponse, Order, OrderResponse } from 'models';
import axiosClient from './axios-client';

const orderAPi = {
  getAll(currentPage: number): Promise<ListResponse<OrderResponse>> {
    const url = '/order?limit=15&page='+currentPage;
    return axiosClient.get(url);
  },
  add(data: IOrderRequest): Promise<OrderResponse> {
    const url = '/order';
    return axiosClient.post(url, data);
  },
  toogle(data: any): Promise<any> {
    const url = '/order/toggle';
    return axiosClient.post(url, data);
  },

  getById(id: string): Promise<Order> {
    const url = `/order/${id}`;
    return axiosClient.get(url);
  },
  getTotalSales(body: any): Promise<any> {
    const url = `/order/totalsales`;
    return axiosClient.post(url, body);
  },
  getByCustomer(params: ListParams): Promise<ListResponse<OrderResponse>> {
    const url = `/order/customer/${params.id}?limit=5&page=${params.page}`;
    return axiosClient.get(url);
  },
  remove(id: string): Promise<any> {
    const url = `/order/${id}`;
    return axiosClient.delete(url);
  },
};

export default orderAPi;
