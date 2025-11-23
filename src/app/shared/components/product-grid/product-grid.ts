import { Component, Input } from '@angular/core';
import { ProductType } from '../../types/product';
import { ProductItem } from "../product-item/product-item";

@Component({
  selector: 'app-product-grid',
  imports: [ProductItem],
  templateUrl: './product-grid.html',
  styleUrl: './product-grid.scss',
})
export class ProductGrid {
  @Input() products: ProductType[] = [];
}
