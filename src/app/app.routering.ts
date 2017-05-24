import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { HomeComponent } from './body/home/home.component';
import { ProductComponent } from './body/product/product.component';
import { DetailComponent } from './body/detail/detail.component';
import { CartComponent } from './body/cart/cart.component';


const APP_ROUTES :  Routes = [
	{ path : '', redirectTo: '/home', pathMatch: 'full' },
	{ path : 'home', component : HomeComponent },
	{ path : 'product', component : ProductComponent },
	{ path : 'detail', component : DetailComponent },
	{ path : 'detail/:pid', component : DetailComponent },
	{ path : 'cart', component : CartComponent },
];

export const routering = RouterModule.forRoot(APP_ROUTES);