export class Product {
	
	pid:string;
	name:string;
	mrpPrice:number;
	offerPrice:number;
	freeDelivery:string;
	quantity:number;
	imgSource:string;

	constructor(pid:string, name:string, mrpPrice:number, offerPrice:number, freeDelivery:string, quantity:number, imgSource:string){
		this.pid = pid;
		this.name = name;
		this.mrpPrice = mrpPrice;
		this.offerPrice = offerPrice;
		this.freeDelivery = freeDelivery;
		this.quantity = quantity;
		this.imgSource = imgSource;
	}
}