import { Component, computed, inject } from '@angular/core';
import { ProductList } from '../Services/product-list';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-detail-page',
  imports: [RouterLink],
  templateUrl: './detail-page.html',
  styleUrl: './detail-page.css',
})
export class DetailPage {
  private route = inject(ActivatedRoute);
  private store = inject(ProductList);

  id = Number(this.route.snapshot.paramMap.get('id'));

  productFromStore = computed(() => {
    return this.store.productList().find((p) => p.id === this.id) ?? null;
  });
}
