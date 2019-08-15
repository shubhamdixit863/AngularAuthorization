import { RoleGuardService } from './auth/roleguard.service';
import { AuthGuardService } from './auth/authguard.service';
import { AdminComponent } from './admin/admin/admin.component';
import { UserComponent } from './user/user/user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SellerComponent } from './seller/seller/seller.component';


const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    canActivate:[AuthGuardService,RoleGuardService],
    data:{"expectedRole":"user"}
},
{
  path: 'admin',
  component: AdminComponent,
  canActivate:[AuthGuardService,RoleGuardService],
    data:{"expectedRole":"admin"}
},
{
  path: 'seller',
  component: SellerComponent,
  canActivate:[AuthGuardService,RoleGuardService],
  data:{"expectedRole":"seller"}
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
