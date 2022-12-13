import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { employee } from './emoloyee';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SellService {
IssellerLogged =new BehaviorSubject <boolean>(false);
  constructor(private http: HttpClient ,private router:Router) { }
  underSignup(data:employee){
    // console.log("service cakk");

 
 this.http.post("http://localhost:3000/seller",data,{observe:'response'}).subscribe((result)=>{
  this.IssellerLogged.next(true);
  this.router.navigate(['sell-home'])
  localStorage.setItem('seller',JSON.stringify(result.body))
  console.log(result);
  
 })
 
 return false;
    
  }
  reloadseller(){
if(localStorage.getItem('seller')){
  this.IssellerLogged.next(true)
  this.router.navigate(['sell-home'])
}
  }
}
