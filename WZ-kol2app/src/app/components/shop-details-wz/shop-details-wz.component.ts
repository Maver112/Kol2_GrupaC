import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {WZDataService} from "../../service/wz-data.service";

@Component({
  selector: 'app-shop-details-wz',
  templateUrl: './shop-details-wz.component.html',
  styleUrls: ['./shop-details-wz.component.css']
})
export class ShopDetailsWZComponent implements OnInit {

  text : string | undefined;
  title : string | undefined;
  price : string | undefined;
  image:string|undefined;

  constructor(private dataService : WZDataService, private router: ActivatedRoute) {
    this.router.paramMap.subscribe(param => {
      let id = param.get('id');
      this.dataService.getById(id).subscribe((val:any)=>{
        this.text = val.text;
        this.title = val.title;
        this.image = val.image;
        this.price = val.price;
      })
    })
  }

  ngOnInit(): void {
  }

}
