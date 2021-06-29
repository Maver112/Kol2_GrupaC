import { Component, OnInit } from '@angular/core';
import {WZDataService} from "../../service/wz-data.service";

@Component({
  selector: 'app-shop-wz',
  templateUrl: './shop-wz.component.html',
  styleUrls: ['./shop-wz.component.css']
})
export class ShopWZComponent implements OnInit {

  data : any;

  constructor(private dataS:WZDataService) {
    this.dataS.getAll().subscribe(value => this.data=value )
  }

  ngOnInit(): void {
  }

}
