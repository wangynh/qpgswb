import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit{
  product: Product | undefined;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService) {

    }

  ngOnInit() {
    //First get product id from current route
    const routeParames = this.route.snapshot.paramMap;
    // window.alert(routeParames.get('productId'));
    window.alert(String(routeParames));
    const productIdFromRoute = Number(routeParames.get('productId'));
    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }

  addToCart(product:Product){
    this.cartService.addToCart(product);
    window.alert("the product has been added to Shopping Cart")
  }
}
