import { Component, OnInit } from '@angular/core';
import { Cart } from '../model/cart.model';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
	
	cart:Cart;

  	constructor(private cartService:CartService) { }

  	ngOnInit() {
  		this.cart = this.cartService.getCart();
  	}
}
