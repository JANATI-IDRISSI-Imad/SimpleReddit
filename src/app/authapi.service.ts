import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpRequest, HttpResponse } from '@angular/common/http';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { User, UsernameAndPasswordAuthenticationRequest } from '../app/models/user';
import { TokenInterceptorService } from './services/token-interceptor.service';
import {catchError, map, tap} from 'rxjs/operators';

const OAUTH_CLIENT = 'express-client';
const OAUTH_SECRET = 'express-secret';
  const HTTP_OPTIONS = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Content-Type': ' application/json',
      Authorization: 'Basic ' + btoa(OAUTH_CLIENT + ':' + OAUTH_SECRET)
      //'Authorization': ""
    })
  };

@Injectable({
  providedIn: 'root'
})
export class AuthapiService {
  API_URL="http://localhost:8080/";
  
  constructor(private http:HttpClient,private tokenService: TokenInterceptorService) { }
  redirectUrl = '';

  private static handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
  
  login(loginData: any): Observable<any> {
    this.tokenService.removeToken();
    this.tokenService.removeUSER_token();
    const body = new HttpParams()
      .set('username', loginData.username)
      .set('password', loginData.password);
      //.set('grant_type', 'password');
    return this.http.post<any>(this.API_URL + 'login',loginData)
      .pipe(
        tap (res => {
          this.tokenService.saveToken(res.Authorization);
          this.tokenService.saveUSER_token(res.username);
        }),
        catchError(AuthapiService.handleError)
      );

  }
  public register(user : User){
    return this.http.post<User>(this.API_URL+"register", user);
  }
  public logout(){

  }
  
}
