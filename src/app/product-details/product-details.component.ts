import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  addToCart(product: Product) {
    this.cartService.addToCart(product)
  }
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute, 
    private cartService: CartService,
  ) { }

  ngOnInit(){
    // Get the product Id from current route
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = routeParams.get('productId');

    // Find product from id route
    this.product = products.find(product => product.id === productIdFromRoute);
  }

}
