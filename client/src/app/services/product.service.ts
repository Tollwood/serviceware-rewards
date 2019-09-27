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
			[
				new Product({
					leaderboardrank: 1,
					name: 'Pacificator',
					description: 'Because you watched too many movies and and want to feel all powerful.',
					imagePath: 'https://www.alternate.de/p/230x230/1/Hasbro_Nerf_N_Strike_Elite_Rhino_Fire__Nerf_Gun@@1sshn03h.jpg',
				}),
				new Product({
					leaderboardrank: 2,
					name: 'Vacation package',
					description: 'You deserve it... you worked so hard that you haven\'t seen the sun this last month!',
					imagePath: 'https://www.fakeavacation.com/wp-content/uploads/2017/12/Pic_2_full-4.jpg',
				}),
				new Product({
					leaderboardrank: 3,
					name: 'Magic Tissue',
					description: 'Because you almost made it to the top 3 and worked hard, but it was simply not enough.',
					imagePath: 'https://images.homedepot-static.com/productImages/23ebe44d-3e56-42db-a16e-f4a205d81f3d/svn/kleenex-facial-tissues-kcc03076-64_1000.jpg',
				})
			]
		);
		// return this.httpClient
		//   .get('<URL here>')
		//   .pipe(map(x => new Product(x)));
	}
}
