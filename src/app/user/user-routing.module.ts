import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CategoryComponent } from './category/category.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';

import { UserComponent } from './user.component';

const routes: Routes = [{ path: 'user', component: UserComponent,
children:[
  {path:'index',component:IndexComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'cart',component:CartComponent},
  {path:'login',component:LoginComponent},
  {path:'category',component:CategoryComponent}
] },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
