import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from '../models/subject';
import { TokenInterceptorService } from './token-interceptor.service';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  apURL="http://localhost:8080/Subject/";
  
  constructor(private http:HttpClient,private tokenService: TokenInterceptorService) { }
  

  findAll(){
    return this.http.get<Subject[]>(this.apURL+"all");
  }
  delete(id: number){
    return this.http.delete(this.apURL+"/"+id);
  }

  persist(subject: Subject){
    return this.http.post<Subject>(this.apURL, subject);
  }
  
  vote(id : number ,vote : Number){
    return this.http.put(this.apURL+"vote/"+id,vote,{headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Content-Type': ' application/json',
      Authorization: this.tokenService.getToken(),
      //'Authorization': ""
    })});
  }

  update(subject: Subject){
    return this.http.put(this.apURL+"/"+subject.id,subject);
  }
}
