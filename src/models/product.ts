import { Category } from "./category";

export interface Product {
  productId?: string,
  name: string;
  description: string;
  images?: [string];
  price: number;
  categoryId: string;
  isFeatured?: boolean;
  dateCreated?: string;
  __v: number;
}
