import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-shop-item-wz',
  templateUrl: './shop-item-wz.component.html',
  styleUrls: ['./shop-item-wz.component.css']
})
export class ShopItemWZComponent implements OnInit {

  @Input('id')
  id:string |undefined;

  @Input('title')
  title:string |undefined;

  @Input('text')
  text:string |undefined;

  @Input('image')
  image:string |undefined;

  @Input('price')
  price:string |undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
