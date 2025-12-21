import { Component, Input } from '@angular/core';
import { Product } from '../Services/api-call-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-shop-card',
  imports: [RouterLink],
  templateUrl: './shop-card.html',
  styleUrl: './shop-card.css',
})
export class ShopCard {
  @Input() card!: Product;
}
