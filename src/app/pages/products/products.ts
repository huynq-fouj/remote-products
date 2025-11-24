import { Component } from '@angular/core';
import { ProductGrid } from "../../shared/components/product-grid/product-grid";
import { ProductType } from '../../shared/types/product';
import { PRODUCTS } from '../../shared/constants/products';
import { PaginationWrapper } from "../../shared/components/pagination-wrapper/pagination-wrapper";

@Component({
  selector: 'app-products',
  imports: [ProductGrid, PaginationWrapper],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {

  products: ProductType[] = PRODUCTS;
  filter: { page: number; size: number } = { page: 0, size: 12 };
  total: number = PRODUCTS.length;

  pageChange(event:any) {
    this.filter.page = event.page - 1;
  }

  get displayProducts(): ProductType[] {
    const start = this.filter.page * this.filter.size;
    const end = start + this.filter.size;
    return this.products.slice(start, end);
  }

}
