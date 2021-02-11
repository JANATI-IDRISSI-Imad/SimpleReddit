import { Component, OnInit } from '@angular/core';
import { AuthapiService } from '../authapi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username :string ="";
  password :string="";
  massage: any;
  constructor(private service:AuthapiService) { }

  ngOnInit(): void {
  }

  login(){
    let resp= this.service.login(this.username,this.password);
    resp.subscribe(data=>{
      console.log(data);
    })
  }
}
