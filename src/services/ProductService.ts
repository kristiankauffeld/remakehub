import createHttpService from "./HttpService";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  amount: number;
  imageUrl: string;
  imageAlt: string;
}

export default createHttpService('/products')
