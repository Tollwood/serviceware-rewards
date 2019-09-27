import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
	providedIn: 'root'
})
export class ProductsService {
	constructor(private httpClient: HttpClient) {}

	public getProducts() {
		return of(
			[new Product({
				id: 123,
        name: 'THE Mug',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula nunc nibh, sed viverra turpis lacinia ac. Morbi feugiat, magna ut porttitor volutpat, est sem ornare quam, vel feugiat nisi est at sem. Suspendisse nunc risus, vulputate vitae libero ut, ultrices volutpat dolor. ',
        imagePath: 'https://images1.shirtinator.net/services/image/get/genre/27/id/1183/motiveId/64755/cid/2/vid/1/width/0/height/700/trim/true//zoom/0/langId/1/img/cookie-a-day-keeps-the-sadness-a-tasse-S66d0f918.jpg',
	      price: 123
      }),
      new Product({
				id: 123,
        name: 'Magic Pens',
        description: 'Donec leo elit, dapibus sed tempor sed, tristique id arcu. Aliquam gravida dui sed facilisis gravida.',
        imagePath: 'https://w5.giffitsstatic.com/pics/c504/287880_1.jpg',
	      price: 123
      }),
      new Product({
				id: 123,
        name: 'Pacificator',
        description: 'Mit dem Nerf N-Strike Elite XD Rhino Fire und seinen zwei automatischen Bodenoffensive mit dem integrierbaren Standbein. Du entscheidest!',
        imagePath: 'https://www.alternate.de/p/230x230/1/Hasbro_Nerf_N_Strike_Elite_Rhino_Fire__Nerf_Gun@@1sshn03h.jpg',
	      price: 123
			})]
		);
		// return this.httpClient
		//   .get('<URL here>')
		//   .pipe(map(x => new Product(x)));
	}
}
