import { Component, ComponentRef, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ProductType } from '../../types/product';
import { CommonModule } from '@angular/common';
import { CurrencyFormatPipe } from "../../pipes/currency-format-pipe";
import { loadRemoteModule } from '@angular-architects/native-federation';

@Component({
  selector: 'app-product-item',
  imports: [CommonModule, CurrencyFormatPipe],
  templateUrl: './product-item.html',
  styleUrl: './product-item.scss',
})
export class ProductItem implements OnInit {
  @Input() product!: ProductType;
  validImage: boolean = true;
  addToCartRef!: ComponentRef<any>;
  @ViewChild('cartContainer', { read: ViewContainerRef, static: true })
  cartContainer!: ViewContainerRef;

  ngOnInit(): void {
    this.loadRemoteComponent();
  }

  handleImageError() {
    this.validImage = false;
  }

  async loadRemoteComponent() {
    loadRemoteModule('cart', './AddToCart').then(m => {
      const AddToCart = m.AddToCart;
      this.addToCartRef = this.cartContainer.createComponent(AddToCart);
      this.addToCartRef.instance.product = this.product;
    }).catch(err => console.error(err))
  }
}
