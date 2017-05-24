import { Component, OnInit } from '@angular/core';
import { BodyService } from '../body.service';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

	products:Product[];

  	constructor(private bodyService:BodyService) { 
  	}

  	ngOnInit() {
  		this.products = this.bodyService.getProducts();
  	}

}
