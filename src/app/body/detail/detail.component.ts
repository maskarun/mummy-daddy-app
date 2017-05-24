import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BodyService } from '../body.service';
import { CartService } from '../cart/cart.service';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

	private sub:any;
	private pid:string;
	product:Product;

	constructor(private route:ActivatedRoute, private bodyService:BodyService, private cartService:CartService) { }

  	ngOnInit() {
  		this.sub = this.route.params.subscribe(params => {
  			this.pid = params['pid'];
  		});

  		this.product = this.bodyService.getProductById(this.pid);
  	}

  	addToCart():void {
  		this.cartService.addToCart(this.product);
  	}

  	buyNow():void {
  		this.cartService.addToCart(this.product);
  		//navigate to cart page.
  	}

  	ngOnDestory(){
  		this.sub.unsubscribe();
  	}

}
