import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

@Injectable({
  providedIn: 'root',
})
export class ApiCallService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[] | null> {
    return this.http.get<Product[] | null>('https://fakestoreapi.com/products');
  }

  postProduct(payload: Omit<Product, 'id'>): Observable<Product[]> {
    return this.http.post<Product[]>('https://fakestoreapi.com/products', payload);
  }
}
