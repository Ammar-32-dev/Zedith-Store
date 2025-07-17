import Papa from 'papaparse';
import { Product, DataSource } from './types';

export async function fetchProducts(dataSource: DataSource): Promise<Product[]> {
  return fetchFromCSV(dataSource.url);
}

async function fetchFromCSV(url: string): Promise<Product[]> {
  const response = await fetch(url);
  const csv = await response.text();
  
  return new Promise((resolve, reject) => {
    Papa.parse(csv, {
      header: true,
      complete: (results) => {
        const products = results.data.map((row: any) => ({
          id: row.id,
          name: row.name,
          description: row.description,
          price: parseFloat(row.price),
          image_url: row.image_url,
          category: row.category
        }));
        resolve(products);
      },
      error: (error) => reject(error)
    });
  });
} 