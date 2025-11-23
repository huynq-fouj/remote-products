import { Component, signal, ViewEncapsulation } from '@angular/core';
import { Products } from "./pages/products/products";

@Component({
  selector: 'app-root',
  imports: [Products],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class App {
  protected readonly title = signal('products');
}
