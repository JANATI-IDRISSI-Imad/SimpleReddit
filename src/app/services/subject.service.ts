import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from '../models/subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  apURL="http://localhost:8080/Subject/";
  
  constructor(private http:HttpClient) { }
  findAll(){
    return this.http.get<Subject[]>(this.apURL+"all");
  }
  delete(id: number){
    return this.http.delete(this.apURL+"/"+id);
  }

  persist(subject: Subject){
    return this.http.post<Subject>(this.apURL, subject);
  }
  
  
  update(subject: Subject){
    return this.http.put(this.apURL+"/"+subject.id,subject);
  }
}
