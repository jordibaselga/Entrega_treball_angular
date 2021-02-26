import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../product/product';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-cataloge',
  templateUrl: './cataloge.component.html',
})
export class CatalogeComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private productsService: ProductsService,

  ) { }
  products: Product[];
  searchProduct: string;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params.criterio) {
        this.productsService.searchProducts(params.criterio).subscribe(
          prods => this.products = prods, 
          error => console.error(error),
          () => console.log('Products loaded', this.products) 
        );
      }
      else {
        this.productsService.getProducts().subscribe(
          prods => this.products = prods, 
          error => console.error(error), 
          () => console.log('Products loaded', this.products) 
        );
      }
    });

  }

  changeRatting(stars: number, p: Product): void {
  p.ratting = stars;
  }


}
