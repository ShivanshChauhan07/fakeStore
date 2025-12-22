import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiCallService, Product } from '../Services/api-call-service';

@Component({
  selector: 'app-request-page',
  imports: [FormsModule],
  templateUrl: './request-page.html',
  styleUrl: './request-page.css',
})
export class RequestPage {
  constructor(private apiService: ApiCallService) {}

  formData: Omit<Product, 'id'> = {
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
    rating: { rate: 0, count: 0 },
  };

  onSubmit(f: any) {
    return this.apiService.postProduct(this.formData).subscribe((response) => {
      alert('Product added successfully:' + JSON.stringify(response));
      f.resetForm();
    });
  }
}
