import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { employee } from '../services/emoloyee';
import { SellService } from '../services/sell.service';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.scss']
})
export class SellerComponent implements OnInit {

  constructor( private sell:SellService,private route:Router) { }

  ngOnInit(): void {
  }
  signuP(data:employee):void{

    console.log(data);
    this.sell.underSignup(data)
    // this.sell.underSignup(data).subscribe((resulr)=>{
    //   console.log(resulr);
    //   if (resulr) {
    //     this.route.navigate(['sell-home'])
    //   }
      
    // })
    
  }

}
