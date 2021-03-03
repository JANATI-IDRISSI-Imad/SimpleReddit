import { Component, OnInit } from '@angular/core';
import { AuthapiService } from '../authapi.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private service:AuthapiService) { }

  ngOnInit(): void {
  }

  public LogOut(){
    //this.service.logout().subscribe();
  }

}
