import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product1 = {productId:1, productName: "İlk Ürün", categoryId:1,unitPrice:5 } 
  product2 = {productId:2, productName: "İkinci Ürün", categoryId:2,unitPrice:35 } 
  product3 = {productId:3, productName: "Son Ürün", categoryId:3,unitPrice:15 } 
  products=[
    this.product1,this.product2,this.product3
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
