import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from  "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(public jwtHelper: JwtHelperService,private http: HttpClient) {}
  // ...
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    console.log("check",this.jwtHelper.isTokenExpired(token));
    return !this.jwtHelper.isTokenExpired(token);
  }

login(username:string,password:string):Observable<any>

{

  // here we will make a post request  to api 
 return this.http.post("http://localhost:3800/login",{username:username,password:password});

}

logout()
{
  localStorage.removeItem('token');
  localStorage.removeItem('username');
}
}