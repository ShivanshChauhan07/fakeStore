import { Injectable, signal } from '@angular/core';
import { ApiCallService, Product } from './api-call-service';

@Injectable({
  providedIn: 'root',
})
export class ProductList {
  constructor(private apiCall: ApiCallService) {
    this.fetchProducts();
  }

  productList = signal<Product[]>([]);

  fetchProducts() {
    return this.apiCall.getProducts().subscribe((data) => {
      this.productList.set(data ?? []);
    });
  }
}
