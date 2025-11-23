import { Component } from '@angular/core';
import { ProductGrid } from "../../shared/components/product-grid/product-grid";
import { ProductType } from '../../shared/types/product';
import { PRODUCTS } from '../../shared/constants/products';

@Component({
  selector: 'app-products',
  imports: [ProductGrid],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {

  products: ProductType[] = PRODUCTS;

}
