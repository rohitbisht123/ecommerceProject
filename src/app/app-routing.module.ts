import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';




const routes: Routes = [
  { path: 'customers', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'customers', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },

  
  { path: '', redirectTo: 'user/index', pathMatch: 'full' },
  { path: 'user', component: UserComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
