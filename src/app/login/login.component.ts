import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthapiService } from '../authapi.service';
import { UsernameAndPasswordAuthenticationRequest } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //user : UsernameAndPasswordAuthenticationRequest=null;
  username :string ="";
  password :string="";
  massage: any;
  token: string="";
 
  constructor(private service:AuthapiService, private router:Router) { }

  ngOnInit(): void {
  }
  

  login(){
    
    let resp= this.service.login(this.creatData());
    resp.subscribe((data)=>{
    //console.log("DATA Subscribe "+ data)
    })
    //alert(this.token)
  }
  

  creatData(){
    return "{"+
    '"'+"username"+'"'+ ':'+ '"'+this.username +'"'+","+
    '"'+"password"+'"'+ ':'+ '"'+this.password +'"'+
    "}"
  }

  
}
