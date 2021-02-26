import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as CanvasJS from 'canvasjs.min';
import { ProductsService } from '../../services/products.service';
import { Product } from '../product';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  objectKeys = Object.keys;
  cryptos: any;
  auxRatting: number;

  constructor(private activatedRoute: ActivatedRoute,
    private productsService: ProductsService,
    private router: Router,private data: DataService) { }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.productsService.getProduct(params.id)
        .subscribe(p => {
          this.product = p;
        });
        this.data.getPrices()
          .subscribe(datosC => {
            this.cryptos = datosC;
            this.grafico(datosC['BTC']['USD']);
            console.log(datosC['ETH']['USD']);
          });
      });
        
      }
  grafico(datosC): void {
    let chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Valor Actual: "+ datosC+ " $"
      },
      data: [{
        type: "line",
        dataPoints: [
          { y: Math.random() * (50000 - 12000) + 12000, label: "" },
          { y:Math.random() * (50000 - 12000) + 12000, label: "" },
          { y: Math.random() * (50000 - 12000) + 12000, label: "" },
          { y: Math.random() * (50000 - 12000) + 12000, label: "" },
          { y: Math.random() * (50000 - 12000) + 12000,label: "" },
          { y:Math.random() * (50000 - 12000) + 12000, label: "" },
          { y: Math.random() * (50000 - 12000) + 12000, label: "" },
          { y: Math.random() * (50000 - 12000) + 12000, label: "" },
          { y: datosC, label:  new Date().toString() }
        ]
      }]
    });
   
    chart.render();
  }

}
