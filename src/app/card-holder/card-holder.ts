import { CommonModule } from '@angular/common';
import { Component, computed, input, Input, signal } from '@angular/core';
import { ApiCallService, Product } from '../Services/api-call-service';
import { ShopCard } from '../shop-card/shop-card';

@Component({
  selector: 'app-card-holder',
  imports: [ShopCard, CommonModule],
  templateUrl: './card-holder.html',
  styleUrl: './card-holder.css',
})
export class CardHolder {
  constructor(private apiCall: ApiCallService) {}

  searchText = input<string>('');
  selectBox = input<number>(0);
  productList = signal<Product[]>([]);

  filteredProducts = computed(() => {
    const search = this.searchText().toLowerCase();
    const sortType = this.selectBox();
    let interimData = [...this.productList()];

    if (sortType === 0) {
      interimData.sort((a, b) => a.price - b.price);
    } else if (sortType === 1) {
      interimData.sort((a, b) => b.price - a.price);
    }

    console.log('Filtering products with search text:', sortType);

    if (!search) {
      return interimData;
    }

    return interimData.filter((product) => product.title.toLowerCase().includes(search));
  });

  ngOnInit() {
    this.apiCall.getProducts().subscribe((data) => {
      this.productList.set(data ?? []);
      console.log(this.productList());
    });
  }
}
