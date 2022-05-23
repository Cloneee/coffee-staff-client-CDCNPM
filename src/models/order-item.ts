import { Product } from "./product";

export interface OrderItem {
    orderItemId?: number;
    product: Product,
    quantity: number,

}