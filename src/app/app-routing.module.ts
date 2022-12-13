import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './authguard.guard';
import { BookDataComponent } from './book-data/book-data.component';
import { HomeComponent } from './home/home.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerComponent } from './seller/seller.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'seller',component:SellerComponent},
  { path: 'books', component: BookDataComponent },
  {path:'sell-home',component:SellerHomeComponent,canActivate:[AuthguardGuard]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
