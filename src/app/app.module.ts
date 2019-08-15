import { RoleGuardService } from './auth/roleguard.service';
import { AuthGuardService } from './auth/authguard.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin/admin.component';
import { UserComponent } from './user/user/user.component';
import { SellerComponent } from './seller/seller/seller.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    
    AdminComponent,
    UserComponent,
    SellerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JwtModule.forRoot({config: {
      throwNoTokenError: false
    }}),
    HttpClientModule,
  ],
  providers: [AuthGuardService,RoleGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
