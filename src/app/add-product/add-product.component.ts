import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  isLoading: boolean;
  message: string;
  error: string;
  constructor(private ps: ProductService) {}

  ngOnInit(): void {}
  onFormSubmit(addProductForm) {
    this.isLoading = true;
    console.log(addProductForm.value);
    this.ps.postProducts(addProductForm.value).subscribe(
      (res) => {
        addProductForm.reset();
        this.isLoading = false;
        if (!res.error) {
          this.message = 'Product added successfully';
        } else {
          this.error = 'failed to add products, please try again';
        }
      },
      (err) => {
        this.error = 'server busy please try later';
      }
    )
  }
}
