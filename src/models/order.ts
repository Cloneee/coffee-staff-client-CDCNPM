import { OrderItem } from './order-item';

export interface OrderItemForAdd {
  product?: string;
  quantity: number;
}
export interface Order {
  orderItems: OrderItemForAdd[];
  customer: string | undefined;
}

export interface IOrderItems {
  ProductId: string;
  Quantity: number;
}
export interface IOrderRequest {
  CustomerId: string;
  Address: string;
  OrderItems: IOrderItems[];
  TotalPrice: number;
}

export interface IOrderRespone {
  orderId: string;
  address: string;
  status: string;
  orderItems: [
    {
      orderItemId: string;
      quantity: number;
      orderId: string;
      productId: string;
    }
  ];
  totalPrice: number;
  customersId: string;
  employeesId: string;
  dateOrdered: string;
}