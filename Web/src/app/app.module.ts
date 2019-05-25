import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule, BaseRequestOptions } from '@angular/http';
import {   HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FriendsComponent } from './friends/friends.component';
import { ContactComponent } from './contact/contact.component';
import { AuthService } from './service/auth.service';
import { fakeBackendProvider } from './helpers/fake-backend';
import { MockBackend } from '@angular/http/testing';
import { FilterPipe, FilterPipeModule } from 'ngx-filter-pipe';
import { MynavbarComponent } from './mynavbar/mynavbar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FriendsComponent,
    ContactComponent,
    MynavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    FilterPipeModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/home', pathMatch: 'full' },
      {path:'home', component:HomeComponent},
      {path: 'friends', component:FriendsComponent},
      {path:'contact', component:ContactComponent}
    ])
  ],
  providers: [AuthService,
    fakeBackendProvider,
    BaseRequestOptions,
    MockBackend
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }