import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../services/product.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  public products: Product[];

	constructor(private productsService: ProductsService) {
	}

	ngOnInit() {
    this.productsService.getProducts().subscribe((x) => (this.products = x));
	}
}
