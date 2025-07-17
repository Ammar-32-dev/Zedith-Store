export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface DataSource {
  type: 'csv' | 'airtable';
  url: string;
} 