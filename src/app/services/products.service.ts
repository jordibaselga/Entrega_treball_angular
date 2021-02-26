import { Injectable } from '@angular/core';
import { Product } from '../product/product';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {map,filter} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productURL = './assets/productes.json';

  constructor(private http: HttpClient) { }
  getProducts(): Observable<Product[]>{ 
    return this.http.get<{products: Product[]}>(this.productURL).pipe( 
      map(response => response.products) 
      );
  }
  getProduct(id: number): Observable<Product>{
    return this.http.get<{products: Product[]}>(this.productURL).pipe(
      map(response => {
        let resp = response.products.filter(p => p.id == id)[0]
        return resp;
      } ), 
      );
  }

  editProduct(p: Product): Observable<boolean>{
    return this.http.get<boolean>(this.productURL);  // no funciona
  }

  searchProducts(criteri: string): Observable<Product[]>{
    criteri = criteri.toLowerCase();
    console.log({criteri});
    return this.http.get<{products: Product[]}>(this.productURL).pipe(
      map(response => response.products.filter(p => p.name.toLocaleLowerCase().includes(criteri))),
      );
  }
}
