import { Product } from '../model/product.model';

export class Cart {

	products:Product[] = [];
	subTotal:number = 0;
	totalQty:number = 0;


	calculateTotal(): void {
		var total = 0;
		var totQty = 0;
		if(this.products !== null){
			for(let product of this.products){
				total = total + product.offerPrice;
				totQty = totQty + product.quantity;
			}
		}
		this.subTotal = total;
		this.totalQty = totQty;
	}

}