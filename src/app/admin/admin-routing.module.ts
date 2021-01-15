import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';




const routes: Routes = [
  {path:'admin',redirectTo:'admin/login',pathMatch:'full'},
  { path: 'admin', component: AdminComponent,
children:[
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent}
]
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
