import { Injectable } from '@angular/core';

import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  constructor() { }

  addToCart( product: Product ) {
    this.items.push(product);
    alert('Your Product has Been Added To Your Cart! :)');
  }

  getItems() {
    console.log(this.items);
    return this.items;
  }
}
