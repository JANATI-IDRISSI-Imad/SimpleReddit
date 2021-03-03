import { Injectable } from '@angular/core';


const ACCESS_TOKEN = 'access_token';
const USER_TOKEN = 'USER_token';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

  constructor() { }
  getToken(): any {
    return localStorage.getItem("access_token");
  }

  getUSER_tokenn(): string {
    return JSON.parse(localStorage.localStorage.getItem(USER_TOKEN));
  }

  saveToken(token:any): void {
    //alert("token")
    localStorage.setItem(ACCESS_TOKEN, token);
  }

  saveUSER_token(user:any): void {
    localStorage.setItem(USER_TOKEN, user);
  }

  removeToken(): void {
    localStorage.removeItem(ACCESS_TOKEN);
  }

  removeUSER_token(): void {
    localStorage.removeItem(USER_TOKEN);
  }
  
}
