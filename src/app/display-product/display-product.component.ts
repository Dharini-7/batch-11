import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../productInter.component';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.css'],
})
export class DisplayProductComponent implements OnInit {
  products: Product[];
  isLoading: boolean;
  message: string;
  error: string;
  selectedProductToEdit: Product;
  productUpdating: true;
  constructor(private ps: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.isLoading = true;
    this.ps.getAllProducts().subscribe(
      (res) => {
        if (!res.error) {
          console.log(res);
          this.isLoading = false;
          this.products = res.products;
          this.message = 'products retrieval successful';
        } else {
          this.error = 'failed to load products';
        }
      },
      (err) => {
        this.error = 'server Error';
        this.isLoading = false;
      }
    );
  }

  deleteProduct(product: Product) {
    this.isLoading = true;
    const confirmation = confirm('are you sure to delete the product??');
    if (confirmation) {
      this.ps.deleteProducts(product._id).subscribe(
        (res) => {
          if (!res.error) {
            this.isLoading = false;
            this.products.splice(this.products.indexOf(product), 1);
            this.message = 'product deleted successfully';
          } else {
            this.error = 'product deletion failed';
          }
        },
        (err) => {
          this.error = 'server error';
        }
      );
    }
  }
  @ViewChild('modalCloseButton', { static: true })
  modalCloseButton: ElementRef;

  onEditProduct(product) {
    this.selectedProductToEdit = { ...product };
    console.log(this.selectedProductToEdit);
  }

  onFormSubmit() {
    this.isLoading = true;
    this.productUpdating = true;
    this.ps.updateProduct(this.selectedProductToEdit).subscribe(
      (res) => {
        if (!res.error) {
          this.isLoading = false;
          this.modalCloseButton.nativeElement.click();
          this.message = 'product updated successfully';
          this.products.splice(
            this.products.findIndex(
              (element) => element._id === res.response._id
            ),
            1,
            res.response
          );
        } else {
          this.error = 'product updation failed';
        }
      },
      (err) => {
        this.error = 'server error';
      }
    );
  }
}
