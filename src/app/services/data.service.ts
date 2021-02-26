import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map,filter} from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable()
export class DataService {
  result:any;


  constructor(private http: HttpClient) { }

  getPrices() {
    return this.http.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,IOT&tsyms=USD').pipe(map(result => this.result = result));
  }

}
