import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-appearal',
  templateUrl: './appearal.component.html',
  styleUrls: ['./appearal.component.css']
})
export class AppearalComponent implements OnInit {
  allProduct: any = '';
  requiredProduct: any = '';
  finalProduct:any="";

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {
    this.productService.getProductsDescription().subscribe((product) => {
      this.allProduct = product;

      this.route.paramMap.subscribe((url) => {
        this.requiredProduct = url.get('check');
        this.finalProduct = this.allProduct.find( (product:any) => this.requiredProduct == product.ProductName );
      });
    });
  }


  ngOnInit() {}
}
