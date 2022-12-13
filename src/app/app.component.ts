import { Component } from '@angular/core';
import { SellService } from './services/sell.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private seller:SellService){}
  
}