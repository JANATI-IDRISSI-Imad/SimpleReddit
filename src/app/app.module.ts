import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthapiService } from './authapi.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'
import { from } from 'rxjs';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { StickyNavModule } from 'ng2-sticky-nav';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    NavbarComponent,
    SubjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StickyNavModule
  ],
  providers: [AuthapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
