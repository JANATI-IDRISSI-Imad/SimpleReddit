import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../app/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthapiService {
  apURL="http://localhost:8080/";
  constructor(private http:HttpClient) { }
  public login(username:string , password:string){
    const headers=new HttpHeaders({AUthorization : 'Basic '+btoa(username+ ":"+password)})
    return this.http.get(this.apURL+"test",{headers,responseType:'text' as "json"});
  }
  public register(user){
    return this.http.post<User>(this.apURL+"register", user);
  }
}
