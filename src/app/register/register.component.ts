import { Component, OnInit } from '@angular/core';
import { AuthapiService } from '../authapi.service';
import { User } from '../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userRegister : User={
    username : "",
    email : "",
    password : ""
  }
  constructor(private service:AuthapiService) { }

  ngOnInit(): void {
  }

  register(){
    this.service.register(this.userRegister)
      .subscribe((user)=>{
      })
  }

}
