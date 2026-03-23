export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  oldPrice?: number;
  image: string;
  description: string;
  specs: {
    [key: string]: string;
  };
  features: string[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}
