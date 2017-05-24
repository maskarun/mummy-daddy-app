import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import { Cart } from '../model/cart.model';

@Injectable()
export class CartService {

	private cart:Cart = new Cart();

	constructor() { }

	getCart():Cart{
		return this.cart;
	}

	addToCart(product:Product):boolean {
		if(product !== null && this.cart !== null){
			this.cart.products.push(product);
			this.cart.calculateTotal();
		}
		return false;
	}

	removeFromCart(product:Product):boolean {
		if(product !== null && this.cart !== null){
			var index = this.cart.products.indexOf(product);
			this.cart.products.slice(index, 1);
			this.cart.calculateTotal();
		}
		return false;	
	}
}
