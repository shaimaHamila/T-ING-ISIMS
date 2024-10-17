import { Component } from '@angular/core';
import { Product, products } from '../models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  productList = [...products];

  buyProduct(product: Product): void {
    product.quantity > 0
      ? product.quantity--
      : alert('Product is out of stock');
  }
  likeProduct(product: Product): void {
    product.isLiked = !product.isLiked;
    product.isLiked
      ? (product.likes = (product.likes || 0) - 1)
      : (product.likes = (product.likes || 0) + 1);
  }
}
