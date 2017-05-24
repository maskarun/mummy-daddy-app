import { Injectable } from '@angular/core';
import { Product } from './model/product.model';

@Injectable()
export class BodyService {

	private products:Product[];

  	constructor() { }

  	getProducts():Product[] {
  		this.products = [
  			new Product("123451","Puma Men's Pluto DP Black-Amazon-Silver Running Shoes", 4299.00, 2249.12,"FREE Delivery", 2,"https://placehold.it/150x80?text=IMAGE"),
  			new Product("123451","Puma Men's Pluto DP Black-Amazon-Silver Running Shoes", 4299.00, 2249.45,"FREE Delivery", 2,"https://placehold.it/150x80?text=IMAGE"),
  			new Product("123451","Puma Men's Pluto DP Black-Amazon-Silver Running Shoes", 4299.00, 2249.68,"FREE Delivery", 2,"https://placehold.it/150x80?text=IMAGE"),
  			new Product("123451","Puma Men's Pluto DP Black-Amazon-Silver Running Shoes", 4299.00, 2249.89,"FREE Delivery", 2,"https://placehold.it/150x80?text=IMAGE"),
  			new Product("123451","Puma Men's Pluto DP Black-Amazon-Silver Running Shoes", 4299.00, 2249.00,"FREE Delivery", 2,"https://placehold.it/150x80?text=IMAGE"),
  			new Product("123451","Puma Men's Pluto DP Black-Amazon-Silver Running Shoes", 4299.00, 2249.00,"FREE Delivery", 2,"https://placehold.it/150x80?text=IMAGE"),
  			new Product("123451","Puma Men's Pluto DP Black-Amazon-Silver Running Shoes", 4299.00, 2249.00,"FREE Delivery",
        2,"https://placehold.it/150x80?text=IMAGE"),
  			new Product("123451","Puma Men's Pluto DP Black-Amazon-Silver Running Shoes", 4299.00, 2249.00,"FREE Delivery", 2,"https://placehold.it/150x80?text=IMAGE"),
  			new Product("123451","Puma Men's Pluto DP Black-Amazon-Silver Running Shoes", 4299.00, 2249.00,"FREE Delivery", 2,"https://placehold.it/150x80?text=IMAGE"),
  			new Product("123451","Puma Men's Pluto DP Black-Amazon-Silver Running Shoes", 4299.00, 2249.00,"FREE Delivery", 2,"https://placehold.it/150x80?text=IMAGE"),
  			new Product("123451","Puma Men's Pluto DP Black-Amazon-Silver Running Shoes", 4299.00, 2249.00,"FREE Delivery", 2,"https://placehold.it/150x80?text=IMAGE"),
  			new Product("123451","Puma Men's Pluto DP Black-Amazon-Silver Running Shoes", 4299.00, 2249.00,"FREE Delivery", 2,"https://placehold.it/150x80?text=IMAGE"),
  			new Product("123451","Puma Men's Pluto DP Black-Amazon-Silver Running Shoes", 4299.00, 2249.00,"FREE Delivery", 2,"https://placehold.it/150x80?text=IMAGE"),
  			new Product("123451","Puma Men's Pluto DP Black-Amazon-Silver Running Shoes", 4299.00, 2249.00,"FREE Delivery", 2,"https://placehold.it/150x80?text=IMAGE"),
  			new Product("123451","Puma Men's Pluto DP Black-Amazon-Silver Running Shoes", 4299.00, 2249.00,"FREE Delivery", 2,"https://placehold.it/150x80?text=IMAGE")
  		];

  		return this.products;
  	}

    getProductById(pid:string):Product {
      if(pid !== null && this.products !== null){
        for(let product of this.products){
          if(pid == product.pid){
            return product;
          }
        }
      }
      return null;
    }
}
